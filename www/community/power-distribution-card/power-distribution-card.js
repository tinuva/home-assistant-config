function t(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new r(i,t,n)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var n;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:v}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.4.1");const _=window,b=_.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,E=`<${w}>`,x=document,C=(t="")=>x.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,T=/>/g,D=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),M=/'/g,P=/"/g,N=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),V=new WeakMap,H=x.createTreeWalker(x,129,null,!1),L=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",a=k;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===k?"!--"===l[1]?a=O:void 0!==l[1]?a=T:void 0!==l[2]?(N.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=D):void 0!==l[3]&&(a=D):a===D?">"===l[0]?(a=null!=o?o:k,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?D:'"'===l[3]?P:M):a===P||a===M?a=D:a===O||a===T?a=k:(a=D,o=void 0);const h=a===D&&t[e+1].startsWith("/>")?" ":"";r+=a===k?i+E:c>=0?(n.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+$+h):i+$+(-2===c?(n.push(void 0),e):h)}const s=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(s):s,n]};class z{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=L(t,e);if(this.el=z.createElement(l,i),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=H.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?Y:"@"===e[1]?G:X})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(N.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],C()),H.nextNode(),s.push({type:2,index:++o});n.append(t[e],C())}}}else if(8===n.nodeType)if(n.data===w)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)s.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,n){var o,r,a,s;if(e===I)return e;let l=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const c=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(s=i)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=B(t,l._$AS(t,e.values),l,n)),e}class U{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);H.currentNode=o;let r=H.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new W(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new K(r,this,t)),this.v.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(r=H.nextNode(),a++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,n){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$C_=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),A(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==I&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==j&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=z.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new U(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new z(t)),e}O(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new W(this.S(C()),this.S(C()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,n,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=B(this,t,e,0),r=!A(t)||t!==this._$AH&&t!==I,r&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=B(this,n[i+a],e,a),s===I&&(s=this._$AH[a]),r||(r=!A(s)||s!==this._$AH[a]),s===j?t=j:t!==j&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}r&&!n&&this.P(t)}P(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends X{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===j?void 0:t}}const F=b?b.emptyScript:"";class Y extends X{constructor(){super(...arguments),this.type=4}P(t){t&&t!==j?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class G extends X{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:j)===I)return;const n=this._$AH,o=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==j&&(n===j||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const Z=_.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,Q;null==Z||Z(z,W),(null!==(m=_.litHtmlVersions)&&void 0!==m?m:_.litHtmlVersions=[]).push("2.3.1");class tt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=r._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new W(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return I}}tt.finalized=!0,tt._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function rt(t){return ot({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at,st,lt;function ct(){return(ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}null===(at=window.HTMLSlotElement)||void 0===at||at.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(st||(st={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(lt||(lt={}));var dt=function(t,e,i){var n=e?function(t){switch(t.number_format){case st.comma_decimal:return["en-US","en"];case st.decimal_comma:return["de","es","it"];case st.space_comma:return["fr","sv","cs"];case st.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==st.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,ht(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,ht(t,i)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},ht=function(t,e){var i=ct({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=n,i.maximumFractionDigits=n}return i},ut=["closed","locked","off"],pt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},ft=new Set(["call-service","divider","section","weblink","cast","select"]),gt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},vt=function(t){pt(window,"haptic",t)},mt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(vt("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&pt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),pt(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(r,n,{entity_id:e})})(t,e,ut.includes(t.states[e].state))}(e,i.entity),vt("success"));break;case"call-service":if(!n.service)return void vt("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),vt("success");break;case"fire-dom-event":pt(t,"ll-custom",n)}};function _t(t){return void 0!==t&&"none"!==t.action}const bt=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind","heating","placeholder"],yt={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0},heating:{icon:"mdi:radiator",name:"heating",consumer:!0},placeholder:{name:"placeholder"}},$t={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},wt={type:"",title:void 0,animation:"flash",entities:[],center:{type:"none"}},Et=a`
  * {
    box-sizing: border-box;
  }

  p {
    margin: 4px 0 4px 0;

    text-align: center;
  }

  .card-content {
    display: grid;
    overflow: auto;

    grid-template-columns: 1.5fr 1fr 1.5fr;
    column-gap: 10px;
  }

  #center-panel {
    display: flex;

    height: 100%;

    align-items: center;
    justify-content: center;
    grid-column: 2;
    flex-wrap: wrap;
  }

  #center-panel > div {
    display: flex;
    overflow: hidden;

    width: 100%;
    height: 100%;
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
    width: 54px;
    height: 4px;
    margin: 8px auto 8px auto;
    opacity: 0.2;
    background-color: var(--secondary-text-color);
  }

  .arrow-container {
    display: flex;
    width: 57px;
    height: 16px;
    overflow: hidden;
    margin: 2 0;
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
`,xt=R`
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
`;var Ct={version:"Version",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},At={actions:{add:"Add",edit:"Edit",remove:"Remove",save:"Save"},optional:"Optional",required:"Required",settings:{action_settings:"Action Settings",animation:"Animation",autarky:"autarky",attribute:"Attribute",background_color:"Background Color",battery_percentage:"Battery Charge %",bigger:"Bigger",calc_excluded:"Excluded from Calculations",center:"Center",color:"Color","color-settings":"Color Settings",color_threshold:"Color Threshold",decimals:"Decimals","display-abs":"Display Absolute Value",entities:"Entities",entity:"Entity",equal:"Equal","grid-buy":"Grid Buy","grid-sell":"Grid Sell","hide-arrows":"Hide Arrows",icon:"Icon","invert-value":"Invert Value",name:"Name",preset:"Preset",ratio:"ratio",replace_name:"Replace Name","secondary-info":"Secondary Info",settings:"settings",smaller:"Smaller",threshold:"Threshold",title:"Title",unit_of_display:"Unit of Display",value:"value"}},St={common:Ct,editor:At},kt={version:"Version",description:"Eine Karte zur Visualizierung von Stromverteilungen",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung"},Ot={actions:{add:"Hinzufügen",edit:"Bearbeiten",remove:"Entfernen",save:"Speichern"},optional:"Optional",required:"Erforderlich",settings:{action_settings:"Aktions Einstellungen",animation:"Animation",autarky:"Autarkie",attribute:"Attribut",background_color:"Hintergrundfarbe",battery_percentage:"Batterie Ladung %",bigger:"Größer ",calc_excluded:"Von Rechnungen ausgeschlossen",center:"Mittelbereich",color:"Farbe","color-settings":"Farb Einstellungen",color_threshold:"Farb-Schwellenwert",decimals:"Dezimalstellen","display-abs":"Absolute Wertanzeige",entities:"Entities",entity:"Element",equal:"Gleich","grid-buy":"Netz Ankauf","grid-sell":"Netz Verkauf","hide-arrows":"Pfeile Verstecken",icon:"Symbol","invert-value":"Invertierter Wert",name:"Name",preset:"Vorlagen",ratio:"Anteil",replace_name:"Namen ersetzen","secondary-info":"Zusatzinformationen",settings:"Einstellungen",smaller:"Kleiner",threshold:"Schwellenwert",title:"Titel",unit_of_display:"Angezeigte Einheit",value:"Wert"}},Tt={common:kt,editor:Ot};const Dt={en:Object.freeze({__proto__:null,common:Ct,editor:At,default:St}),de:Object.freeze({__proto__:null,common:kt,editor:Ot,default:Tt})};function Mt(t,e=!1,i="",n=""){const o=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce(((t,e)=>t[e]),Dt[o])}catch(e){r=t.split(".").reduce(((t,e)=>t[e]),Dt.en)}return void 0===r&&(r=t.split(".").reduce(((t,e)=>t[e]),Dt.en)),""!==i&&""!==n&&(r=r.replace(i,n)),e?function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(r):r}var Pt=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,n){return t[0]===e&&(i=n,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),n=this.__entries__[i];return n&&n[1]},e.prototype.set=function(e,i){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var o=n[i];t.call(e,o[1],o[0])}},e}()}(),Nt="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Rt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),It="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Rt):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var jt=["top","right","bottom","left","width","height","size","weight"],Vt="undefined"!=typeof MutationObserver,Ht=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,n=!1,o=0;function r(){i&&(i=!1,t()),n&&s()}function a(){It(r)}function s(){var t=Date.now();if(i){if(t-o<2)return;n=!0}else i=!0,n=!1,setTimeout(a,e);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){Nt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Vt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){Nt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;jt.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Lt=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var o=n[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},zt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Rt},Bt=Yt(0,0,0,0);function Ut(t){return parseFloat(t)||0}function Wt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Ut(t["border-"+i+"-width"])}),0)}function Xt(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Bt;var n=zt(t).getComputedStyle(t),o=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var o=n[i],r=t["padding-"+o];e[o]=Ut(r)}return e}(n),r=o.left+o.right,a=o.top+o.bottom,s=Ut(n.width),l=Ut(n.height);if("border-box"===n.boxSizing&&(Math.round(s+r)!==e&&(s-=Wt(n,"left","right")+r),Math.round(l+a)!==i&&(l-=Wt(n,"top","bottom")+a)),!function(t){return t===zt(t).document.documentElement}(t)){var c=Math.round(s+r)-e,d=Math.round(l+a)-i;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return Yt(o.left,o.top,s,l)}var qt="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof zt(t).SVGGraphicsElement}:function(t){return t instanceof zt(t).SVGElement&&"function"==typeof t.getBBox};function Ft(t){return Nt?qt(t)?function(t){var e=t.getBBox();return Yt(0,0,e.width,e.height)}(t):Xt(t):Bt}function Yt(t,e,i,n){return{x:t,y:e,width:i,height:n}}var Gt=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Yt(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=Ft(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Kt=function(t,e){var i=function(t){var e=t.x,i=t.y,n=t.width,o=t.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(r.prototype);return Lt(a,{x:e,y:i,width:n,height:o,top:i,right:e+n,bottom:o+i,left:e}),a}(e);Lt(this,{target:t,contentRect:i})},Zt=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Pt,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof zt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Gt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof zt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Kt(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Jt="undefined"!=typeof WeakMap?new WeakMap:new Pt,Qt=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Ht.getInstance(),n=new Zt(e,i,this);Jt.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){Qt.prototype[t]=function(){var e;return(e=Jt.get(this))[t].apply(e,arguments)}}));var te=void 0!==Rt.ResizeObserver?Rt.ResizeObserver:Qt,ee=Object.freeze({__proto__:null,default:te});const ie=t=>(...e)=>({_$litDirective$:t,values:e});class ne{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const oe=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!oe(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!oe(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!=i--;){const n=o[i];if(!oe(t[n],e[n]))return!1}return!0}return t!=t&&e!=e};class re extends HTMLElement{constructor(){super(...arguments),this.holdTime=500}bind(t,e){t.actionHandler&&oe(e,t.actionHandler.options)||(t.actionHandler&&t.removeEventListener("click",t.actionHandler.end),t.actionHandler={options:e},e.disabled||(t.actionHandler.end=i=>{const n=t;i.cancelable&&i.preventDefault(),clearTimeout(this.timer),this.timer=void 0,e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,pt(n,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,pt(n,"action",{action:"double_tap"})):pt(n,"action",{action:"tap"})},t.addEventListener("click",t.actionHandler.end)))}}customElements.define("action-handler-power-distribution-card",re);const ae=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-power-distribution-card"))return t.querySelector("action-handler-power-distribution-card");const e=document.createElement("action-handler-power-distribution-card");return t.appendChild(e),e})();i&&i.bind(t,e)},se=ie(class extends ne{update(t,[e]){return ae(t.element,e),I}render(t){}}),le={},ce=ie(class extends ne{constructor(){super(...arguments),this.ot=le}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((t,e)=>t===this.ot[e])))return I}else if(this.ot===e)return I;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});var de="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",he="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ue(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function pe(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ue(Object(i),!0).forEach((function(e){ge(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ue(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function fe(t){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fe(t)}function ge(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ve(){return ve=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},ve.apply(this,arguments)}function me(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function _e(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var be=_e(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ye=_e(/Edge/i),$e=_e(/firefox/i),we=_e(/safari/i)&&!_e(/chrome/i)&&!_e(/android/i),Ee=_e(/iP(ad|od|hone)/i),xe=_e(/chrome/i)&&_e(/android/i),Ce={capture:!1,passive:!1};function Ae(t,e,i){t.addEventListener(e,i,!be&&Ce)}function Se(t,e,i){t.removeEventListener(e,i,!be&&Ce)}function ke(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Oe(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Te(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&ke(t,e):ke(t,e))||n&&t===i)return t;if(t===i)break}while(t=Oe(t))}return null}var De,Me=/\s+/g;function Pe(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(Me," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(Me," ")}}function Ne(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function Re(t,e){var i="";if("string"==typeof t)i=t;else do{var n=Ne(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function Ie(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function je(){var t=document.scrollingElement;return t||document.documentElement}function Ve(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==je()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!be))do{if(o&&o.getBoundingClientRect&&("none"!==Ne(o,"transform")||i&&"static"!==Ne(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(Ne(o,"border-top-width")),s-=u.left+parseInt(Ne(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=Re(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function He(t,e,i){for(var n=We(t,!0),o=Ve(t)[e];n;){var r=Ve(n)[i];if(!("top"===i||"left"===i?o>=r:o<=r))return n;if(n===je())break;n=We(n,!1)}return!1}function Le(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Xi.ghost&&(n||a[r]!==Xi.dragged)&&Te(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function ze(t,e){for(var i=t.lastElementChild;i&&(i===Xi.ghost||"none"===Ne(i,"display")||e&&!ke(i,e));)i=i.previousElementSibling;return i||null}function Be(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Xi.clone||e&&!ke(t,e)||i++;return i}function Ue(t){var e=0,i=0,n=je();if(t)do{var o=Re(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function We(t,e){if(!t||!t.getBoundingClientRect)return je();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=Ne(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return je();if(n||e)return i;n=!0}}}while(i=i.parentNode);return je()}function Xe(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function qe(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}var Fe="Sortable"+(new Date).getTime();function Ye(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==Ne(t,"display")&&t!==Xi.ghost){e.push({target:t,rect:Ve(t)});var i=pe({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=Re(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach((function(t){var e=0,i=t.target,a=i.fromRect,s=Ve(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=Re(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&Xe(l,s)&&!Xe(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),Xe(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),e),i.thisAnimationDuration=e)})),clearTimeout(t),o?t=setTimeout((function(){"function"==typeof i&&i()}),r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){Ne(t,"transition",""),Ne(t,"transform","");var o=Re(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,Ne(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Ne(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),Ne(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){Ne(t,"transition",""),Ne(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),n)}}}}var Ge=[],Ke={initializeByDefault:!0},Ze={mount:function(t){for(var e in Ke)Ke.hasOwnProperty(e)&&!(e in t)&&(t[e]=Ke[e]);Ge.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),Ge.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";Ge.forEach((function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](pe({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](pe({sortable:e},i)))}))},initializePlugins:function(t,e,i,n){for(var o in Ge.forEach((function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,ve(i,r.defaults)}})),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return Ge.forEach((function(n){"function"==typeof n.eventProperties&&ve(i,n.eventProperties.call(e[n.pluginName],t))})),i},modifyOption:function(t,e,i){var n;return Ge.forEach((function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))})),n}};var Je=["evt"],Qe=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=me(i,Je);Ze.pluginEvent.bind(Xi)(t,e,pe({dragEl:ei,parentEl:ii,ghostEl:ni,rootEl:oi,nextEl:ri,lastDownEl:ai,cloneEl:si,cloneHidden:li,dragStarted:$i,putSortable:fi,activeSortable:Xi.active,originalEvent:n,oldIndex:ci,oldDraggableIndex:hi,newIndex:di,newDraggableIndex:ui,hideGhostForTarget:zi,unhideGhostForTarget:Bi,cloneNowHidden:function(){li=!0},cloneNowShown:function(){li=!1},dispatchSortableEvent:function(t){ti({sortable:e,name:t,originalEvent:n})}},o))};function ti(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[Fe]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||be||ye?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var _=pe(pe({},f),Ze.getEventProperties(n,e));for(var b in _)g[b]=_[b];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(pe({putSortable:fi,cloneEl:si,targetEl:ei,rootEl:oi,oldIndex:ci,oldDraggableIndex:hi,newIndex:di,newDraggableIndex:ui},t))}var ei,ii,ni,oi,ri,ai,si,li,ci,di,hi,ui,pi,fi,gi,vi,mi,_i,bi,yi,$i,wi,Ei,xi,Ci,Ai=!1,Si=!1,ki=[],Oi=!1,Ti=!1,Di=[],Mi=!1,Pi=[],Ni="undefined"!=typeof document,Ri=Ee,Ii=ye||be?"cssFloat":"float",ji=Ni&&!xe&&!Ee&&"draggable"in document.createElement("div"),Vi=function(){if(Ni){if(be)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Hi=function(t,e){var i=Ne(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=Le(t,0,e),r=Le(t,1,e),a=o&&Ne(o),s=r&&Ne(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Ve(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Ve(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[Ii]||r&&"none"===i[Ii]&&l+c>n)?"vertical":"horizontal"},Li=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==fe(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},zi=function(){!Vi&&ni&&Ne(ni,"display","none")},Bi=function(){!Vi&&ni&&Ne(ni,"display","")};Ni&&!xe&&document.addEventListener("click",(function(t){if(Si)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Si=!1,!1}),!0);var Ui=function(t){if(ei){var e=function(t,e){var i;return ki.some((function(n){var o=n[Fe].options.emptyInsertThreshold;if(o&&!ze(n)){var r=Ve(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}})),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[Fe]._onDragOver(i)}}},Wi=function(t){ei&&ei.parentNode[Fe]._isOutsideThisEl(t.target)};function Xi(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=ve({},e),t[Fe]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Hi(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Xi.supportPointer&&"PointerEvent"in window&&!we,emptyInsertThreshold:5};for(var n in Ze.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in Li(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&ji,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Ae(t,"pointerdown",this._onTapStart):(Ae(t,"mousedown",this._onTapStart),Ae(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Ae(t,"dragover",this),Ae(t,"dragenter",this)),ki.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ve(this,Ye())}function qi(t,e,i,n,o,r,a,s){var l,c,d=t[Fe],h=d.options.onMove;return!window.CustomEvent||be||ye?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||Ve(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function Fi(t){t.draggable=!1}function Yi(){Mi=!1}function Gi(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function Ki(t){return setTimeout(t,0)}function Zi(t){return clearTimeout(t)}Xi.prototype={constructor:Xi,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(wi=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,ei):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){Pi.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&Pi.push(n)}}(i),!ei&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!we||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Te(s,n.draggable,i,!1))&&s.animated||ai===s)){if(ci=Be(s),hi=Be(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return ti({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),Qe("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(n){if(n=Te(l,n.trim(),i,!1))return ti({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),Qe("filter",e,{evt:t}),!0}))))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!Te(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!ei&&i.parentNode===r){var l=Ve(i);if(oi=r,ii=(ei=i).parentNode,ri=ei.nextSibling,ai=i,pi=a.group,Xi.dragged=ei,gi={target:ei,clientX:(e||t).clientX,clientY:(e||t).clientY},bi=gi.clientX-l.left,yi=gi.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,ei.style["will-change"]="all",n=function(){Qe("delayEnded",o,{evt:t}),Xi.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!$e&&o.nativeDraggable&&(ei.draggable=!0),o._triggerDragStart(t,e),ti({sortable:o,name:"choose",originalEvent:t}),Pe(ei,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){Ie(ei,t.trim(),Fi)})),Ae(s,"dragover",Ui),Ae(s,"mousemove",Ui),Ae(s,"touchmove",Ui),Ae(s,"mouseup",o._onDrop),Ae(s,"touchend",o._onDrop),Ae(s,"touchcancel",o._onDrop),$e&&this.nativeDraggable&&(this.options.touchStartThreshold=4,ei.draggable=!0),Qe("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(ye||be))n();else{if(Xi.eventCanceled)return void this._onDrop();Ae(s,"mouseup",o._disableDelayedDrag),Ae(s,"touchend",o._disableDelayedDrag),Ae(s,"touchcancel",o._disableDelayedDrag),Ae(s,"mousemove",o._delayedDragTouchMoveHandler),Ae(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Ae(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){ei&&Fi(ei),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Se(t,"mouseup",this._disableDelayedDrag),Se(t,"touchend",this._disableDelayedDrag),Se(t,"touchcancel",this._disableDelayedDrag),Se(t,"mousemove",this._delayedDragTouchMoveHandler),Se(t,"touchmove",this._delayedDragTouchMoveHandler),Se(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Ae(document,"pointermove",this._onTouchMove):Ae(document,e?"touchmove":"mousemove",this._onTouchMove):(Ae(ei,"dragend",this),Ae(oi,"dragstart",this._onDragStart));try{document.selection?Ki((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Ai=!1,oi&&ei){Qe("dragStarted",this,{evt:e}),this.nativeDraggable&&Ae(document,"dragover",Wi);var i=this.options;!t&&Pe(ei,i.dragClass,!1),Pe(ei,i.ghostClass,!0),Xi.active=this,t&&this._appendGhost(),ti({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(vi){this._lastX=vi.clientX,this._lastY=vi.clientY,zi();for(var t=document.elementFromPoint(vi.clientX,vi.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(vi.clientX,vi.clientY))!==e;)e=t;if(ei.parentNode[Fe]._isOutsideThisEl(t),e)do{if(e[Fe]){if(e[Fe]._onDragOver({clientX:vi.clientX,clientY:vi.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);Bi()}},_onTouchMove:function(t){if(gi){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=ni&&Re(ni,!0),a=ni&&r&&r.a,s=ni&&r&&r.d,l=Ri&&Ci&&Ue(Ci),c=(o.clientX-gi.clientX+n.x)/(a||1)+(l?l[0]-Di[0]:0)/(a||1),d=(o.clientY-gi.clientY+n.y)/(s||1)+(l?l[1]-Di[1]:0)/(s||1);if(!Xi.active&&!Ai){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(ni){r?(r.e+=c-(mi||0),r.f+=d-(_i||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Ne(ni,"webkitTransform",h),Ne(ni,"mozTransform",h),Ne(ni,"msTransform",h),Ne(ni,"transform",h),mi=c,_i=d,vi=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!ni){var t=this.options.fallbackOnBody?document.body:oi,e=Ve(ei,!0,Ri,!0,t),i=this.options;if(Ri){for(Ci=t;"static"===Ne(Ci,"position")&&"none"===Ne(Ci,"transform")&&Ci!==document;)Ci=Ci.parentNode;Ci!==document.body&&Ci!==document.documentElement?(Ci===document&&(Ci=je()),e.top+=Ci.scrollTop,e.left+=Ci.scrollLeft):Ci=je(),Di=Ue(Ci)}Pe(ni=ei.cloneNode(!0),i.ghostClass,!1),Pe(ni,i.fallbackClass,!0),Pe(ni,i.dragClass,!0),Ne(ni,"transition",""),Ne(ni,"transform",""),Ne(ni,"box-sizing","border-box"),Ne(ni,"margin",0),Ne(ni,"top",e.top),Ne(ni,"left",e.left),Ne(ni,"width",e.width),Ne(ni,"height",e.height),Ne(ni,"opacity","0.8"),Ne(ni,"position",Ri?"absolute":"fixed"),Ne(ni,"zIndex","100000"),Ne(ni,"pointerEvents","none"),Xi.ghost=ni,t.appendChild(ni),Ne(ni,"transform-origin",bi/parseInt(ni.style.width)*100+"% "+yi/parseInt(ni.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;Qe("dragStart",this,{evt:t}),Xi.eventCanceled?this._onDrop():(Qe("setupClone",this),Xi.eventCanceled||((si=qe(ei)).removeAttribute("id"),si.draggable=!1,si.style["will-change"]="",this._hideClone(),Pe(si,this.options.chosenClass,!1),Xi.clone=si),i.cloneId=Ki((function(){Qe("clone",i),Xi.eventCanceled||(i.options.removeCloneOnHide||oi.insertBefore(si,ei),i._hideClone(),ti({sortable:i,name:"clone"}))})),!e&&Pe(ei,o.dragClass,!0),e?(Si=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Se(document,"mouseup",i._onDrop),Se(document,"touchend",i._onDrop),Se(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,ei)),Ae(document,"drop",i),Ne(ei,"transform","translateZ(0)")),Ai=!0,i._dragStartId=Ki(i._dragStarted.bind(i,e,t)),Ae(document,"selectstart",i),$i=!0,we&&Ne(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=Xi.active,d=pi===l,h=s.sort,u=fi||c,p=this,f=!1;if(!Mi){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Te(a,s.draggable,r,!0),O("dragOver"),Xi.eventCanceled)return f;if(ei.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return D(!1);if(Si=!1,c&&!s.disabled&&(d?h||(n=ii!==oi):fi===this||(this.lastPutMode=pi.checkPull(this,c,ei,t))&&l.checkPut(this,c,ei,t))){if(o="vertical"===this._getDirection(t,a),e=Ve(ei),O("dragOverValid"),Xi.eventCanceled)return f;if(n)return ii=oi,T(),this._hideClone(),O("revert"),Xi.eventCanceled||(ri?oi.insertBefore(ei,ri):oi.appendChild(ei)),D(!0);var g=ze(r,s.draggable);if(!g||function(t,e,i){var n=Ve(ze(i.el,i.options.draggable)),o=10;return e?t.clientX>n.right+o||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+o}(t,o,this)&&!g.animated){if(g===ei)return D(!1);if(g&&r===t.target&&(a=g),a&&(i=Ve(a)),!1!==qi(oi,r,ei,e,a,i,t,!!a))return T(),g&&g.nextSibling?r.insertBefore(ei,g.nextSibling):r.appendChild(ei),ii=r,M(),D(!0)}else if(g&&function(t,e,i){var n=Ve(Le(i.el,0,i.options,!0)),o=10;return e?t.clientX<n.left-o||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-o||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var v=Le(r,0,s,!0);if(v===ei)return D(!1);if(i=Ve(a=v),!1!==qi(oi,r,ei,e,a,i,t,!1))return T(),r.insertBefore(ei,v),ii=r,M(),D(!0)}else if(a.parentNode===r){i=Ve(a);var m,_,b,y=ei.parentNode!==r,$=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(ei.animated&&ei.toRect||e,a.animated&&a.toRect||i,o),w=o?"top":"left",E=He(a,"top","top")||He(ei,"top","top"),x=E?E.scrollTop:void 0;if(wi!==a&&(_=i[w],Oi=!1,Ti=!$&&s.invertSwap||y),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&xi<c*o){if(!Oi&&(1===Ei?l>d+c*r/2:l<h-c*r/2)&&(Oi=!0),Oi)u=!0;else if(1===Ei?l<d+xi:l>h-xi)return-Ei}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return Be(ei)<Be(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,$?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ti,wi===a),0!==m){var C=Be(ei);do{C-=m,b=ii.children[C]}while(b&&("none"===Ne(b,"display")||b===ni))}if(0===m||b===a)return D(!1);wi=a,Ei=m;var A=a.nextElementSibling,S=!1,k=qi(oi,r,ei,e,a,i,t,S=1===m);if(!1!==k)return 1!==k&&-1!==k||(S=1===k),Mi=!0,setTimeout(Yi,30),T(),S&&!A?r.appendChild(ei):a.parentNode.insertBefore(ei,S?A:a),E&&function(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}(E,0,x-E.scrollTop),ii=ei.parentNode,void 0===_||Ti||(xi=Math.abs(_-Ve(a)[w])),M(),D(!0)}if(r.contains(ei))return D(!1)}return!1}function O(s,l){Qe(s,p,pe({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:D,onMove:function(i,n){return qi(oi,r,ei,e,i,Ve(i),t,n)},changed:M},l))}function T(){O("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function D(e){return O("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Pe(ei,fi?fi.options.ghostClass:c.options.ghostClass,!1),Pe(ei,s.ghostClass,!0)),fi!==p&&p!==Xi.active?fi=p:p===Xi.active&&fi&&(fi=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){O("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===ei&&!ei.animated||a===r&&!a.animated)&&(wi=null),s.dragoverBubble||t.rootEl||a===document||(ei.parentNode[Fe]._isOutsideThisEl(t.target),!e&&Ui(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function M(){di=Be(ei),ui=Be(ei,s.draggable),ti({sortable:p,name:"change",toEl:r,newIndex:di,newDraggableIndex:ui,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Se(document,"mousemove",this._onTouchMove),Se(document,"touchmove",this._onTouchMove),Se(document,"pointermove",this._onTouchMove),Se(document,"dragover",Ui),Se(document,"mousemove",Ui),Se(document,"touchmove",Ui)},_offUpEvents:function(){var t=this.el.ownerDocument;Se(t,"mouseup",this._onDrop),Se(t,"touchend",this._onDrop),Se(t,"pointerup",this._onDrop),Se(t,"touchcancel",this._onDrop),Se(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;di=Be(ei),ui=Be(ei,i.draggable),Qe("drop",this,{evt:t}),ii=ei&&ei.parentNode,di=Be(ei),ui=Be(ei,i.draggable),Xi.eventCanceled||(Ai=!1,Ti=!1,Oi=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Zi(this.cloneId),Zi(this._dragStartId),this.nativeDraggable&&(Se(document,"drop",this),Se(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),we&&Ne(document.body,"user-select",""),Ne(ei,"transform",""),t&&($i&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),ni&&ni.parentNode&&ni.parentNode.removeChild(ni),(oi===ii||fi&&"clone"!==fi.lastPutMode)&&si&&si.parentNode&&si.parentNode.removeChild(si),ei&&(this.nativeDraggable&&Se(ei,"dragend",this),Fi(ei),ei.style["will-change"]="",$i&&!Ai&&Pe(ei,fi?fi.options.ghostClass:this.options.ghostClass,!1),Pe(ei,this.options.chosenClass,!1),ti({sortable:this,name:"unchoose",toEl:ii,newIndex:null,newDraggableIndex:null,originalEvent:t}),oi!==ii?(di>=0&&(ti({rootEl:ii,name:"add",toEl:ii,fromEl:oi,originalEvent:t}),ti({sortable:this,name:"remove",toEl:ii,originalEvent:t}),ti({rootEl:ii,name:"sort",toEl:ii,fromEl:oi,originalEvent:t}),ti({sortable:this,name:"sort",toEl:ii,originalEvent:t})),fi&&fi.save()):di!==ci&&di>=0&&(ti({sortable:this,name:"update",toEl:ii,originalEvent:t}),ti({sortable:this,name:"sort",toEl:ii,originalEvent:t})),Xi.active&&(null!=di&&-1!==di||(di=ci,ui=hi),ti({sortable:this,name:"end",toEl:ii,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){Qe("nulling",this),oi=ei=ii=ni=ri=si=ai=li=gi=vi=$i=di=ui=ci=hi=wi=Ei=fi=pi=Xi.dragged=Xi.ghost=Xi.clone=Xi.active=null,Pi.forEach((function(t){t.checked=!0})),Pi.length=mi=_i=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":ei&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)Te(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Gi(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach((function(t,e){var o=n.children[e];Te(o,this.options.draggable,n,!1)&&(i[t]=o)}),this),e&&this.captureAnimationState(),t.forEach((function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Te(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=Ze.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&Li(i)},destroy:function(){Qe("destroy",this);var t=this.el;t[Fe]=null,Se(t,"mousedown",this._onTapStart),Se(t,"touchstart",this._onTapStart),Se(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Se(t,"dragover",this),Se(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),ki.splice(ki.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!li){if(Qe("hideClone",this),Xi.eventCanceled)return;Ne(si,"display","none"),this.options.removeCloneOnHide&&si.parentNode&&si.parentNode.removeChild(si),li=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(li){if(Qe("showClone",this),Xi.eventCanceled)return;ei.parentNode!=oi||this.options.group.revertClone?ri?oi.insertBefore(si,ri):oi.appendChild(si):oi.insertBefore(si,ei),this.options.group.revertClone&&this.animate(ei,si),Ne(si,"display",""),li=!1}}else this._hideClone()}},Ni&&Ae(document,"touchmove",(function(t){(Xi.active||Ai)&&t.cancelable&&t.preventDefault()})),Xi.utils={on:Ae,off:Se,css:Ne,find:Ie,is:function(t,e){return!!Te(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:function(t,e){return function(){if(!De){var i=arguments,n=this;1===i.length?t.call(n,i[0]):t.apply(n,i),De=setTimeout((function(){De=void 0}),e)}}},closest:Te,toggleClass:Pe,clone:qe,index:Be,nextTick:Ki,cancelNextTick:Zi,detectDirection:Hi,getChild:Le},Xi.get=function(t){return t[Fe]},Xi.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Xi.utils=pe(pe({},Xi.utils),t.utils)),Ze.mount(t)}))},Xi.create=function(t,e){return new Xi(t,e)},Xi.version="1.15.0";var Ji=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function Qi(){}function tn(){}Qi.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=Le(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Ji},ve(Qi,{pluginName:"revertOnSpill"}),tn.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Ji},ve(tn,{pluginName:"removeOnSpill"});const en=["none","flash","slide"],nn=["none","card","bars"],on=["autarky","ratio",""],rn=["more-info","toggle","navigate","url","call-service","none"];let an=class extends tt{constructor(){super(...arguments),this._subElementEditor=void 0,this._renderEmptySortable=!1}setConfig(t){this._config=t}async firstUpdated(){const t=await window.loadCardHelpers();try{await t.createCardElement({type:"button",entity:"demo.demo"})}catch(t){}customElements&&await customElements.get("hui-button-card").getConfigElement()}render(){var t,e,i,n,o,r,a,s,l,c;return this.hass?this._subElementEditor?this._renderSubElementEditor():R`
      <div class="card-config">
        <ha-textfield
          label="${Mt("editor.settings.title")} (${Mt("editor.optional")})"
          .value=${(null===(t=this._config)||void 0===t?void 0:t.title)||""}
          .configValue=${"title"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-select
          naturalMenuWidth
          fixedMenuPosition
          label="${Mt("editor.settings.animation")}"
          .configValue=${"animation"}
          .value=${(null===(e=this._config)||void 0===e?void 0:e.animation)||"flash"}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${en.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
        <br />
        <div class="entity row">
          <ha-select
            label="${Mt("editor.settings.center")}"
            .configValue=${"type"}
            @selected=${this._centerChanged}
            @closed=${t=>t.stopPropagation()}
            .value=${(null===(n=null===(i=this._config)||void 0===i?void 0:i.center)||void 0===n?void 0:n.type)||"none"}
          >
            ${nn.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
          </ha-select>
          ${"bars"==(null===(r=null===(o=this._config)||void 0===o?void 0:o.center)||void 0===r?void 0:r.type)||"card"==(null===(s=null===(a=this._config)||void 0===a?void 0:a.center)||void 0===s?void 0:s.type)?R`<ha-icon-button
                class="edit-icon"
                .value=${null===(c=null===(l=this._config)||void 0===l?void 0:l.center)||void 0===c?void 0:c.type}
                .path=${he}
                @click="${this._editCenter}"
              ></ha-icon-button>`:""}
        </div>
        <br />
        ${this._renderEntitiesEditor()}
      </div>
    `:R``}_centerChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{[e.configValue]:void 0!==e.checked?e.checked:e.value})}))}pt(this,"config-changed",{config:this._config})}}_editCenter(t){t.currentTarget&&(this._subElementEditor={type:t.currentTarget.value})}_renderSubElementEditor(){var t;const e=[R`<div class="header">
        <div class="back-title">
          <mwc-icon-button @click=${this._goBack}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </mwc-icon-button>
        </div>
      </div>`];switch(null===(t=this._subElementEditor)||void 0===t?void 0:t.type){case"entity":e.push(this._entityEditor());break;case"bars":e.push(this._barEditor());break;case"card":e.push(this._cardEditor())}return R`${e}`}_goBack(){var t;this._subElementEditor=void 0,null===(t=this._sortable)||void 0===t||t.destroy(),this._sortable=void 0,this._sortable=this._createSortable()}_itemEntityChanged(t){var e,i;if(!t.target)return;const n=t.target;if(!n.configValue)return;const o=n.i||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0,r=n.configValue.split("."),a=null!=n.checked?n.checked:n.value||(null===(i=t.detail)||void 0===i?void 0:i.value),s=this._config.entities[o][r[0]]||void 0;if((s?r[1]?s[r[1]]:s:void 0)==a)return;const l=[...this._config.entities];l[o]=Object.assign(Object.assign({},l[o]),{[r[0]]:r[1]?Object.assign(Object.assign({},l[o][r[0]]),{[r[1]]:a}):a}),pt(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:l})})}_entityEditor(){var t,e,i,n,o,r,a,s,l;const c=this._config.entities[(null===(t=this._subElementEditor)||void 0===t?void 0:t.index)||0],d=c.entity&&Object.keys(Object.assign({},null===(e=this.hass)||void 0===e?void 0:e.states[c.entity||0].attributes))||[],h=c.secondary_info_entity?Object.keys(Object.assign({},null===(i=this.hass)||void 0===i?void 0:i.states[c.secondary_info_entity||0].attributes)):[];return R`
      <div class="side-by-side">
        <ha-icon-picker
          .label="${Mt("editor.settings.icon")}  (${Mt("editor.optional")})"
          .value=${c.icon}
          .configValue=${"icon"}
          @value-changed=${this._itemEntityChanged}
        ></ha-icon-picker>
        <ha-textfield
          label="${Mt("editor.settings.name")} (${Mt("editor.optional")})"
          .value=${c.name||void 0}
          .configValue=${"name"}
          @input=${this._itemEntityChanged}
        ></ha-textfield>
      </div>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Mt("editor.settings.entity")} (${Mt("editor.required")})"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"entity"}
          .value=${c.entity}
          @value-changed=${this._itemEntityChanged}
        ></ha-entity-picker>
        <ha-select
          label="${Mt("editor.settings.attribute")} (${Mt("editor.optional")})"
          .configValue=${"attribute"}
          .value=${c.attribute||""}
          @selected=${this._itemEntityChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${d.length>0?R`<mwc-list-item></mwc-list-item>`:""}
          ${d.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
      </div>
      <div class="side-by-side">
        <ha-select
          label="${Mt("editor.settings.preset")}"
          .configValue=${"preset"}
          .value=${c.preset||bt[0]}
          @selected=${this._itemEntityChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${bt.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
        <div class="checkbox">
          <input
            type="checkbox"
            id="hide-arrows"
            .checked="${c.hide_arrows||!1}"
            .configValue=${"hide_arrows"}
            @change=${this._itemEntityChanged}
          />
          <label for="invert-value"> ${Mt("editor.settings.hide-arrows")}</label>
        </div>
      </div>
      <div class="side-by-side">
        ${"battery"===c.preset?R`
                <ha-entity-picker
                  label="${Mt("editor.settings.battery_percentage")} (${Mt("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"battery_percentage_entity"}
                  .value=${c.battery_percentage_entity||""}
                  @value-changed=${this._itemEntityChanged}
                ></ha-entity-picker>
              `:"grid"===c.preset?R`
                <ha-entity-picker
                  label="${Mt("editor.settings.grid-buy")} (${Mt("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"grid_buy_entity"}
                  .value=${c.grid_buy_entity||""}
                  @value-changed=${this._itemEntityChanged}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="${Mt("editor.settings.grid-sell")} (${Mt("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"grid_sell_entity"}
                  .value=${c.grid_sell_entity||""}
                  @value-changed=${this._itemEntityChanged}
                ></ha-entity-picker>
              `:R``}
      </div>
      <br /><br />
      <h3>${Mt("editor.settings.value",!0)} ${Mt("editor.settings.settings",!0)}</h3>
      <div class="side-by-side">
        <ha-textfield
          label="${Mt("editor.settings.unit_of_display")}"
          .value=${c.unit_of_display||""}
          .configValue=${"unit_of_display"}
          @input=${this._itemEntityChanged}
        ></ha-textfield>
        <ha-textfield
          auto-validate
          pattern="[0-9]"
          label="${Mt("editor.settings.decimals")}"
          .value=${c.decimals||""}
          .configValue=${"decimals"}
          @input=${this._itemEntityChanged}
        ></ha-textfield>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="invert-value"
            .checked="${c.invert_value||!1}"
            .configValue=${"invert_value"}
            @change=${this._itemEntityChanged}
          />
          <label for="invert-value"> ${Mt("editor.settings.invert-value")}</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="display-abs"
            .checked="${0!=c.display_abs}"
            .configValue=${"display_abs"}
            @change=${this._itemEntityChanged}
          />
          <label for="display-abs"> ${Mt("editor.settings.display-abs")} </label>
        </div>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="calc_excluded"
            .checked="${c.calc_excluded}"
            .configValue=${"calc_excluded"}
            @change=${this._itemEntityChanged}
          />
          <label for="calc_excluded"> ${Mt("editor.settings.calc_excluded")} </label>
        </div>
        <ha-textfield
          label="${Mt("editor.settings.threshold")}"
          .value=${c.threshold||""}
          .configValue=${"threshold"}
          @input=${this._itemEntityChanged}
        ></ha-textfield>
      </div>
      <br />
      <h3>${Mt("editor.settings.secondary-info",!0)}</h3>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Mt("editor.settings.entity")}"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"secondary_info_entity"}
          .value=${c.secondary_info_entity}
          @value-changed=${this._itemEntityChanged}
        ></ha-entity-picker>
        <ha-select
          allow-custom-entity
          label="${Mt("editor.settings.attribute")} (${Mt("editor.optional")})"
          .value=${c.secondary_info_attribute||""}
          .configValue=${"secondary_info_attribute"}
          @value-changed=${this._itemEntityChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${h.length>0?R`<mwc-list-item></mwc-list-item>`:void 0}
          ${h.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
      </div>
      <div class="checkbox">
        <input
          type="checkbox"
          id="hide-arrows"
          .checked="${c.secondary_info_replace_name||!1}"
          .configValue=${"secondary_info_replace_name"}
          @change=${this._itemEntityChanged}
        />
        <label for="invert-value"> ${Mt("editor.settings.replace_name")}</label>
      </div>
      <br />
      <h3>${Mt("editor.settings.color-settings",!0)}</h3>
      <ha-textfield
        label="${Mt("editor.settings.color_threshold")}"
        .value=${c.color_threshold||0}
        .configValue=${"color_threshold"}
        @input=${this._itemEntityChanged}
      ></ha-textfield>
      <table>
        <tr>
          <th>Element</th>
          <th>&gt; ${c.color_threshold||0}</th>
          <th>= ${c.color_threshold||0}</th>
          <th>&lt; ${c.color_threshold||0}</th>
        </tr>
        <tr>
          <th>icon</th>
          <td>
            <ha-textfield
              label="${Mt("editor.settings.bigger")}"
              .value=${(null===(n=c.icon_color)||void 0===n?void 0:n.bigger)||""}
              .configValue=${"icon_color.bigger"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Mt("editor.settings.equal")}"
              .value=${(null===(o=c.icon_color)||void 0===o?void 0:o.equal)||""}
              .configValue=${"icon_color.equal"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Mt("editor.settings.smaller")}"
              .value=${(null===(r=c.icon_color)||void 0===r?void 0:r.smaller)||""}
              .configValue=${"icon_color.smaller"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
        </tr>
        <tr>
          <th>arrows</th>
          <td>
            <ha-textfield
              label="${Mt("editor.settings.bigger")}"
              .value=${(null===(a=c.arrow_color)||void 0===a?void 0:a.bigger)||""}
              .configValue=${"arrow_color.bigger"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Mt("editor.settings.equal")}"
              .value=${(null===(s=c.arrow_color)||void 0===s?void 0:s.equal)||""}
              .configValue=${"arrow_color.equal"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Mt("editor.settings.smaller")}"
              .value=${(null===(l=c.arrow_color)||void 0===l?void 0:l.smaller)||""}
              .configValue=${"arrow_color.smaller"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
        </tr>
      </table>
      <br />
      <h3>${Mt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${c.tap_action||{action:"more-info"}}
          .actions=${rn}
          .configValue=${"tap_action"}
          @value-changed=${this._itemEntityChanged}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${c.double_tap_action}
          .actions=${rn}
          .configValue=${"double_tap_action"}
          @value-changed=${this._itemEntityChanged}
        >
        </hui-action-editor>
      </div>
    `}_barChanged(t){var e;if(!t.target)return;const i=t.target;if(!i.configValue)return;let n;if("content"==i.configValue)n=i.value;else{n=[...this._config.center.content];const t=i.i||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0;n[t]=Object.assign(Object.assign({},n[t]),{[i.configValue]:null!=i.checked?i.checked:i.value})}this._config=Object.assign(Object.assign({},this._config),{center:{type:"bars",content:n}}),pt(this,"config-changed",{config:this._config})}_removeBar(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.i)||0,n=[...this._config.center.content];n.splice(i,1),this._barChanged({target:{configValue:"content",value:n}})}async _addBar(){const t=Object.assign({},{name:"Name",preset:"custom"}),e=[...this._config.center.content||[],t];this._barChanged({target:{configValue:"content",value:e}})}_barEditor(){const t=[];return this._config.center.content&&this._config.center.content.forEach(((e,i)=>t.push(R`
        <div class="bar-editor">
          <h3 style="margin-bottom:6px;">Bar ${i+1}
          <ha-icon-button
            label=${Mt("editor.actions.remove")}
            class="remove-icon"
            .i=${i}
            .path=${de}
            @click=${this._removeBar}
            >
          </ha-icon-button>
          </h4>
          <div class="side-by-side">
            <ha-textfield
              label="${Mt("editor.settings.name")} (${Mt("editor.optional")})"
              .value=${e.name||""}
              .configValue=${"name"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-entity-picker
              label="${Mt("editor.settings.entity")}"
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
              <label for="invert-value"> ${Mt("editor.settings.invert-value")}</label>
            </div>
            <div>
            <ha-select
              label="${Mt("editor.settings.preset")}"
              .configValue=${"preset"}
              .value=${e.preset||""}
              @selected=${this._barChanged}
              @closed=${t=>t.stopPropagation()}
              .i=${i}
            >
              ${on.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
            </ha-select>
          </div>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="${Mt("editor.settings.color")}"
              .value=${e.bar_color||""}
              .configValue=${"bar_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-textfield
              .label="${Mt("editor.settings.background_color")}"
              .value=${e.bar_bg_color||""}
              .configValue=${"bar_bg_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
          </div>
          <h3>${Mt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.tap_action}
          .actions=${rn}
          .configValue=${"tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.double_tap_action}
          .actions=${rn}
          .configValue=${"double_tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
      </div>
        </div>
        <br/>
      `))),t.push(R`
      <mwc-icon-button aria-label=${Mt("editor.actions.add")} class="add-icon" @click="${this._addBar}">
        <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
      </mwc-icon-button>
    `),R`${t.map((t=>R`${t}`))}`}_cardEditor(){return R`
      Sadly you cannot edit cards from the visual editor yet.
      <p />
      Check out the
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonahKr/power-distribution-card#cards-"
        >Readme</a
      >
      to check out the latest and best way to add it.
    `}_renderEntitiesEditor(){return R`
      <h3>
        ${Mt("editor.settings.entities")}
      </h3>
      <div class="entities">
          ${ce([this._config.entities,this._renderEmptySortable],(()=>this._renderEmptySortable?"":this._config.entities.map(((t,e)=>R`
                    <div class="entity">
                      <ha-icon class="handle" icon="mdi:drag"></ha-icon>

                      <ha-entity-picker
                        label="Entity - ${t.preset}"
                        allow-custom-entity
                        hideClearIcon
                        .hass=${this.hass}
                        .configValue=${"entity"}
                        .value=${t.entity}
                        .i=${e}
                        @value-changed=${this._itemEntityChanged}
                      ></ha-entity-picker>

                      <ha-icon-button
                        .label=${Mt("editor.actions.remove")}
                        .path=${de}
                        class="remove-icon"
                        .i=${e}
                        @click=${this._removeRow}
                      ></ha-icon-button>

                      <ha-icon-button
                        .label=${Mt("editor.actions.edit")}
                        .path=${he}
                        class="edit-icon"
                        .i=${e}
                        @click="${this._editRow}"
                      ></ha-icon-button>
                    </div>
                  `))))}
        </div>
      </div>
      <div class="add-item row">
        <ha-select
          label="${Mt("editor.settings.preset")}"
          name="preset"
          class="add-preset"
          naturalMenuWidth
          fixedMenuPosition
          @closed=${t=>t.stopPropagation()}
          >
            ${bt.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>

        <ha-entity-picker .hass=${this.hass} name="entity" class="add-entity"></ha-entity-picker>

        <ha-icon-button
          .label=${Mt("editor.actions.add")}
          .path=${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"}
          class="add-icon"
          @click="${this._addEntity}"
          ></ha-icon-button>
      </div>
    `}updated(t){var e;super.updated(t);const i=t.has("_config");i&&(this._sortable||!(null===(e=this._config)||void 0===e?void 0:e.entities)?i&&null==this._subElementEditor&&this._handleEntitiesChanged():this._createSortable())}async _handleEntitiesChanged(){var t;this._renderEmptySortable=!0,await this.updateComplete;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".entities");for(;e.lastElementChild;)e.removeChild(e.lastElementChild);this._renderEmptySortable=!1}_createSortable(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".entities");e&&(this._sortable=new Xi(e,{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onEnd:async t=>this._rowMoved(t)}))}_valueChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value}))}pt(this,"config-changed",{config:this._config})}}async _addEntity(){var t,e;let i=(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-preset")).value||null,n=(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-entity")).value;i&&n||(i="placeholder",n="");const o=Object.assign({},$t,yt[i],{entity:n,preset:i}),r=this._config.entities.concat(o);this._valueChanged({target:{configValue:"entities",value:r}})}_rowMoved(t){if(t.oldIndex===t.newIndex)return;const e=[...this._config.entities];e.splice(t.newIndex,0,e.splice(t.oldIndex,1)[0]),this._valueChanged({target:{configValue:"entities",value:e}})}_removeRow(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.i)||0,n=[...this._config.entities];n.splice(i,1),this._valueChanged({target:{configValue:"entities",value:n}})}_editRow(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.i)||0;this._subElementEditor={type:"entity",index:i}}static get styles(){return[a`
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
        }
      `,a`
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
      `]}};t([ot({attribute:!1})],an.prototype,"hass",void 0),t([rt()],an.prototype,"_config",void 0),t([rt()],an.prototype,"_subElementEditor",void 0),t([rt()],an.prototype,"_renderEmptySortable",void 0),an=t([it("power-distribution-card-editor")],an),console.info("%c POWER-DISTRIBUTION-CARD %c 2.5.4","font-weight: 500; color: white; background: #03a9f4;","font-weight: 500; color: #03a9f4; background: white;"),window.customCards.push({type:"power-distribution-card",name:"Power Distribution Card",description:Mt("common.description")});let sn=class extends tt{constructor(){super(...arguments),this._narrow=!1}static async getConfigElement(){return document.createElement("power-distribution-card-editor")}static getStubConfig(){return{title:"Title",entities:[],center:{type:"bars",content:[{preset:"autarky",name:Mt("editor.settings.autarky")},{preset:"ratio",name:Mt("editor.settings.ratio")}]}}}async setConfig(t){const e=Object.assign({},wt,t,{entities:[]});if(!t.entities)throw new Error("You need to define Entities!");t.entities.forEach((t=>{if(!t.preset||!bt.includes(t.preset))throw new Error("The preset `"+t.preset+"` is not a valid entry. Please choose a Preset from the List.");{const i=Object.assign({},$t,yt[t.preset],t);e.entities.push(i)}})),this._config=e,"card"==this._config.center.type&&(this._card=this._createCardElement(this._config.center.content))}firstUpdated(){const t=this._config;if(t.entities.forEach(((t,e)=>{if(!t.entity)return;const i=this._state({entity:t.entity,attribute:"unit_of_measurement"});t.unit_of_measurement||(this._config.entities[e].unit_of_measurement=i||"W")})),"bars"==t.center.type){const e=t.center.content.map((t=>{let e="%";return t.entity&&(e=this._state({entity:t.entity,attribute:"unit_of_measurement"})),Object.assign(Object.assign({},t),{unit_of_measurement:t.unit_of_measurement||e})}));this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{content:e})})}this._adjustWidth(),this._attachObserver(),this.requestUpdate()}updated(t){super.updated(t),this._card&&(t.has("hass")||t.has("editMode"))&&this.hass&&(this._card.hass=this.hass)}static get styles(){return Et}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){var t;this._resizeObserver||(await(async()=>{"function"!=typeof te&&(window.ResizeObserver=(await Promise.resolve().then((function(){return ee}))).default)})(),this._resizeObserver=new te(function(t,e,i){var n;return void 0===i&&(i=!1),function(){var o=[].slice.call(arguments),r=this,a=function(){n=null,i||t.apply(r,o)},s=i&&!n;clearTimeout(n),n=setTimeout(a,e),s&&t.apply(r,o)}}((()=>this._adjustWidth()),250,!1)));const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&this._resizeObserver.observe(e)}_adjustWidth(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<400)}_val(t){var e;let i=t.invert_value?-1:1;"k"==(null===(e=t.unit_of_measurement)||void 0===e?void 0:e.charAt(0))&&(i*=1e3);let n=this._state(t);const o=t.threshold||null;return n=o&&Math.abs(n)<o?0:n,n*i}_state(t){return t.entity&&this.hass.states[t.entity]?t.attribute?this.hass.states[t.entity].attributes[t.attribute]:this.hass.states[t.entity].state:null}render(){const t=[],e=[],i=[];let n=0,o=0;this._config.entities.forEach(((e,r)=>{const a=this._val(e);e.calc_excluded||(e.producer&&a>0&&(o+=a),e.consumer&&a<0&&(n-=a));const s=this._render_item(a,e,r);r%2==0?t.push(s):i.push(s)}));switch(this._config.center.type){case"none":break;case"card":this._card?e.push(this._card):console.warn("NO CARD");break;case"bars":e.push(this._render_bars(n,o))}return R` ${this._narrow?xt:void 0}
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div id="left-panel">${t}</div>
          <div id="center-panel">${e}</div>
          <div id="right-panel">${i}</div>
        </div>
      </ha-card>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),mt(t,e,i,o)}(this,this.hass,{entity:t.currentTarget.entity,tap_action:t.currentTarget.tap_action,double_tap_action:t.currentTarget.double_tap_action},t.detail.action)}_render_item(t,e,i){if(!e.entity)return R`<item class="placeholder"></item>`;const n=e.invert_arrow?-1*t:t;t=e.display_abs?Math.abs(t):t;let o=e.unit_of_display||"W";if("k"==o.charAt(0)[0])t/=1e3;else if("adaptive"==e.unit_of_display){let i="W";e.unit_of_measurement&&(i="k"==e.unit_of_measurement[0]?e.unit_of_measurement.substring(1):e.unit_of_measurement),Math.abs(t)>999?(t/=1e3,o="k"+i):o=i}const r=10**(e.decimals||0==e.decimals?e.decimals:2);t=Math.round(t*r)/r;const a=dt(t,this.hass.locale);let s;e.secondary_info_entity&&(s=e.secondary_info_attribute?this._state({entity:e.secondary_info_entity,attribute:e.secondary_info_attribute})+"":`${this._state({entity:e.secondary_info_entity})}${this._state({entity:e.secondary_info_entity,attribute:"unit_of_measurement"})||""}`),e.secondary_info_replace_name&&(e.name=s,s=void 0);let l=e.icon;if("battery"===e.preset&&e.battery_percentage_entity){const t=this._val({entity:e.battery_percentage_entity});isNaN(t)||(l="mdi:battery",t<5?l="mdi:battery-outline":t<95&&(l="mdi:battery-"+(t/10).toFixed(0)+"0"))}let c=!1,d=R``;"grid"===e.preset&&(e.grid_buy_entity||e.grid_sell_entity)&&(c=!0,d=R`
        <div class="buy-sell">
          ${e.grid_buy_entity?R`<div class="grid-buy">
                B:
                ${this._val({entity:e.grid_buy_entity})}${this._state({entity:e.grid_buy_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
          ${e.grid_sell_entity?R`<div class="grid-sell">
                S:
                ${this._val({entity:e.grid_sell_entity})}${this._state({entity:e.grid_sell_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
        </div>
      `);const h=e.color_threshold||0;let u,p;e.icon_color&&(n>h&&(u=e.icon_color.bigger),n<h&&(u=e.icon_color.smaller),n==h&&(u=e.icon_color.equal)),e.arrow_color&&(n>h&&(p=e.arrow_color.bigger),n<h&&(p=e.arrow_color.smaller),n==h&&(p=e.arrow_color.equal));const f=isNaN(t);return R`
      <item
        .entity=${e.entity}
        .tap_action=${e.tap_action}
        .double_tap_action=${e.double_tap_action}
        @action=${this._handleAction}
        .actionHandler=${se({hasDoubleClick:_t(e.double_tap_action)})}
    ">
        <badge>
          <icon>
            <ha-icon icon="${l}" style="${u?`color:${u};`:""}"></ha-icon>
            ${s?R`<p class="secondary">${s}</p>`:null}
          </icon>
          ${c?d:R`<p class="subtitle">${e.name}</p>`}
        </badge>
        <value>
          <p>${f?"":a} ${f?"":o}</p>
          ${e.hide_arrows?R``:this._render_arrow(0==t||f?"none":i%2==0?n>0?"right":"left":n>0?"left":"right",p)}
        <value
      </item>
    `}_render_arrow(t,e){const i=this._config.animation;return"none"==t?R` <div class="blank"></div> `:R`
        <div class="arrow-container ${t}">
          <div class="arrow ${i} " style="border-left-color: ${e};"></div>
          <div class="arrow ${i} ${"flash"==i?"delay-1":""}" style="border-left-color: ${e};"></div>
          <div class="arrow ${i} ${"flash"==i?"delay-2":""}" style="border-left-color: ${e};"></div>
          <div class="arrow ${i}" style="border-left-color: ${e};"></div>
        </div>
      `}_render_bars(t,e){const i=[];return this._config.center.content&&0!=this._config.center.content.length?(this._config.center.content.forEach((n=>{let o=-1;switch(n.preset){case"autarky":n.entity||(o=0!=t?Math.min(Math.round(100*e/Math.abs(t)),100):0);break;case"ratio":n.entity||(o=0!=e?Math.min(Math.round(100*Math.abs(t)/e),100):0)}o<0&&(o=parseInt(this._val(n).toFixed(0),10)),i.push(R`
        <div
          class="bar-element"
          .entity=${n.entity}
          .tap_action=${n.tap_action}
          .double_tap_action=${n.double_tap_action}
          @action=${this._handleAction}
          .actionHandler=${se({hasDoubleClick:_t(n.double_tap_action)})}
          style="${n.tap_action||n.double_tap_action?"cursor: pointer;":""}"
        >
          <p class="bar-percentage">${o}${n.unit_of_measurement||"%"}</p>
          <div class="bar-wrapper" style="${n.bar_bg_color?`background-color:${n.bar_bg_color};`:""}">
            <bar style="height:${o}%; background-color:${n.bar_color};" />
          </div>
          <p>${n.name||""}</p>
        </div>
      `)})),R`${i.map((t=>R`${t}`))}`):R``}_createCardElement(t){const e=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return n("hui-error-card",{type:"error",error:t,config:e})},n=function(t,e){var n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(n){return console.error(t,n),i(n.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var o=t.type;if(o&&o.startsWith("custom:"))o=o.substr("custom:".length);else if(e)if(ft.has(o))o="hui-"+o+"-row";else{if(!t.entity)return i("Invalid config given.",t);var r=t.entity.split(".",1)[0];o="hui-"+(gt[r]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return n(o,t);var a=i("Custom element doesn't exist: "+t.type+".",t);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),pt(a,"ll-rebuild",{},a)})),a}(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(e,t)}),{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(i,t),this._card===t&&(this._card=i)}};t([ot()],sn.prototype,"hass",void 0),t([rt()],sn.prototype,"_config",void 0),t([ot()],sn.prototype,"_card",void 0),t([rt()],sn.prototype,"_narrow",void 0),sn=t([it("power-distribution-card")],sn);export{sn as PowerDistributionCard};
