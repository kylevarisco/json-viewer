!function(){function t(t,i,e,s){var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,e,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r}function i(t,i,e,s){return new(e||(e=Promise))((function(n,o){function r(t){try{h(s.next(t))}catch(t){o(t)}}function l(t){try{h(s.throw(t))}catch(t){o(t)}}function h(t){var i;t.done?n(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(r,l)}h((s=s.apply(t,i||[])).next())}))}
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class r{constructor(t,i,e){if(this._$cssResult$=!0,e!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}const l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(i)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var h;const c=window,a=c.trustedTypes,u=a?a.emptyScript:"",d=c.reactiveElementPolyfillSupport,v={toAttribute(t,i){switch(i){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},f=(t,i)=>i!==t&&(i==i||t==t),p={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=p){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(l(t))}else void 0!==t&&i.push(l(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{s?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=p){var s;const n=this.constructor._$Ep(t,e);if(void 0!==n&&!0===e.reflect){const o=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:v).toAttribute(i,e.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:v;this._$El=n,this[n]=o.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var g;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:b}),(null!==(h=c.reactiveElementVersions)&&void 0!==h?h:c.reactiveElementVersions=[]).push("1.4.1");const y=window,m=y.trustedTypes,$=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,S="?"+w,A=`<${S}>`,k=document,O=(t="")=>k.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,E=/>/g,z=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,N=/"/g,M=/^(?:script|style|textarea|title)$/i,R=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),T=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),L=new WeakMap,I=k.createTreeWalker(k,129,null,!1),J=(t,i)=>{const e=t.length-1,s=[];let n,o=2===i?"<svg>":"",r=_;for(let i=0;i<e;i++){const e=t[i];let l,h,c=-1,a=0;for(;a<e.length&&(r.lastIndex=a,h=r.exec(e),null!==h);)a=r.lastIndex,r===_?"!--"===h[1]?r=x:void 0!==h[1]?r=E:void 0!==h[2]?(M.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=z):void 0!==h[3]&&(r=z):r===z?">"===h[0]?(r=null!=n?n:_,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?z:'"'===h[3]?N:U):r===N||r===U?r=z:r===x||r===E?r=_:(r=z,n=void 0);const u=r===z&&t[i+1].startsWith("/>")?" ":"";o+=r===_?e+A:c>=0?(s.push(l),e.slice(0,c)+"$lit$"+e.slice(c)+w+u):e+w+(-2===c?(s.push(void 0),i):u)}const l=o+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(l):l,s]};class D{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,c]=J(t,i);if(this.el=D.createElement(h,e),I.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=I.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(w)){const e=c[o++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(w),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?Z:"?"===i[1]?F:"@"===i[1]?V:W})}else l.push({type:6,index:n})}for(const i of t)s.removeAttribute(i)}if(M.test(s.tagName)){const t=s.textContent.split(w),i=t.length-1;if(i>0){s.textContent=m?m.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],O()),I.nextNode(),l.push({type:2,index:++n});s.append(t[i],O())}}}else if(8===s.nodeType)if(s.data===S)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)l.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,i){const e=k.createElement("template");return e.innerHTML=t,e}}function B(t,i,e=t,s){var n,o,r,l;if(i===T)return i;let h=void 0!==s?null===(n=e._$Cl)||void 0===n?void 0:n[s]:e._$Cu;const c=C(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==c&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===c?h=void 0:(h=new c(t),h._$AT(t,e,s)),void 0!==s?(null!==(r=(l=e)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=h:e._$Cu=h),void 0!==h&&(i=B(t,h._$AS(t,i.values),h,s)),i}class H{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:e},parts:s}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:k).importNode(e,!0);I.currentNode=n;let o=I.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new K(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new G(o,this,t)),this.v.push(i),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=I.nextNode(),r++)}return n}m(t){let i=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class K{constructor(t,i,e,s){var n;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$C_=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=B(this,t,i),C(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==P&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(k.createTextNode(t)),this._$AH=t}T(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(e);else{const t=new H(n,this),i=t.p(this.options);t.m(e),this.k(i),this._$AH=t}}_$AC(t){let i=L.get(t.strings);return void 0===i&&L.set(t.strings,i=new D(t)),i}O(t){j(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const n of t)s===i.length?i.push(e=new K(this.S(O()),this.S(O()),this,this.options)):e=i[s],e._$AI(n),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class W{constructor(t,i,e,s,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const n=this.strings;let o=!1;if(void 0===n)t=B(this,t,i,0),o=!C(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=B(this,s[e+r],i,r),l===T&&(l=this._$AH[r]),o||(o=!C(l)||l!==this._$AH[r]),l===P?t=P:t!==P&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.P(t)}P(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends W{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===P?void 0:t}}const q=m?m.emptyScript:"";class F extends W{constructor(){super(...arguments),this.type=4}P(t){t&&t!==P?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class V extends W{constructor(t,i,e,s,n){super(t,i,e,s,n),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=B(this,t,i,0))&&void 0!==e?e:P)===T)return;const s=this._$AH,n=t===P&&s!==P||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==P&&(s===P||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const Q=y.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var X,Y;null==Q||Q(D,K),(null!==(g=y.litHtmlVersions)&&void 0!==g?g:y.litHtmlVersions=[]).push("2.3.1");class tt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,n;const o=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new K(i.insertBefore(O(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}tt.finalized=!0,tt._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:tt});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:tt}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function st(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):et(t,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ot=1;class rt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const lt=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends rt{constructor(t){var i;if(super(t),t.type!==ot||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var e,s;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(e=this.st)||void 0===e?void 0:e.has(t))&&this.nt.add(t);return this.render(i)}const n=t.element.classList;this.nt.forEach((t=>{t in i||(n.remove(t),this.nt.delete(t))}));for(const t in i){const e=!!i[t];e===this.nt.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(e?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return T}});function ht(t){return null===t?"null":Array.isArray(t)?"array":t.constructor.name.toLowerCase()}function ct(t){return t!==Object(t)}function at(t){return!!t&&!!t.nodeType}function ut(t){return ct(t)||at(t)}function*dt(t){const i=[[t,"",[]]];for(;i.length;){const[t,e,s]=i.shift();if(e&&(yield[t,e,s]),!ct(t))for(const[n,o]of Object.entries(t))i.push([o,`${e}${e?".":""}${n}`,[...s,e]])}}const vt={fromAttribute:t=>t&&t.trim()?JSON.parse(t):void 0,toAttribute:t=>JSON.stringify(t)},ft=t=>void 0!==t,pt=(t,i)=>i instanceof RegExp?!!t.match(i):function(t,i){const e=t.split("."),s=i.split("."),n=t=>"*"===t,o=t=>"**"===t;let r=0,l=0;for(;r<e.length;){const t=s[l];if(t===e[r]||n(t))l++,r++;else{if(!o(t))return!1;l++,r=e.length-(s.length-l)}}return l===s.length}(t,i),bt=(t,i)=>(e,s)=>{const n={};if(t)for(const[,e,o]of dt(s.data))pt(e,t)&&(n[e]=i,o.forEach((t=>n[t]=i)));return{expanded:n}},gt=t=>()=>({highlight:t}),yt=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new r(e,t,n)})`:host{--background-color:#2a2f3a;--color:#f8f8f2;--string-color:#a3eea0;--number-color:#d19a66;--boolean-color:#4ba7ef;--null-color:#df9cf3;--property-color:#6fb3d2;--preview-color:rgba(222,175,143,0.9);--highlight-color:#7b0000;--font-family:monaco,Consolas,'Lucida Console',monospace;--font-size:1rem;--indent-size:1.5em;--indentguide-size:1px;--indentguide-style:solid;--indentguide-color:#333;--indentguide-color-active:#666;--indentguide:var(--indentguide-size) var(--indentguide-style) var(--indentguide-color);--indentguide-active:var(--indentguide-size) var(--indentguide-style) var(--indentguide-color-active);display:block;background-color:var(--background-color);color:var(--color);font-family:var(--font-family);font-size:var(--font-size)}.preview{color:var(--preview-color)}.null{color:var(--null-color)}.key{color:var(--property-color);display:inline-block}.collapsable:before{display:inline-block;color:var(--color);font-size:.8em;content:'▶';line-height:1em;width:1em;height:1em;text-align:center;transition:transform 195ms ease-out;transform:rotate(90deg);color:var(--property-color)}.collapsable.collapsableCollapsed:before{transform:rotate(0)}.collapsable{cursor:pointer;user-select:none}.string{color:var(--string-color)}.number{color:var(--number-color)}.boolean{color:var(--boolean-color)}ul{padding:0;clear:both}ul,li{list-style:none;position:relative}li ul>li{position:relative;margin-left:var(--indent-size);padding-left:0}ul ul:before{content:'';border-left:var(--indentguide);position:absolute;left:calc(0.5em - var(--indentguide-size));top:.3em;bottom:.3em}ul ul:hover:before{border-left:var(--indentguide-active)}mark{background-color:var(--highlight-color)}`;class mt extends tt{constructor(){super(...arguments),this.state={expanded:{},filtered:{},highlight:null},this.handlePropertyClick=t=>i=>{i.preventDefault(),this.setState(((t,i)=>e=>({expanded:Object.assign(Object.assign({},e.expanded),{[t]:ft(i)?!!i:!e.expanded[t]})}))(t))}}setState(t){return i(this,void 0,void 0,(function*(){const i=this.state;this.state=Object.assign(Object.assign({},i),t(i,this))}))}connectedCallback(){this.hasAttribute("data")||ft(this.data)||this.setAttribute("data",this.innerText),super.connectedCallback()}expand(t){this.setState(bt(t,!0))}expandAll(){this.setState(bt("**",!0))}collapseAll(){this.setState(bt("**",!1))}collapse(t){this.setState(bt(t,!1))}*search(t){for(const[i,e]of dt(this.data))ut(i)&&(String(i).toUpperCase().includes(t.toUpperCase())||String(e).toUpperCase().includes(t.toUpperCase()))&&(this.expand(e),this.updateComplete.then((()=>{const t=this.shadowRoot.querySelector(`[data-path="${e}"]`);t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),t.focus()})),this.setState(gt(e)),yield{value:i,path:e});this.setState(gt(null))}filter(t){var i;this.setState((i=t,(t,e)=>{const s={};if(i)for(const[,t,n]of dt(e.data))pt(t,i)?(s[t]=!1,n.forEach((t=>s[t]=!1))):s[t]=!0;return{filtered:s}}))}resetFilter(){this.setState((()=>({filtered:{}})))}renderObject(t,i){return R`<ul part="object">${Object.keys(t).map((e=>{const s=t[e],n=i?`${i}.${e}`:e,o=ut(s);return R`<li part="property" data-path="${n}" .hidden="${this.state.filtered[n]}"><span part="key" class="${lt({key:e,collapsable:!o,collapsableCollapsed:!this.state.expanded[n]})}" @click="${o?null:this.handlePropertyClick(n)}">${e}: </span>${this.renderNode(s,n)}</li>`}))}</ul>`}renderNode(t,i=""){const e=ut(t);return!i||this.state.expanded[i]||e?e?this.renderPrimitive(t,i):this.renderObject(t,i):this.renderNodePreview(t)}renderNodePreview(t){return R`<span part="preview" class="preview">${function(t,{nodeCount:i=3,maxLength:e=15}={}){const s=Array.isArray(t),n=Object.keys(t),o=n.slice(0,i),r=[],l=t=>{switch(ht(t)){case"object":return 0===Object.keys(t).length?"{ }":"{ ... }";case"array":return 0===t.length?"[ ]":"[ ... ]";case"string":return`"${t.substring(0,e)}${t.length>e?"...":""}"`;default:return String(t)}},h=[];for(const i of o){const e=[],n=t[i];s||e.push(`${i}: `),e.push(l(n)),h.push(e.join(""))}n.length>i&&h.push("..."),r.push(h.join(", "));const c=r.join("");return s?`[ ${c} ]`:`{ ${c} }`}(t)}</span>`}renderPrimitive(t,i){const e=this.state.highlight,s=ht(t),n=at(t)?t:R`<span part="primitive primitive-${s}" tabindex="0" class="${ht(t)}">${JSON.stringify(t)}</span>`;return i===e?R`<mark part="highlight">${n}</mark>`:n}render(){const t=this.data;return ft(t)?this.renderNode(t):null}}mt.styles=[yt],t([st({converter:vt,type:Object})],mt.prototype,"data",void 0),t([function(t){return st({...t,state:!0})}()],mt.prototype,"state",void 0),customElements.define("json-viewer",mt)}();
//# sourceMappingURL=json-viewer.bundle.js.map
