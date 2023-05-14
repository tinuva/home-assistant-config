import{cD as e,y as t,d9 as i,bc as o,da as r,bd as s,bg as n}from"./card-f444d6e4.js";import{h as a,M as d}from"./media-e46d51bc.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=({finisher:e,descriptor:t})=>(i,o)=>{var r;if(void 0===o){const o=null!==(r=i.originalKey)&&void 0!==r?r:i.key,s=null!=t?{kind:"method",placement:"prototype",key:o,descriptor:t(i.key)}:{...i,key:o};return null!=e&&(s.finisher=function(t){e(t,o)}),s}{const r=i.constructor;void 0!==t&&Object.defineProperty(i,o,t(o)),null==e||e(r,o)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function u(e,t){return l({descriptor:i=>{const o={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[t]&&(this[t]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==o?o:null),this[t]}}return o}})}var h="img, video {\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n}";customElements.whenDefined("ha-hls-player").then((()=>{let l=class extends(customElements.get("ha-hls-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(e){this._video&&(a(this._video),this._video.currentTime=e)}render(){if(this._error){if(this._errorIsFatal)return e(this,this._error);console.error(this._error)}return t`
        <video
          id="video"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{a(this._video,d)}}
          @loadeddata=${e=>{i(this,e)}}
        ></video>
      `}static get styles(){return[super.styles,o(h),r`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};s([u("#video")],l.prototype,"_video",void 0),l=s([n("frigate-card-ha-hls-player")],l)}));export{h as c,u as i};
