import{s as e,d0 as i,d1 as t,d2 as s,y as a,bc as r,bd as o,be as d,bg as l,cH as n,bJ as h,cI as u,cE as c,l as v,cK as g,cM as f,cG as w,bZ as p,c_ as y,c$ as m,d5 as C,cc as _,cd as b,d9 as $}from"./card-f444d6e4.js";import{L as M,A as R,i as x,w as P,p as q,h as V,M as S}from"./media-e46d51bc.js";import"./ha-hls-player-9d847d43.js";import{u as T}from"./media-layout-8e0c974f.js";import{a as I}from"./media-b0eb3f2a.js";let k=class extends e{render(){if(this.hass&&this.view&&this.viewerConfig&&this.cameraManager&&this.cardWideConfig){if(!this.view.queryResults?.hasResults()){const e=this.view.getDefaultMediaType();if(!e)return;return"recordings"===e?i(this,this.hass,this.cameraManager,this.cardWideConfig,this.view,{targetView:"recording",select:"latest"}):t(this,this.hass,this.cameraManager,this.cardWideConfig,this.view,{targetView:"media",mediaType:e,select:"latest"}),s({cardWideConfig:this.cardWideConfig})}return a`
      <frigate-card-viewer-carousel
        .hass=${this.hass}
        .view=${this.view}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .cardWideConfig=${this.cardWideConfig}
      >
      </frigate-card-viewer-carousel>
    `}}static get styles(){return r(":host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nfrigate-card-viewer-carousel {\n  flex: 1;\n  min-height: 0;\n}")}};o([d({attribute:!1})],k.prototype,"hass",void 0),o([d({attribute:!1})],k.prototype,"view",void 0),o([d({attribute:!1})],k.prototype,"viewerConfig",void 0),o([d({attribute:!1})],k.prototype,"resolvedMediaCache",void 0),o([d({attribute:!1})],k.prototype,"cameraManager",void 0),o([d({attribute:!1})],k.prototype,"cardWideConfig",void 0),k=o([l("frigate-card-viewer")],k);const W="frigate-card-viewer-provider";let F=class extends e{constructor(){super(...arguments),this._refMediaCarousel=n()}updated(e){if(super.updated(e),e.has("view")){const i=e.get("view");this.view?.context?.mediaViewer!==i?.context?.mediaViewer&&this._seekHandler()}}_getTransitionEffect(){return this.viewerConfig?.transition_effect??h.media_viewer.transition_effect}_getPlayer(e){return e||(e=this._refMediaCarousel.value?.frigateCardCarousel()?.getCarouselSelected()?.element),e?.querySelector(W)??null}_getPlugins(){return[...this.view?.queryResults?.getResultsCount()?[u({forceWheelAxis:"y"})]:[],M({...this.viewerConfig?.lazy_load&&{lazyLoadCallback:(e,i)=>this._lazyloadSlide(i)}}),R({playerSelector:W,...this.viewerConfig?.auto_play&&{autoPlayCondition:this.viewerConfig.auto_play},...this.viewerConfig?.auto_pause&&{autoPauseCondition:this.viewerConfig.auto_pause},...this.viewerConfig?.auto_mute&&{autoMuteCondition:this.viewerConfig.auto_mute},...this.viewerConfig?.auto_unmute&&{autoUnmuteCondition:this.viewerConfig.auto_unmute}})]}_getMediaNeighbors(){const e=this.view?.queryResults?.getSelectedIndex()??null,i=this.view?.queryResults?.getResultsCount()??0;if(!this.view||!this.view.queryResults||null===e)return[null,null];return[e>0?this.view.queryResults.getResult(e-1):null,e+1<i?this.view.queryResults.getResult(e+1):null]}_setViewHandler(e){this._setViewSelectedIndex(e.detail.index)}_setViewSelectedIndex(e){if(!this.view?.queryResults)return;const i=this.view.queryResults.getSelectedIndex();if(null===i||i===e)return;const t=this.view?.queryResults?.clone().selectResult(e);if(!t)return;const s=t.getSelectedResult()?.getCameraID();this.view?.evolve({queryResults:t,...s&&{camera:s}}).dispatchChangeEvent(this)}_lazyloadSlide(e){e instanceof HTMLSlotElement&&(e=e.assignedElements({flatten:!0})[0]);const i=e?.querySelector("frigate-card-viewer-provider");i&&(i.disabled=!1)}_getSlides(){if(!this.view||!this.view.queryResults)return[];const e=[];for(let i=0;i<this.view.queryResults.getResultsCount();++i){const t=this.view.queryResults.getResult(i);if(t){const s=this._renderMediaItem(t,i);s&&(e[i]=s)}}return e}willUpdate(e){e.has("viewerConfig")&&T(this,this.viewerConfig?.layout)}render(){const e=this.view?.queryResults?.getResultsCount()??0;if(!e)return c(this,v("common.no_media"),"info",{icon:"mdi:multimedia"});const i=this.view?.queryResults?.getSelectedResult()??this.view?.queryResults?.getResult(e-1);if(!(this.hass&&this.cameraManager&&i&&this.view&&this.view.queryResults))return;const[t,s]=this._getMediaNeighbors(),r=e=>{const i=this.view?.queryResults?.getSelectedIndex()??null;if(!this.view||!this.view?.queryResults||null===i)return;const t="previous"===e?i-1:i+1;t>=0&&t<this.view.queryResults.getResultsCount()&&this._setViewSelectedIndex(t)},o=this.cameraManager.getCameraMetadata(this.hass,i.getCameraID());return a` <frigate-card-media-carousel
      ${g(this._refMediaCarousel)}
      .carouselOptions=${x([this.viewerConfig],(()=>({draggable:this.viewerConfig?.draggable??!0})))}
      .carouselPlugins=${x([this.viewerConfig,this.view.queryResults.getResults()],this._getPlugins.bind(this))}
      .label=${i.getTitle()??void 0}
      .logo=${o?.engineLogo}
      .titlePopupConfig=${this.viewerConfig?.controls.title}
      .selected=${this.view?.queryResults?.getSelectedIndex()??0}
      transitionEffect=${this._getTransitionEffect()}
      @frigate-card:media-carousel:select=${this._setViewHandler.bind(this)}
      @frigate-card:media:loaded=${this._seekHandler.bind(this)}
    >
      <frigate-card-next-previous-control
        slot="previous"
        .hass=${this.hass}
        .direction=${"previous"}
        .controlConfig=${this.viewerConfig?.controls.next_previous}
        .thumbnail=${t?.getThumbnail()??void 0}
        .label=${t?.getTitle()??""}
        ?disabled=${!t}
        @click=${e=>{r("previous"),f(e)}}
      ></frigate-card-next-previous-control>
      ${x(this.view?.queryResults?.getResults(),(()=>this._getSlides()))}
      <frigate-card-next-previous-control
        slot="next"
        .hass=${this.hass}
        .direction=${"next"}
        .controlConfig=${this.viewerConfig?.controls.next_previous}
        .thumbnail=${s?.getThumbnail()??void 0}
        .label=${s?.getTitle()??""}
        ?disabled=${!s}
        @click=${e=>{r("next"),f(e)}}
      ></frigate-card-next-previous-control>
    </frigate-card-media-carousel>`}async _seekHandler(){const e=this.view?.context?.mediaViewer?.seek,i=this.view?.queryResults?.getSelectedResult();if(!this.hass||!i||!e)return;const t=await(this.cameraManager?.getMediaSeekTime(this.hass,i,e))??null,s=this._getPlayer();s&&null!==t&&s.seek(t)}_renderMediaItem(e,i){return this.hass&&this.view&&this.viewerConfig?a` <div class="embla__slide">
      <frigate-card-viewer-provider
        .hass=${this.hass}
        .view=${this.view}
        .media=${e}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .disabled=${this.viewerConfig.lazy_load}
        .cardWideConfig=${this.cardWideConfig}
        @frigate-card:media:loaded=${e=>{P(i,e)}}
      ></frigate-card-viewer-provider>
    </div>`:null}static get styles(){return r(".embla__slide {\n  height: 100%;\n  flex: 0 0 100%;\n}")}};o([d({attribute:!1})],F.prototype,"hass",void 0),o([d({attribute:!1})],F.prototype,"view",void 0),o([d({attribute:!1,hasChanged:w})],F.prototype,"viewerConfig",void 0),o([d({attribute:!1})],F.prototype,"resolvedMediaCache",void 0),o([d({attribute:!1})],F.prototype,"cardWideConfig",void 0),o([d({attribute:!1})],F.prototype,"cameraManager",void 0),F=o([l("frigate-card-viewer-carousel")],F);let E=class extends e{constructor(){super(...arguments),this.disabled=!1,this._refFrigateCardMediaPlayer=n(),this._refVideoProvider=n()}async play(){await q(this,this._refFrigateCardMediaPlayer.value??this._refVideoProvider.value)}async pause(){(this._refFrigateCardMediaPlayer.value||this._refVideoProvider.value)?.pause()}async mute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!0)}async unmute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!1)}isMuted(){return this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.isMuted()??!0:!this._refVideoProvider.value||this._refVideoProvider.value.muted}async seek(e){if(this._refFrigateCardMediaPlayer.value)return this._refFrigateCardMediaPlayer.value.seek(e);this._refVideoProvider.value&&(V(this._refVideoProvider.value),this._refVideoProvider.value.currentTime=e)}async _dispatchRelatedClipView(){if(!(this.hass&&this.view&&this.cameraManager&&this.media&&p.isEvent(this.media)&&y.areEventQueries(this.view.query)))return;const e=this.view.query.clone();e.convertToClipsQueries();const i=e.getQueries();if(!i)return;let t;try{t=await this.cameraManager.executeMediaQueries(this.hass,i)}catch(e){return void m(e)}if(!t)return;const s=new C(t);s.selectResultIfFound((e=>e.getID()===this.media?.getID())),s.hasSelectedResult()&&this.view.evolve({view:"media",query:e,queryResults:s}).dispatchChangeEvent(this)}willUpdate(e){const i=this.media?this.media.getContentID():null;!((e.has("disabled")||e.has("media")||e.has("viewerConfig")||e.has("resolvedMediaCache")||e.has("hass"))&&this.hass&&i)||this.resolvedMediaCache?.has(i)||this.viewerConfig?.lazy_load&&this.disabled||_(this.hass,i,this.resolvedMediaCache).then((()=>{this.requestUpdate()}))}render(){if(this.disabled||!this.media||!this.hass||!this.view||!this.viewerConfig)return;const e=this.media.getContentID(),i=e?this.resolvedMediaCache?.get(e):null;return i?p.isVideo(this.media)?this.media.getVideoContentType()===I.HLS?a`<frigate-card-ha-hls-player
            ${g(this._refFrigateCardMediaPlayer)}
            allow-exoplayer
            aria-label="${this.media.getTitle()??""}"
            ?autoplay=${!1}
            controls
            muted
            playsinline
            title="${this.media.getTitle()??""}"
            url=${b(this.hass,i?.url)??""}
            .hass=${this.hass}
          >
          </frigate-card-ha-hls-player>`:a`
            <video
              ${g(this._refVideoProvider)}
              aria-label="${this.media.getTitle()??""}"
              title="${this.media.getTitle()??""}"
              muted
              controls
              playsinline
              ?autoplay=${!1}
              @loadedmetadata=${e=>{e.target&&V(e.target,S)}}
              @loadeddata=${e=>{$(this,e)}}
            >
              <source
                src=${b(this.hass,i?.url)??""}
                type="video/mp4"
              />
            </video>
          `:a`<img
          aria-label="${this.media.getTitle()??""}"
          src="${b(this.hass,i?.url)??""}"
          title="${this.media.getTitle()??""}"
          @click=${()=>{this.viewerConfig?.snapshot_click_plays_clip&&this._dispatchRelatedClipView()}}
          @load=${e=>{$(this,e)}}
        />`:s({cardWideConfig:this.cardWideConfig})}static get styles(){return r(":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\nimg,\nvideo,\nfrigate-card-ha-hls-player {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n}\n\nfrigate-card-progress-indicator {\n  padding: 30px;\n  box-sizing: border-box;\n}")}};o([d({attribute:!1})],E.prototype,"hass",void 0),o([d({attribute:!1})],E.prototype,"view",void 0),o([d({attribute:!1})],E.prototype,"media",void 0),o([d({attribute:!1})],E.prototype,"viewerConfig",void 0),o([d({attribute:!1})],E.prototype,"resolvedMediaCache",void 0),o([d({attribute:!1})],E.prototype,"disabled",void 0),o([d({attribute:!1})],E.prototype,"cameraManager",void 0),o([d({attribute:!1})],E.prototype,"cardWideConfig",void 0),E=o([l(W)],E);export{k as FrigateCardViewer,F as FrigateCardViewerCarousel,E as FrigateCardViewerProvider};