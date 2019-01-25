parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"WnvV":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function e(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}Object.defineProperty(exports,"__esModule",{value:!0});var s=function(){function i(e,s,h,n){t(this,i),this.x=0,this.y=0,this.w=0,this.h=0,this.hit=!1,this.scored=!1,this.x=e,this.y=s,this.w=h,this.h=n}return e(i,[{key:"update",value:function(t,i){this.checkCollisions(t),this.x-=.5*(+t.dashing+1)*i}},{key:"render",value:function(t){t.beginPath(),t.fillStyle=this.hit?"grey":"red",t.rect(this.x,this.y,this.w,this.h),t.fill(),t.closePath()}},{key:"checkCollisions",value:function(t){!this.hit&&!t.dashing&&t.x+32>=this.x&&t.x<=this.x+this.w&&t.y+32>=this.y&&(t.hit(),this.hit=!0),!this.scored&&!this.hit&&t.x>this.x+this.w&&(t.score++,this.scored=!0)}}]),i}();exports.Block=s;
},{}],"yIOC":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./block"),a=function(){function n(){e(this,n),this.lastSpawn=0}return t(n,[{key:"spawnIfUnlucky",value:function(e,n){if(n>200+this.lastSpawn&&(this.lastSpawn=n,Math.random()>.7))return new r.Block(700,350,20,100)}}]),n}();exports.BlockSpawner=a;
},{"./block":"WnvV"}],"3QnD":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function n(){e(this,n)}return o(n,null,[{key:"init",value:function(){document.onkeydown=function(e){"Space"!==e.code&&"KeyW"!==e.code||(n.jumping=!0),"KeyX"===e.code&&(n.dashing=!0)},document.onkeyup=function(e){"Space"!==e.code&&"KeyW"!==e.code||(n.jumping=!1),"KeyX"===e.code&&(n.dashing=!1)}}}]),n}();t.jumping=!1,t.dashing=!1,exports.Input=t;
},{}],"d6pW":[function(require,module,exports) {
"use strict";function i(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function t(i,t){for(var e=0;e<t.length;e++){var h=t[e];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(i,h.key,h)}}function e(i,e,h){return e&&t(i.prototype,e),h&&t(i,h),i}Object.defineProperty(exports,"__esModule",{value:!0});var h=require("./input"),s=1.5,n=function(){function t(e,h){i(this,t),this.x=0,this.y=0,this.grounded=!1,this.dashing=!1,this.dashedDuringJump=!1,this.vy=0,this.health="♥️♥️♥️",this.score=0,this.dashTime=0,this.x=e,this.y=h}return e(t,[{key:"update",value:function(i){this.grounded||(this.dashing?(this.dashTime-=i,this.dashTime<=0&&(this.dashing=!1,this.vy=0)):(this.y+=i*this.vy,this.y+=i*s,this.vy*=.96,h.Input.dashing&&!this.dashedDuringJump&&(this.dashing=!0,this.dashedDuringJump=!0,this.dashTime=400))),this.y>=400&&(this.grounded=!0,this.vy=0,this.y=400),h.Input.jumping&&this.grounded&&(this.dashedDuringJump=!1,this.grounded=!1,this.vy=-3)}},{key:"hit",value:function(){this.health=this.health.slice(0,-1),console.log(this.health)}},{key:"render",value:function(i){i.beginPath(),i.fillStyle=this.dashing?"green":"orange",i.rect(this.x,this.y,32,32),i.fill(),i.closePath()}}]),t}();exports.Player=n;
},{"./input":"3QnD"}],"7QCb":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./blockSpawner"),i=require("./input"),a=require("./player"),s=function(){function t(){e(this,t),this.timer=0,this.blockSpawner=new r.BlockSpawner,this.blocks=[],this.anim=0}return n(t,[{key:"init",value:function(){this.ctx=document.getElementById("canvas").getContext("2d"),i.Input.init(),this.player=new a.Player(50,0)}},{key:"start",value:function(){this.update(0)}},{key:"update",value:function(e){var t=this,n=e-this.timer;if(console.log({time:e,timer:this.timer}),this.timer=e,0===this.player.health.length)return this.restart(),void cancelAnimationFrame(this.anim);this.player.update(n);var r=this.blockSpawner.spawnIfUnlucky(n,e);r&&this.blocks.push(r),this.blocks.map(function(e){return e.update(t.player,n)}),this.blocks=this.blocks.filter(function(e){return e.x>=-20}),this.ctx.clearRect(0,0,800,600),this.blocks.map(function(e){return e.render(t.ctx)}),this.player.render(this.ctx),document.getElementById("score").innerHTML="".concat(this.player.score),document.getElementById("health").innerHTML="".concat(this.player.health),this.anim=requestAnimationFrame(function(e){return t.update(e)})}},{key:"restart",value:function(){var e=this;setTimeout(function(){e.timer=0,e.blockSpawner=new r.BlockSpawner,e.player=new a.Player(50,0),e.blocks=[],e.start()},2e3)}}]),t}(),c=new s;c.init(),c.start();
},{"./blockSpawner":"yIOC","./input":"3QnD","./player":"d6pW"}]},{},["7QCb"], null)
//# sourceMappingURL=/src.81b795b5.map