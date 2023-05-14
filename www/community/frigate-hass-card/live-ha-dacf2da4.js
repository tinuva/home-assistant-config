import{cD as e,y as t,d9 as s,bc as a,da as r,bd as i,bg as h,s as l,cH as o,cK as d,be as n}from"./card-f444d6e4.js";import{getStateObjOrDispatchError as u}from"./live-90d893af.js";import{c,i as y}from"./ha-hls-player-9d847d43.js";import{h as p,M as m}from"./media-e46d51bc.js";import"./media-layout-8e0c974f.js";customElements.whenDefined("ha-web-rtc-player").then((()=>{let l=class extends(customElements.get("ha-web-rtc-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(e){this._video&&(this._video.currentTime=e)}render(){return this._error?e(this,`${this._error} (${this.entityid})`):t`
        <video
          id="remote-stream"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{p(this._video,m)}}
          @loadeddata=${e=>{s(this,e)}}
        ></video>
      `}static get styles(){return[super.styles,a(c),r`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};i([y("#remote-stream")],l.prototype,"_video",void 0),l=i([h("frigate-card-ha-web-rtc-player")],l)})),customElements.whenDefined("ha-camera-stream").then((()=>{let e=class extends(customElements.get("ha-camera-stream")){async play(){return this._player?.play()}async pause(){this._player?.pause()}async mute(){this._player?.mute()}async unmute(){this._player?.unmute()}isMuted(){return this._player?.isMuted()??!0}async seek(e){this._player?.seek(e)}render(){return this.stateObj?this._shouldRenderMJPEG?t`
          <img
            @load=${e=>{s(this,e)}}
            .src=${void 0===this._connected||this._connected?(e=this.stateObj,`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`):""}
          />
        `:"hls"===this.stateObj.attributes.frontend_stream_type?this._url?t` <frigate-card-ha-hls-player
              id="player"
              ?autoplay=${!1}
              playsinline
              .allowExoPlayer=${this.allowExoPlayer}
              .muted=${this.muted}
              .controls=${this.controls}
              .hass=${this.hass}
              .url=${this._url}
            ></frigate-card-ha-hls-player>`:t``:"web_rtc"===this.stateObj.attributes.frontend_stream_type?t`<frigate-card-ha-web-rtc-player
          id="player"
          ?autoplay=${!1}
          playsinline
          .muted=${this.muted}
          .controls=${this.controls}
          .hass=${this.hass}
          .entityid=${this.stateObj.entity_id}
        ></frigate-card-ha-web-rtc-player>`:void 0:t``;var e}static get styles(){return[super.styles,a(c),r`
          :host {
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 100%;
          }
        `]}};i([y("#player")],e.prototype,"_player",void 0),e=i([h("frigate-card-ha-camera-stream")],e)}));let _=class extends l{constructor(){super(...arguments),this._playerRef=o()}async play(){return this._playerRef.value?.play()}async pause(){this._playerRef.value?.pause()}async mute(){this._playerRef.value?.mute()}async unmute(){this._playerRef.value?.unmute()}isMuted(){return this._playerRef.value?.isMuted()??!0}async seek(e){this._playerRef.value?.seek(e)}render(){if(!this.hass)return;const e=u(this,this.hass,this.cameraConfig);return e?t` <frigate-card-ha-camera-stream
      ${d(this._playerRef)}
      .hass=${this.hass}
      .stateObj=${e}
      .controls=${!0}
      .muted=${!0}
    >
    </frigate-card-ha-camera-stream>`:void 0}static get styles(){return a(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n  --video-max-height: none;\n}")}};i([n({attribute:!1})],_.prototype,"hass",void 0),i([n({attribute:!1})],_.prototype,"cameraConfig",void 0),_=i([h("frigate-card-live-ha")],_);export{_ as FrigateCardLiveHA};
