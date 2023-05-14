import{cz as e,cA as i,cB as t,cC as a,cD as s,l as r,cE as o,s as n,cF as d,y as l,bc as c,bd as h,be as g,cG as u,bf as m,bg as v,cH as f,bJ as p,cI as _,cJ as C,cK as b,cL as $,cM as y,cN as w,o as M}from"./card-f444d6e4.js";import{L as P,A as S,i as k,w as x,a as L,p as I}from"./media-e46d51bc.js";import{u as O}from"./media-layout-8e0c974f.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=e(class extends i{constructor(){super(...arguments),this.key=t}render(e,i){return this.key=e,i}update(e,[i,t]){return i!==this.key&&(a(e),this.key=i),t}});const z="frigate-card-live-provider",B=(e,i,t)=>{if(!t?.camera_entity)return s(e,r("error.no_live_camera"),{context:t}),null;const a=i.states[t.camera_entity];return a?"unavailable"===a.state?(o(e,r("error.live_camera_unavailable"),"info",{icon:"mdi:connection",context:t}),null):a:(s(e,r("error.live_camera_not_found"),{context:t}),null)};let E=class extends n{constructor(){super(),this._inBackground=!1,this._lastMediaLoadedInfo=null,this._messageReceivedPostRender=!1,this._renderKey=0,this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this))}_intersectionHandler(e){this._inBackground=!e.some((e=>e.isIntersecting)),this._inBackground||this._messageReceivedPostRender||!this._lastMediaLoadedInfo||d(this._lastMediaLoadedInfo.source,this._lastMediaLoadedInfo.mediaLoadedInfo),this._messageReceivedPostRender&&!this._inBackground&&this.requestUpdate()}shouldUpdate(e){return!this._inBackground||!this._messageReceivedPostRender}connectedCallback(){this._intersectionObserver.observe(this),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._intersectionObserver.disconnect()}render(){if(!(this.hass&&this.liveConfig&&this.cameraManager&&this.view))return;const e=l`${V(this._renderKey,l`
        <frigate-card-live-carousel
          .hass=${this.hass}
          .view=${this.view}
          .liveConfig=${this.liveConfig}
          .inBackground=${this._inBackground}
          .conditionState=${this.conditionState}
          .liveOverrides=${this.liveOverrides}
          .cardWideConfig=${this.cardWideConfig}
          .cameraManager=${this.cameraManager}
          @frigate-card:message=${e=>{this._renderKey++,this._messageReceivedPostRender=!0,this._inBackground&&e.stopPropagation()}}
          @frigate-card:media:loaded=${e=>{this._lastMediaLoadedInfo={source:e.composedPath()[0],mediaLoadedInfo:e.detail},this._inBackground&&e.stopPropagation()}}
          @frigate-card:view:change=${e=>{this._inBackground&&e.stopPropagation()}}
        >
        </frigate-card-live-carousel>
      `)}`;return this._messageReceivedPostRender=!1,e}static get styles(){return c(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}")}};h([g({attribute:!1})],E.prototype,"conditionState",void 0),h([g({attribute:!1})],E.prototype,"hass",void 0),h([g({attribute:!1})],E.prototype,"view",void 0),h([g({attribute:!1})],E.prototype,"liveConfig",void 0),h([g({attribute:!1,hasChanged:u})],E.prototype,"liveOverrides",void 0),h([g({attribute:!1})],E.prototype,"cameraManager",void 0),h([g({attribute:!1})],E.prototype,"cardWideConfig",void 0),h([m()],E.prototype,"_inBackground",void 0),E=h([v("frigate-card-live")],E);let R=class extends n{constructor(){super(...arguments),this._cameraToSlide={},this._refMediaCarousel=f()}updated(e){super.updated(e),e.has("inBackground")&&this.updateComplete.then((async()=>{const e=this._refMediaCarousel.value;e&&(await e.updateComplete,this.inBackground?(e.autoPause(),e.autoMute()):(e.autoPlay(),e.autoUnmute()))}))}_getTransitionEffect(){return this.liveConfig?.transition_effect??p.live.transition_effect}_getSelectedCameraIndex(){const e=this.cameraManager?.getStore().getVisibleCameraIDs();return e&&this.view?Math.max(0,Array.from(e).indexOf(this.view.camera)):0}_getOptions(){return{draggable:this.liveConfig?.draggable,loop:!0}}_getPlugins(){const e=this.cameraManager?.getStore().getVisibleCameraIDs();return[...e&&e.size>1?[_({forceWheelAxis:"y"})]:[],P({...this.liveConfig?.lazy_load&&{lazyLoadCallback:(e,i)=>this._lazyloadOrUnloadSlide("load",e,i)},lazyUnloadCondition:this.liveConfig?.lazy_unload,lazyUnloadCallback:(e,i)=>this._lazyloadOrUnloadSlide("unload",e,i)}),S({playerSelector:z,...this.liveConfig?.auto_play&&{autoPlayCondition:this.liveConfig.auto_play},...this.liveConfig?.auto_pause&&{autoPauseCondition:this.liveConfig.auto_pause},...this.liveConfig?.auto_mute&&{autoMuteCondition:this.liveConfig.auto_mute},...this.liveConfig?.auto_unmute&&{autoUnmuteCondition:this.liveConfig.auto_unmute}})]}_getLazyLoadCount(){return!1===this.liveConfig?.lazy_load?null:0}_getSlides(){const e=this.cameraManager?.getStore().getVisibleCameras();if(!e)return[[],{}];const i=[],t={};for(const[a,s]of e){const e=this.view?.context?.live?.overrides?.get(a)??a,r=a===e?s:this.cameraManager?.getStore().getCameraConfig(e),o=r?this._renderLive(e,r,i.length):null;o&&(t[a]=i.length,i.push(o))}return[i,t]}_setViewHandler(e){const i=this.cameraManager?.getStore().getVisibleCameras();i&&e.detail.index!==this._getSelectedCameraIndex()&&this._setViewCameraID(Array.from(i.keys())[e.detail.index])}_setViewCameraID(e){e&&this.view?.evolve({camera:e,query:null,queryResults:null}).mergeInContext({thumbnails:{fetch:!1}}).dispatchChangeEvent(this)}_lazyloadOrUnloadSlide(e,i,t){t instanceof HTMLSlotElement&&(t=t.assignedElements({flatten:!0})[0]);const a=t?.querySelector(z);a&&(a.disabled="load"!==e)}_renderLive(e,i,t){if(!this.liveConfig||!this.hass||!this.cameraManager)return;const a={...this.conditionState,camera:e},s=C(this.liveConfig,this.liveOverrides,a),r=this.cameraManager.getCameraMetadata(this.hass,e);return l`
      <div class="embla__slide">
        <frigate-card-live-provider
          ?disabled=${this.liveConfig.lazy_load}
          .cameraConfig=${i}
          .cameraEndpoints=${k([this.cameraManager,e],(()=>this.cameraManager?.getCameraEndpoints(e)??void 0))}
          .label=${r?.title??""}
          .liveConfig=${s}
          .hass=${this.hass}
          .cardWideConfig=${this.cardWideConfig}
          @frigate-card:media:loaded=${e=>{x(t,e)}}
          @frigate-card:media:unloaded=${e=>{L(t,e)}}
        >
        </frigate-card-live-provider>
      </div>
    `}_getCameraIDsOfNeighbors(){const e=this.cameraManager?.getStore().getVisibleCameras();if(!e||!this.view||!this.hass)return[null,null];const i=Array.from(e.keys()),t=i.indexOf(this.view.camera);return t<0||e.size<=1?[null,null]:[i[t>0?t-1:e.size-1],i[t+1<e.size?t+1:0]]}render(){if(!(this.liveConfig&&this.view&&this.hass&&this.cameraManager))return;const[e,i]=this._getSlides();if(this._cameraToSlide=i,!e.length)return;const t=C(this.liveConfig,this.liveOverrides,this.conditionState),[a,s]=this._getCameraIDsOfNeighbors(),o=e=>this.view?.context?.live?.overrides?.get(e)??e,n=a?this.cameraManager.getCameraMetadata(this.hass,o(a)):null,d=this.cameraManager.getCameraMetadata(this.hass,o(this.view.camera)),c=s?this.cameraManager.getCameraMetadata(this.hass,o(s)):null;return l`
      <frigate-card-media-carousel
        ${b(this._refMediaCarousel)}
        .carouselOptions=${k([this.cameraManager,this.liveConfig],this._getOptions.bind(this))}
        .carouselPlugins=${k([this.cameraManager,this.liveConfig],this._getPlugins.bind(this))}
        .label="${d?`${r("common.live")}: ${d.title}`:""}"
        .logo="${d?.engineLogo}"
        .titlePopupConfig=${t.controls.title}
        .selected=${this._getSelectedCameraIndex()}
        transitionEffect=${this._getTransitionEffect()}
        @frigate-card:media-carousel:select=${this._setViewHandler.bind(this)}
        @frigate-card:carousel:settle=${()=>{$(this,{thumbnails:{fetch:!0}})}}
      >
        <frigate-card-next-previous-control
          slot="previous"
          .hass=${this.hass}
          .direction=${"previous"}
          .controlConfig=${t.controls.next_previous}
          .label=${n?.title??""}
          .icon=${n?.icon}
          ?disabled=${null===a}
          @click=${e=>{this._setViewCameraID(a),y(e)}}
        >
        </frigate-card-next-previous-control>
        ${e}
        <frigate-card-next-previous-control
          slot="next"
          .hass=${this.hass}
          .direction=${"next"}
          .controlConfig=${t.controls.next_previous}
          .label=${c?.title??""}
          .icon=${c?.icon}
          ?disabled=${null===s}
          @click=${e=>{this._setViewCameraID(s),y(e)}}
        >
        </frigate-card-next-previous-control>
      </frigate-card-media-carousel>
    `}static get styles(){return c(".embla__slide {\n  height: 100%;\n  flex: 0 0 100%;\n}")}};h([g({attribute:!1})],R.prototype,"hass",void 0),h([g({attribute:!1})],R.prototype,"view",void 0),h([g({attribute:!1})],R.prototype,"liveConfig",void 0),h([g({attribute:!1,hasChanged:u})],R.prototype,"liveOverrides",void 0),h([g({attribute:!1})],R.prototype,"inBackground",void 0),h([g({attribute:!1})],R.prototype,"conditionState",void 0),h([g({attribute:!1})],R.prototype,"cardWideConfig",void 0),h([g({attribute:!1})],R.prototype,"cameraManager",void 0),R=h([v("frigate-card-live-carousel")],R);let j=class extends n{constructor(){super(...arguments),this.disabled=!1,this.label="",this._isVideoMediaLoaded=!1,this._refProvider=f(),this._importPromises=[]}async play(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await I(this,this._refProvider.value)}async pause(){await this.updateComplete,await(this._refProvider.value?.updateComplete),this._refProvider.value?.pause()}async mute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),this._refProvider.value?.mute()}async unmute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),this._refProvider.value?.unmute()}isMuted(){return this._refProvider.value?.isMuted()??!0}async seek(e){await this.updateComplete,await(this._refProvider.value?.updateComplete),this._refProvider.value?.seek(e)}_getResolvedProvider(){return"auto"===this.cameraConfig?.live_provider?this.cameraConfig?.webrtc_card?.entity||this.cameraConfig?.webrtc_card?.url?"webrtc-card":this.cameraConfig?.camera_entity?"low"===this.cardWideConfig?.performance?.profile?"image":"ha":this.cameraConfig?.frigate.camera_name?"jsmpeg":p.cameras.live_provider:this.cameraConfig?.live_provider||"image"}_shouldShowImageDuringLoading(){return!!this.cameraConfig?.camera_entity&&!!this.hass&&!!this.liveConfig?.show_image_during_load}disconnectedCallback(){this._isVideoMediaLoaded=!1}_videoMediaShowHandler(){this._isVideoMediaLoaded=!0}willUpdate(e){if(e.has("disabled")&&this.disabled&&(this._isVideoMediaLoaded=!1,w(this)),e.has("liveConfig")&&(O(this,this.liveConfig?.layout),this.liveConfig?.show_image_during_load&&this._importPromises.push(import("./live-image-bf94d021.js"))),e.has("cameraConfig")){const e=this._getResolvedProvider();"jsmpeg"===e?this._importPromises.push(import("./live-jsmpeg-13512353.js")):"ha"===e?this._importPromises.push(import("./live-ha-dacf2da4.js")):"webrtc-card"===e?this._importPromises.push(import("./live-webrtc-card-91042eec.js")):"image"===e?this._importPromises.push(import("./live-image-bf94d021.js")):"go2rtc"===e&&this._importPromises.push(import("./live-go2rtc-c50a1f44.js"))}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await Promise.all(this._importPromises),this._importPromises=[],e}render(){if(this.disabled||!this.hass||!this.liveConfig||!this.cameraConfig)return;this.title=this.label,this.ariaLabel=this.label;const e=this._getResolvedProvider(),i=!this._isVideoMediaLoaded&&this._shouldShowImageDuringLoading(),t={hidden:i};return l`
      ${i||"image"===e?l`<frigate-card-live-image
            ${b(this._refProvider)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            @frigate-card:media:loaded=${i=>{"image"===e?this._videoMediaShowHandler():i.stopPropagation()}}
          >
          </frigate-card-live-image>`:l``}
      ${"ha"===e?l` <frigate-card-live-ha
            ${b(this._refProvider)}
            class=${M(t)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-ha>`:"go2rtc"===e?l`<frigate-card-live-go2rtc
              ${b(this._refProvider)}
              class=${M(t)}
              .hass=${this.hass}
              .cameraConfig=${this.cameraConfig}
              .cameraEndpoints=${this.cameraEndpoints}
              @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
            >
            </frigate-card-live-webrtc-card>`:"webrtc-card"===e?l`<frigate-card-live-webrtc-card
            ${b(this._refProvider)}
            class=${M(t)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            .cameraEndpoints=${this.cameraEndpoints}
            .cardWideConfig=${this.cardWideConfig}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-webrtc-card>`:"jsmpeg"===e?l` <frigate-card-live-jsmpeg
            ${b(this._refProvider)}
            class=${M(t)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            .cameraEndpoints=${this.cameraEndpoints}
            .cardWideConfig=${this.cardWideConfig}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-jsmpeg>`:l``}
    `}static get styles(){return c(".hidden {\n  display: none;\n}")}};h([g({attribute:!1})],j.prototype,"hass",void 0),h([g({attribute:!1})],j.prototype,"cameraConfig",void 0),h([g({attribute:!1})],j.prototype,"cameraEndpoints",void 0),h([g({attribute:!1})],j.prototype,"liveConfig",void 0),h([g({attribute:!0,type:Boolean})],j.prototype,"disabled",void 0),h([g({attribute:!1})],j.prototype,"label",void 0),h([g({attribute:!1})],j.prototype,"cardWideConfig",void 0),h([m()],j.prototype,"_isVideoMediaLoaded",void 0),j=h([v(z)],j);export{E as FrigateCardLive,R as FrigateCardLiveCarousel,j as FrigateCardLiveProvider,B as getStateObjOrDispatchError};
