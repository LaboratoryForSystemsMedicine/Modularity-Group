/*!
  * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t=t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},s=t=>{const i=e(t);return i?document.querySelector(i):null},n=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0},o=t=>{t.dispatchEvent(new Event("transitionend"))},r=t=>(t[0]||t).nodeType,a=(t,e)=>{let i=!1;const s=e+5;t.addEventListener("transitionend",(function e(){i=!0,t.removeEventListener("transitionend",e)})),setTimeout(()=>{i||o(t)},s)},l=(t,e,i)=>{Object.keys(i).forEach(s=>{const n=i[s],o=e[s],a=o&&r(o)?"element":null==(l=o)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(n).test(a))throw new TypeError(t.toUpperCase()+": "+`Option "${s}" provided type "${a}" `+`but expected type "${n}".`)})},c=t=>{if(!t)return!1;if(t.style&&t.parentNode&&t.parentNode.style){const e=getComputedStyle(t),i=getComputedStyle(t.parentNode);return"none"!==e.display&&"none"!==i.display&&"hidden"!==e.visibility}return!1},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),h=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?h(t.parentNode):null},f=()=>function(){},u=t=>t.offsetHeight,p=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},g=()=>"rtl"===document.documentElement.dir,m=(t,e)=>{var i;i=()=>{const i=p();if(i){const s=i.fn[t];i.fn[t]=e.jQueryInterface,i.fn[t].Constructor=e,i.fn[t].noConflict=()=>(i.fn[t]=s,e.jQueryInterface)}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i()},_=new Map;var b={set(t,e,i){_.has(t)||_.set(t,new Map);const s=_.get(t);s.has(e)||0===s.size?s.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,e)=>_.has(t)&&_.get(t).get(e)||null,remove(t,e){if(!_.has(t))return;const i=_.get(t);i.delete(e),0===i.size&&_.delete(t)}};const v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,E={};let T=1;const A={mouseenter:"mouseover",mouseleave:"mouseout"},L=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${T++}`||t.uidEvent||T++}function k(t){const e=O(t);return t.uidEvent=e,E[e]=E[e]||{},E[e]}function D(t,e,i=null){const s=Object.keys(t);for(let n=0,o=s.length;n<o;n++){const o=t[s[n]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function x(t,e,i){const s="string"==typeof e,n=s?i:e;let o=t.replace(y,"");const r=A[o];return r&&(o=r),L.has(o)||(o=t),[s,n,o]}function C(t,e,i,s,n){if("string"!=typeof e||!t)return;i||(i=s,s=null);const[o,r,a]=x(e,i,s),l=k(t),c=l[a]||(l[a]={}),d=D(c,r,o?i:null);if(d)return void(d.oneOff=d.oneOff&&n);const h=O(r,e.replace(v,"")),f=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:e}=n;e&&e!==this;e=e.parentNode)for(let r=o.length;r--;)if(o[r]===e)return n.delegateTarget=e,s.oneOff&&N.off(t,n.type,i),i.apply(e,[n]);return null}}(t,i,s):function(t,e){return function i(s){return s.delegateTarget=t,i.oneOff&&N.off(t,s.type,e),e.apply(t,[s])}}(t,i);f.delegationSelector=o?i:null,f.originalHandler=r,f.oneOff=n,f.uidEvent=h,c[h]=f,t.addEventListener(a,f,o)}function S(t,e,i,s,n){const o=D(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}const N={on(t,e,i,s){C(t,e,i,s,!1)},one(t,e,i,s){C(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return;const[n,o,r]=x(e,i,s),a=r!==e,l=k(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void S(t,l,r,o,n?i:null)}c&&Object.keys(l).forEach(i=>{!function(t,e,i,s){const n=e[i]||{};Object.keys(n).forEach(o=>{if(o.includes(s)){const s=n[o];S(t,e,i,s.originalHandler,s.delegationSelector)}})}(t,l,i,e.slice(1))});const d=l[r]||{};Object.keys(d).forEach(i=>{const s=i.replace(w,"");if(!a||e.includes(s)){const e=d[i];S(t,l,r,e.originalHandler,e.delegationSelector)}})},trigger(t,e,i){if("string"!=typeof e||!t)return null;const s=p(),n=e.replace(y,""),o=e!==n,r=L.has(n);let a,l=!0,c=!0,d=!1,h=null;return o&&s&&(a=s.Event(e,i),s(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented()),r?(h=document.createEvent("HTMLEvents"),h.initEvent(n,l,!0)):h=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach(t=>{Object.defineProperty(h,t,{get:()=>i[t]})}),d&&h.preventDefault(),c&&t.dispatchEvent(h),h.defaultPrevented&&void 0!==a&&a.preventDefault(),h}};class j{constructor(t){(t="string"==typeof t?document.querySelector(t):t)&&(this._element=t,b.set(this._element,this.constructor.DATA_KEY,this))}dispose(){b.remove(this._element,this.constructor.DATA_KEY),this._element=null}static getInstance(t){return b.get(t,this.DATA_KEY)}static get VERSION(){return"5.0.0-beta3"}}class P extends j{static get DATA_KEY(){return"bs.alert"}close(t){const e=t?this._getRootElement(t):this._element,i=this._triggerCloseEvent(e);null===i||i.defaultPrevented||this._removeElement(e)}_getRootElement(t){return s(t)||t.closest(".alert")}_triggerCloseEvent(t){return N.trigger(t,"close.bs.alert")}_removeElement(t){if(t.classList.remove("show"),!t.classList.contains("fade"))return void this._destroyElement(t);const e=n(t);N.one(t,"transitionend",()=>this._destroyElement(t)),a(t,e)}_destroyElement(t){t.parentNode&&t.parentNode.removeChild(t),N.trigger(t,"closed.bs.alert")}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.alert");e||(e=new P(this)),"close"===t&&e[t](this)}))}static handleDismiss(t){return function(e){e&&e.preventDefault(),t.close(this)}}}N.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',P.handleDismiss(new P)),m("alert",P);class I extends j{static get DATA_KEY(){return"bs.button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.button");e||(e=new I(this)),"toggle"===t&&e[t]()}))}}function M(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function R(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}N.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',t=>{t.preventDefault();const e=t.target.closest('[data-bs-toggle="button"]');let i=b.get(e,"bs.button");i||(i=new I(e)),i.toggle()}),m("button",I);const B={setDataAttribute(t,e,i){t.setAttribute("data-bs-"+R(e),i)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+R(e))},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(i=>{let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=M(t.dataset[i])}),e},getDataAttribute:(t,e)=>M(t.getAttribute("data-bs-"+R(e))),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},H={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let s=t.parentNode;for(;s&&s.nodeType===Node.ELEMENT_NODE&&3!==s.nodeType;)s.matches(e)&&i.push(s),s=s.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]}},W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},$="next",F="prev",z="left",K="right";class Y extends j{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=H.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return W}static get DATA_KEY(){return"bs.carousel"}next(){this._isSliding||this._slide($)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._isSliding||this._slide(F)}pause(t){t||(this._isPaused=!0),H.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(o(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=H.findOne(".active.carousel-item",this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,"slid.bs.carousel",()=>this.to(t));if(e===t)return this.pause(),void this.cycle();const i=t>e?$:F;this._slide(i,this._items[t])}dispose(){N.off(this._element,".bs.carousel"),this._items=null,this._config=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null,super.dispose()}_getConfig(t){return t={...W,...t},l("carousel",t,U),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?K:z)}_addEventListeners(){this._config.keyboard&&N.on(this._element,"keydown.bs.carousel",t=>this._keydown(t)),"hover"===this._config.pause&&(N.on(this._element,"mouseenter.bs.carousel",t=>this.pause(t)),N.on(this._element,"mouseleave.bs.carousel",t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType?this._pointerEvent||(this.touchStartX=t.touches[0].clientX):this.touchStartX=t.clientX},e=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},i=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType||(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),500+this._config.interval))};H.find(".carousel-item img",this._element).forEach(t=>{N.on(t,"dragstart.bs.carousel",t=>t.preventDefault())}),this._pointerEvent?(N.on(this._element,"pointerdown.bs.carousel",e=>t(e)),N.on(this._element,"pointerup.bs.carousel",t=>i(t)),this._element.classList.add("pointer-event")):(N.on(this._element,"touchstart.bs.carousel",e=>t(e)),N.on(this._element,"touchmove.bs.carousel",t=>e(t)),N.on(this._element,"touchend.bs.carousel",t=>i(t)))}_keydown(t){/input|textarea/i.test(t.target.tagName)||("ArrowLeft"===t.key?(t.preventDefault(),this._slide(z)):"ArrowRight"===t.key&&(t.preventDefault(),this._slide(K)))}_getItemIndex(t){return this._items=t&&t.parentNode?H.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const i=t===$,s=t===F,n=this._getItemIndex(e),o=this._items.length-1;if((s&&0===n||i&&n===o)&&!this._config.wrap)return e;const r=(n+(s?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]}_triggerSlideEvent(t,e){const i=this._getItemIndex(t),s=this._getItemIndex(H.findOne(".active.carousel-item",this._element));return N.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:s,to:i})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=H.findOne(".active",this._indicatorsElement);e.classList.remove("active"),e.removeAttribute("aria-current");const i=H.find("[data-bs-target]",this._indicatorsElement);for(let e=0;e<i.length;e++)if(Number.parseInt(i[e].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){i[e].classList.add("active"),i[e].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||H.findOne(".active.carousel-item",this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const i=this._directionToOrder(t),s=H.findOne(".active.carousel-item",this._element),o=this._getItemIndex(s),r=e||this._getItemByOrder(i,s),l=this._getItemIndex(r),c=Boolean(this._interval),d=i===$,h=d?"carousel-item-start":"carousel-item-end",f=d?"carousel-item-next":"carousel-item-prev",p=this._orderToDirection(i);if(r&&r.classList.contains("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(r,p).defaultPrevented&&s&&r){if(this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r,this._element.classList.contains("slide")){r.classList.add(f),u(r),s.classList.add(h),r.classList.add(h);const t=n(s);N.one(s,"transitionend",()=>{r.classList.remove(h,f),r.classList.add("active"),s.classList.remove("active",f,h),this._isSliding=!1,setTimeout(()=>{N.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:p,from:o,to:l})},0)}),a(s,t)}else s.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,N.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:p,from:o,to:l});c&&this.cycle()}}_directionToOrder(t){return[K,z].includes(t)?g()?t===K?F:$:t===K?$:F:t}_orderToDirection(t){return[$,F].includes(t)?g()?t===$?z:K:t===$?K:z:t}static carouselInterface(t,e){let i=b.get(t,"bs.carousel"),s={...W,...B.getDataAttributes(t)};"object"==typeof e&&(s={...s,...e});const n="string"==typeof e?e:s.slide;if(i||(i=new Y(t,s)),"number"==typeof e)i.to(e);else if("string"==typeof n){if(void 0===i[n])throw new TypeError(`No method named "${n}"`);i[n]()}else s.interval&&s.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){Y.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=s(this);if(!e||!e.classList.contains("carousel"))return;const i={...B.getDataAttributes(e),...B.getDataAttributes(this)},n=this.getAttribute("data-bs-slide-to");n&&(i.interval=!1),Y.carouselInterface(e,i),n&&b.get(e,"bs.carousel").to(n),t.preventDefault()}}N.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Y.dataApiClickHandler),N.on(window,"load.bs.carousel.data-api",()=>{const t=H.find('[data-bs-ride="carousel"]');for(let e=0,i=t.length;e<i;e++)Y.carouselInterface(t[e],b.get(t[e],"bs.carousel"))}),m("carousel",Y);const q={toggle:!0,parent:""},V={toggle:"boolean",parent:"(string|element)"};class X extends j{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=H.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);const s=H.find('[data-bs-toggle="collapse"]');for(let t=0,e=s.length;t<e;t++){const e=s[t],n=i(e),o=H.find(n).filter(t=>t===this._element);null!==n&&o.length&&(this._selector=n,this._triggerArray.push(e))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return q}static get DATA_KEY(){return"bs.collapse"}toggle(){this._element.classList.contains("show")?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains("show"))return;let t,e;this._parent&&(t=H.find(".show, .collapsing",this._parent).filter(t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains("collapse")),0===t.length&&(t=null));const i=H.findOne(this._selector);if(t){const s=t.find(t=>i!==t);if(e=s?b.get(s,"bs.collapse"):null,e&&e._isTransitioning)return}if(N.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t&&t.forEach(t=>{i!==t&&X.collapseInterface(t,"hide"),e||b.set(t,"bs.collapse",null)});const s=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach(t=>{t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);const o="scroll"+(s[0].toUpperCase()+s.slice(1)),r=n(this._element);N.one(this._element,"transitionend",()=>{this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[s]="",this.setTransitioning(!1),N.trigger(this._element,"shown.bs.collapse")}),a(this._element,r),this._element.style[s]=this._element[o]+"px"}hide(){if(this._isTransitioning||!this._element.classList.contains("show"))return;if(N.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",u(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],i=s(e);i&&!i.classList.contains("show")&&(e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="";const i=n(this._element);N.one(this._element,"transitionend",()=>{this.setTransitioning(!1),this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),N.trigger(this._element,"hidden.bs.collapse")}),a(this._element,i)}setTransitioning(t){this._isTransitioning=t}dispose(){super.dispose(),this._config=null,this._parent=null,this._triggerArray=null,this._isTransitioning=null}_getConfig(t){return(t={...q,...t}).toggle=Boolean(t.toggle),l("collapse",t,V),t}_getDimension(){return this._element.classList.contains("width")?"width":"height"}_getParent(){let{parent:t}=this._config;r(t)?void 0===t.jquery&&void 0===t[0]||(t=t[0]):t=H.findOne(t);const e=`[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;return H.find(e,t).forEach(t=>{const e=s(t);this._addAriaAndCollapsedClass(e,[t])}),t}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const i=t.classList.contains("show");e.forEach(t=>{i?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",i)})}static collapseInterface(t,e){let i=b.get(t,"bs.collapse");const s={...q,...B.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!i&&s.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(s.toggle=!1),i||(i=new X(t,s)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){X.collapseInterface(this,t)}))}}N.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=B.getDataAttributes(this),s=i(this);H.find(s).forEach(t=>{const i=b.get(t,"bs.collapse");let s;i?(null===i._parent&&"string"==typeof e.parent&&(i._config.parent=e.parent,i._parent=i._getParent()),s="toggle"):s=e,X.collapseInterface(t,s)})})),m("collapse",X);var Q="top",G="bottom",Z="right",J="left",tt=[Q,G,Z,J],et=tt.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),it=[].concat(tt,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),st=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function nt(t){return t?(t.nodeName||"").toLowerCase():null}function ot(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function rt(t){return t instanceof ot(t).Element||t instanceof Element}function at(t){return t instanceof ot(t).HTMLElement||t instanceof HTMLElement}function lt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ot(t).ShadowRoot||t instanceof ShadowRoot)}var ct={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},s=e.attributes[t]||{},n=e.elements[t];at(n)&&nt(n)&&(Object.assign(n.style,i),Object.keys(s).forEach((function(t){var e=s[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var s=e.elements[t],n=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});at(s)&&nt(s)&&(Object.assign(s.style,o),Object.keys(n).forEach((function(t){s.removeAttribute(t)})))}))}},requires:["computeStyles"]};function dt(t){return t.split("-")[0]}function ht(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function ft(t){var e=ht(t),i=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:s}}function ut(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&lt(i)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function pt(t){return ot(t).getComputedStyle(t)}function gt(t){return["table","td","th"].indexOf(nt(t))>=0}function mt(t){return((rt(t)?t.ownerDocument:t.document)||window.document).documentElement}function _t(t){return"html"===nt(t)?t:t.assignedSlot||t.parentNode||(lt(t)?t.host:null)||mt(t)}function bt(t){return at(t)&&"fixed"!==pt(t).position?t.offsetParent:null}function vt(t){for(var e=ot(t),i=bt(t);i&&gt(i)&&"static"===pt(i).position;)i=bt(i);return i&&("html"===nt(i)||"body"===nt(i)&&"static"===pt(i).position)?e:i||function(t){for(var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),i=_t(t);at(i)&&["html","body"].indexOf(nt(i))<0;){var s=pt(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}(t)||e}function yt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var wt=Math.max,Et=Math.min,Tt=Math.round;function At(t,e,i){return wt(t,Et(e,i))}function Lt(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Ot(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var kt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,s=t.name,n=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=dt(i.placement),l=yt(a),c=[J,Z].indexOf(a)>=0?"height":"width";if(o&&r){var d=function(t,e){return Lt("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Ot(t,tt))}(n.padding,i),h=ft(o),f="y"===l?Q:J,u="y"===l?G:Z,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=vt(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=d[f],y=_-h[c]-d[u],w=_/2-h[c]/2+b,E=At(v,w,y),T=l;i.modifiersData[s]=((e={})[T]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,s=void 0===i?"[data-popper-arrow]":i;null!=s&&("string"!=typeof s||(s=e.elements.popper.querySelector(s)))&&ut(e.elements.popper,s)&&(e.elements.arrow=s)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},Dt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function xt(t){var e,i=t.popper,s=t.popperRect,n=t.placement,o=t.offsets,r=t.position,a=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,d=!0===c?function(t){var e=t.x,i=t.y,s=window.devicePixelRatio||1;return{x:Tt(Tt(e*s)/s)||0,y:Tt(Tt(i*s)/s)||0}}(o):"function"==typeof c?c(o):o,h=d.x,f=void 0===h?0:h,u=d.y,p=void 0===u?0:u,g=o.hasOwnProperty("x"),m=o.hasOwnProperty("y"),_=J,b=Q,v=window;if(l){var y=vt(i),w="clientHeight",E="clientWidth";y===ot(i)&&"static"!==pt(y=mt(i)).position&&(w="scrollHeight",E="scrollWidth"),y=y,n===Q&&(b=G,p-=y[w]-s.height,p*=a?1:-1),n===J&&(_=Z,f-=y[E]-s.width,f*=a?1:-1)}var T,A=Object.assign({position:r},l&&Dt);return a?Object.assign({},A,((T={})[b]=m?"0":"",T[_]=g?"0":"",T.transform=(v.devicePixelRatio||1)<2?"translate("+f+"px, "+p+"px)":"translate3d("+f+"px, "+p+"px, 0)",T)):Object.assign({},A,((e={})[b]=m?p+"px":"",e[_]=g?f+"px":"",e.transform="",e))}var Ct={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,s=i.gpuAcceleration,n=void 0===s||s,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:dt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,xt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,xt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},St={passive:!0},Nt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,s=t.options,n=s.scroll,o=void 0===n||n,r=s.resize,a=void 0===r||r,l=ot(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,St)})),a&&l.addEventListener("resize",i.update,St),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,St)})),a&&l.removeEventListener("resize",i.update,St)}},data:{}},jt={left:"right",right:"left",bottom:"top",top:"bottom"};function Pt(t){return t.replace(/left|right|bottom|top/g,(function(t){return jt[t]}))}var It={start:"end",end:"start"};function Mt(t){return t.replace(/start|end/g,(function(t){return It[t]}))}function Rt(t){var e=ot(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Bt(t){return ht(mt(t)).left+Rt(t).scrollLeft}function Ht(t){var e=pt(t),i=e.overflow,s=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+n+s)}function Wt(t,e){var i;void 0===e&&(e=[]);var s=function t(e){return["html","body","#document"].indexOf(nt(e))>=0?e.ownerDocument.body:at(e)&&Ht(e)?e:t(_t(e))}(t),n=s===(null==(i=t.ownerDocument)?void 0:i.body),o=ot(s),r=n?[o].concat(o.visualViewport||[],Ht(s)?s:[]):s,a=e.concat(r);return n?a:a.concat(Wt(_t(r)))}function Ut(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function $t(t,e){return"viewport"===e?Ut(function(t){var e=ot(t),i=mt(t),s=e.visualViewport,n=i.clientWidth,o=i.clientHeight,r=0,a=0;return s&&(n=s.width,o=s.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=s.offsetLeft,a=s.offsetTop)),{width:n,height:o,x:r+Bt(t),y:a}}(t)):at(e)?function(t){var e=ht(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Ut(function(t){var e,i=mt(t),s=Rt(t),n=null==(e=t.ownerDocument)?void 0:e.body,o=wt(i.scrollWidth,i.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),r=wt(i.scrollHeight,i.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-s.scrollLeft+Bt(t),l=-s.scrollTop;return"rtl"===pt(n||i).direction&&(a+=wt(i.clientWidth,n?n.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(mt(t)))}function Ft(t){return t.split("-")[1]}function zt(t){var e,i=t.reference,s=t.element,n=t.placement,o=n?dt(n):null,r=n?Ft(n):null,a=i.x+i.width/2-s.width/2,l=i.y+i.height/2-s.height/2;switch(o){case Q:e={x:a,y:i.y-s.height};break;case G:e={x:a,y:i.y+i.height};break;case Z:e={x:i.x+i.width,y:l};break;case J:e={x:i.x-s.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?yt(o):null;if(null!=c){var d="y"===c?"height":"width";switch(r){case"start":e[c]=e[c]-(i[d]/2-s[d]/2);break;case"end":e[c]=e[c]+(i[d]/2-s[d]/2)}}return e}function Kt(t,e){void 0===e&&(e={});var i=e,s=i.placement,n=void 0===s?t.placement:s,o=i.boundary,r=void 0===o?"clippingParents":o,a=i.rootBoundary,l=void 0===a?"viewport":a,c=i.elementContext,d=void 0===c?"popper":c,h=i.altBoundary,f=void 0!==h&&h,u=i.padding,p=void 0===u?0:u,g=Lt("number"!=typeof p?p:Ot(p,tt)),m="popper"===d?"reference":"popper",_=t.elements.reference,b=t.rects.popper,v=t.elements[f?m:d],y=function(t,e,i){var s="clippingParents"===e?function(t){var e=Wt(_t(t)),i=["absolute","fixed"].indexOf(pt(t).position)>=0&&at(t)?vt(t):t;return rt(i)?e.filter((function(t){return rt(t)&&ut(t,i)&&"body"!==nt(t)})):[]}(t):[].concat(e),n=[].concat(s,[i]),o=n[0],r=n.reduce((function(e,i){var s=$t(t,i);return e.top=wt(s.top,e.top),e.right=Et(s.right,e.right),e.bottom=Et(s.bottom,e.bottom),e.left=wt(s.left,e.left),e}),$t(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(rt(v)?v:v.contextElement||mt(t.elements.popper),r,l),w=ht(_),E=zt({reference:w,element:b,strategy:"absolute",placement:n}),T=Ut(Object.assign({},b,E)),A="popper"===d?T:w,L={top:y.top-A.top+g.top,bottom:A.bottom-y.bottom+g.bottom,left:y.left-A.left+g.left,right:A.right-y.right+g.right},O=t.modifiersData.offset;if("popper"===d&&O){var k=O[n];Object.keys(L).forEach((function(t){var e=[Z,G].indexOf(t)>=0?1:-1,i=[Q,G].indexOf(t)>=0?"y":"x";L[t]+=k[i]*e}))}return L}function Yt(t,e){void 0===e&&(e={});var i=e,s=i.placement,n=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?it:l,d=Ft(s),h=d?a?et:et.filter((function(t){return Ft(t)===d})):tt,f=h.filter((function(t){return c.indexOf(t)>=0}));0===f.length&&(f=h);var u=f.reduce((function(e,i){return e[i]=Kt(t,{placement:i,boundary:n,rootBoundary:o,padding:r})[dt(i)],e}),{});return Object.keys(u).sort((function(t,e){return u[t]-u[e]}))}var qt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var n=i.mainAxis,o=void 0===n||n,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,d=i.boundary,h=i.rootBoundary,f=i.altBoundary,u=i.flipVariations,p=void 0===u||u,g=i.allowedAutoPlacements,m=e.options.placement,_=dt(m),b=l||(_!==m&&p?function(t){if("auto"===dt(t))return[];var e=Pt(t);return[Mt(t),e,Mt(e)]}(m):[Pt(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat("auto"===dt(i)?Yt(e,{placement:i,boundary:d,rootBoundary:h,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,T=!0,A=v[0],L=0;L<v.length;L++){var O=v[L],k=dt(O),D="start"===Ft(O),x=[Q,G].indexOf(k)>=0,C=x?"width":"height",S=Kt(e,{placement:O,boundary:d,rootBoundary:h,altBoundary:f,padding:c}),N=x?D?Z:J:D?G:Q;y[C]>w[C]&&(N=Pt(N));var j=Pt(N),P=[];if(o&&P.push(S[k]<=0),a&&P.push(S[N]<=0,S[j]<=0),P.every((function(t){return t}))){A=O,T=!1;break}E.set(O,P)}if(T)for(var I=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return A=e,"break"},M=p?3:1;M>0&&"break"!==I(M);M--);e.placement!==A&&(e.modifiersData[s]._skip=!0,e.placement=A,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Vt(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Xt(t){return[Q,Z,G,J].some((function(e){return t[e]>=0}))}var Qt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,s=e.rects.reference,n=e.rects.popper,o=e.modifiersData.preventOverflow,r=Kt(e,{elementContext:"reference"}),a=Kt(e,{altBoundary:!0}),l=Vt(r,s),c=Vt(a,n,o),d=Xt(l),h=Xt(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":h})}},Gt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,s=t.name,n=i.offset,o=void 0===n?[0,0]:n,r=it.reduce((function(t,i){return t[i]=function(t,e,i){var s=dt(t),n=[J,Q].indexOf(s)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*n,[J,Z].indexOf(s)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=r}},Zt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=zt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},Jt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,s=t.name,n=i.mainAxis,o=void 0===n||n,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,d=i.altBoundary,h=i.padding,f=i.tether,u=void 0===f||f,p=i.tetherOffset,g=void 0===p?0:p,m=Kt(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:d}),_=dt(e.placement),b=Ft(e.placement),v=!b,y=yt(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,T=e.rects.reference,A=e.rects.popper,L="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O={x:0,y:0};if(E){if(o||a){var k="y"===y?Q:J,D="y"===y?G:Z,x="y"===y?"height":"width",C=E[y],S=E[y]+m[k],N=E[y]-m[D],j=u?-A[x]/2:0,P="start"===b?T[x]:A[x],I="start"===b?-A[x]:-T[x],M=e.elements.arrow,R=u&&M?ft(M):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},H=B[k],W=B[D],U=At(0,T[x],R[x]),$=v?T[x]/2-j-U-H-L:P-U-H-L,F=v?-T[x]/2+j+U+W+L:I+U+W+L,z=e.elements.arrow&&vt(e.elements.arrow),K=z?"y"===y?z.clientTop||0:z.clientLeft||0:0,Y=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,q=E[y]+$-Y-K,V=E[y]+F-Y;if(o){var X=At(u?Et(S,q):S,C,u?wt(N,V):N);E[y]=X,O[y]=X-C}if(a){var tt="x"===y?Q:J,et="x"===y?G:Z,it=E[w],st=it+m[tt],nt=it-m[et],ot=At(u?Et(st,q):st,it,u?wt(nt,V):nt);E[w]=ot,O[w]=ot-it}}e.modifiersData[s]=O}},requiresIfExists:["offset"]};function te(t,e,i){void 0===i&&(i=!1);var s,n,o=mt(e),r=ht(t),a=at(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!i)&&(("body"!==nt(e)||Ht(o))&&(l=(s=e)!==ot(s)&&at(s)?{scrollLeft:(n=s).scrollLeft,scrollTop:n.scrollTop}:Rt(s)),at(e)?((c=ht(e)).x+=e.clientLeft,c.y+=e.clientTop):o&&(c.x=Bt(o))),{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}var ee={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function se(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,s=void 0===i?[]:i,n=e.defaultOptions,o=void 0===n?ee:n;return function(t,e,i){void 0===i&&(i=o);var n,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ee,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,d={state:a,setOptions:function(i){h(),a.options=Object.assign({},o,a.options,i),a.scrollParents={reference:rt(t)?Wt(t):t.contextElement?Wt(t.contextElement):[],popper:Wt(e)};var n,r,c=function(t){var e=function(t){var e=new Map,i=new Set,s=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||function t(n){i.add(n.name),[].concat(n.requires||[],n.requiresIfExists||[]).forEach((function(s){if(!i.has(s)){var n=e.get(s);n&&t(n)}})),s.push(n)}(t)})),s}(t);return st.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((n=[].concat(s,a.options.modifiers),r=n.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(r).map((function(t){return r[t]}))));return a.orderedModifiers=c.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,s=void 0===i?{}:i,n=t.effect;if("function"==typeof n){var o=n({state:a,name:e,instance:d,options:s});l.push(o||function(){})}})),d.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(ie(e,i)){a.rects={reference:te(e,vt(i),"fixed"===a.options.strategy),popper:ft(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var s=0;s<a.orderedModifiers.length;s++)if(!0!==a.reset){var n=a.orderedModifiers[s],o=n.fn,r=n.options,l=void 0===r?{}:r,h=n.name;"function"==typeof o&&(a=o({state:a,options:l,name:h,instance:d})||a)}else a.reset=!1,s=-1}}},update:(n=function(){return new Promise((function(t){d.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(n())}))}))),r}),destroy:function(){h(),c=!0}};if(!ie(t,e))return d;function h(){l.forEach((function(t){return t()})),l=[]}return d.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),d}}var ne=se(),oe=se({defaultModifiers:[Nt,Zt,Ct,ct]}),re=se({defaultModifiers:[Nt,Zt,Ct,ct,Gt,qt,Jt,kt,Qt]}),ae=Object.freeze({__proto__:null,popperGenerator:se,detectOverflow:Kt,createPopperBase:ne,createPopper:re,createPopperLite:oe,top:Q,bottom:G,right:Z,left:J,auto:"auto",basePlacements:tt,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:et,placements:it,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:st,applyStyles:ct,arrow:kt,computeStyles:Ct,eventListeners:Nt,flip:qt,hide:Qt,offset:Gt,popperOffsets:Zt,preventOverflow:Jt});const le=new RegExp("ArrowUp|ArrowDown|Escape"),ce=g()?"top-end":"top-start",de=g()?"top-start":"top-end",he=g()?"bottom-end":"bottom-start",fe=g()?"bottom-start":"bottom-end",ue=g()?"left-start":"right-start",pe=g()?"right-start":"left-start",ge={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null},me={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)"};class _e extends j{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}static get Default(){return ge}static get DefaultType(){return me}static get DATA_KEY(){return"bs.dropdown"}toggle(){if(this._element.disabled||this._element.classList.contains("disabled"))return;const t=this._element.classList.contains("show");_e.clearMenus(),t||this.show()}show(){if(this._element.disabled||this._element.classList.contains("disabled")||this._menu.classList.contains("show"))return;const t=_e.getParentFromElement(this._element),e={relatedTarget:this._element};if(!N.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._inNavbar)B.setDataAttribute(this._menu,"popper","none");else{if(void 0===ae)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:r(this._config.reference)?(e=this._config.reference,void 0!==this._config.reference.jquery&&(e=this._config.reference[0])):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),s=i.modifiers.find(t=>"applyStyles"===t.name&&!1===t.enabled);this._popper=re(e,this._menu,i),s&&B.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(t=>N.on(t,"mouseover",null,(function(){}))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),N.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(this._element.disabled||this._element.classList.contains("disabled")||!this._menu.classList.contains("show"))return;const t={relatedTarget:this._element};N.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||(this._popper&&this._popper.destroy(),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),B.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,"hidden.bs.dropdown",t))}dispose(){N.off(this._element,".bs.dropdown"),this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_addEventListeners(){N.on(this._element,"click.bs.dropdown",t=>{t.preventDefault(),this.toggle()})}_getConfig(t){if(t={...this.constructor.Default,...B.getDataAttributes(this._element),...t},l("dropdown",t,this.constructor.DefaultType),"object"==typeof t.reference&&!r(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t}_getMenuElement(){return H.next(this._element,".dropdown-menu")[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return ue;if(t.classList.contains("dropstart"))return pe;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?de:ce:e?fe:he}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}static dropdownInterface(t,e){let i=b.get(t,"bs.dropdown");if(i||(i=new _e(t,"object"==typeof e?e:null)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){_e.dropdownInterface(this,t)}))}static clearMenus(t){if(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;if(/input|select|textarea|form/i.test(t.target.tagName))return}const e=H.find('[data-bs-toggle="dropdown"]');for(let i=0,s=e.length;i<s;i++){const s=b.get(e[i],"bs.dropdown"),n={relatedTarget:e[i]};if(t&&"click"===t.type&&(n.clickEvent=t),!s)continue;const o=s._menu;if(e[i].classList.contains("show")){if(t){if([s._element].some(e=>t.composedPath().includes(e)))continue;if("keyup"===t.type&&"Tab"===t.key&&o.contains(t.target))continue}N.trigger(e[i],"hide.bs.dropdown",n).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>N.off(t,"mouseover",null,(function(){}))),e[i].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),o.classList.remove("show"),e[i].classList.remove("show"),B.removeDataAttribute(o,"popper"),N.trigger(e[i],"hidden.bs.dropdown",n))}}}static getParentFromElement(t){return s(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?"Space"===t.key||"Escape"!==t.key&&("ArrowDown"!==t.key&&"ArrowUp"!==t.key||t.target.closest(".dropdown-menu")):!le.test(t.key))return;if(t.preventDefault(),t.stopPropagation(),this.disabled||this.classList.contains("disabled"))return;const e=_e.getParentFromElement(this),i=this.classList.contains("show");if("Escape"===t.key)return(this.matches('[data-bs-toggle="dropdown"]')?this:H.prev(this,'[data-bs-toggle="dropdown"]')[0]).focus(),void _e.clearMenus();if(!i&&("ArrowUp"===t.key||"ArrowDown"===t.key))return void(this.matches('[data-bs-toggle="dropdown"]')?this:H.prev(this,'[data-bs-toggle="dropdown"]')[0]).click();if(!i||"Space"===t.key)return void _e.clearMenus();const s=H.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",e).filter(c);if(!s.length)return;let n=s.indexOf(t.target);"ArrowUp"===t.key&&n>0&&n--,"ArrowDown"===t.key&&n<s.length-1&&n++,n=-1===n?0:n,s[n].focus()}}N.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',_e.dataApiKeydownHandler),N.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",_e.dataApiKeydownHandler),N.on(document,"click.bs.dropdown.data-api",_e.clearMenus),N.on(document,"keyup.bs.dropdown.data-api",_e.clearMenus),N.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),_e.dropdownInterface(this)})),m("dropdown",_e);const be={backdrop:!0,keyboard:!0,focus:!0},ve={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class ye extends j{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=H.findOne(".modal-dialog",this._element),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}static get Default(){return be}static get DATA_KEY(){return"bs.modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;this._isAnimated()&&(this._isTransitioning=!0);const e=N.trigger(this._element,"show.bs.modal",{relatedTarget:t});this._isShown||e.defaultPrevented||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),N.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',t=>this.hide(t)),N.on(this._dialog,"mousedown.dismiss.bs.modal",()=>{N.one(this._element,"mouseup.dismiss.bs.modal",t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(t){if(t&&t.preventDefault(),!this._isShown||this._isTransitioning)return;if(N.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();if(e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),N.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),N.off(this._element,"click.dismiss.bs.modal"),N.off(this._dialog,"mousedown.dismiss.bs.modal"),e){const t=n(this._element);N.one(this._element,"transitionend",t=>this._hideModal(t)),a(this._element,t)}else this._hideModal()}dispose(){[window,this._element,this._dialog].forEach(t=>N.off(t,".bs.modal")),super.dispose(),N.off(document,"focusin.bs.modal"),this._config=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null}handleUpdate(){this._adjustDialog()}_getConfig(t){return t={...be,...t},l("modal",t,ve),t}_showElement(t){const e=this._isAnimated(),i=H.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),e&&u(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus();const s=()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,N.trigger(this._element,"shown.bs.modal",{relatedTarget:t})};if(e){const t=n(this._dialog);N.one(this._dialog,"transitionend",s),a(this._dialog,t)}else s()}_enforceFocus(){N.off(document,"focusin.bs.modal"),N.on(document,"focusin.bs.modal",t=>{document===t.target||this._element===t.target||this._element.contains(t.target)||this._element.focus()})}_setEscapeEvent(){this._isShown?N.on(this._element,"keydown.dismiss.bs.modal",t=>{this._config.keyboard&&"Escape"===t.key?(t.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==t.key||this._triggerBackdropTransition()}):N.off(this._element,"keydown.dismiss.bs.modal")}_setResizeEvent(){this._isShown?N.on(window,"resize.bs.modal",()=>this._adjustDialog()):N.off(window,"resize.bs.modal")}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._resetScrollbar(),N.trigger(this._element,"hidden.bs.modal")})}_removeBackdrop(){this._backdrop.parentNode.removeChild(this._backdrop),this._backdrop=null}_showBackdrop(t){const e=this._isAnimated();if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",e&&this._backdrop.classList.add("fade"),document.body.appendChild(this._backdrop),N.on(this._element,"click.dismiss.bs.modal",t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===this._config.backdrop?this._triggerBackdropTransition():this.hide())}),e&&u(this._backdrop),this._backdrop.classList.add("show"),!e)return void t();const i=n(this._backdrop);N.one(this._backdrop,"transitionend",t),a(this._backdrop,i)}else if(!this._isShown&&this._backdrop){this._backdrop.classList.remove("show");const i=()=>{this._removeBackdrop(),t()};if(e){const t=n(this._backdrop);N.one(this._backdrop,"transitionend",i),a(this._backdrop,t)}else i()}else t()}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight;t||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");const e=n(this._dialog);N.off(this._element,"transitionend"),N.one(this._element,"transitionend",()=>{this._element.classList.remove("modal-static"),t||(N.one(this._element,"transitionend",()=>{this._element.style.overflowY=""}),a(this._element,e))}),a(this._element,e),this._element.focus()}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight;(!this._isBodyOverflowing&&t&&!g()||this._isBodyOverflowing&&!t&&g())&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),(this._isBodyOverflowing&&!t&&!g()||!this._isBodyOverflowing&&t&&g())&&(this._element.style.paddingRight=this._scrollbarWidth+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}_checkScrollbar(){const t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()}_setScrollbar(){this._isBodyOverflowing&&(this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",t=>t+this._scrollbarWidth),this._setElementAttributes(".sticky-top","marginRight",t=>t-this._scrollbarWidth),this._setElementAttributes("body","paddingRight",t=>t+this._scrollbarWidth)),document.body.classList.add("modal-open")}_setElementAttributes(t,e,i){H.find(t).forEach(t=>{if(t!==document.body&&window.innerWidth>t.clientWidth+this._scrollbarWidth)return;const s=t.style[e],n=window.getComputedStyle(t)[e];B.setDataAttribute(t,e,s),t.style[e]=i(Number.parseFloat(n))+"px"})}_resetScrollbar(){this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight"),this._resetElementAttributes("body","paddingRight")}_resetElementAttributes(t,e){H.find(t).forEach(t=>{const i=B.getDataAttribute(t,e);void 0===i&&t===document.body?t.style[e]="":(B.removeDataAttribute(t,e),t.style[e]=i)})}_getScrollbarWidth(){const t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}static jQueryInterface(t,e){return this.each((function(){let i=b.get(this,"bs.modal");const s={...be,...B.getDataAttributes(this),..."object"==typeof t&&t?t:{}};if(i||(i=new ye(this,s)),"string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=s(this);"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault(),N.one(e,"show.bs.modal",t=>{t.defaultPrevented||N.one(e,"hidden.bs.modal",()=>{c(this)&&this.focus()})});let i=b.get(e,"bs.modal");if(!i){const t={...B.getDataAttributes(e),...B.getDataAttributes(this)};i=new ye(e,t)}i.toggle(this)})),m("modal",ye);const we=()=>{const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)},Ee=(t,e,i)=>{const s=we();H.find(t).forEach(t=>{if(t!==document.body&&window.innerWidth>t.clientWidth+s)return;const n=t.style[e],o=window.getComputedStyle(t)[e];B.setDataAttribute(t,e,n),t.style[e]=i(Number.parseFloat(o))+"px"})},Te=(t,e)=>{H.find(t).forEach(t=>{const i=B.getDataAttribute(t,e);void 0===i&&t===document.body?t.style.removeProperty(e):(B.removeDataAttribute(t,e),t.style[e]=i)})},Ae={backdrop:!0,keyboard:!0,scroll:!1},Le={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class Oe extends j{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._addEventListeners()}static get Default(){return Ae}static get DATA_KEY(){return"bs.offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._config.backdrop&&document.body.classList.add("offcanvas-backdrop"),this._config.scroll||((t=we())=>{document.body.style.overflow="hidden",Ee(".fixed-top, .fixed-bottom, .is-fixed","paddingRight",e=>e+t),Ee(".sticky-top","marginRight",e=>e-t),Ee("body","paddingRight",e=>e+t)})(),this._element.classList.add("offcanvas-toggling"),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),setTimeout(()=>{this._element.classList.remove("offcanvas-toggling"),N.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t}),this._enforceFocusOnElement(this._element)},n(this._element)))}hide(){this._isShown&&(N.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._element.classList.add("offcanvas-toggling"),N.off(document,"focusin.bs.offcanvas"),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),setTimeout(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.backdrop&&document.body.classList.remove("offcanvas-backdrop"),this._config.scroll||(document.body.style.overflow="auto",Te(".fixed-top, .fixed-bottom, .is-fixed","paddingRight"),Te(".sticky-top","marginRight"),Te("body","paddingRight")),N.trigger(this._element,"hidden.bs.offcanvas"),this._element.classList.remove("offcanvas-toggling")},n(this._element))))}_getConfig(t){return t={...Ae,...B.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("offcanvas",t,Le),t}_enforceFocusOnElement(t){N.off(document,"focusin.bs.offcanvas"),N.on(document,"focusin.bs.offcanvas",e=>{document===e.target||t===e.target||t.contains(e.target)||t.focus()}),t.focus()}_addEventListeners(){N.on(this._element,"click.dismiss.bs.offcanvas",'[data-bs-dismiss="offcanvas"]',()=>this.hide()),N.on(document,"keydown",t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()}),N.on(document,"click.bs.offcanvas.data-api",t=>{const e=H.findOne(i(t.target));this._element.contains(t.target)||e===this._element||this.hide()})}static jQueryInterface(t){return this.each((function(){const e=b.get(this,"bs.offcanvas")||new Oe(this,"object"==typeof t?t:{});if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=s(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;N.one(e,"hidden.bs.offcanvas",()=>{c(this)&&this.focus()});const i=H.findOne(".offcanvas.show, .offcanvas-toggling");i&&i!==e||(b.get(e,"bs.offcanvas")||new Oe(e)).toggle(this)})),N.on(window,"load.bs.offcanvas.data-api",()=>{H.find(".offcanvas.show").forEach(t=>(b.get(t,"bs.offcanvas")||new Oe(t)).show())}),m("offcanvas",Oe);const ke=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),De=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,xe=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ce=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!ke.has(i)||Boolean(De.test(t.nodeValue)||xe.test(t.nodeValue));const s=e.filter(t=>t instanceof RegExp);for(let t=0,e=s.length;t<e;t++)if(s[t].test(i))return!0;return!1};function Se(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,"text/html"),n=Object.keys(e),o=[].concat(...s.body.querySelectorAll("*"));for(let t=0,i=o.length;t<i;t++){const i=o[t],s=i.nodeName.toLowerCase();if(!n.includes(s)){i.parentNode.removeChild(i);continue}const r=[].concat(...i.attributes),a=[].concat(e["*"]||[],e[s]||[]);r.forEach(t=>{Ce(t,a)||i.removeAttribute(t.nodeName)})}return s.body.innerHTML}const Ne=new RegExp("(^|\\s)bs-tooltip\\S+","g"),je=new Set(["sanitize","allowList","sanitizeFn"]),Pe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Ie={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},Me={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Re={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class Be extends j{constructor(t,e){if(void 0===ae)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return Me}static get NAME(){return"tooltip"}static get DATA_KEY(){return"bs.tooltip"}static get Event(){return Re}static get EVENT_KEY(){return".bs.tooltip"}static get DefaultType(){return Pe}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),N.off(this._element,this.constructor.EVENT_KEY),N.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.config=null,this.tip=null,super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=N.trigger(this._element,this.constructor.Event.SHOW),i=h(this._element),s=null===i?this._element.ownerDocument.documentElement.contains(this._element):i.contains(this._element);if(e.defaultPrevented||!s)return;const o=this.getTipElement(),r=t(this.constructor.NAME);o.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&o.classList.add("fade");const l="function"==typeof this.config.placement?this.config.placement.call(this,o,this._element):this.config.placement,c=this._getAttachment(l);this._addAttachmentClass(c);const d=this._getContainer();b.set(o,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(d.appendChild(o),N.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=re(this._element,o,this._getPopperConfig(c)),o.classList.add("show");const f="function"==typeof this.config.customClass?this.config.customClass():this.config.customClass;f&&o.classList.add(...f.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{N.on(t,"mouseover",(function(){}))});const u=()=>{const t=this._hoverState;this._hoverState=null,N.trigger(this._element,this.constructor.Event.SHOWN),"out"===t&&this._leave(null,this)};if(this.tip.classList.contains("fade")){const t=n(this.tip);N.one(this.tip,"transitionend",u),a(this.tip,t)}else u()}hide(){if(!this._popper)return;const t=this.getTipElement(),e=()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&t.parentNode&&t.parentNode.removeChild(t),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.Event.HIDDEN),this._popper&&(this._popper.destroy(),this._popper=null))};if(!N.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented){if(t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>N.off(t,"mouseover",f)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this.tip.classList.contains("fade")){const i=n(t);N.one(t,"transitionend",e),a(t,i)}else e();this._hoverState=""}}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");return t.innerHTML=this.config.template,this.tip=t.children[0],this.tip}setContent(){const t=this.getTipElement();this.setElementContent(H.findOne(".tooltip-inner",t),this.getTitle()),t.classList.remove("fade","show")}setElementContent(t,e){if(null!==t)return"object"==typeof e&&r(e)?(e.jquery&&(e=e[0]),void(this.config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this.config.html?(this.config.sanitize&&(e=Se(e,this.config.allowList,this.config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){let t=this._element.getAttribute("data-bs-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this._element):this.config.title),t}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){const i=this.constructor.DATA_KEY;return(e=e||b.get(t.delegateTarget,i))||(e=new this.constructor(t.delegateTarget,this._getDelegateConfig()),b.set(t.delegateTarget,i,e)),e}_getOffset(){const{offset:t}=this.config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{altBoundary:!0,fallbackPlacements:this.config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this.config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this.config.popperConfig?this.config.popperConfig(e):this.config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(t))}_getContainer(){return!1===this.config.container?document.body:r(this.config.container)?this.config.container:H.findOne(this.config.container)}_getAttachment(t){return Ie[t.toUpperCase()]}_setListeners(){this.config.trigger.split(" ").forEach(t=>{if("click"===t)N.on(this._element,this.constructor.Event.CLICK,this.config.selector,t=>this.toggle(t));else if("manual"!==t){const e="hover"===t?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i="hover"===t?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;N.on(this._element,e,this.config.selector,t=>this._enter(t)),N.on(this._element,i,this.config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.config.selector?this.config={...this.config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e.config.delay&&e.config.delay.show?e._timeout=setTimeout(()=>{"show"===e._hoverState&&e.show()},e.config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(()=>{"out"===e._hoverState&&e.hide()},e.config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=B.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{je.has(t)&&delete e[t]}),t&&"object"==typeof t.container&&t.container.jquery&&(t.container=t.container[0]),"number"==typeof(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this.config)for(const e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Ne);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.tooltip");const i="object"==typeof t&&t;if((e||!/dispose|hide/.test(t))&&(e||(e=new Be(this,i)),"string"==typeof t)){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m("tooltip",Be);const He=new RegExp("(^|\\s)bs-popover\\S+","g"),We={...Be.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Ue={...Be.DefaultType,content:"(string|element|function)"},$e={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Fe extends Be{static get Default(){return We}static get NAME(){return"popover"}static get DATA_KEY(){return"bs.popover"}static get Event(){return $e}static get EVENT_KEY(){return".bs.popover"}static get DefaultType(){return Ue}isWithContent(){return this.getTitle()||this._getContent()}setContent(){const t=this.getTipElement();this.setElementContent(H.findOne(".popover-header",t),this.getTitle());let e=this._getContent();"function"==typeof e&&(e=e.call(this._element)),this.setElementContent(H.findOne(".popover-body",t),e),t.classList.remove("fade","show")}_addAttachmentClass(t){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(t))}_getContent(){return this._element.getAttribute("data-bs-content")||this.config.content}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(He);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.popover");const i="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new Fe(this,i),b.set(this,"bs.popover",e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m("popover",Fe);const ze={offset:10,method:"auto",target:""},Ke={offset:"number",method:"string",target:"(string|element)"};class Ye extends j{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._selector=`${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,N.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return ze}static get DATA_KEY(){return"bs.scrollspy"}refresh(){const t=this._scrollElement===this._scrollElement.window?"offset":"position",e="auto"===this._config.method?t:this._config.method,s="position"===e?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),H.find(this._selector).map(t=>{const n=i(t),o=n?H.findOne(n):null;if(o){const t=o.getBoundingClientRect();if(t.width||t.height)return[B[e](o).top+s,n]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this._offsets.push(t[0]),this._targets.push(t[1])})}dispose(){super.dispose(),N.off(this._scrollElement,".bs.scrollspy"),this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}_getConfig(e){if("string"!=typeof(e={...ze,..."object"==typeof e&&e?e:{}}).target&&r(e.target)){let{id:i}=e.target;i||(i=t("scrollspy"),e.target.id=i),e.target="#"+i}return l("scrollspy",e,Ke),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(t){this._activeTarget=t,this._clear();const e=this._selector.split(",").map(e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`),i=H.findOne(e.join(","));i.classList.contains("dropdown-item")?(H.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add("active"),i.classList.add("active")):(i.classList.add("active"),H.parents(i,".nav, .list-group").forEach(t=>{H.prev(t,".nav-link, .list-group-item").forEach(t=>t.classList.add("active")),H.prev(t,".nav-item").forEach(t=>{H.children(t,".nav-link").forEach(t=>t.classList.add("active"))})})),N.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t})}_clear(){H.find(this._selector).filter(t=>t.classList.contains("active")).forEach(t=>t.classList.remove("active"))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.scrollspy");if(e||(e=new Ye(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,"load.bs.scrollspy.data-api",()=>{H.find('[data-bs-spy="scroll"]').forEach(t=>new Ye(t,B.getDataAttributes(t)))}),m("scrollspy",Ye);class qe extends j{static get DATA_KEY(){return"bs.tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active")||d(this._element))return;let t;const e=s(this._element),i=this._element.closest(".nav, .list-group");if(i){const e="UL"===i.nodeName||"OL"===i.nodeName?":scope > li > .active":".active";t=H.find(e,i),t=t[t.length-1]}const n=t?N.trigger(t,"hide.bs.tab",{relatedTarget:this._element}):null;if(N.trigger(this._element,"show.bs.tab",{relatedTarget:t}).defaultPrevented||null!==n&&n.defaultPrevented)return;this._activate(this._element,i);const o=()=>{N.trigger(t,"hidden.bs.tab",{relatedTarget:this._element}),N.trigger(this._element,"shown.bs.tab",{relatedTarget:t})};e?this._activate(e,e.parentNode,o):o()}_activate(t,e,i){const s=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?H.children(e,".active"):H.find(":scope > li > .active",e))[0],o=i&&s&&s.classList.contains("fade"),r=()=>this._transitionComplete(t,s,i);if(s&&o){const t=n(s);s.classList.remove("show"),N.one(s,"transitionend",r),a(s,t)}else r()}_transitionComplete(t,e,i){if(e){e.classList.remove("active");const t=H.findOne(":scope > .dropdown-menu .active",e.parentNode);t&&t.classList.remove("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),u(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&t.parentNode.classList.contains("dropdown-menu")&&(t.closest(".dropdown")&&H.find(".dropdown-toggle").forEach(t=>t.classList.add("active")),t.setAttribute("aria-expanded",!0)),i&&i()}static jQueryInterface(t){return this.each((function(){const e=b.get(this,"bs.tab")||new qe(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){t.preventDefault(),(b.get(this,"bs.tab")||new qe(this)).show()})),m("tab",qe);const Ve={animation:"boolean",autohide:"boolean",delay:"number"},Xe={animation:!0,autohide:!0,delay:5e3};class Qe extends j{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._setListeners()}static get DefaultType(){return Ve}static get Default(){return Xe}static get DATA_KEY(){return"bs.toast"}show(){if(N.trigger(this._element,"show.bs.toast").defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");const t=()=>{this._element.classList.remove("showing"),this._element.classList.add("show"),N.trigger(this._element,"shown.bs.toast"),this._config.autohide&&(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))};if(this._element.classList.remove("hide"),u(this._element),this._element.classList.add("showing"),this._config.animation){const e=n(this._element);N.one(this._element,"transitionend",t),a(this._element,e)}else t()}hide(){if(!this._element.classList.contains("show"))return;if(N.trigger(this._element,"hide.bs.toast").defaultPrevented)return;const t=()=>{this._element.classList.add("hide"),N.trigger(this._element,"hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){const e=n(this._element);N.one(this._element,"transitionend",t),a(this._element,e)}else t()}dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),N.off(this._element,"click.dismiss.bs.toast"),super.dispose(),this._config=null}_getConfig(t){return t={...Xe,...B.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},l("toast",t,this.constructor.DefaultType),t}_setListeners(){N.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',()=>this.hide())}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.toast");if(e||(e=new Qe(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return m("toast",Qe),{Alert:P,Button:I,Carousel:Y,Collapse:X,Dropdown:_e,Modal:ye,Offcanvas:Oe,Popover:Fe,ScrollSpy:Ye,Tab:qe,Toast:Qe,Tooltip:Be}}));
jQuery(document).ready(function() {

	// Shift Focus to Close Button Modals
	$(".modal").on('shown.bs.modal', function() {
		$(this).find('.btn-close').trigger('focus');
		$(this).find('.btn-close').focus();
	});

		setTimeout(function() {
			$('.faculty-listing-item').attr('tabindex','-1');
		}, 200);



	// Shift Focus to Search input on show
	$(".off-canvas-search").on('shown.bs.offcanvas', function() {
		setTimeout(function() {
			$('.offcanvas .form-control').trigger('focus');
		}, 200);
	});


	// Cards Text Image - Image Zoom On Button Hover
	$(".col-cti .animated-border-button").on('mouseover focus', function() {
		$(this).siblings('.image-box').find('.card-image').css('transform', 'scale(1.1)');
	});
	$(".col-cti .animated-border-button").on('mouseout focusout', function() {
		$(this).siblings('.image-box').find('.card-image').css('transform', 'scale(1)');
	});


	// Featured Cards Text Image - Image Zoom On Button Hover
	$(".featured-card").on('mouseover focus', function() {
		$(this).find('.featured-card-image').css('transform', 'scale(1.1)');
	});
	$(".featured-card").on('mouseout focusout', function() {
		$(this).find('.featured-card-image').css('transform', 'scale(1)');
	});




	// Featured Video - Multiple Load More Button Pagination
    
	$("#videoLoadmore").click(function(event) {
		event.preventDefault();
		var clickRows = jQuery('.video-row:hidden');
   
		if(clickRows.length >= 1) {
			$(".video-row:hidden").first().css('display','flex');
		} 
   
		if(clickRows.length > 1) {
		   setTimeout(function() {
			   $('#videoLoadmore').show();
		   }, 200);
	   } else {
		   setTimeout(function() {
			   $('#videoLoadmore').hide();
		   }, 200);
	   }
	});
   
   


	// Featured Video - Multiple Load More Button Pagination 
	$("#newsLoadmore").click(function(event) {
		event.preventDefault();
		$(".news-col:hidden").show("fast", function() {});
		$(".news-row").masonry("layout");
	});




	var hrAdded = false;
	jQuery('.audience-nav-links .dropdown').each(function(index, value) {
		var mobileLinks = jQuery(this).clone().addClass('position-static');
	
		if (mobileLinks.length) {

			jQuery('.mobile-secondary-dropdown').append(mobileLinks);

			jQuery('.mobile-secondary-dropdown').find('.position-static .dropdown-hover > .nav-link').attr('data-bs-toggle', 'dropdown');

			// Check if <hr /> has not been added yet
			if (!hrAdded) {
				jQuery('.mobile-secondary-dropdown').prepend('<hr />');
				hrAdded = true; // Set the flag to true to indicate <hr /> has been added
			}
		}
	});
	


    jQuery('.mobile-secondary-dropdown .menu-item ').each(function (index, value) {
        jQuery(this).attr('id', '');
    });


        jQuery('.mobile-secondary-dropdown .dropdown-toggle-top').each(function (index, value) {
        var currentID = jQuery(this).attr('id');
        var newID = currentID + '-mobile';
        jQuery(this).attr('id', newID);
    });

    jQuery('.mobile-secondary-dropdown .dropdown-menu').each(function (index, value) {
        var currentID = jQuery(this).attr('aria-labelledby');
        var newID = currentID + '-mobile';
        jQuery(this).attr('aria-labelledby', newID);
    });




	// Tab Block - Create and Append Desktop Tab links from the "Mobile" Tab links
	$('.tab-link').each(function(index, value) {
		var currentSnippet = $(this).clone();
		$('#tab-block').append(currentSnippet);

		$('.tab-link').keydown(function(event) {
			if (event.which === 13) { // Enter key code
			  var toggleButton = $(this).attr('data-bs-toggle');
			  $(toggleButton).click();
			}
		  });
	});


	// Visual Navigation - Directional Hover
	$('.dh-container').directionalHover();

	//Accordion ScrollTo
	jQuery('.accordion-header').on('click', function() {
		var element = jQuery(this);
		if (jQuery(window).width() < 800) {
		setTimeout(function() {
		  jQuery('html, body').animate({
			scrollTop: element.offset().top - 100
		  }, 10);
		}, 400);
	}
	  });

	  jQuery(document).ready(function () {
        var isMouseClick = false;
        // Handle click event
        jQuery('.col-image-gallery a').click(function () {
            isMouseClick = true;
            jQuery('.col-image-gallery a').removeClass('visible-outline');
            jQuery(this).removeClass('visible-outline');
        });

        // Handle focus event
        jQuery('.col-image-gallery a').focus(function () {
            if (!isMouseClick) {
                jQuery('.col-image-gallery a').removeClass('visible-outline');
                jQuery(this).addClass('visible-outline');
            }
            isMouseClick = false;
        });

        // Handle click event
        jQuery('.image-gallery .slick-arrow').click(function () {
            isMouseClick = true;
            jQuery('.col-image-gallery a').removeClass('visible-outline');
        });

        // Handle focus event
        jQuery('.image-gallery .slick-arrow').focus(function () {
            if (!isMouseClick) {
                jQuery('.col-image-gallery a').removeClass('visible-outline');
            }
            isMouseClick = false;
        });

    });


	jQuery(document).ready(function () {
		var isMouseClick = false;
	
		// Handle click event
		jQuery('.accordion-button').click(function () {
			isMouseClick = true;
			jQuery(this).removeClass('visible-outline');
		});

		// Handle focus event
		jQuery('.accordion-button').focus(function () {
			jQuery(this).addClass('visible-outline');
			if (!isMouseClick) {
				jQuery('.accordion-button').removeClass('visible-outline');
				jQuery(this).addClass('visible-outline');
			}
			isMouseClick = false;
		});
	
		// Handle focusout event
		jQuery('.accordion-button').on('focusout', function () {
			jQuery('.accordion-button').removeClass('visible-outline');
		});
	
		// Handle keypress event
		jQuery('.accordion-button').keypress(function (event) {
			if (event.which === 13 || event.keyCode === 13) {
				jQuery('.accordion-button').removeClass('visible-outline');
				jQuery(this).addClass('visible-outline');
				isMouseClick = false;
			}
		});
	});


	// DESKTOP NAVIGATION DROPDOWN RESPONSIVE OFFSET
	$(".header .dropdown-toggle").on("mouseover focus", function(event) {
		if (jQuery(window).width() > 1055) {
			var liparent = $(this.parentElement);
			var xOffset = liparent.offset().left;
			var something = $(this).next().next();
			if (xOffset > 700) {
				$(this).next().next().css("left", "unset");
			}
		}
	});

	$(".header .dropdown-toggle").on("mouseleave mouseout focusout", function(event) {
		$(this).next().attr('aria-expanded', 'false');
	});

    jQuery(".header .dropdown-toggle").on("click", function (event) {
		if (jQuery(window).width() < 1055) {
				event.preventDefault();
				if (jQuery(this).hasClass("show")) {
					var linkUrl = jQuery(this).attr('href');
					window.location.href = linkUrl;
				} else {
					jQuery('.header .navbar-nav').find('.dropdown .show').removeClass('show');
					jQuery(this).toggleClass('show');
					jQuery(this).next().next().toggleClass('show');
					jQuery(this).next().addClass('toggled');
				} 
		} 
	}); // Go To Link on Second Click On Expanded Dropdown

    jQuery(".mobile-menu-toggle").on("click", function (event) {
        if (jQuery(this).prev().hasClass("show")) {
            //MENU OPEN WHEN CLICKED
            jQuery(this).prev().removeClass('show');
            jQuery(this).next().removeClass('show');
            jQuery(this).removeClass('toggled');
        } else {
            //MENU WAS CLOSED WHEN CLICKED
            jQuery('.header .navbar-nav').find('.dropdown .show').removeClass('show');
            jQuery(this).prev().addClass('show');
            jQuery(this).next().addClass('show');
            jQuery(this).addClass('toggled');


        }
    });

	// Prevent last 'Paralax' from sticking
	$('.showcase-text-image').last().css('position', 'relative');


	// On Scroll Functions
	//Progress Footer Bar  
	jQuery(window).scroll((function() {
		let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
		jQuery("#footerTopBorder").css({
			width: w + "%"
		})
		//Parralax Scrolls Functions
		featcardParralax();
		fullwidthParralax();
	}));




	// HERO SECTION trigger hover state on focus 
	jQuery('.hero__text .button').on('focus keyup', function(e) {
		jQuery('.hero__text').addClass('hero_text_hover');
	});
	jQuery('.hero__text .button').on('keydown', function(e) {
		jQuery('.hero__text').removeClass('hero_text_hover');
	});

	// HERO SECTION VERTICAL REDLINE PARALLAX ON SCROLL
	jQuery(".verScroll_Col").prependTo(jQuery(".hero-wrapper"));
	if (jQuery("#object1").length > 0) {
		jQuery('#object1').css({
			'top': 45 + 'px'
		});
		var window_height1 = jQuery(window).height() - jQuery('#object1').height() + 250;
		var document_height1 = jQuery('.hero-wrapper').height() - jQuery('#object1').height();

		jQuery(function() {
			jQuery(window).scroll(function() {
				var scroll_position1 = jQuery(window).scrollTop();
				var object_position_top1 = window_height1 * (scroll_position1 / document_height1) + 45;
				jQuery('#object1').css({
					'top': object_position_top1
				});
			});
		});
	}
	if (jQuery("#object2").length > 0) {
		jQuery('#object2').css({
			'top': 120 + 'px'
		});
		var window_height2 = jQuery(window).height() - jQuery('#object2').height();
		var document_height2 = jQuery('.hero-wrapper').height() - jQuery('#object2').height();
		jQuery(function() {
			jQuery(window).scroll(function() {
				var scroll_position2 = jQuery(window).scrollTop();
				var object_position_top2 = window_height2 * (scroll_position2 / document_height2) + 120;
				jQuery('#object2').css({
					'top': object_position_top2
				});
			});
		});
	}




	jQuery('#play-video').on('click', function() {
		jQuery('#hero-video').get(0).play();
	  });
	  jQuery('#pause-video').on('click', function() {
		jQuery('#hero-video').get(0).pause();
	  });

	  var video = $("#hero-video")[0];
      var playButton = $("#play-video");
      var pauseButton = $("#pause-video");

      // Show the play button and hide the pause button initially

	  if (video) {

      playButton.show();

      // Add click event listener to play button
      playButton.on("click", function() {
        video.play();
        playButton.hide();
        pauseButton.show().focus();
      });

      // Add click event listener to pause button
      pauseButton.on("click", function() {
        video.pause();
        pauseButton.hide();
        playButton.show().focus();
      });

      // Add event listener to detect video state changes
      video.addEventListener("play", function() {
        pauseButton.show();
        playButton.hide();
      });

      video.addEventListener("pause", function() {
        playButton.show();
        pauseButton.hide();
      });
	}





	jQuery('.content-carousel-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: true,
		autoplaySpeed: 5000,
		rtl: true,
		autoplay: false,
		accessibility: true,
		prevArrow: '<button class="carousel-control-prev" type="button"><span class="carousel-control-prev-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="40.218" height="113.232"><path fill="#fff" d="M32.883 0h7.15L7.144 56.361l33.073 56.871h-7.15L-.001 56.457Z" data-name="Path 9473"/></svg></span><span class="visually-hidden">Previous</span></button>',
		nextArrow: '<button class="carousel-control-next" type="button"><span class="carousel-control-next-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="40.218" height="113.232" data-name="Group 10015"><path fill="#fff" d="M7.334 0H.184l32.889 56.361L0 113.232h7.15l33.068-56.775Z" data-name="Path 9473"/></svg></span><span class="visually-hidden">Next</span></button>',
	});



    // Content Carousel Block
    setTimeout(function () {
        jQuery('.carousel-inner .slick-track .slick-slide').attr('tabindex', '-1');
        jQuery('.slick-dots button').attr('tabindex', '0');
    }, 200);


    // On before slide change
    jQuery('.carousel-inner').on('init afterChange beforeChange', function (event, slick, currentSlide, nextSlide) {
        setTimeout(function () {
            jQuery('.carousel-inner .slick-track .slick-active').attr('tabindex', '-1');
            jQuery('.slick-dots button').attr('tabindex', '0');
        }, 200);
    });



	// Event Shell SLICK SLIDER 
	// jQuery('.event-shell-carousel').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	dots: false,
	// 	speed: 300,
	// 	infinite: true,
	// 	autoplaySpeed: 5000,
	// 	autoplay: false,
	// 	accessibility: true,
	// 	prevArrow: '<button class="carousel-control-prev" type="button"><span class="carousel-control-prev-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.218 113.232"><path fill="#343741" d="M32.883 0h7.15L7.144 56.361l33.073 56.871h-7.15L-.001 56.457Z" data-name="Path 9473"/></svg></span><span class="visually-hidden">Previous</span></button>',
	// 	nextArrow: '<button class="carousel-control-next" type="button"><span class="carousel-control-next-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" data-name="Group 10015" viewBox="0 0 40.218 113.232"><path fill="#343741" d="M7.334 0H.184l32.889 56.361L0 113.232h7.15l33.068-56.775Z" data-name="Path 9473"/></svg></span><span class="visually-hidden">Next</span></button>',
	// 	responsive: [{
	// 			breakpoint: 991,
	// 			settings: {
	// 				slidesToShow: 2,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 767,
	// 			settings: {
	// 				slidesToShow: 1,
	// 			}
	// 		}
	// 	]
	// });

	// $('.event-shell-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
	// 	setTimeout(function() {
	// 		$('.slick-active').attr('tabindex','0');
	// 	}, 200);
	//   });

	function SlickEventShell(){
		// Event Shell SLICK SLIDER
		jQuery('.event-shell-carousel').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  arrows: true,
		  dots: false,
		  speed: 300,
		  infinite: true,
		  autoplaySpeed: 5000,
		  autoplay: false,
		  accessibility: true,
		  prevArrow: '<button class="carousel-control-prev" type="button"><span class="carousel-control-prev-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="40.218" height="113.232"><path fill="#343741" d="M32.883 0h7.15L7.144 56.361l33.073 56.871h-7.15L-.001 56.457Z" data-name="Path 9473"/></svg></span><span class="visually-hidden">Previous</span></button>',
		  nextArrow: '<button class="carousel-control-next" type="button"><span class="carousel-control-next-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="40.218" height="113.232" data-name="Group 10015"><path fill="#343741" d="M7.334 0H.184l32.889 56.361L0 113.232h7.15l33.068-56.775Z" data-name="Path 9473"/></svg></span><span class="visually-hidden">Next</span></button>',
		  responsive: [{
			breakpoint: 991,
			settings: {
			  slidesToShow: 2,
			}
		  },
		  {
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
			  }
			}]
		});
	  }
	  function pollSlickEventShell(i){
		  i++;
		  if (i >= 100){}
		  else if(jQuery('.upcoming-events-item').length > 0){
			  SlickEventShell();
		  }
		  else{
			  setTimeout(function(){
				  pollSlickEventShell(i);
			  }
			  , 50);
			 }
	  }
  
	  pollSlickEventShell(0);

	// FACULTY LISTING CAROUSEL - CBC
	jQuery('.faculty-listing-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		speed: 300,
		infinite: true,
		autoplaySpeed: 5000,
		autoplay: false,
		accessibility: true,
		prevArrow: '<button class="carousel-control-prev" type="button"><span class="carousel-control-prev-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="40.218" height="113.232"><path fill="#D8D8D6" d="M32.883 0h7.15L7.144 56.361l33.073 56.871h-7.15L-.001 56.457Z" data-name="Path 9473"/></svg></span><span class="visually-hidden">Previous</span></button>',
		nextArrow: '<button class="carousel-control-next" type="button"><span class="carousel-control-next-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="40.218" height="113.232" data-name="Group 10015"><path fill="#D8D8D6" d="M7.334 0H.184l32.889 56.361L0 113.232h7.15l33.068-56.775Z" data-name="Path 9473"/></svg></span><span class="visually-hidden">Next</span></button>',
		responsive: [{
				breakpoint: 1055,
				settings: {
					slidesToShow: 3,
				}
			}, {
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	// On before slide change
$('.faculty-listing-carousel').on('init afterChange beforeChange', function(event, slick, currentSlide, nextSlide){
	setTimeout(function() {
		$('.faculty-listing-carousel .slick-active').attr('tabindex','-1');
	}, 200);
  });


	// Card Text Only
	jQuery('.card-container').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		speed: 300,
		infinite: false,
		autoplaySpeed: 5000,
		autoplay: false,
		accessibility: true,
		prevArrow: '<button type="button" role="presentation" class="cto-prev"><span aria-label="Previous">‹</span></button>',
		nextArrow: '<button type="button" role="presentation" class="cto-next"><span aria-label="Next">›</span></button>',
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
			}
		}, ]
	});

	// Featured Card
	jQuery('.featured-card-container').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		speed: 300,
		infinite: false,
		autoplay: false,
		accessibility: true,
		prevArrow: '<button type="button" role="presentation" class="cto-prev"><span aria-label="Previous">‹</span></button>',
		nextArrow: '<button type="button" role="presentation" class="cto-next"><span aria-label="Next">›</span></button>',
		responsive: [{
			breakpoint: 1024,
			settings: {
				infinite: true,
				slidesToShow: 1,
			}
		}, ]
	});

	jQuery('.stacked-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		infinite: true,
		arrows: true,
		dots: false,
		autoplaySpeed: 5000,
		autoplay: false,
		accessibility: true,
		prevArrow: '<button type="button" role="presentation" class="stacked-prev"><span aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 60"><path class="svg-bg" fill="#f3f1e9" d="M62 60H30a30 30 0 0 1 0-60h32Z"/><path class="svg-arrow" d="M34.075 45.338h2.708L27.874 30.07l8.959-15.406h-2.712l-8.958 15.38Z"/></svg></span></button>',
		nextArrow: '<button type="button" role="presentation" class="stacked-next"><span aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 60"><path class="svg-bg" fill="#f3f1e9" d="M0 0h32a30 30 0 0 1 0 60H0Z"/><path class="svg-arrow" d="M27.925 14.662h-2.708l8.909 15.268-8.959 15.406h2.712l8.958-15.38Z"/></svg></span></button>',
		fade: true,
		appendArrows:".stacked-arrow-wrapper",
	});


	jQuery('.stacked-slider').on('init afterChange', function(event, slick, direction) {
		// remove all prev/next
		slick.$slides.removeClass('prevdiv').removeClass('nextinStack').removeClass('secondinStack').removeClass('thirdinStack');
		slick.$slides.attr('tabindex', '-1');
		// find current slide
		for (var i = 0; i < slick.$slides.length; i++) {
			var $slide = $(slick.$slides[i]);
			if ($slide.hasClass('slick-current')) {
				jQuery(this).attr('tabindex','-1');
				// update DOM siblings
				$slide.prev().addClass('prevdiv');
				$slide.next().addClass('nextinStack');
				$slide.next().next().addClass('secondinStack');
				$slide.next().next().next().addClass('thirdinStack');
				break;
			}
		}
		setTimeout(function () {
            jQuery('.stacked-slider .slick-track').find('.slick-active').attr('tabindex', '-1');
        }, 200);
	});

	jQuery('.stacked-slider .slick-track').find('.slick-active').attr('tabindex', '-1');





	// Faculty Landing - Responsiveness ()
	function facultyLanding() {
		if ($(window).width() > 767) {
			$(".faculty-page .faculty-listing-item").show();
			$("#facultyLoadmore").hide();
		} else {
			if ($(".faculty-row").hasClass("load-more-touched")) {
				return;
			} else {
				$(".faculty-page .faculty-listing-item").hide().slice(0, 4).show();
				$("#facultyLoadmore").show();
			}
		}
	}
	facultyLanding();


		// Featured Video - Multiple Load More Button Pagination
    
		$("#facultyLoadmore").click(function(event) {
			event.preventDefault();
			var facRows = jQuery('.faculty-listing-item:hidden');
			$(".faculty-row").addClass('load-more-touched');
			$(facRows).slice(0, 4).show();
			var facRows = jQuery('.faculty-listing-item:hidden');
			if(facRows.length >= 1) {
				$('#facultyLoadmore').show();
		   } else {
			   setTimeout(function() {
				   $('#facultyLoadmore').hide();
			   }, 200);
		   }
		});


	// Remove Focus effect on facutly link click

	$(".faculty-listing-img").hover(function(e) {
		$(this).addClass('hovered');
	  }, function(a) {
		$(this).removeClass('hovered');
	  });


	$(".faculty-listing-img").on("click", function(event) {
		$(this).trigger( "blur" );
        $(this).removeClass('hovered');
		$(this).trigger( "focusout" );
	});
    
	$("#facultyLoadmore").on("click", function(event) {
		$(this).trigger( "blur" );
        $(this).removeClass('hovered');
		$(this).trigger( "focusout" );
	});



	// Resize Functions
	$(window).on('resize', function() {
		facultyLanding();

		if (jQuery(window).width() < 1055) {
			$('.header .dropdown-toggle').attr('data-bs-toggle', 'dropdown');
		} else {
			$('.header .dropdown-toggle').removeAttr('data-bs-toggle');
		}
	});


	
	// SECTION NAVIGATION
	$(".section-menu-btn").on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('menu-enabled');
		$(this).parent().toggleClass('menu-active');
		$('#section-nav-ul a').first().focus();
		if ($(".section-menu-btn").hasClass("menu-enabled")) {
			$('#section-nav-ul').find('.toggleExpanded').removeClass('toggleExpanded');
			$('#section-nav-ul').find('.dropdown-active').removeClass('dropdown-active');
			$('#section-nav-ul').find('.show').removeClass('show');
			$('#section-nav-ul').find('.menu-out').removeClass('menu-out');
		}
	});

	$("#section-nav-ul .dropdown-toggle").on('click', function(event) {
		$(this).parent().siblings().toggleClass('menu-out');
		$(this).toggleClass('dropdown-active');
		$(this).next().toggleClass('toggleExpanded');
		$(this).next().find('a').first().focus();
		var currentPage = $(this).parentsUntil('#section-nav-ul').find('.current-page');
		if ($(currentPage).hasClass("menu-out")) {
			$('.section-navigation-back').addClass('toggleExpanded');
		} else {
			$('.section-navigation-back').removeClass('toggleExpanded');
		}
	});


	$(".section-navigation-back").on('click', function() {
		var activeDt = $('#section-nav-ul').find('.toggleExpanded').last().prev();
		var activeDd = $('#section-nav-ul').find('.toggleExpanded').last();
		$(activeDd).removeClass('show toggleExpanded');
		$(activeDt).removeClass('show dropdown-active');
		$(activeDd).parent().siblings().toggleClass('menu-out');
	});


	$('#section-nav-ul .dropdown-toggle').each(function(index, value) {
		var navigationparentAttr = $(this).attr('href');
		if (navigationparentAttr) {
			var navigationparentTitle = $(this).html();
			var navigationparentLinks = '<li><a class="menu-parent-link" tabindex="0" href="' + navigationparentAttr + '">' + navigationparentTitle + '</a></li>';
			$(this).next().prepend(navigationparentLinks);
		}
	});

	jQuery("#section-nav-ul .dropdown-toggle").keydown(function (e) {
		if (e.keyCode == 13) {
		  jQuery(this).click();
		}
	  });
	// END SECTION NAVIGATION



	// Start Filtering and Masonry
	// init Isotope
	var $grid = $('.news-row').isotope({
		itemSelector: '.news-col'
	});

	// store filter for each group
	var filters = {};

	$('.filter-wrapper .dropdown-menu').on('click', 'button', function(event) {
		var $button = $(event.currentTarget);
		// get group key
		var $buttonGroup = $button.parents('.button-group');
		var filterGroup = $buttonGroup.attr('data-filter-group');
		// set filter for group
		filters[filterGroup] = $button.attr('data-filter');
		// combine filters
		var filterValue = concatValues(filters);
		// set filter for Isotope
		$grid.isotope({
			filter: filterValue
		});
	});


	// Change text of active filter in Dropdown

	$('.button-group').each(function(i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'button', function(event) {
			var currentValue = $(this).html();
			var $button = $(event.currentTarget);
			$($button).parents('.dropdown-menu').prev().html(currentValue);
		});
	});

	// flatten object by concatting values
	function concatValues(obj) {
		var value = '';
		for (var prop in obj) {
			value += obj[prop];
		}
		return value;
	}

});

// Force Masonry event to fire initially to make sure spaced correctly
jQuery(document).ready(function() {
	setTimeout(function() {
		$(".news-row").masonry("layout");
	}, 500);
});


function featcardParralax() {
	// Parallax Code - Showcase Text Image
	// Get all the elements to be parallaxed
	// We have 2 as the second parallax needs to move twice as "fast" as the first in order to create the overlap
	const featcardupElements = document.querySelectorAll('.animTop')
	const featcarddownElements = document.querySelectorAll('.animBottom')
	// The parallax function - Add Negative margin to parallax div to keep content below this section close 
	const featcardUp = elements => {
		if ('undefined' !== elements && elements.length > 0) {
			elements.forEach(element => {
				let y = window.innerHeight - element.getBoundingClientRect().top
				if (y > 0) {
					element.style.transform = 'translate3d(0, -' + (0.1 * y) + 'px ,0)'
				}
			})
		}
	}
	const featcardDown = elements => {
		if ('undefined' !== elements && elements.length > 0) {
			elements.forEach(element => {
				let y = window.innerHeight - element.getBoundingClientRect().top
				if (y > 0) {
					element.style.transform = 'translate3d(0, ' + (0.1 * y) + 'px ,0)'
				}
			})
		}
	}
	//If Larger Window Larger than 991px Do Parralax
	if ($(window).width() > 1024) {
		//If element is in viewport, set its position
		featcardUp(featcardupElements)
		featcardDown(featcarddownElements)
		//Call the function on scroll
		window.onscroll = () => {
			featcardUp(featcardupElements)
			featcardDown(featcarddownElements)
		}
	}
}

function fullwidthParralax() {
	// Parallax Code - Showcase Text Image
	// Get all the elements to be parallaxed
	// We have 2 as the second parallax needs to move twice as "fast" as the first in order to create the overlap
	const fullwidthbgElement = document.querySelectorAll('.fullwidthBg')
	// The parallax function - Add Negative margin to parallax div to keep content below this section close 
	const fullwidthBg = elements => {
		if ('undefined' !== elements && elements.length > 0) {
			elements.forEach(element => {
				let y = window.innerHeight - element.getBoundingClientRect().top
				if (y > 0) {
					element.style.transform = 'translate(-' + (y / 15) + 'px ,0)'
				}
			})
		}
	}
	//If Larger Window Larger than 1024 Do Parralax
	if ($(window).width() > 1024) {
		//If element is in viewport, set its position
		fullwidthBg(fullwidthbgElement)
		//Call the function on scroll
		window.onscroll = () => {
			fullwidthBg(fullwidthbgElement)
		}
	}
}

/*scroll header sticky*/
jQuery(document).ready(function() {

	var lastScrollTop = 0;
	var headerHeight = 0;
	var alertHeight = 0;
	var headerHeight = jQuery('.header').height();
	var alertHeight = jQuery('.alert-section').height();

	if (alertHeight) {
		realHeaderheight = alertHeight + headerHeight;
	} else {
		realHeaderheight = headerHeight;
	}

	jQuery(window).scroll(function(event) {
		var st = jQuery(this).scrollTop();
		if (jQuery(this).scrollTop() > realHeaderheight) {
			if (jQuery(this).scrollTop() > lastScrollTop) {
				jQuery('.header').addClass('scrolling_down');
				jQuery('.header').removeClass('scrolling_up');
			} else {
				jQuery('.header').addClass('scrolling_up');
				jQuery('.header').removeClass('scrolling_down');
			}
			lastScrollTop = st;
		}
	});


});




// Ensure Slider Elements remain in view when tabbing
jQuery(document).ready(function () {
    jQuery('.slider-section').each(function () {
        var sliderCol = jQuery(this).find('.slider-col');
        var sliderPost = jQuery(this).find('.slider');

        sliderCol.on("keydown", function (e) {
            if (e.shiftKey && e.keyCode === 9) {
                // User is tabbing backwards
                backwardsfocusSlide(sliderPost);
            } else if (e.keyCode === 9) {
                // User is tabbing forwards
                focusSlide(sliderPost);
                
                if (jQuery(this).index() !== 0) {
                    
                }
            }
        });
        

        // Slider Mobile Buttons
        const buttonRight = jQuery(this).find('.slideRight');
        const buttonLeft = jQuery(this).find('.slideLeft');
        var sliderColWidth = sliderCol.width();

        if (buttonRight.length) {
            buttonRight.on('click', function () {
                sliderPost[0].scrollLeft += sliderColWidth;
            });
        }

        if (buttonLeft.length) {
            buttonLeft.on('click', function () {
                sliderPost[0].scrollLeft -= sliderColWidth;
            });
        }
    });
});
function focusSlide(sliderPost) {
    var sliderColWidth = sliderPost.find('.slider-col').width();
    sliderPost[0].scrollLeft += sliderColWidth;
}

function backwardsfocusSlide(sliderPost) {
    var sliderColWidth = sliderPost.find('.slider-col').width();
    sliderPost[0].scrollLeft -= sliderColWidth;
}

  /*resize social -- need this to keep images as squared as possible */
function resizeSocial(){
	jQuery('.soc-container .social-item').height(jQuery('.soc-container').width()-30);
}

jQuery(document).ready(resizeSocial);
jQuery(window).on('resize',resizeSocial);
/*end resize social */



/* CTA Button Same Height */
function adjustButtonHeights() {
    jQuery('.cta-button').height('auto'); // Reset the heights to auto first
    var heights = jQuery('.cta-button').map(function () {
        return jQuery(this).height();
    }).get();
    var maxHeight = Math.max.apply(null, heights);
    jQuery('.cta-button').height(maxHeight);
}

jQuery(document).ready(function () {
    // Call the function on page load
    adjustButtonHeights();
    // Bind the function to the window's resize event
    jQuery(window).on('resize', adjustButtonHeights);
});

/*end CTA Button */




/* Shift focus Back to video wrapper after close */
jQuery(document).ready(function() {
	var originalLink = null;
  
	// Store the original link when a modal is opened
	jQuery(document).on('click', '.video-wrapper', function() {
	  originalLink = jQuery(this);
	});
  
	// Set the focus back to the original link when a modal is closed
	jQuery(document).on('hidden.bs.modal', '.modal', function() {
	  if (originalLink) {
		originalLink.focus();
	  }
	});
  });



  /* Shift focus Back to video wrapper after close */
jQuery(document).ready(function () {
    var originalLink = null;

    // Store the original link when a modal is opened
    jQuery(document).on('click', '.video-wrapper', function () {
        originalLink = jQuery(this);
    });

    // Set the focus back to the original link when a modal is closed
    jQuery(document).on('hidden.bs.modal', '.modal', function () {
        if (originalLink) {
            originalLink.focus();
        }
    });

});






!function(a){a.fn.directionalHover=function(b){function c(a,b,c,e,f,g,h,i){var n=0;g/2>=e-i&&(n^=j),c-h>=f/2&&(n^=k),e-i>g/2&&(n^=l),f/2>c-h&&(n^=m),d(n,a,b,c-h,e-i,f/2,g/2)}function d(a,b,c,d,i,j,k){e(a,n)?f(d,i,j,k)?h(b,c,0,2*-j):h(b,c,2*-k,0):e(a,o)?g(d,i,j,k)?h(b,c,2*-k,0):h(b,c,0,2*j):e(a,p)?g(d,i,j,k)?h(b,c,0,2*-j):h(b,c,2*k,0):e(a,q)&&(f(d,i,j,k)?h(b,c,2*k,0):h(b,c,0,2*j))}function e(a,b){return(a&b)===b}function f(a,b,c,d){return 0>d*a-c*b}function g(a,b,c,d){return 0>c*(b-d)+d*a-c*d}function h(a,b,c,d){"in"===b?a.animate({top:c,left:d},0,function(){a.stop().animate({top:0,left:0},i.speed,i.easing)}):"out"===b&&a.animate({top:0,left:0},0,function(){a.stop().animate({top:c,left:d},i.speed,i.easing)})}var i=a.extend({},a.fn.directionalHover.defaults,b),j=1,k=2,l=4,m=8,n=j|m,o=j|k,p=l|m,q=l|k;return this.css({position:"relative",overflow:"hidden"}),this.find("."+i.overlay).css({position:"absolute",top:"-100%"}),this.each(function(){var b=a(this);b.hover(function(a){c(b.find("."+i.overlay),"in",a.pageX,a.pageY,b.width(),b.height(),Math.floor(b.offset().left),b.offset().top)},function(a){c(b.find("."+i.overlay),"out",a.pageX,a.pageY,b.width(),b.height(),Math.floor(b.offset().left),b.offset().top)})})},a.fn.directionalHover.defaults={overlay:"dh-overlay",easing:"swing",speed:400}}(jQuery);
/*!
 * Lightbox for Bootstrap 5 v1.8.2 (https://trvswgnr.github.io/bs5-lightbox/)
 * Copyright 2022 Travis Aaron Wagner (https://github.com/trvswgnr/)
 * Licensed under MIT (https://github.com/trvswgnr/bs5-lightbox/blob/main/LICENSE)
 */ !(function () {
    "use strict";
    var t = {
            d: function (e, s) {
                for (var a in s) t.o(s, a) && !t.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: s[a] });
            },
            o: function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            },
        },
        e = {};
    t.d(e, {
        default: function () {
            return i;
        },
    });
    var s = window.bootstrap;
    const a = { Modal: s.Modal, Carousel: s.Carousel };
    class o {
        constructor(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (this.hash = this.randomHash()),
                (this.settings = Object.assign(Object.assign(Object.assign({}, a.Modal.Default), a.Carousel.Default), { interval: !1, target: '[data-toggle="lightbox"]', gallery: "", size: "xl", constrain: !0 })),
                (this.modalOptions = (() => this.setOptionsFromSettings(a.Modal.Default))()),
                (this.carouselOptions = (() => this.setOptionsFromSettings(a.Carousel.Default))()),
                "string" == typeof t && ((this.settings.target = t), (t = document.querySelector(this.settings.target))),
                (this.settings = Object.assign(Object.assign({}, this.settings), e)),
                (this.el = t),
                (this.type = t.dataset.type || ""),
                (this.src = this.getSrc(t)),
                (this.sources = this.getGalleryItems()),
                this.createCarousel(),
                this.createModal();
        }
        show() {
            document.body.appendChild(this.modalElement), this.modal.show();
        }
        hide() {
            this.modal.hide();
            const myInput = document.getElementById("tabReturn");
            myInput.focus()
        }
        setOptionsFromSettings(t) {
            return Object.keys(t).reduce((t, e) => Object.assign(t, { [e]: this.settings[e] }), {});
        }
        getSrc(t) {
            let e = t.dataset.src || t.dataset.remote || t.href || "http://via.placeholder.com/1600x900";
            if ("html" === t.dataset.type) return e;
            /\:\/\//.test(e) || (e = window.location.origin + e);
            const s = new URL(e);
            return (t.dataset.footer || t.dataset.caption) && s.searchParams.set("caption", t.dataset.footer || t.dataset.caption), s.toString();
        }
        getGalleryItems() {
            let t;
            if (this.settings.gallery) {
                if (Array.isArray(this.settings.gallery)) return this.settings.gallery;
                t = this.settings.gallery;
            } else this.el.dataset.gallery && (t = this.el.dataset.gallery);
            return t
                ? [...new Set(Array.from(document.querySelectorAll('[data-gallery="'.concat(t, '"]')), (t) => "".concat(t.dataset.type ? t.dataset.type : "").concat(this.getSrc(t))))]
                : ["".concat(this.type ? this.type : "").concat(this.src)];
        }
        getYoutubeId(t) {
            if (!t) return !1;
            const e = t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
            return !(!e || 11 !== e[2].length) && e[2];
        }
        getYoutubeLink(t) {
            const e = this.getYoutubeId(t);
            if (!e) return !1;
            const s = t.split("?");
            let a = s.length > 1 ? "?" + s[1] : "";
            return "https://www.youtube.com/embed/".concat(e).concat(a);
        }
        getInstagramEmbed(t) {
            if (/instagram/.test(t))
                return (t += /\/embed$/.test(t) ? "" : "/embed"), '<iframe src="'.concat(t, '" class="start-50 translate-middle-x" style="max-width: 500px" frameborder="0" scrolling="no" allowtransparency="true"></iframe>');
        }
        isEmbed(t) {
            const e = new RegExp("(" + o.allowedEmbedTypes.join("|") + ")").test(t),
                s = /\.(png|jpe?g|gif|svg|webp)/i.test(t) || "image" === this.el.dataset.type;
            return e || !s;
        }
        createCarousel() {
            const t = document.createElement("template"),
                e = o.allowedMediaTypes.join("|"),
                s = this.sources
                    .map((t, s) => {
                        t = t.replace(/\/$/, "");
                        const a = new RegExp("^(".concat(e, ")"), "i"),
                            o = /^html/.test(t),
                            i = /^image/.test(t);
                        a.test(t) && (t = t.replace(a, ""));
                        const n = this.settings.constrain ? "mw-100 mh-100 h-auto w-auto m-auto top-0 end-0 bottom-0 start-0" : "h-100 w-100",
                            l = new URLSearchParams(t.split("?")[1]);
                        let r = "",
                            c = t;
                        if (l.get("caption")) {
                            try {
                                (c = new URL(t)), c.searchParams.delete("caption"), (c = c.toString());
                            } catch (e) {
                                c = t;
                            }
                            r = '<p class="lightbox-caption m-0 p-2 text-center text-white small"><em>'.concat(l.get("caption"), "</em></p>");
                        }
                        let d = '<img src="'.concat(c, '" class="d-block ').concat(n, ' img-fluid" style="z-index: 1; object-fit: contain;" />'),
                            h = "";
                        const u = this.getInstagramEmbed(t),
                            m = this.getYoutubeLink(t);
                        this.isEmbed(t) &&
                            !i &&
                            (m && ((t = m), (h = 'title="YouTube video player" frameborder="0" allow="autoplay"')),
                            (d = u || '<iframe src="'.concat(t, '" ').concat(h, "autoplay allowfullscreen></iframe>"))),
                            o && (d = t);
                        return '\n\t\t\t\t<div class="carousel-item '
                            .concat(s ? "" : "active", '" style="min-height: 100px">\n\t\t\t\t\t')
                            .concat(
                                '<div class="position-absolute top-50 start-50 translate-middle text-white"><div class="spinner-border" style="width: 3rem height: 3rem" role="status"></div></div>',
                                '\n\t\t\t\t\t<div class="ratio ratio-16x9" style="background-color: #000;">'
                            )
                            .concat(d, "</div>\n\t\t\t\t\t")
                            .concat(r, "\n\t\t\t\t</div>");
                    })
                    .join(""),
                i =
                    this.sources.length < 2
                        ? ""
                        : '\n\t\t\t<button id="#lightboxCarousel-'
                              .concat(this.hash, '-prev" class="carousel-control carousel-control-prev h-75 m-auto" type="button" data-bs-target="#lightboxCarousel-')
                              .concat(
                                  this.hash,
                                  '" data-bs-slide="prev">\n\t\t\t\t<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n\t\t\t\t<span class="visually-hidden">Previous</span>\n\t\t\t</button>\n\t\t\t<button id="#lightboxCarousel-'
                              )
                              .concat(this.hash, '-next" class="carousel-control carousel-control-next h-75 m-auto" type="button" data-bs-target="#lightboxCarousel-')
                              .concat(this.hash, '" data-bs-slide="next">\n\t\t\t\t<span class="carousel-control-next-icon" aria-hidden="true"></span>\n\t\t\t\t<span class="visually-hidden">Next</span>\n\t\t\t</button>');
            let n = "lightbox-carousel carousel slide";
            "fullscreen" === this.settings.size && (n += " position-absolute w-100 translate-middle top-50 start-50");
            const l = '\n\t\t\t<div id="lightboxCarousel-'
                .concat(this.hash, '" class="')
                .concat(n, '" data-bs-ride="carousel" data-bs-interval="')
                .concat(this.carouselOptions.interval, '">\n\t\t\t\t<div class="carousel-inner">\n\t\t\t\t\t')
                .concat(s, "\n\t\t\t\t</div>\n\t\t\t\t")
                .concat(i, "\n\t\t\t</div>");
            (t.innerHTML = l.trim()), (this.carouselElement = t.content.firstChild);
            const r = Object.assign(Object.assign({}, this.carouselOptions), { keyboard: !1 });
            this.carousel = new a.Carousel(this.carouselElement, r);
            const c = this.type && "image" !== this.type ? this.type + this.src : this.src;
            return (
                this.carousel.to(this.findGalleryItemIndex(this.sources, c)),
                !0 === this.carouselOptions.keyboard &&
                    document.addEventListener("keydown", (t) => {
                        if ("ArrowLeft" === t.code) {
                            const t = document.getElementById("#lightboxCarousel-".concat(this.hash, "-prev"));
                            return t && t.click(), !1;
                        }
                        if ("ArrowRight" === t.code) {
                            const t = document.getElementById("#lightboxCarousel-".concat(this.hash, "-next"));
                            return t && t.click(), !1;
                        }
                    }),
                this.carousel
            );
        }
        findGalleryItemIndex(t, e) {
            let s = 0;
            for (const a of t) {
                if (a.includes(e)) return s;
                s++;
            }
            return 0;
        }
        createModal() {
            const t = document.createElement("template"),
                e = '\n\t\t\t<div class="modal lightbox fade" id="lightboxModal-'
                    .concat(this.hash, '" tabindex="-1" aria-hidden="true">\n\t\t\t\t<div class="modal-dialog modal-dialog-centered modal-')
                    .concat(
                        this.settings.size,
                        '">\n\t\t\t\t\t<div class="modal-content border-0 bg-transparent">\n\t\t\t\t\t\t<div class="modal-body p-0">\n\t\t\t\t\t\t\t<button type="button" class="btn-close position-absolute top-0 end-0 p-3" data-bs-dismiss="modal" aria-label="Close" style="z-index: 2; background: none;">'
                    )
                    .concat(
                        '<svg xmlns="http://www.w3.org/2000/svg" style="position: relative; top: -5px;" viewBox="0 0 16 16" fill="#fff"><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/></svg>',
                        "</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>"
                    );
            return (
                (t.innerHTML = e.trim()),
                (this.modalElement = t.content.firstChild),
                this.modalElement.querySelector(".modal-body").appendChild(this.carouselElement),
                this.modalElement.addEventListener("hidden.bs.modal", () => this.modalElement.remove()),
                this.modalElement.querySelector("[data-bs-dismiss]").addEventListener("click", () => this.modal.hide()),
                (this.modal = new a.Modal(this.modalElement, this.modalOptions)),
                this.modal
            );
        }
        randomHash() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
            return Array.from({ length: t }, () => Math.floor(36 * Math.random()).toString(36)).join("");
        }
    }
    (o.allowedEmbedTypes = ["embed", "youtube", "vimeo", "instagram", "url"]),
        (o.allowedMediaTypes = [...o.allowedEmbedTypes, "image", "html"]),
        (o.defaultSelector = '[data-toggle="lightbox"]'),
        (o.initialize = function (t) {
            t.preventDefault();
            new o(this).show();
        }),
        document.querySelectorAll(o.defaultSelector).forEach((t) => t.addEventListener("click", o.initialize)),
        "undefined" != typeof window && window.bootstrap && (window.bootstrap.Lightbox = o);
    var i = o;
    window.Lightbox = e.default;
})();