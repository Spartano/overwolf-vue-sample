(function(t){function e(e){for(var i,r,a=e[0],u=e[1],c=e[2],l=0,f=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"logs"}},[n("div",{staticClass:"logColumn",attrs:{id:"events"}},[n("h1",[t._v("Game Events")]),n("div",{staticClass:"dataText",attrs:{id:"eventsLog"}},t._l(t.events,(function(e){return n("p",[t._v(" "+t._s(e)+" ")])})),0),n("button",{staticClass:"logCopy",attrs:{id:"copyEvents"}},[t._v(" COPY GAME EVENTS ")])]),n("div",{staticClass:"logColumn",attrs:{id:"infoUpdates"}},[n("h1",[t._v("Info Updates")]),n("div",{staticClass:"dataText",attrs:{id:"infoLog"}},t._l(t.infos,(function(e){return n("p",[t._v(" "+t._s(e)+" ")])})),0),n("button",{staticClass:"logCopy",attrs:{id:"copyInfo"}},[t._v(" COPY INFO UPDATES ")])])])},s=[],r=(n("b0c0"),n("96cf"),n("1da1")),a=(n("d3b7"),{TOGGLE:"sample_app_showhide"});function u(t,e){overwolf.settings.getHotKey(t,(function(n){n&&"error"!==n.status&&n.hotkey?e(n.hotkey):setTimeout((function(){u(t,e)}),2e3)}))}function c(t,e){overwolf.settings.registerHotKey(t,(function(n){"success"===n.status?e():console.error("[HOTKEYS SERVICE] failed to register hotkey ".concat(t))}))}function d(){return new Promise((function(t,e){u(a.TOGGLE,(function(e){t(e)}))}))}function l(t){c(a.TOGGLE,t)}function f(t){overwolf.settings.OnHotKeyChanged.addListener(t)}var h={getToggleHotkey:d,setToggleHotkey:l,addHotkeyChangeListener:f},v=n("d4ec"),p=n("bee2"),m=1,g=function(){function t(e,n){Object(v["a"])(this,t),this.currentWindow=e,this.initialMousePosition=0,this.isMouseDown=!1,n.addEventListener("mousedown",this.onDragStart.bind(this)),n.addEventListener("mousemove",this.onMouseMove.bind(this))}return Object(p["a"])(t,[{key:"_isSignificantMouseMove",value:function(t){if(!this.initialMousePosition)return!1;var e=t.clientX,n=t.clientY,i=Math.abs(e-this.initialMousePosition.x),o=Math.abs(n-this.initialMousePosition.y),s=i>m||o>m;return s}},{key:"onDragStart",value:function(t){this.isMouseDown=!0,this.initialMousePosition={x:t.clientX,y:t.clientY}}},{key:"onMouseMove",value:function(t){if(this.isMouseDown){var e=this._isSignificantMouseMove(t);e&&(this.isMouseDown=!1,this.currentWindow&&overwolf.windows.dragMove(this.currentWindow.id))}}}]),t}(),_=g,w={name:"app",components:{},data:function(){return{infos:[],events:[],hotkey:""}},created:function(){this._backgroundWindow=overwolf.windows.getMainWindow(),this._modal=document.getElementById("exitMinimizeModal"),this._closeButton=document.getElementById("closeButton"),this._minimizeHeaderButton=document.getElementById("minimizeButton"),this._exitButton=document.getElementById("exit"),this._minimizeButton=document.getElementById("minimize"),this._header=document.getElementsByClassName("app-header")[0],this._version=document.getElementById("version");var t=overwolf.windows.getMainWindow();t.ow_eventBus.addListener(this._eventListener),this._updateHotkey(),h.addHotkeyChangeListener(this._updateHotkey)},mounted:function(){var t=this;this._closeButton.addEventListener("click",this._showExitMinimizeModal),this._minimizeHeaderButton.addEventListener("click",(function(){t._backgroundWindow.minimize()})),this._exitButton.addEventListener("click",(function(){t._backgroundWindow.close()})),this._minimizeButton.addEventListener("click",(function(){t._backgroundWindow.minimize(),t._hideExitMinimizeModal()})),window.onclick=function(e){e.target==t._modal&&t._hideExitMinimizeModal()},overwolf.windows.getCurrentWindow((function(e){t.dragService=new _(e.window,t._header)})),overwolf.extensions.current.getManifest((function(e){t._version&&(t._version.textContent="Version ".concat(e.meta.version))}))},methods:{_updateHotkey:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.getToggleHotkey();case 2:e=t.sent,this.hotkey=e;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),_eventListener:function(t,e){switch(t){case"event":this._gameEventHandler(e);break;case"info":this._infoUpdateHandler(e);break}},_gameEventHandler:function(t){switch(t.name){case"kill":case"death":case"matchStart":case"matchEnd":!0}this.events.push(JSON.stringify(t))},_infoUpdateHandler:function(t){this.infos.push(JSON.stringify(t))},_showExitMinimizeModal:function(){this._modal.style.display="block"},_hideExitMinimizeModal:function(){this._modal.style.display="none"}}},y=w,M=n("2877"),b=Object(M["a"])(y,o,s,!1,null,null,null),E=b.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(E)}}).$mount("#app")}});
//# sourceMappingURL=app.bb4eb036.js.map