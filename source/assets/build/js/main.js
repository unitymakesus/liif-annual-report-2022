(()=>{var t,e={241:(t,e,n)=>{"use strict";var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,a,o=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var s=(e+="").split(".");if(n=s[0],r=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){a="";for(var l=3,u=0,c=0,d=n.length;c<d;++c)i.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(a=i.options.separator+a),u++,a=n[d-c-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),o+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);this.el&&("INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e)},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}(),a=n(153),o=n.n(a);const s=function(t){for(var e=t.querySelectorAll('[role="tab"]'),n=t.querySelectorAll('[role="tabpanel"]'),r=0,i={end:35,home:36,left:37,up:38,right:39,down:40},a={37:-1,38:-1,39:1,40:1},o=0;o<e.length;++o)s(o);function s(t){e[t].addEventListener("click",l),e[t].addEventListener("keydown",u),e[t].addEventListener("keyup",c),e[t].index=t}function l(t){h(t.target,!1)}function u(t){switch(t.keyCode){case i.end:t.preventDefault(),h(e[e.length-1]);break;case i.home:t.preventDefault(),h(e[0]);break;case i.up:case i.down:d(t)}}function c(t){switch(t.keyCode){case i.left:case i.right:d(t)}}function d(n){var r=n.keyCode,o=!1;"vertical"==t.querySelector('[role="tablist"]').getAttribute("aria-orientation")?r!==i.up&&r!==i.down||(n.preventDefault(),o=!0):r!==i.left&&r!==i.right||(o=!0),o&&function(t){for(var n=t.keyCode,r=0;r<e.length;r++)e[r].addEventListener("focus",f);if(a[n]){var o=t.target;void 0!==o.index&&(e[o.index+a[n]]?e[o.index+a[n]].focus():n===i.left||n===i.up?e[e.length-1].focus():n!==i.right&&n!=i.down||e[0].focus())}}(n)}function h(t,r){r=r||!0,function(){for(var t=0;t<e.length;t++)e[t].setAttribute("tabindex","-1"),e[t].setAttribute("aria-selected","false"),e[t].removeEventListener("focus",f);for(var r=0;r<n.length;r++)n[r].setAttribute("hidden","hidden")}(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true");var i=t.getAttribute("aria-controls");document.getElementById(i).removeAttribute("hidden"),r&&t.focus()}function f(t){var e=t.target;setTimeout(p,r,e)}function p(t){focused=document.activeElement,t===focused&&h(t,!1)}};window.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".tabs");t.length&&t.forEach((function(t){s(t)}));var e=document.querySelectorAll(".table-years");e.length&&e.forEach((function(t){var e=t.querySelectorAll("button"),n=document.querySelectorAll("table."+t.dataset.tables);e.forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault(),t.querySelector("button.active").classList.remove("active"),e.classList.add("active"),n.length&&n.forEach((function(t){var n=t.querySelectorAll("td, th");n.length&&n.forEach((function(t){t.classList.remove("active")}));var r=e.dataset.col,i=t.querySelectorAll("tbody td:nth-of-type("+r+")");i.length&&i.forEach((function(t){t.classList.add("active")})),r++;var a=t.querySelectorAll("thead th:nth-of-type("+r+")");a.length&&a.forEach((function(t){t.classList.add("active")}))}))}))}))})),o()({selector:".animate"});document.querySelector(".progress-bar__overlay"),new i("progress",26,{enableScrollSpy:!0,scrollSpyOnce:!0});var n=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("in-viewport"),n.unobserve(t.target))}))}));document.querySelectorAll(".progress-bar__overlay, .green-rule, .green-rule__hero, .green-rule__article, .green-rule__tabs").forEach((function(t){n.observe(t)}))}))},753:()=>{},741:()=>{},153:function(t){t.exports=(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.d(e,{default:()=>E});var a="Sal was not initialised! Probably it is used in SSR.",o="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",s={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},l=[],u=null,c=function(t){t&&t!==s&&(s=r(r({},s),t))},d=function(t){t.classList.remove(s.animateClassName)},h=function(t,e){var n=new CustomEvent(t,{bubbles:!0,detail:e});e.target.dispatchEvent(n)},f=function(){document.body.classList.add(s.disabledClassName)},p=function(){u.disconnect(),u=null},m=function(){return s.disabled||"function"==typeof s.disabled&&s.disabled()},v=function(t,e){t.forEach((function(t){var n=t.target,r=void 0!==n.dataset.salRepeat,i=void 0!==n.dataset.salOnce,a=r||!(i||s.once);t.intersectionRatio>=s.threshold?(function(t){t.target.classList.add(s.animateClassName),h(s.enterEventName,t)}(t),a||e.unobserve(n)):a&&function(t){d(t.target),h(s.exitEventName,t)}(t)}))},g=function(){var t=[].filter.call(document.querySelectorAll(s.selector),(function(t){return!function(t){return t.classList.contains(s.animateClassName)}(t,s.animateClassName)}));return t.forEach((function(t){return u.observe(t)})),t},b=function(){f(),p()},y=function(){document.body.classList.remove(s.disabledClassName),u=new IntersectionObserver(v,{root:s.root,rootMargin:s.rootMargin,threshold:s.threshold}),l=g()},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(),Array.from(document.querySelectorAll(s.selector)).forEach(d),c(t),y()},w=function(){var t=g();l.push(t)};const E=function(){if(c(arguments.length>0&&void 0!==arguments[0]?arguments[0]:s),"undefined"==typeof window)return console.warn(a),{elements:l,disable:b,enable:y,reset:V,update:w};if(!window.IntersectionObserver)throw f(),Error(o);return m()?f():y(),{elements:l,disable:b,enable:y,reset:V,update:w}};return e.default})()}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.m=e,t=[],r.O=(e,n,i,a)=>{if(!n){var o=1/0;for(c=0;c<t.length;c++){for(var[n,i,a]=t[c],s=!0,l=0;l<n.length;l++)(!1&a||o>=a)&&Object.keys(r.O).every((t=>r.O[t](n[l])))?n.splice(l--,1):(s=!1,a<o&&(o=a));if(s){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,i,a]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={522:0,870:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var i,a,[o,s,l]=n,u=0;if(o.some((e=>0!==t[e]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var c=l(r)}for(e&&e(n);u<o.length;u++)a=o[u],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.O(void 0,[870],(()=>r(241))),r.O(void 0,[870],(()=>r(753)));var i=r.O(void 0,[870],(()=>r(741)));i=r.O(i)})();