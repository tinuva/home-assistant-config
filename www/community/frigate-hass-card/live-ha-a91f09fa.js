import{cL as t,y as e,dh as s,di as a,dj as i,dk as r,bj as o,dl as h,bk as l,bn as n,s as d,cP as u,cS as c,bl as y}from"./card-67eaecc9.js";import{getStateObjOrDispatchError as p}from"./live-cf2512fe.js";import{c as m,i as _}from"./ha-hls-player-af78b3fb.js";import{m as v}from"./audio-557099cb.js";import{h as f,M as $}from"./lazyload-7e37567e.js";import"./media-layout-8e0c974f.js";customElements.whenDefined("ha-web-rtc-player").then((()=>{let d=class extends(customElements.get("ha-web-rtc-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(t){this._video&&(this._video.currentTime=t)}async setControls(t){this._video&&(this._video.controls=t??this.controls)}isPaused(){return this._video?.paused??!0}render(){return this._error?t(this,`${this._error} (${this.entityid})`):e`
        <video
          id="remote-stream"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{this.controls&&f(this._video,$)}}
          @loadeddata=${t=>{s(this,t,{player:this,capabilities:{supportsPause:!0,hasAudio:v(this._video)}})}}
          @volumechange=${()=>a(this)}
          @play=${()=>i(this)}
          @pause=${()=>r(this)}
        ></video>
      `}static get styles(){return[super.styles,o(m),h`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};l([_("#remote-stream")],d.prototype,"_video",void 0),d=l([n("frigate-card-ha-web-rtc-player")],d)})),customElements.whenDefined("ha-camera-stream").then((()=>{let t=class extends(customElements.get("ha-camera-stream")){async play(){return this._player?.play()}async pause(){this._player?.pause()}async mute(){this._player?.mute()}async unmute(){this._player?.unmute()}isMuted(){return this._player?.isMuted()??!0}async seek(t){this._player?.seek(t)}async setControls(t){this._player&&this._player.setControls(t??this.controls)}isPaused(){return this._player?.isPaused()??!0}render(){return this.stateObj?this._shouldRenderMJPEG?e`
          <img
            @load=${t=>{s(this,t,{player:this})}}
            .src=${void 0===this._connected||this._connected?(t=this.stateObj,`/api/camera_proxy_stream/${t.entity_id}?token=${t.attributes.access_token}`):""}
          />
        `:"hls"===this.stateObj.attributes.frontend_stream_type?this._url?e` <frigate-card-ha-hls-player
              id="player"
              ?autoplay=${!1}
              playsinline
              .allowExoPlayer=${this.allowExoPlayer}
              .muted=${this.muted}
              .controls=${this.controls}
              .hass=${this.hass}
              .url=${this._url}
            ></frigate-card-ha-hls-player>`:e``:"web_rtc"===this.stateObj.attributes.frontend_stream_type?e`<frigate-card-ha-web-rtc-player
          id="player"
          ?autoplay=${!1}
          playsinline
          .muted=${this.muted}
          .controls=${this.controls}
          .hass=${this.hass}
          .entityid=${this.stateObj.entity_id}
        ></frigate-card-ha-web-rtc-player>`:void 0:e``;var t}static get styles(){return[super.styles,o(m),h`
          :host {
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 100%;
          }
        `]}};l([_("#player")],t.prototype,"_player",void 0),t=l([n("frigate-card-ha-camera-stream")],t)}));let b=class extends d{constructor(){super(...arguments),this.controls=!0,this._playerRef=u()}async play(){return this._playerRef.value?.play()}async pause(){this._playerRef.value?.pause()}async mute(){this._playerRef.value?.mute()}async unmute(){this._playerRef.value?.unmute()}isMuted(){return this._playerRef.value?.isMuted()??!0}async seek(t){this._playerRef.value?.seek(t)}async setControls(t){this._playerRef.value?.setControls(t??this.controls)}isPaused(){return this._playerRef.value?.isPaused()??!0}render(){if(!this.hass)return;const t=p(this,this.hass,this.cameraConfig);return t?e` <frigate-card-ha-camera-stream
      ${c(this._playerRef)}
      .hass=${this.hass}
      .stateObj=${t}
      .controls=${this.controls}
      .muted=${!0}
    >
    </frigate-card-ha-camera-stream>`:void 0}static get styles(){return o(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n  --video-max-height: none;\n}")}};l([y({attribute:!1})],b.prototype,"hass",void 0),l([y({attribute:!1})],b.prototype,"cameraConfig",void 0),l([y({attribute:!0,type:Boolean})],b.prototype,"controls",void 0),b=l([n("frigate-card-live-ha")],b);export{b as FrigateCardLiveHA};
