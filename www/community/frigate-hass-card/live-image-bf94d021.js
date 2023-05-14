import{s as a,y as e,bc as i,bd as s,be as t,bf as r,bg as o}from"./card-f444d6e4.js";import{getStateObjOrDispatchError as n}from"./live-90d893af.js";import"./image-8539ce12.js";import"./media-e46d51bc.js";import"./media-layout-8e0c974f.js";let c=class extends a{constructor(){super(...arguments),this._playing=!0}async play(){this._playing=!0}async pause(){this._playing=!1}async mute(){}async unmute(){}isMuted(){return!0}async seek(a){}render(){if(this.hass&&this.cameraConfig)return n(this,this.hass,this.cameraConfig),e` <frigate-card-image
      .imageConfig=${{mode:this.cameraConfig.image.url?"url":"camera",refresh_seconds:this._playing?this.cameraConfig.image.refresh_seconds:0,url:this.cameraConfig.image.url}}
      .hass=${this.hass}
      .cameraConfig=${this.cameraConfig}
    >
    </frigate-card-image>`}static get styles(){return i(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}")}};s([t({attribute:!1})],c.prototype,"hass",void 0),s([t({attribute:!1})],c.prototype,"cameraConfig",void 0),s([r()],c.prototype,"_playing",void 0),c=s([o("frigate-card-live-image")],c);export{c as FrigateCardLiveImage};
