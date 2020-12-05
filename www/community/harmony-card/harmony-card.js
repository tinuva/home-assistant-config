/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${o}`);class s{constructor(t,e){this.parts=[],this.element=e;const n=[],o=[],s=document.createTreeWalker(e.content,133,null,!1);let c=0,u=-1,h=0;const{strings:p,values:{length:m}}=t;for(;h<m;){const t=s.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=p[h],n=d.exec(e)[2],i=n.toLowerCase()+"$lit$",o=t.getAttribute(i);t.removeAttribute(i);const s=o.split(r);this.parts.push({type:"attribute",index:u,name:n,strings:s}),h+=s.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,o=e.split(r),s=o.length-1;for(let e=0;e<s;e++){let n,r=o[e];if(""===r)n=l();else{const t=d.exec(r);null!==t&&a(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(r)}i.insertBefore(n,t),this.parts.push({type:"node",index:++u})}""===o[s]?(i.insertBefore(l(),t),n.push(t)):t.data=o[s],h+=s}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==c||(u++,e.insertBefore(l(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(n.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=o.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:n},parts:i}=t,o=document.createTreeWalker(n,133,null,!1);let r=p(i),s=i[r],a=-1,c=0;const l=[];let d=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-c,r=p(i,r),s=i[r]}l.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},p=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(c(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>(...e)=>{const n=t(...e);return m.set(n,!0),n},f=t=>"function"==typeof t&&m.has(t),v={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let r,s=0,a=0,l=o.nextNode();for(;s<i.length;)if(r=i[s],c(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=n.pop(),l=o.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${i} `;class S{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const a=d.exec(t);e+=null===a?t+(n?b:o):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==w&&(e=w.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),$=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!$(t))return t}let i="";for(let o=0;o<e;o++){i+=t[o];const e=n[o];if(void 0!==e){const t=e.value;if(x(t)||!$(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||x(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}const t=this.__pendingValue;t!==v&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):$(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const n=new y(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const o of t)n=e[i],void 0===n&&(n=new k(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(o),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=v}}class M extends P{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends C{}let N=!1;(()=>{try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class O{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=v}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function V(t){let e=D.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},D.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(i);return n=e.keyString.get(o),void 0===n&&(n=new s(t,t.getTemplateElement()),e.keyString.set(o,n)),e.stringsArray.set(t.strings,n),n}const D=new Map,B=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,i){const o=e[0];if("."===o){return new M(t,e.slice(1),n).parts}if("@"===o)return[new O(t,e.slice(1),i.eventContext)];if("?"===o)return[new E(t,e.slice(1),n)];return new P(t,e,n).parts}handleTextExpression(t){return new k(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const I=(t,...e)=>new S(t,e,"html",j)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,R=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const U=t=>e=>{const n=R(e.type,t);let o=D.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},D.set(n,o));let r=o.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(i);if(r=o.keyString.get(a),void 0===r){const n=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,t),r=new s(e,n),o.keyString.set(a,r)}return o.stringsArray.set(e.strings,r),r},Y=["html","svg"],q=new Set,L=(t,e,n)=>{q.add(t);const i=n?n.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const s=document.createElement("style");for(let t=0;t<r;t++){const e=o[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{Y.forEach(e=>{const n=D.get(R(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),u(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:o}=t;if(null==n)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let s=p(o),a=0,c=-1;for(;r.nextNode();){c++;for(r.currentNode===n&&(a=h(e),n.parentNode.insertBefore(e,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=p(o,s);return}s=p(o,s)}}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),u(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},F=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:F};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdateInternal(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=F){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||z,o="function"==typeof i?i:i.fromAttribute;return o?o(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||z.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=W){const i=this.constructor,o=i._attributeNameForProperty(t,n);if(void 0!==o){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let i=!0;if(void 0!==t){const o=this.constructor;n=n||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Z=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),K=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function X(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):K(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new tt(n,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const nt={};class it extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),i=[];n.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!G){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return nt}}it.finalized=!0,it.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,r=B.has(e),s=H&&11===e.nodeType&&!!e.host,a=s&&!q.has(o),c=a?document.createDocumentFragment():e;if(((t,e,i)=>{let o=B.get(e);void 0===o&&(n(e,e.firstChild),B.set(e,o=new k(Object.assign({templateFactory:V},i))),o.appendInto(e)),o.setValue(t),o.commit()})(t,c,Object.assign({templateFactory:U(o)},i)),a){const t=B.get(c);B.delete(c);const i=t.value instanceof y?t.value.template:void 0;L(o,c,i),n(e,e.firstChild),e.appendChild(c),B.set(e,t)}!r&&s&&window.ShadyCSS.styleElement(e.host)};var ot=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,rt="[^\\s]+",st=/\[([^]*?)\]/gm;function at(t,e){for(var n=[],i=0,o=t.length;i<o;i++)n.push(t[i].substr(0,e));return n}var ct=function(t){return function(e,n){var i=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return i>-1?i:null}};function lt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var i=0,o=e;i<o.length;i++){var r=o[i];for(var s in r)t[s]=r[s]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ut=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=at(ut,3),pt={dayNamesShort:at(dt,3),dayNames:dt,monthNamesShort:ht,monthNames:ut,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},mt=lt({},pt),gt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return gt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return gt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return gt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return gt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return gt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return gt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return gt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return gt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return gt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return gt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return gt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(Math.floor(Math.abs(e)/60),2)+":"+gt(Math.abs(e)%60,2)}},vt=function(t){return+t-1},_t=[null,"[1-9]\\d?"],yt=[null,rt],wt=["isPm",rt,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],St=(ct("monthNamesShort"),ct("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xt=function(t,e,n){if(void 0===e&&(e=St.default),void 0===n&&(n={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var i=[];e=(e=St[e]||e).replace(st,(function(t,e){return i.push(e),"@@@"}));var o=lt(lt({},mt),n);return(e=e.replace(ot,(function(e){return ft[e](t,o)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var $t=["closed","locked","off"],Pt=function(t,e,n,i){i=i||{},n=null==n?{}:n;var o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=n,t.dispatchEvent(o),o},Ct=function(t){Pt(window,"haptic",t)},kt=function(t,e,n,i){var o;if("double_tap"===i&&n.double_tap_action?o=n.double_tap_action:"hold"===i&&n.hold_action?o=n.hold_action:"tap"===i&&n.tap_action&&(o=n.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Ct("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(n.entity||n.camera_image)&&Pt(t,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":o.navigation_path&&function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),Pt(window,"location-changed",{replace:n})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":n.entity&&(function(t,e){(function(t,e,n){void 0===n&&(n=!0);var i,o=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===o?"homeassistant":o;switch(o){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}t.callService(r,i,{entity_id:e})})(t,e,$t.includes(t.states[e].state))}(e,n.entity),Ct("success"));break;case"call-service":if(!o.service)return void Ct("failure");var r=o.service.split(".",2);e.callService(r[0],r[1],o.service_data),Ct("success")}};function Et(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Mt=new WeakMap,Tt=g(t=>e=>{if(!(e instanceof C)||e instanceof T||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:n}=e,{style:i}=n.element;let o=Mt.get(e);void 0===o&&(i.cssText=n.strings.join(" "),Mt.set(e,o=new Set)),o.forEach(e=>{e in t||(o.delete(e),-1===e.indexOf("-")?i[e]=null:i.removeProperty(e))});for(const e in t)o.add(e),-1===e.indexOf("-")?i[e]=t[e]:i.setProperty(e,t[e])});customElements.define("fa-icon",class extends it{static get properties(){return{color:String,iClass:{attribute:"class"},src:String,style:String,size:String,pathPrefix:{attribute:"path-prefix"}}}static get styles(){return et`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }
      :host svg {
        fill: var(--fa-icon-fill-color, currentcolor);
        width: var(--fa-icon-width, 19px);
        height: var(--fa-icon-height, 19px);
      }
    `}getSources(t){const e={fas:"solid",far:"regular",fal:"light",fab:"brands",fa:"solid"},n=t=>t.replace("fa-","");let i=(t=>{let i=t.split(" ");return[e[i[0]],n(i[1])]})(t);return`${this.pathPrefix}/@fortawesome/fontawesome-free/sprites/${i[0]}.svg#${i[1]}`}constructor(){super(),this.iClass="",this.src="",this.style="",this.size="",this.color="",this.pathPrefix="node_modules"}firstUpdated(){this.src=this.getSources(this.iClass)}_parseStyles(){return`\n      ${this.size?`width: ${this.size};`:""}\n      ${this.size?`height: ${this.size};`:""}\n      ${this.color?`fill: ${this.color};`:""}\n      ${this.style}\n    `}render(){return I`
      <svg 
        .style="${this._parseStyles()}">
        <use 
          href="${this.src}">
        </use>
      </svg>
    `}});const Nt=et`
  :host {
    overflow: visible !important;
    display: block;
    --mmp-scale: var(--mini-media-player-scale, 1);
    --mmp-unit: calc(var(--mmp-scale) * 40px);
  }

  :host ::slotted(.card-content) {
    padding: 16px;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .label {
    margin: 0 8px;
  }
  ha-icon {
    width: calc(var(--mmp-unit) * .6);
    height: calc(var(--mmp-unit) * .6);
  }
  ha-icon-button {
    width: var(--mmp-unit);
    height: var(--mmp-unit);
    color: var(--mmp-text-color, var(--primary-text-color));
    transition: color .25s;
  }
  ha-icon-button[color] {
    color: var(--mmp-accent-color, var(--accent-color)) !important;
    opacity: 1 !important;
  }
  ha-icon-button[inactive] {
    opacity: .5;
  }

  .play-pause {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .activities {
      display: flex;
      flex-wrap: wrap;
  }

  .activities>mwc-button:not(:first-child) {
    flex-grow: 1;
  }

  .remote {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto auto;
      align-items: center;
      justify-content: center;
      text-align: center;
  }

  .xbox-buttons {
    display: grid;
    grid-template-columns: auto auto 10px auto auto auto auto;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .volume-controls {
      display: flex;
      justify-content: center;
  }

  .volume-controls>paper-slider {
    flex: 1;
  }
`,Ot={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let At=class extends it{setConfig(t){this._config=t}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _volume_entity(){return this._config&&this._config.volume_entity||""}get _show_warning(){return this._config&&this._config.show_warning||!1}get _show_error(){return this._config&&this._config.show_error||!1}get _tap_action(){return this._config&&this._config.tap_action||{action:"more-info"}}get _hold_action(){return this._config&&this._config.hold_action||{action:"none"}}get _double_tap_action(){return this._config&&this._config.double_tap_action||{action:"none"}}render(){if(!this.hass)return I``;const t=Object.keys(this.hass.states).filter(t=>"remote"===t.substr(0,t.indexOf("."))),e=Object.keys(this.hass.states).filter(t=>"media_player"===t.substr(0,t.indexOf(".")));return I`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ot.required.icon}></ha-icon>
            <div class="title">${Ot.required.name}</div>
          </div>
          <div class="secondary">${Ot.required.secondary}</div>
        </div>
        ${Ot.required.show?I`
              <div class="values">
                <paper-dropdown-menu
                  label="Harmony Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>I`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <div class="values">
                <paper-dropdown-menu
                  label="Volume Entity"
                  @value-changed=${this._valueChanged}
                  .configValue=${"volume_entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._volume_entity)}>
                    ${e.map(t=>I`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ot.actions.icon}></ha-icon>
            <div class="title">${Ot.actions.name}</div>
          </div>
          <div class="secondary">${Ot.actions.secondary}</div>
        </div>
        ${Ot.actions.show?I`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Ot.actions.options.tap.icon}></ha-icon>
                    <div class="title">${Ot.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${Ot.actions.options.tap.secondary}</div>
                </div>
                ${Ot.actions.options.tap.show?I`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Ot.actions.options.hold.icon}></ha-icon>
                    <div class="title">${Ot.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${Ot.actions.options.hold.secondary}</div>
                </div>
                ${Ot.actions.options.hold.show?I`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Ot.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${Ot.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${Ot.actions.options.double_tap.secondary}</div>
                </div>
                ${Ot.actions.options.double_tap.show?I`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ot.appearance.icon}></ha-icon>
            <div class="title">${Ot.appearance.name}</div>
          </div>
          <div class="secondary">${Ot.appearance.secondary}</div>
        </div>
        ${Ot.appearance.show?I`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-switch
                  aria-label=${"Toggle warning "+(this._show_warning?"off":"on")}
                  .checked=${!1!==this._show_warning}
                  .configValue=${"show_warning"}
                  @change=${this._valueChanged}
                  >Show Warning?</ha-switch
                >
                <ha-switch
                  aria-label=${"Toggle error "+(this._show_error?"off":"on")}
                  .checked=${!1!==this._show_error}
                  .configValue=${"show_error"}
                  @change=${this._valueChanged}
                  >Show Error?</ha-switch
                >
              </div>
            `:""}
      </div>
    `}_toggleAction(t){this._toggleThing(t,Ot.actions.options)}_toggleOption(t){this._toggleThing(t,Ot)}_toggleThing(t,e){const n=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=n,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Pt(this,"config-changed",{config:this._config}))}static get styles(){return et`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
      }
      ha-switch {
        padding-bottom: 8px;
      }
    `}};t([X()],At.prototype,"hass",void 0),t([X()],At.prototype,"_config",void 0),t([X()],At.prototype,"_toggle",void 0),At=t([Z("harmony-card-editor")],At);const Vt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Dt extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Vt?"100px":"50px",height:Vt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1});const n=t=>{if(this.cooldownStart)return;let e,n;this.held=!1,t.touches?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,n),this.held=!0},this.holdTime),this.cooldownStart=!0,window.setTimeout(()=>this.cooldownStart=!1,100)},i=n=>{this.cooldownEnd||["touchend","touchcancel"].includes(n.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Pt(t,"action",{action:"hold"}):e.hasDoubleTap?1===n.detail||"keyup"===n.type?this.dblClickTimeout=window.setTimeout(()=>{Pt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),Pt(t,"action",{action:"double_tap"})):Pt(t,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout(()=>this.cooldownEnd=!1,100))};t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i),t.addEventListener("keyup",t=>{if(13===t.keyCode)return i(t)});/iPhone OS 13_/.test(window.navigator.userAgent)||(t.addEventListener("mousedown",n,{passive:!0}),t.addEventListener("click",i))}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-harmony",Dt);const Bt=(t,e)=>{const n=(()=>{const t=document.body;if(t.querySelector("action-handler-harmony"))return t.querySelector("action-handler-harmony");const e=document.createElement("action-handler-harmony");return t.appendChild(e),e})();n&&n.bind(t,e)},jt=g((t={})=>e=>{Bt(e.committer.element,t)}),It={0:{command:"0",icon:"mdi:numeric-0-circle",hide:!1},1:{command:"1",icon:"mdi:numeric-1-circle",hide:!1},2:{command:"2",icon:"mdi:numeric-2-circle",hide:!1},3:{command:"3",icon:"mdi:numeric-3-circle",hide:!1},4:{command:"4",icon:"mdi:numeric-4-circle",hide:!1},5:{command:"5",icon:"mdi:numeric-5-circle",hide:!1},6:{command:"6",icon:"mdi:numeric-6-circle",hide:!1},7:{command:"7",icon:"mdi:numeric-7-circle",hide:!1},8:{command:"8",icon:"mdi:numeric-8-circle",hide:!1},9:{command:"9",icon:"mdi:numeric-9-circle",hide:!1},volume_down:{command:"VolumeDown",icon:"mdi:volume-medium",hide:!1},volume_up:{command:"VolumeUp",icon:"mdi:volume-high",hide:!1},volume_mute:{command:"Mute",icon:"mdi:volume-off",hide:!1},skip_back:{command:"SkipBack",icon:"mdi:skip-previous",hide:!1},play:{command:"Play",icon:"mdi:play",hide:!1},pause:{command:"Pause",icon:"mdi:pause",hide:!1},skip_forward:{command:"SkipForward",icon:"mdi:skip-next",hide:!1},dpad_up:{command:"DirectionUp",icon:"mdi:chevron-up-circle",hide:!1},dpad_down:{command:"DirectionDown",icon:"mdi:chevron-down-circle",hide:!1},dpad_left:{command:"DirectionLeft",icon:"mdi:chevron-left-circle",hide:!1},dpad_right:{command:"DirectionRight",icon:"mdi:chevron-right-circle",hide:!1},dpad_center:{command:"OK",icon:"mdi:checkbox-blank-circle",hide:!1},xbox:{command:"Xbox",icon:"mdi:microsoft-xbox",hide:!1},back:{command:"Back",icon:"mdi:undo-variant",hide:!1},a:{command:"A",icon:"mdi:alpha-a-circle",hide:!1,color:"#2d9f1c"},b:{command:"B",icon:"mdi:alpha-b-circle",hide:!1,color:"#e43308"},x:{command:"X",icon:"mdi:alpha-x-circle",hide:!1,color:"#003bbd"},y:{command:"Y",icon:"mdi:alpha-y-circle",hide:!1,color:"#f1c70f"}};var Rt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Ht={common:Rt},Ut={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Yt={common:Ut},qt={en:Object.freeze({__proto__:null,common:Rt,default:Ht}),nb:Object.freeze({__proto__:null,common:Ut,default:Yt})};function Lt(t,e="",n=""){const i=t.split(".")[0],o=t.split(".")[1],r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var s;try{s=qt[r][i][o]}catch(t){s=qt.en[i][o]}return void 0===s&&(s=qt.en[i][o]),""!==e&&""!==n&&(s=s.replace(e,n)),s}var zt=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===Ft}(t)}(t)};var Ft="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Wt(t,e){return!1!==e.clone&&e.isMergeableObject(t)?Gt((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function Jt(t,e,n){return t.concat(e).map((function(t){return Wt(t,n)}))}function Zt(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function Kt(t,e){try{return e in t}catch(t){return!1}}function Xt(t,e,n){var i={};return n.isMergeableObject(t)&&Zt(t).forEach((function(e){i[e]=Wt(t[e],n)})),Zt(e).forEach((function(o){(function(t,e){return Kt(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,o)||(Kt(t,o)&&n.isMergeableObject(e[o])?i[o]=function(t,e){if(!e.customMerge)return Gt;var n=e.customMerge(t);return"function"==typeof n?n:Gt}(o,n)(t[o],e[o],n):i[o]=Wt(e[o],n))})),i}function Gt(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||Jt,n.isMergeableObject=n.isMergeableObject||zt,n.cloneUnlessOtherwiseSpecified=Wt;var i=Array.isArray(e);return i===Array.isArray(t)?i?n.arrayMerge(t,e,n):Xt(t,e,n):Wt(e,n)}Gt.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return Gt(t,n,e)}),{})};var Qt=Gt;console.info(`%c  HARMONY-CARD \n%c  ${Lt("common.version")} 1    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let te=class extends it{static async getConfigElement(){return document.createElement("harmony-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t||t.show_error)throw new Error(Lt("common.invalid_configuration"));if(!t.entity||"remote"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the remote domain for a harmony hub.");t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:""},t)}preventBubbling(t){t.stopPropagation(),t.cancelBubble=!0}deviceCommand(t,e,n){var i,o;this.preventBubbling(t),null!=e&&(null===(i=this.hass)||void 0===i||i.callService("remote","send_command",{entity_id:null===(o=this._config)||void 0===o?void 0:o.entity,command:n,device:e}))}harmonyCommand(t,e){var n,i,o,r;this.preventBubbling(t),null==e||"off"==e||"turn_off"==e?null===(n=this.hass)||void 0===n||n.callService("remote","turn_off",{entity_id:null===(i=this._config)||void 0===i?void 0:i.entity}):null===(o=this.hass)||void 0===o||o.callService("remote","turn_on",{entity_id:null===(r=this._config)||void 0===r?void 0:r.entity,activity:e})}volumeCommand(t,e,n){var i,o,r;if(this.preventBubbling(t),null===(i=this._config)||void 0===i?void 0:i.volume_entity){var s={entity_id:null===(o=this._config)||void 0===o?void 0:o.volume_entity};null===(r=this.hass)||void 0===r||r.callService("media_player",e,Object.assign(s,n||{}))}}shouldUpdate(t){return!!t.has("config")||this.hasEntityChanged(this,t,"entity")}hasEntityChanged(t,e,n){if(t._config.entity){const i=e.get("hass");return i&&(i.states[t._config[n]],t.hass.states[t._config[n]]),!0}return!1}render(){if(!this._config||!this.hass)return I``;if(this._config.show_warning)return I`
        <ha-card>
          <div class="warning">${Lt("common.show_warning")}</div>
        </ha-card>
      `;var t=this.hass.states[this._config.entity],e=t.state,n=t.attributes.current_activity,i=this._config.activities.find(t=>t.name===n),o=null==i?void 0:i.device,r=this.computeButtonConfig(this._config,i);return I`
      <ha-card
        style=${this.computeStyles()}
        .header=${this._config.name}
        @action=${this._handleAction}
        .actionHandler=${jt({hasHold:Et(this._config.hold_action),hasDoubleClick:Et(this._config.double_tap_action)})}
        tabindex="0"
        aria-label=${"Harmony: "+this._config.entity}
      >
        <div class="card-content">
            <div class="activities">
                <mwc-button ?outlined="${"off"===e}" label="Off" @click="${t=>this.harmonyCommand(t,"turn_off")}" @touchstart="${t=>this.preventBubbling(t)}"></mwc-button>
                
                ${this._config.activities.map(t=>I`
                    <mwc-button ?outlined="${n===t.name}" label=${t.name} @click="${e=>this.harmonyCommand(e,t.name)}" @touchstart="${t=>this.preventBubbling(t)}"></mwc-button>
                `)}
            </div>

            ${this.renderVolumeControls(this.hass,this._config,r,i)}

            ${this.renderKeyPad(this._config,r,i,o)}

            <div class="play-pause">
                ${this.renderIconButton(r.skip_back,o)}
                ${this.renderIconButton(r.play,o)}
                ${this.renderIconButton(r.pause,o)}
                ${this.renderIconButton(r.skip_forward,o)}
            </div>

            <div class="remote">
                ${this.renderIconButton(r.dpad_left,o,{"grid-column":"1","grid-row":"2"})}
                ${this.renderIconButton(r.dpad_right,o,{"grid-column":"3","grid-row":"2"})}
                ${this.renderIconButton(r.dpad_up,o,{"grid-column":"2","grid-row":"1"})}
                ${this.renderIconButton(r.dpad_down,o,{"grid-column":"2","grid-row":"3"})}
                ${this.renderIconButton(r.dpad_center,o,{"grid-column":"2","grid-row":"2"})}        
            </div>        

            <div class="xbox-buttons">
                ${this.renderIconButton(r.xbox,o,{"grid-column":"1","grid-row":"2"})}
                ${this.renderIconButton(r.back,o,{"grid-column":"2","grid-row":"2"})}
                ${this.renderIconButton(r.a,o,{"grid-column":"4","grid-row":"2"})}
                ${this.renderIconButton(r.b,o,{"grid-column":"5","grid-row":"2"})}
                ${this.renderIconButton(r.x,o,{"grid-column":"6","grid-row":"2"})}        
                ${this.renderIconButton(r.y,o,{"grid-column":"7","grid-row":"2"})}        
            </div>
        </div>
      </ha-card>
    `}renderKeyPad(t,e,n,i){return(void 0===(null==n?void 0:n.hide_keyPad)||(null==n?void 0:n.hide_keyPad))&&(void 0===t.hide_keyPad||t.hide_keyPad)?I``:this.renderKeyPadButton(e,i)}renderKeyPadButton(t,e){return I`
        <div class="remote">
            ${this.renderIconButton(t[1],e,{"grid-column":"1","grid-row":"1"})}
            ${this.renderIconButton(t[2],e,{"grid-column":"2","grid-row":"1"})}
            ${this.renderIconButton(t[3],e,{"grid-column":"3","grid-row":"1"})}
            ${this.renderIconButton(t[4],e,{"grid-column":"1","grid-row":"2"})}
            ${this.renderIconButton(t[5],e,{"grid-column":"2","grid-row":"2"})}    
            ${this.renderIconButton(t[6],e,{"grid-column":"3","grid-row":"2"})}
            ${this.renderIconButton(t[7],e,{"grid-column":"1","grid-row":"3"})}    
            ${this.renderIconButton(t[8],e,{"grid-column":"2","grid-row":"3"})}
            ${this.renderIconButton(t[9],e,{"grid-column":"3","grid-row":"3"})}
            ${this.renderIconButton(t[0],e,{"grid-column":"2","grid-row":"4"})}
        </div> 
        `}renderIconButton(t,e,n){if(!0===t.hide)return I``;var i=Object.assign(n||{},{color:t.color});return I`
            <ha-icon-button 
                icon="${t.icon}" 
                style="${Tt(i)}"
                @click="${n=>this.deviceCommand(n,t.device||e,t.command||"")}" 
                @touchstart="${t=>this.preventBubbling(t)}">
            </ha-icon-button>
        `}renderVolumeControls(t,e,n,i){return(null==i?void 0:i.volume_entity)?this.renderMediaPlayerVolumeControls(t,null==i?void 0:i.volume_entity,n):(null==i?void 0:i.volume_device)?this.renderDeviceVolumeControls(null==i?void 0:i.volume_device,n):e.volume_entity?this.renderMediaPlayerVolumeControls(t,e.volume_entity,n):e.volume_device?this.renderDeviceVolumeControls(e.volume_device,n):I``}renderMediaPlayerVolumeControls(t,e,n){var i=t.states[e],o=i.attributes.volume_level,r=i.attributes.is_volume_muted,s=Object.assign({},{color:n.volume_down.color}),a=Object.assign({},{color:n.volume_up.color}),c=Object.assign({},{color:n.volume_mute.color});return I`
            <div class="volume-controls">
                <ha-icon-button style="${Tt(s)}" icon="${n.volume_down.icon}" @click="${t=>this.volumeCommand(t,"volume_down")}" @touchstart="${t=>this.preventBubbling(t)}"></ha-icon-button>
                <ha-icon-button style="${Tt(a)}" icon="${n.volume_up.icon}" @click="${t=>this.volumeCommand(t,"volume_up")}" @touchstart="${t=>this.preventBubbling(t)}"></ha-icon-button>
                <paper-slider           
                    @change=${t=>this.volumeCommand(t,"volume_set",{volume_level:t.target.value/100})}
                    @click=${t=>t.stopPropagation()}
                    @touchstart="${t=>this.preventBubbling(t)}"
                    ?disabled=${r}
                    min=0 max=100
                    value=${100*o}
                    dir=${"ltr"}
                    ignore-bar-touch pin>
                </paper-slider>
                
                <ha-icon-button style="${Tt(c)}" icon="${n.volume_mute.icon}" @click="${t=>this.volumeCommand(t,"volume_mute",{is_volume_muted:!0})}" @touchstart="${t=>this.preventBubbling(t)}"></ha-icon-button>
            </div>`}renderDeviceVolumeControls(t,e){return I`
            <div class="volume-controls">
                ${this.renderIconButton(e.volume_down,t)}
                ${this.renderIconButton(e.volume_up,t)}

                ${this.renderIconButton(e.volume_mute,t)}
            </div>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&kt(this,this.hass,this._config,t.detail.action)}computeStyles(){var t,e=(null===(t=this._config)||void 0===t?void 0:t.scale)||1;return Tt({"--mmp-unit":40*e+"px","--mdc-icon-size":24*e+"px"})}computeButtonConfig(t,e){let n=Qt(It,t.buttons||{});return e&&(n=Qt(n,e.buttons||{})),n}static get styles(){return[et`
            .warning {
                display: block;
                color: black;
                background-color: #fce588;
                padding: 8px;
            }
            
            div {
                font-size:16px;
            }`,Nt]}};t([X()],te.prototype,"hass",void 0),t([X()],te.prototype,"_config",void 0),te=t([Z("harmony-card")],te);export{te as HarmonyCard};
