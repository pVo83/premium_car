(()=>{var e={604:()=>{const e=document.querySelector(".burger"),t=document.querySelector(".header__nav"),o=document.querySelector(".layer"),n=document.querySelectorAll(".nav__link"),s=document.querySelector(".search-form"),i=document.querySelector(".search");e.addEventListener("click",(()=>{t.classList.toggle("header__nav_active"),o.classList.toggle("layer_active"),document.body.classList.toggle("page__body_active"),s.classList.remove("search-form_active"),i.classList.remove("search_active"),document.body.classList.remove("stop-scroll")})),o.addEventListener("click",(()=>{t.classList.remove("header__nav_active"),o.classList.remove("layer_active"),document.body.classList.remove("page__body_active")})),n.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.classList.remove("header__nav_active"),o.classList.remove("layer_active"),document.body.classList.remove("page__body_active")}))})),window.addEventListener("resize",(function(){window.innerWidth>1024&&document.querySelectorAll(".header__nav_active, .layer_active, .page__body_active").forEach((e=>{e.classList.remove("header__nav_active"),e.classList.remove("layer_active"),e.classList.remove("page__body_active")}))}))},706:()=>{document.addEventListener("scroll",(function(){const e=document.querySelector(".header");window.scrollY>0?e.classList.add("header_active"):e.classList.remove("header_active")}))},667:()=>{document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".scrollToTopBtn");window.addEventListener("scroll",(function(){window.scrollY>window.innerHeight/1?(e.style.opacity="1",e.style.visibility="visible"):(e.style.opacity="0",e.style.visibility="")})),e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}))},102:()=>{const e=document.querySelector(".search"),t=document.querySelector(".search-form"),o=document.querySelector(".search-form__btn");e.addEventListener("click",(function(){t.classList.add("search-form_active"),e.classList.add("search_active"),document.body.classList.add("stop-scroll")})),o.addEventListener("click",(function(o){t.classList.remove("search-form_active"),e.classList.remove("search_active"),document.body.classList.remove("stop-scroll")}))},860:()=>{function e(e){var t=!0,o=!1,n=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){t=!1}function a(){document.addEventListener("mousemove",r),document.addEventListener("mousedown",r),document.addEventListener("mouseup",r),document.addEventListener("pointermove",r),document.addEventListener("pointerdown",r),document.addEventListener("pointerup",r),document.addEventListener("touchmove",r),document.addEventListener("touchstart",r),document.addEventListener("touchend",r)}function r(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",r),document.removeEventListener("mousedown",r),document.removeEventListener("mouseup",r),document.removeEventListener("pointermove",r),document.removeEventListener("pointerdown",r),document.removeEventListener("pointerup",r),document.removeEventListener("touchmove",r),document.removeEventListener("touchstart",r),document.removeEventListener("touchend",r))}document.addEventListener("keydown",(function(o){o.metaKey||o.altKey||o.ctrlKey||(i(e.activeElement)&&d(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(o&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var o,n,c;i(e.target)&&(t||(n=(o=e.target).type,"INPUT"===(c=o.tagName)&&s[n]&&!o.readOnly||"TEXTAREA"===c&&!o.readOnly||o.isContentEditable))&&d(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(n),n=window.setTimeout((function(){o=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}(()=>{"use strict";o(860);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};console.log((()=>{const t=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(t)?(e.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(t)&&!window.MSStream?(e.htmlEl.classList.add("page--ios"),"iOS"):"unknown"})()),o(604),o(102),o(706),o(667)})()})();