function e(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i}function t(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let s=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new s(i,e,o)},c=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:_}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",b=g.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},$=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&d(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:o}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const r=n?.call(this);o?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const n of t){const t=document.createElement("style"),o=i.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=n;const r=o.fromAttribute(t,e.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(e,t,i,n=!1,o){if(void 0!==e){const r=this.constructor;if(!1===n&&(o=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??$)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:o},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==o||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[y("elementProperties")]=new Map,A[y("finalized")]=new Map,b?.({ReactiveElement:A}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,E=e=>e,k=x.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+O,M=`<${P}>`,j=document,T=()=>j.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,z="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,L=/>/g,V=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),K=new WeakMap,G=j.createTreeWalker(j,129);function Z(e,t){if(!N(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}class Y{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,r=0;const s=e.length-1,a=this.parts,[c,l]=((e,t)=>{const i=e.length-1,n=[];let o,r=2===t?"<svg>":3===t?"<math>":"",s=R;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,d=0;for(;d<i.length&&(s.lastIndex=d,c=s.exec(i),null!==c);)d=s.lastIndex,s===R?"!--"===c[1]?s=U:void 0!==c[1]?s=L:void 0!==c[2]?(q.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=V):void 0!==c[3]&&(s=V):s===V?">"===c[0]?(s=o??R,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?V:'"'===c[3]?I:D):s===I||s===D?s=V:s===U||s===L?s=R:(s=V,o=void 0);const h=s===V&&e[t+1].startsWith("/>")?" ":"";r+=s===R?i+M:l>=0?(n.push(a),i.slice(0,l)+S+i.slice(l)+O+h):i+O+(-2===l?t:h)}return[Z(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]})(e,t);if(this.el=Y.createElement(c,i),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=G.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(S)){const t=l[r++],i=n.getAttribute(e).split(O),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?te:"?"===s[1]?ie:"@"===s[1]?ne:ee}),n.removeAttribute(e)}else e.startsWith(O)&&(a.push({type:6,index:o}),n.removeAttribute(e));if(q.test(n.tagName)){const e=n.textContent.split(O),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],T()),G.nextNode(),a.push({type:2,index:++o});n.append(e[t],T())}}}else if(8===n.nodeType)if(n.data===P)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(O,e+1));)a.push({type:7,index:o}),e+=O.length-1}o++}}static createElement(e,t){const i=j.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,n){if(t===W)return t;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const r=H(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(e),o._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(t=J(e,o._$AS(e,t.values),o,n)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??j).importNode(t,!0);G.currentNode=n;let o=G.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new Q(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new oe(o,this,e)),this._$AV.push(t),a=i[++s]}r!==a?.index&&(o=G.nextNode(),r++)}return G.currentNode=j,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),H(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new X(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Y(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of e)n===t.length?t.push(i=new Q(this.O(T()),this.O(T()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=E(e).nextSibling;E(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,n){const o=this.strings;let r=!1;if(void 0===o)e=J(this,e,t,0),r=!H(e)||e!==this._$AH&&e!==W,r&&(this._$AH=e);else{const n=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=J(this,n[i+s],t,s),a===W&&(a=this._$AH[s]),r||=!H(a)||a!==this._$AH[s],a===F?e=F:e!==F&&(e+=(a??"")+o[s+1]),this._$AH[s]=a}r&&!n&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ne extends ee{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??F)===W)return;const i=this._$AH,n=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==F&&(i===F||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const re={I:Q},se=x.litHtmlPolyfillSupport;se?.(Y,Q),(x.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ce=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let o=n._$litPart$;if(void 0===o){const e=i?.renderBefore??null;n._$litPart$=o=new Q(t.insertBefore(T(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ce._$litElement$=!0,ce.finalized=!0,ae.litElementHydrateSupport?.({LitElement:ce});const le=ae.litElementPolyfillSupport;le?.({LitElement:ce}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:$},he=(e=de,t,i)=>{const{kind:n,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,o,e,!0,i)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];t.call(this,i),this.requestUpdate(n,o,e,!0,i)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return(t,i)=>"object"==typeof i?he(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return ue({...e,state:!0,attribute:!1})}var _e="git+https://github.com/JonahKr/power-distribution-card.git";const ge=(e,t,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,e.dispatchEvent(o),o},me=(e,t)=>{const i=document.createElement("hui-error-card");try{i.setConfig({type:"error",error:e,config:t})}catch(e){}return i},fe=(e,t)=>{const i=document.createElement(e);try{i.setConfig(t)}catch(i){return console.error(e,i),me(i.message,t)}return i},be=(e,t)=>{ge(e,"haptic",t)},ye="ha-main-window",ve=(()=>{try{return window.name===ye?window:parent.name===ye?parent:top}catch(e){return window}})(),$e=(e,t)=>((e,t,i)=>new Promise(n=>{const o=t.cancel,r=t.confirm;ge(e,"show-dialog",{dialogTag:"dialog-box",dialogParams:Object.assign(Object.assign(Object.assign({},t),i),{cancel:()=>{n(!!(null==i?void 0:i.prompt)&&null),o&&o()},confirm:e=>{n(!(null==i?void 0:i.prompt)||e),r&&r(e)}})})}))(e,t,{confirmation:!0}),we=(e,t)=>ge(e,"hass-notification",t),Ae=["closed","locked","off"],xe=(e,t,i=!0)=>{const n=Ee(t),o="group"===n?"homeassistant":n;let r;switch(n){case"lock":r=i?"unlock":"lock";break;case"cover":r=i?"open_cover":"close_cover";break;case"button":case"input_button":r="press";break;case"scene":r="turn_on";break;case"valve":r=i?"open_valve":"close_valve";break;default:r=i?"turn_on":"turn_off"}return e.callService(o,r,{entity_id:t})},Ee=e=>e.substring(0,e.indexOf(".")),ke=async(e,t,i,n)=>{var o,r,s;let a;if("double_tap"===n&&i.double_tap_action?a=i.double_tap_action:"hold"===n&&i.hold_action?a=i.hold_action:"tap"===n&&i.tap_action&&(a=i.tap_action),a||(a={action:"more-info"}),a.confirmation&&(!a.confirmation.exemptions||!a.confirmation.exemptions.some(e=>{var i;return e.user===(null===(i=t.user)||void 0===i?void 0:i.id)}))){let i;if(be(e,"warning"),"call-service"===a.action||"perform-action"===a.action){const[e,n]=(a.perform_action||a.service).split(".",2),o=t.services;if(e in o&&n in o[e]){await t.loadBackendTranslation("title");const r=await t.loadBackendTranslation("services");i=`${((e,t,i)=>e(`component.${t}.title`)||(null==i?void 0:i.name)||t)(r,e)}: ${r(`component.${e}.services.${i}.name`)||o[e][n].name||n}`}}if(!await $e(e,{text:a.confirmation.text||t.localize("ui.panel.lovelace.cards.actions.action_confirmation",{action:i||t.localize(`ui.panel.lovelace.editor.action-editor.actions.${a.action}`)||a.action})}))return}switch(a.action){case"more-info":{const n=a.entity||i.entity||i.camera_image||i.image_entity;n?ge(e,"hass-more-info",{entityId:n}):(we(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_entity_more_info")}),be(e,"failure"));break}case"navigate":a.navigation_path?((e,t)=>{var i,n;const o=(null==t?void 0:t.replace)||!1;o?history.replaceState((null===(i=history.state)||void 0===i?void 0:i.root)?{root:!0}:null!==(n=null==t?void 0:t.data)&&void 0!==n?n:null,"",`${ve.location.pathname}#${e}`):history.pushState(null,"",e),ge(window,"location-changed",{replace:o})})(a.navigation_path,{replace:a.navigation_replace}):(we(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_navigation_path")}),be(e,"failure"));break;case"url":a.url_path?window.open(a.url_path):(we(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_url")}),be(e,"failure"));break;case"toggle":i.entity?(((e,t)=>{const i=Ae.includes(e.states[t].state);xe(e,t,i)})(t,i.entity),be(e,"light")):(we(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_entity_toggle")}),be(e,"failure"));break;case"perform-action":case"call-service":{if(!a.perform_action&&!a.service)return we(e,{message:t.localize("ui.panel.lovelace.cards.actions.no_action")}),void be(e,"failure");const[i,n]=(a.perform_action||a.service).split(".",2);t.callService(i,n,null!==(o=a.data)&&void 0!==o?o:a.service_data,a.target),be(e,"light");break}case"assist":((e,t,i)=>{var n,o,r;(null===(n=t.auth.external)||void 0===n?void 0:n.config.hasAssist)?t.auth.external.fireMessage({type:"assist/show",payload:{pipeline_id:i.pipeline_id,start_listening:null===(o=i.start_listening)||void 0===o||o}}):ge(e,"show-dialog",{dialogTag:"ha-voice-command-dialog",dialogParams:{pipeline_id:i.pipeline_id,start_listening:null!==(r=i.start_listening)&&void 0!==r&&r}})})(e,t,{start_listening:null!==(r=a.start_listening)&&void 0!==r&&r,pipeline_id:null!==(s=a.pipeline_id)&&void 0!==s?s:"last_used"});break;case"fire-dom-event":ge(e,"ll-custom",a)}};function Ce(e){return void 0!==e&&"none"!==e.action}var Se,Oe,Pe,Me,je;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.quote_decimal="quote_decimal",e.space_comma="space_comma",e.none="none"}(Se||(Se={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Oe||(Oe={})),function(e){e.local="local",e.server="server"}(Pe||(Pe={})),function(e){e.language="language",e.system="system",e.DMY="DMY",e.MDY="MDY",e.YMD="YMD"}(Me||(Me={})),function(e){e.language="language",e.monday="monday",e.tuesday="tuesday",e.wednesday="wednesday",e.thursday="thursday",e.friday="friday",e.saturday="saturday",e.sunday="sunday"}(je||(je={}));const Te=(e,t,i)=>{const n=t?(e=>{switch(e.number_format){case Se.comma_decimal:return["en-US","en"];case Se.decimal_comma:return["de","es","it"];case Se.space_comma:return["fr","sv","cs"];case Se.quote_decimal:return["de-CH"];case Se.system:return;default:return e.language}})(t):void 0;return(null==t?void 0:t.number_format)===Se.none||Number.isNaN(Number(e))?Number.isNaN(Number(e))||""===e||(null==t?void 0:t.number_format)!==Se.none?[{type:"literal",value:e}]:new Intl.NumberFormat("en-US",He(e,Object.assign(Object.assign({},i),{useGrouping:!1}))).formatToParts(Number(e)):new Intl.NumberFormat(n,He(e,i)).formatToParts(Number(e))},He=(e,t)=>{const i=Object.assign({maximumFractionDigits:2},t);if("string"!=typeof e)return i;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=t,i.maximumFractionDigits=t}return i};function Ne(e,t,i){const n=new CustomEvent(t,{bubbles:!1,composed:!1,detail:i});e.dispatchEvent(n)}const ze=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind","heating","placeholder"],Re={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0},heating:{icon:"mdi:radiator",name:"heating",consumer:!0},placeholder:{name:"placeholder"}},Ue={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},Le={type:"",title:void 0,animation:"flash",entities:[],center:{type:"none"}},Ve=a`
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
`,De=B`
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
`;var Ie={description:"A Lovelace Card for visualizing power distributions."},qe={actions:{add:"Add",edit:"Edit",remove:"Remove"},optional:"Optional",settings:{action_settings:"Action Settings",animation:"Animation",autarky:"autarky",attribute:"Attribute",background_color:"Background Color",battery_percentage:"Battery Charge %",arrow_color_bigger:"Arrow - Bigger",arrow_color_equal:"Arrow - Equal",arrow_color_smaller:"Arrow - Smaller",icon_color_bigger:"Icon - Bigger",icon_color_equal:"Icon - Equal",icon_color_smaller:"Icon - Smaller",calc_excluded:"Excluded from Calculations",center:"Center",color:"Color",color_settings:"Color Settings",color_threshold:"Color Threshold",decimals:"Decimals",display_abs:"Display Absolute Value",double_tap_action:"Double Tap Action",entities:"Entities",entity:"Entity",general_settings:"General Settings",grid_buy:"Grid Buy",grid_sell:"Grid Sell",hide_arrows:"Hide Arrows",lower_bound:"Lower Bound",upper_bound:"Upper Bound",preset_settings:"Preset Settings",icon:"Icon",invert_value:"Invert Value",name:"Name",preset:"Preset",ratio:"ratio",secondary_info:"Secondary Info",secondary_info_entity:"Entity",secondary_info_attribute:"Attribute",secondary_info_replace_name:"Replace Name",settings:"Settings",tap_action:"Tap Action",threshold:"Threshold",title:"Title",unit_of_display:"Unit of Display",value:"value"}},Be={common:Ie,editor:qe},We={description:"Eine Karte zur Visualizierung von Stromverteilungen"},Fe={actions:{add:"Hinzufügen",edit:"Bearbeiten",remove:"Entfernen"},optional:"Optional",settings:{action_settings:"Interaktions Einstellungen",animation:"Animation",autarky:"Autarkie",attribute:"Attribut",background_color:"Hintergrundfarbe",battery_percentage:"Batterie Ladung %",arrow_color_bigger:"Pfeil - Größer",arrow_color_equal:"Pfeil - Gleich",arrow_color_smaller:"Pfeil - Kleiner",icon_color_bigger:"Symbol - Größer",icon_color_equal:"Symbol - Gleich",icon_color_smaller:"Symbol - Kleiner",calc_excluded:"Von Rechnungen ausschließen",center:"Mittelbereich",color:"Farbe",color_settings:"Farb Einstellungen",color_threshold:"Farb-Schwellenwert",decimals:"Dezimalstellen",display_abs:"Absolute Wertanzeige",double_tap_action:"Doppel Tipp Aktion",entities:"Entities",entity:"Element",general_settings:"Allgemeine Einstellungen",grid_buy:"Netz Ankauf",grid_sell:"Netz Verkauf",hide_arrows:"Pfeile Verstecken",lower_bound:"Untere Grenze",upper_bound:"Obere Grenze",preset_settings:"Vorlagen Einstellungen",icon:"Symbol",invert_value:"Wert Invertieren",name:"Name",preset:"Vorlagen",ratio:"Anteil",secondary_info:"Zusatzinformationen",secondary_info_entity:"Element",secondary_info_attribute:"Attribut",secondary_info_replace_name:"Namen Ersetzen",settings:"Einstellungen",tap_action:"Tipp Aktion",threshold:"Schwellenwert",title:"Titel",unit_of_display:"Angezeigte Einheit",value:"Wert"}},Ke={common:We,editor:Fe},Ge={description:"A Lovelace Card for visualizing power distributions."},Ze={actions:{add:"Pridať",edit:"Editovať",remove:"Odobrať"},optional:"Voliteľné",settings:{action_settings:"Nastavenia akcie",animation:"Animácia",autarky:"sebestačnosť",attribute:"Atribút",background_color:"Farba pozadia",battery_percentage:"Nabitie batérie %",arrow_color_bigger:"Šípka - Väčšie",arrow_color_equal:"Šípka - Rovné",arrow_color_smaller:"Šípka - Menšie",icon_color_bigger:"Ikona - Väčšie",icon_color_equal:"Ikona - Rovné",icon_color_smaller:"Ikona - Menšie",calc_excluded:"Vylúčené z výpočtov",center:"Centrum",color:"Farba",color_settings:"Nastavenia farby",color_threshold:"Prah farby",decimals:"Desatinné čísla",display_abs:"Zobraziť absolútnu hodnotu",double_tap_action:"Akcia dvojitého klepnutia",entities:"Entity",entity:"Entita",general_settings:"Všeobecné nastavenia",grid_buy:"Sieť nákup",grid_sell:"Sieť predaj",hide_arrows:"Skryť šípky",lower_bound:"Dolná hranica",upper_bound:"Horná hranica",preset_settings:"Nastavenia predvoľby",icon:"Ikona",invert_value:"Invertovať hodnotu",name:"Názov",preset:"Predvoľba",ratio:"pomer",secondary_info:"Sekundárne informácie",secondary_info_entity:"Entita",secondary_info_attribute:"Atribút",secondary_info_replace_name:"Nahradiť názov",settings:"nastavenia",tap_action:"Akcia klepnutia",threshold:"Prah",title:"Titul",unit_of_display:"Jednotka zobrazenia",value:"hodnota"}},Ye={common:Ge,editor:Ze};const Je={en:Object.freeze({__proto__:null,common:Ie,default:Be,editor:qe}),de:Object.freeze({__proto__:null,common:We,default:Ke,editor:Fe}),sk:Object.freeze({__proto__:null,common:Ge,default:Ye,editor:Ze})};function Xe(e,t=!1,i="",n=""){const o=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=e.split(".").reduce((e,t)=>e[t],Je[o])}catch(t){r=e.split(".").reduce((e,t)=>e[t],Je.en)}return void 0===r&&(r=e.split(".").reduce((e,t)=>e[t],Je.en)),""!==i&&""!==n&&(r=r.replace(i,n)),t?function(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}(r):r}function Qe(e){return`${Xe("editor.settings."+e.name)} ${e.required?"":`(${Xe("editor.optional")})`}`}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=2,tt=e=>(...t)=>({_$litDirective$:e,values:t});let it=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const nt=(e,t)=>{if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let i,n;if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(i=n;0!==i--;)if(!nt(e[i],t[i]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;for(i of e.entries())if(!nt(i[1],t.get(i[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!==t.length)return!1;for(i=n;0!==i--;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const o=Object.keys(e);if(n=o.length,n!==Object.keys(t).length)return!1;for(i=n;0!==i--;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=n;0!==i--;){const n=o[i];if(!nt(e[n],t[n]))return!1}return!0}return e!=e&&t!=t},ot="power-distribution-card",rt=`${ot}-editor`,st=`${ot}-item-editor`,at=`${ot}-bar-editor`,ct=`${ot}-items-editor`,lt="action-handler-power-distribution-card";class dt extends HTMLElement{constructor(){super(...arguments),this.holdTime=500}bind(e,t={}){e.actionHandler&&nt(t,e.actionHandler.options)||(e.actionHandler&&e.removeEventListener("click",e.actionHandler.end),e.actionHandler={options:t},t.disabled||(e.actionHandler.end=i=>{const n=e;i.cancelable&&i.preventDefault(),clearTimeout(this.timer),this.timer=void 0,t.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,ge(n,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,ge(n,"action",{action:"double_tap"})):ge(n,"action",{action:"tap"})},e.addEventListener("click",e.actionHandler.end)))}}customElements.define(lt,dt);const ht=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector(lt))return e.querySelector(lt);const t=document.createElement(lt);return e.appendChild(t),t})();i&&i.bind(e,t)},ut=tt(class extends it{update(e,[t]){return ht(e.element,t),W}render(e){}}),pt=Symbol.for(""),_t=e=>{if(e?.r===pt)return e?._$litStatic$},gt=e=>({_$litStatic$:e,r:pt}),mt=new Map,ft=(e=>(t,...i)=>{const n=i.length;let o,r;const s=[],a=[];let c,l=0,d=!1;for(;l<n;){for(c=t[l];l<n&&void 0!==(r=i[l],o=_t(r));)c+=o+t[++l],d=!0;l!==n&&a.push(r),s.push(c),l++}if(l===n&&s.push(t[n]),d){const e=s.join("$$lit$$");void 0===(t=mt.get(e))&&(s.raw=s,mt.set(e,t=s)),i=a}return e(t,...i)})(B);var bt="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";const yt=[{name:"general",type:"expandable",flatten:!0,expanded:!0,title:Xe("editor.settings.general_settings",!0),icon:"mdi:text",schema:[{name:"entity",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"attribute",selector:{attribute:{}},context:{filter_entity:"entity"}},{name:"preset",selector:{select:{options:ze,mode:"dropdown"}}}]}]},{name:"Value Settings",type:"expandable",flatten:!0,title:Xe("editor.settings.value",!0)+" "+Xe("editor.settings.settings",!0),icon:"mdi:numeric",schema:[{type:"grid",name:"",schema:[{name:"unit_of_display",selector:{text:{}}},{name:"decimals",selector:{number:{step:1}}},{name:"invert_value",type:"boolean"},{name:"display_abs",type:"boolean"},{name:"hide_arrows",type:"boolean"},{name:"calc_excluded",type:"boolean"},{name:"threshold",selector:{number:{}}}]}]},{name:"Secondary Info",type:"expandable",flatten:!0,title:Xe("editor.settings.secondary_info",!0),icon:"mdi:attachment-plus",schema:[{name:"secondary_info_entity",selector:{entity:{domain:"sensor"}}},{name:"secondary_info_attribute",selector:{attribute:{}},context:{filter_entity:"secondary_info_entity"}},{name:"secondary_info_decimals",selector:{number:{step:1}}},{name:"secondary_info_replace_name",type:"boolean"}]},{name:"Action Settings",type:"expandable",flatten:!0,title:Xe("editor.settings.action_settings",!0),icon:"mdi:gesture-tap",schema:[{type:"grid",name:"",schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"double_tap_action",selector:{ui_action:{}}}]}]},{name:"Color Settings",type:"expandable",flatten:!0,title:Xe("editor.settings.color_settings",!0),icon:"mdi:palette",schema:[{name:"color_threshold",selector:{number:{}}},{type:"grid",name:"",schema:[{name:"icon_color_bigger",selector:{ui_color:{}}},{name:"arrow_color_bigger",selector:{ui_color:{}}},{name:"icon_color_equal",selector:{ui_color:{}}},{name:"arrow_color_equal",selector:{ui_color:{}}},{name:"icon_color_smaller",selector:{ui_color:{}}},{name:"arrow_color_smaller",selector:{ui_color:{}}}]}]}],vt={battery_percentage_entity:"battery_percentage",grid_buy_entity:"grid_buy",grid_sell_entity:"grid_sell",secondary_info_decimals:"decimals"};let $t=class extends ce{constructor(){super(...arguments),this._computeLabel=e=>{var t;return`${Xe("editor.settings."+(null!==(t=vt[e.name])&&void 0!==t?t:e.name))} ${e.required?"":`(${Xe("editor.optional")})`}`}}get _flatConfig(){var e,t,i,n,o,r;const s=this.config;return Object.assign(Object.assign({},s),{icon_color_bigger:null===(e=s.icon_color)||void 0===e?void 0:e.bigger,icon_color_equal:null===(t=s.icon_color)||void 0===t?void 0:t.equal,icon_color_smaller:null===(i=s.icon_color)||void 0===i?void 0:i.smaller,arrow_color_bigger:null===(n=s.arrow_color)||void 0===n?void 0:n.bigger,arrow_color_equal:null===(o=s.arrow_color)||void 0===o?void 0:o.equal,arrow_color_smaller:null===(r=s.arrow_color)||void 0===r?void 0:r.smaller})}get _schema(){var e;const t=null===(e=this.config)||void 0===e?void 0:e.preset,i="battery"===t?[{name:"battery_percentage_entity",selector:{entity:{}}}]:"grid"===t?[{name:"grid_buy_entity",selector:{entity:{}}},{name:"grid_sell_entity",selector:{entity:{}}}]:[];if(0===i.length)return yt;const n={name:"preset_section",type:"expandable",flatten:!0,title:Xe("editor.settings.preset_settings",!0),icon:"mdi:shape",schema:i};return[yt[0],n,...yt.slice(1)]}render(){return this.hass&&this.config&&"placeholder"!=this.config.preset?B`
      <ha-form
        .hass=${this.hass}
        .data=${this._flatConfig}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._formValueChanged}
      ></ha-form>
    `:F}_formValueChanged(t){if(t.stopPropagation(),!this.config||!this.hass)return;const i=t.detail.value,{icon_color_bigger:n,icon_color_equal:o,icon_color_smaller:r,arrow_color_bigger:s,arrow_color_equal:a,arrow_color_smaller:c}=i,l=e(i,["icon_color_bigger","icon_color_equal","icon_color_smaller","arrow_color_bigger","arrow_color_equal","arrow_color_smaller"]),d=n||o||r?{bigger:n||void 0,equal:o||void 0,smaller:r||void 0}:void 0,h=s||a||c?{bigger:s||void 0,equal:a||void 0,smaller:c||void 0}:void 0;ge(this,"config-changed",Object.assign(Object.assign({},l),{icon_color:d,arrow_color:h}))}static get styles(){return a`
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
    `}};t([ue({attribute:!1})],$t.prototype,"config",void 0),t([ue({attribute:!1})],$t.prototype,"hass",void 0),customElements.define(st,$t);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:wt}=re,At=e=>e,xt=()=>document.createComment(""),Et=(e,t,i)=>{const n=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(xt(),o),r=n.insertBefore(xt(),o);i=new wt(t,r,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,s=r!==e;if(s){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==o||s){let e=i._$AA;for(;e!==t;){const t=At(e).nextSibling;At(n).insertBefore(e,o),e=t}}}return i},kt=(e,t,i=e)=>(e._$AI(t,i),e),Ct={},St=(e,t=Ct)=>e._$AH=t,Ot=e=>{e._$AR(),e._$AA.remove()},Pt=(e,t,i)=>{const n=new Map;for(let o=t;o<=i;o++)n.set(e[o],o);return n},Mt=tt(class extends it{constructor(e){if(super(e),e.type!==et)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let n;void 0===i?i=t:void 0!==t&&(n=t);const o=[],r=[];let s=0;for(const t of e)o[s]=n?n(t,s):s,r[s]=i(t,s),s++;return{values:r,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,n]){const o=(e=>e._$AH)(e),{values:r,keys:s}=this.dt(t,i,n);if(!Array.isArray(o))return this.ut=s,r;const a=this.ut??=[],c=[];let l,d,h=0,u=o.length-1,p=0,_=r.length-1;for(;h<=u&&p<=_;)if(null===o[h])h++;else if(null===o[u])u--;else if(a[h]===s[p])c[p]=kt(o[h],r[p]),h++,p++;else if(a[u]===s[_])c[_]=kt(o[u],r[_]),u--,_--;else if(a[h]===s[_])c[_]=kt(o[h],r[_]),Et(e,c[_+1],o[h]),h++,_--;else if(a[u]===s[p])c[p]=kt(o[u],r[p]),Et(e,o[h],o[u]),u--,p++;else if(void 0===l&&(l=Pt(s,p,_),d=Pt(a,h,u)),l.has(a[h]))if(l.has(a[u])){const t=d.get(s[p]),i=void 0!==t?o[t]:null;if(null===i){const t=Et(e,o[h]);kt(t,r[p]),c[p]=t}else c[p]=kt(i,r[p]),Et(e,o[h],i),o[t]=null;p++}else Ot(o[u]),u--;else Ot(o[h]),h++;for(;p<=_;){const t=Et(e,c[_+1]);kt(t,r[p]),c[p++]=t}for(;h<=u;){const e=o[h++];null!==e&&Ot(e)}return this.ut=s,St(e,c),W}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class jt extends ce{constructor(){super(...arguments),this._selectedPreset=ze[0],this._entityKeys=new WeakMap}_getKey(e){return this._entityKeys.has(e)||this._entityKeys.set(e,Math.random().toString()),this._entityKeys.get(e)}disconnectedCallback(){super.disconnectedCallback()}render(){return this.entities&&this.hass?B`
      <h3>${Xe("editor.settings.entities")}</h3>
      <ha-sortable handle-selector=".handle" @item-moved=${this._rowMoved}>
        <div class="entities">
          ${Mt(this.entities,e=>this._getKey(e),(e,t)=>B`
              <div class="entity">
                <div class="handle">
                  <ha-icon icon="mdi:drag"></ha-icon>
                </div>
                <ha-entity-picker
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"entity"}
                  .value=${e.entity}
                  .index=${t}
                  @value-changed=${this._valueChanged}
                ></ha-entity-picker>

                <ha-icon-button
                  .label=${Xe("editor.actions.remove")}
                  .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                  class="remove-icon"
                  .index=${t}
                  @click=${this._removeRow}
                ></ha-icon-button>

                <ha-icon-button
                  .label=${Xe("editor.actions.edit")}
                  .path=${bt}
                  class="edit-icon"
                  .index=${t}
                  @click="${this._editRow}"
                ></ha-icon-button>
              </div>
            `)}
        </div>
      </ha-sortable>

      
      <div class="add-item row">
        <ha-select
          label="${Xe("editor.settings.preset")}"
          class="add-preset"
          .value=${this._selectedPreset}
          .options=${ze.map(e=>({value:e,label:e}))}
          @selected=${e=>{this._selectedPreset=e.detail.value}}
        ></ha-select>

        <ha-entity-picker .hass=${this.hass} name="entity" class="add-entity"></ha-entity-picker>

        <ha-icon-button
          .label=${Xe("editor.actions.add")}
          .path=${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"}
          class="add-icon"
          @click="${this._addRow}"
        ></ha-icon-button>
      </div>
    `:F}_valueChanged(e){if(!this.entities||!this.hass)return;const t=e.detail.value,i=e.target.index,n=this.entities.concat();n[i]=Object.assign(Object.assign({},n[i]),{entity:t||""}),Ne(this,"config-changed",n)}_removeRow(e){e.stopPropagation();const t=e.currentTarget.index;if(null!=t){const e=this.entities.concat();e.splice(t,1),Ne(this,"config-changed",e)}}_editRow(e){e.stopPropagation();const t=e.target.index;null!=t&&Ne(this,"edit-item",t)}_addRow(e){if(e.stopPropagation(),!this.entities||!this.hass)return;const t=this._selectedPreset||"placeholder",i=this.shadowRoot.querySelector(".add-entity").value,n=Object.assign({},Ue,Re[t],{entity:i,preset:""==i?"placeholder":t});Ne(this,"config-changed",[...this.entities,n])}_rowMoved(e){e.stopPropagation();const{oldIndex:t,newIndex:i}=e.detail;if(t===i||!this.entities)return;const n=this.entities.concat();n.splice(i,0,n.splice(t,1)[0]),Ne(this,"config-changed",n)}static get styles(){return a`
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
    `}}t([ue({attribute:!1})],jt.prototype,"entities",void 0),t([ue({attribute:!1})],jt.prototype,"hass",void 0),t([pe()],jt.prototype,"_selectedPreset",void 0),customElements.define(ct,jt);const Tt=[{name:"entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"preset",selector:{select:{options:["autarky","ratio",""],mode:"dropdown"}}}]},{type:"grid",name:"",schema:[{name:"lower_bound",selector:{number:{}}},{name:"upper_bound",selector:{number:{}}}]},{type:"grid",name:"",schema:[{name:"bar_color",selector:{ui_color:{}}},{name:"bar_bg_color",selector:{ui_color:{}}}]},{name:"tap_action",selector:{ui_action:{}}},{name:"double_tap_action",selector:{ui_action:{}}}];class Ht extends ce{constructor(){super(...arguments),this._selectedCard=0,this._computeLabel=e=>{var t;return Xe("editor.settings."+(null!==(t={bar_color:"color",bar_bg_color:"background_color"}[e.name])&&void 0!==t?t:e.name))}}render(){var e;if(!this.hass)return F;const t=null!==(e=this.config)&&void 0!==e?e:[],i=this._selectedCard,n=t.length;return B`
            <div class="card-config">
                <div class="toolbar">
                <ha-tab-group @wa-tab-show=${this._selectBar}>
                    ${t.map((e,t)=>B`
                        <ha-tab-group-tab
                            slot="nav"
                            .panel=${t}
                            .active=${t===i}
                        >${t+1}</ha-tab-group-tab>`)}
                </ha-tab-group>
                <ha-icon-button
                    id="add-bar"
                    .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}
                    @click=${this._addBar}
                ></ha-icon-button>
                </div>
            </div>

            ${n>0?B`
            <div id="editor">
                <div id="bar-options">
                    <ha-icon-button-arrow-prev
                        .disabled=${0===i}
                        .label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.move_before")}
                        @click=${this._moveLeft}
                        .move=${-1}
                    ></ha-icon-button-arrow-prev>

                    <ha-icon-button-arrow-next
                        .label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.move_after")}
                        .disabled=${i===n-1}
                        @click=${this._moveRight}
                        .move=${1}
                    ></ha-icon-button-arrow-next>

                    <ha-icon-button
                        .label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.delete")}
                        .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                        @click=${this._delete}
                    ></ha-icon-button>
                </div>

                <ha-form
                    .hass=${this.hass}
                    .data=${t[i]}
                    .schema=${Tt}
                    .computeLabel=${this._computeLabel}
                    @value-changed=${this.valueChanged}
                ></ha-form>
            </div>
            `:F}
        `}valueChanged(e){e.stopPropagation(),this.config&&this.hass&&(nt(this.config[this._selectedCard],e.detail.value)||(this.config=this.config.map((t,i)=>i===this._selectedCard?e.detail.value:t),Ne(this,"config-changed",this.config)))}_addBar(){this.config?this.config=[...this.config,{}]:this.config=[{}],this._selectedCard=this.config.length-1,Ne(this,"config-changed",this.config)}_selectBar(e){this._selectedCard=parseInt(e.detail.name,10)}_moveRight(){if(!this.config||this._selectedCard>=this.config.length-1)return;const e=this.config.slice(),t=e.splice(this._selectedCard,1)[0];e.splice(this._selectedCard+1,0,t),this.config=e,this._selectedCard++,Ne(this,"config-changed",this.config)}_moveLeft(){if(!this.config||0===this._selectedCard)return;const e=this.config.slice(),t=e.splice(this._selectedCard,1)[0];e.splice(this._selectedCard-1,0,t),this.config=e,this._selectedCard--,Ne(this,"config-changed",this.config)}_delete(){if(!this.config)return;const e=this.config.slice();e.splice(this._selectedCard,1),this.config=e,this._selectedCard>=e.length&&e.length>0&&(this._selectedCard=e.length-1),Ne(this,"config-changed",this.config)}static get styles(){return[a`
            .toolbar {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            ha-tab-group {
              flex-grow: 1;
              min-width: 0;
              --ha-tab-track-color: var(--card-background-color);
            }
    
            #bar-options {
              display: flex;
              justify-content: flex-end;
              width: 100%;
            }
    
            #editor {
              border: 1px solid var(--divider-color);
              padding: 12px;
            }
            @media (max-width: 450px) {
              #editor {
                margin: 0 -12px;
              }
            }
          `]}}t([ue({attribute:!1})],Ht.prototype,"hass",void 0),t([ue({attribute:!1})],Ht.prototype,"config",void 0),t([pe()],Ht.prototype,"_selectedCard",void 0),customElements.define(at,Ht);const Nt=async e=>{let t=customElements.get(e);return t||(await customElements.whenDefined(e),customElements.get(e))},zt=["none","card","bars"],Rt=[{name:"title",selector:{text:{}}},{name:"animation",selector:{select:{options:["none","flash","slide"],mode:"dropdown"}},required:!0}];class Ut extends ce{constructor(){super(...arguments),this._activeEditor={type:"main"}}setConfig(t){if(t.center&&"content"in t.center){const i=t.center.content,n=t.center,{content:o}=n,r=e(n,["content"]);let s;s="bars"===t.center.type?Object.assign(Object.assign({},r),{bars:i}):"card"===t.center.type?Object.assign(Object.assign({},r),{card:i}):r,this._config=Object.assign(Object.assign({},t),{center:s}),ge(this,"config-changed",{config:this._config})}else this._config=t}firstUpdated(){customElements.get("ha-entity-picker")||Nt("hui-entities-card").then(e=>null==e?void 0:e.getConfigElement())}render(){if(!this.hass||!this._config)return F;if("main"===this._activeEditor.type)return this._renderMainEditor();const e=[B`
        <div class="header">
          <div class="back-title">
            <ha-icon-button-arrow-prev @click=${this._goBack}>
            </ha-icon-button-arrow-prev>
          </div>
        </div>`];switch(this._activeEditor.type){case"item":e.push(this._renderItemEditor());break;case"bars":e.push(this._renderBarEditor());break;case"card":e.push(this._renderCardEditor())}return B`${e}`}_enableCenterEditor(e){e.stopPropagation(),this._activeEditor={type:e.currentTarget.value}}_enableItemEditor(e){e.stopPropagation(),this._activeEditor={type:"item",index:e.detail}}_goBack(){this._activeEditor={type:"main"}}_valueChanged(e){if(e.stopPropagation(),!this._config||!this.hass)return;const t=e.target,i=e.detail;if(t&&i){if(t.configValue){let e=i;"center.type"==t.configValue&&(e=i.value);const n=t.configValue.split(".");this._config=Object.assign(Object.assign({},this._config),{[n[0]]:n.length>1?Object.assign(Object.assign({},this._config[n[0]]),{[n[1]]:e}):e})}else this._config=i.value;ge(this,"config-changed",{config:this._config})}}_renderMainEditor(){var e,t,i,n,o,r;return B`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Rt}
        .computeLabel=${Qe}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <br />
      <div class="entity row">
        <ha-select
          style="flex-grow: 1"
          label="${Xe("editor.settings.center")}"
          .configValue=${"center.type"}
          @selected=${this._valueChanged}
          .value=${(null===(t=null===(e=this._config)||void 0===e?void 0:e.center)||void 0===t?void 0:t.type)||"none"}
          .options=${zt.map(e=>({value:e,label:e}))}
        ></ha-select>
        ${"none"!=(null===(n=null===(i=this._config)||void 0===i?void 0:i.center)||void 0===n?void 0:n.type)?B`<ha-icon-button
              class="edit-icon"
              .value=${null===(r=null===(o=this._config)||void 0===o?void 0:o.center)||void 0===r?void 0:r.type}
              .path=${bt}
              @click="${this._enableCenterEditor}"
            ></ha-icon-button>`:""}
        </div>
        <br />
        ${ft`<${gt(ct)}
          .hass=${this.hass}
          .entities=${this._config.entities}
          .configValue=${"entities"}
          @edit-item=${this._enableItemEditor}
          @config-changed=${this._valueChanged}
        ></${gt(ct)}>`}
      </div>
    `}_renderItemEditor(){const e=this._activeEditor.index;return null==e?F:ft`<${gt(st)}
      .hass=${this.hass}
      .config=${this._config.entities[e]}
      @config-changed=${this._itemChanged}
    ></${gt(st)}>`}_renderBarEditor(){return ft`<${gt(at)}
      .hass=${this.hass}
      .config=${this._config.center.bars}
      .configValue=${"center.bars"}
      @config-changed=${this._valueChanged}
    ></${gt(at)}>`}_itemChanged(e){if(e.stopPropagation(),!this._config||!this.hass)return;const t=this._activeEditor.index;if(null!=t){const i=[...this._config.entities];i[t]=e.detail,ge(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:i})})}}_renderCardEditor(){return B`
      <p />
      Card configuration is only editable via yaml.
      <p />
      Check out the
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonahKr/power-distribution-card#cards-"
        >Readme</a
      >
      to check out the latest and best way to add it.
    `}_cardChanged(e){e.stopPropagation(),this._config&&this.hass&&(this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{card:e.detail.config})}),ge(this,"config-changed",{config:this._config}))}static get styles(){return[a`
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
        }`]}}t([ue({attribute:!1})],Ut.prototype,"hass",void 0),t([pe()],Ut.prototype,"_config",void 0),t([pe()],Ut.prototype,"_activeEditor",void 0),customElements.define(rt,Ut);var Lt=Object.freeze({__proto__:null,PowerDistributionCardEditor:Ut});const Vt=new Set(["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white"]),Dt=new Set(["primary-text","secondary-text","disabled"]);function It(e){const t=function(e){return Vt.has(e)||Dt.has(e)?`--${e}-color`:e}(e);return t!==e?`var(${t})`:e}console.info("%c POWER-DISTRIBUTION-CARD %c 3.0.0 ","font-weight: 500; color: black; background:#f6aa1c;","font-weight: 500; color: #f6aa1c; background: #220901;"),function(e,t,i){const n=window;n.customCards=n.customCards||[],n.customCards.push({type:e,name:t,description:i,preview:!0,documentationURL:`${_e}/readme.md`})}(ot,"Power Distribution Card",Xe("common.description"));let qt=class extends ce{constructor(){super(...arguments),this._narrow=!1}static async getConfigElement(){return await Promise.resolve().then(function(){return Lt}),document.createElement(rt)}static getStubConfig(){return{title:"Title",entities:[],center:{type:"bars",bars:[{preset:"autarky",name:Xe("editor.settings.autarky")},{preset:"ratio",name:Xe("editor.settings.ratio")}]}}}async setConfig(t){const i=Object.assign({},Le,t);if(i.center&&"content"in i.center){const t=i.center.content,n=i.center,{content:o}=n,r=e(n,["content"]);"bars"===i.center.type?i.center=Object.assign(Object.assign({},r),{bars:t}):"card"===i.center.type?i.center=Object.assign(Object.assign({},r),{card:t}):i.center=r}i.entities=t.entities.map(e=>e.preset&&ze.includes(e.preset)?Object.assign({},Ue,Re[e.preset],e):e),this._config=i}firstUpdated(){const e=this._config;if(e.entities.forEach((e,t)=>{if(e.entity&&!e.unit_of_measurement){const i=this._state({entity:e.entity,attribute:"unit_of_measurement"});this._config.entities[t].unit_of_measurement=i||"W"}}),"bars"==e.center.type&&e.center.bars){const t=e.center.bars.map(e=>{if(e.unit_of_measurement)return e;let t="%";return e.entity&&(t=this._state({entity:e.entity,attribute:"unit_of_measurement"})),Object.assign({},e,{unit_of_measurement:e.unit_of_measurement||t})});this._config.center=Object.assign(Object.assign({},this._config.center),{bars:t})}else"card"==this._config.center.type&&this._config.center.card&&(this._card=this._createCardElement(this._config.center.card));this._adjustWidth(),this._attachObserver()}updated(e){super.updated(e),this._card&&(e.has("hass")||e.has("editMode"))&&this.hass&&(this._card.hass=this.hass)}static get styles(){return Ve}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._attachObserver())}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){var e;this._resizeObserver||(this._resizeObserver=new ResizeObserver(((e,t,i=!1)=>{let n,o;const r=(...r)=>{const s=i&&!n;n&&(o=r),clearTimeout(n),n=window.setTimeout(()=>{n=void 0,o?(e(...o),o=void 0):i||e(...r)},t),s&&e(...r)};return r.cancel=()=>{clearTimeout(n),o=void 0},r})(()=>this._adjustWidth(),250,!1)));const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");t&&this._resizeObserver.observe(t)}_adjustWidth(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");t&&(this._narrow=t.offsetWidth<400)}_formatValue(e,t,i){var n,o;const r=10**(null!=i?i:t&&null!==(o=null===(n=this.hass.entities[t])||void 0===n?void 0:n.display_precision)&&void 0!==o?o:2),s=Math.round(e*r)/r;return[(a=s,c=this.hass.locale,Te(a,c,l).map(e=>e.value).join("")),s];var a,c,l}_val(e){var t;let i=e.invert_value?-1:1;"k"==(null===(t=e.unit_of_measurement)||void 0===t?void 0:t.charAt(0))&&(i*=1e3);let n=this._state(e);const o=e.threshold||null;return n=o&&Math.abs(n)<o?0:n,n*i}_state(e){return e.entity&&this.hass.states[e.entity]?e.attribute?this.hass.states[e.entity].attributes[e.attribute]:this.hass.states[e.entity].state:null}render(){const e=[],t=[],i=[];let n=0,o=0;this._config.entities.forEach((t,r)=>{const s=this._val(t);t.calc_excluded||(t.producer&&s>0&&(o+=s),t.consumer&&s<0&&(n-=s));const a=this._render_item(s,t,r);r%2==0?e.push(a):i.push(a)});switch(this._config.center.type){case"none":break;case"card":this._card?t.push(this._card):console.warn("NO CARD");break;case"bars":t.push(this._render_bars(n,o))}return B` ${this._narrow?De:void 0}
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div id="left-panel">${e}</div>
          <div id="center-panel">${t}</div>
          <div id="right-panel">${i}</div>
        </div>
      </ha-card>`}_handleAction(e){this.hass&&this._config&&e.detail.action&&ke(this,this.hass,{entity:e.currentTarget.entity,tap_action:e.currentTarget.tap_action,double_tap_action:e.currentTarget.double_tap_action},e.detail.action)}_render_item(e,t,i){if(!t.entity)return B`<item class="placeholder"></item>`;let n=e,o=t.unit_of_display||"W";if("k"==o.charAt(0)[0])n/=1e3;else if("adaptive"==t.unit_of_display){let e="W";t.unit_of_measurement&&(e="k"==t.unit_of_measurement[0]?t.unit_of_measurement.substring(1):t.unit_of_measurement),Math.abs(n)>999?(n/=1e3,o="k"+e):o=e}const r=t.invert_arrow?-1*n:n;n=t.display_abs?Math.abs(n):n;let[s,a]=this._formatValue(n,t.entity,t.decimals);const c=isNaN(a);let l;if(t.secondary_info_entity)if(t.secondary_info_attribute)l=this._state({entity:t.secondary_info_entity,attribute:t.secondary_info_attribute})+"";else{const e=this._state({entity:t.secondary_info_entity});l=isNaN(parseFloat(e))?String(e):`${this._formatValue(parseFloat(e),t.secondary_info_entity,t.secondary_info_decimals)[0]}${this._state({entity:t.secondary_info_entity,attribute:"unit_of_measurement"})||""}`}let d=t.name;t.secondary_info_replace_name&&(d=l,l=void 0);let h=t.icon;if("battery"===t.preset&&t.battery_percentage_entity){const e=this._val({entity:t.battery_percentage_entity});isNaN(e)||(h="mdi:battery",e<5?h="mdi:battery-outline":e<95&&(h="mdi:battery-"+(e/10).toFixed(0)+"0"))}let u=!1,p=B``;if("grid"===t.preset&&(t.grid_buy_entity||t.grid_sell_entity)){u=!0;const e=t.grid_buy_entity?this._formatValue(this._val({entity:t.grid_buy_entity}),t.grid_buy_entity,t.decimals)[0]:void 0,i=t.grid_sell_entity?this._formatValue(this._val({entity:t.grid_sell_entity}),t.grid_sell_entity,t.decimals)[0]:void 0;p=B`
        <div class="buy-sell">
          ${t.grid_buy_entity?B`<div class="grid-buy">
                B:
                ${e}${this._state({entity:t.grid_buy_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
          ${t.grid_sell_entity?B`<div class="grid-sell">
                S:
                ${i}${this._state({entity:t.grid_sell_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
        </div>
      `}const _=t.color_threshold||0;let g,m;return t.icon_color&&(r>_&&(g=t.icon_color.bigger),r<_&&(g=t.icon_color.smaller),r==_&&(g=t.icon_color.equal),g&&(g=It(g))),t.arrow_color&&(r>_&&(m=t.arrow_color.bigger),r<_&&(m=t.arrow_color.smaller),r==_&&(m=t.arrow_color.equal),m&&(m=It(m))),B`
      <item
        .entity=${t.entity}
        .tap_action=${t.tap_action}
        .double_tap_action=${t.double_tap_action}
        @action=${this._handleAction}
        .actionHandler=${ut({hasDoubleClick:Ce(t.double_tap_action)})}
      >
        <badge>
          <icon>
            <ha-icon icon="${h}" style="${g?`color:${g};`:""}"></ha-icon>
            ${l?B`<p class="secondary">${l}</p>`:null}
          </icon>
          ${u?p:B`<p class="subtitle">${d}</p>`}
        </badge>
        <value>
          <p>${c?"":s} ${c?"":o}</p>
          ${t.hide_arrows?B``:this._render_arrow(0==e||c?"none":i%2==0?r>0?"right":"left":r>0?"left":"right",m)}
        </value>
      </item>
    `}_render_arrow(e,t){const i=this._config.animation;return"none"==e?B` <div class="blank" style="${t?`background-color:${t};`:""}"></div> `:B`
        <div class="arrow-container ${e}">
          <div class="arrow ${i} " style="border-left-color: ${t};"></div>
          <div class="arrow ${i} ${"flash"==i?"delay-1":""}" style="border-left-color: ${t};"></div>
          <div class="arrow ${i} ${"flash"==i?"delay-2":""}" style="border-left-color: ${t};"></div>
          <div class="arrow ${i}" style="border-left-color: ${t};"></div>
        </div>
      `}_render_bars(e,t){const i=[];return this._config.center.bars&&0!=this._config.center.bars.length?(this._config.center.bars.forEach(n=>{var o,r;let s=-1;switch(n.preset){case"autarky":n.entity||(s=0!=e?Math.min(Math.round(100*t/Math.abs(e)),100):0);break;case"ratio":n.entity||(s=0!=t?Math.min(Math.round(100*Math.abs(e)/t),100):0)}const a=s<0?parseInt(this._val(n).toFixed(0),10):s,c=null!==(o=n.lower_bound)&&void 0!==o?o:0,l=null!==(r=n.upper_bound)&&void 0!==r?r:100,d=Math.min(Math.max((a-c)/(l-c)*100,0),100);i.push(B`
        <div
          class="bar-element"
          .entity=${n.entity}
          .tap_action=${n.tap_action}
          .double_tap_action=${n.double_tap_action}
          @action=${this._handleAction}
          .actionHandler=${ut({hasDoubleClick:Ce(n.double_tap_action)})}
          style="${n.tap_action||n.double_tap_action?"cursor: pointer;":""}"
        >
          <p class="bar-percentage">${Math.round(d)}${n.unit_of_measurement||"%"}</p>
          <div class="bar-wrapper" style="${n.bar_bg_color?`background-color:${It(n.bar_bg_color)};`:""}">
            <bar style="height:${d}%; background-color:${n.bar_color?It(n.bar_color):""};" />
          </div>
          <p>${n.name||""}</p>
        </div>
      `)}),B`${i}`):B``}_createCardElement(e){const t=(e=>{if(!e||"object"!=typeof e||!e.type)return me("No type defined",e);const{type:t}=e;if(t.startsWith("custom:")){const i=t.slice(7);if(customElements.get(i))return fe(i,e);const n=me(`Custom element doesn't exist: ${i}.`,e);n.style.display="None";const o=window.setTimeout(()=>{n.style.display=""},2e3);return customElements.whenDefined(i).then(()=>{clearTimeout(o),ge(n,"ll-rebuild")}),n}const i=`hui-${t}-card`;if(customElements.get(i))return fe(i,e);const n=me(`Unknown card type: ${t}.`,e);n.style.display="None";const o=window.setTimeout(()=>{n.style.display=""},2e3);return customElements.whenDefined(i).then(()=>{clearTimeout(o),ge(n,"ll-rebuild")}),n})(e);return this.hass&&(t.hass=this.hass),t.addEventListener("ll-rebuild",i=>{i.stopPropagation(),this._rebuildCard(t,e)},{once:!0}),t}_rebuildCard(e,t){const i=this._createCardElement(t);e.parentElement&&e.parentElement.replaceChild(i,e),this._card===e&&(this._card=i)}};t([ue({attribute:!1})],qt.prototype,"hass",void 0),t([pe()],qt.prototype,"_config",void 0),t([ue()],qt.prototype,"_card",void 0),t([pe()],qt.prototype,"_narrow",void 0),qt=t([(e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})(ot)],qt);export{qt as PowerDistributionCard};
