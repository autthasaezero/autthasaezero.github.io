(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{279:function(t,n,e){"use strict";e.r(n);e(35);var l={name:"parallax",data:function(){return{styles:{},debounceTimeout:6}},methods:{handleScroll:function(t){var n=t/2;this.styles={transform:"translate3d(0, ".concat(n,"px,0)")}},checkForParallax:function(t){var n,e,l,o,r=this;(n=function(){return r.handleScroll(t)},e=this.debounceTimeout,function(){var t=this,r=arguments;clearTimeout(o),o=setTimeout((function(){o=null,l||n.apply(t,r)}),e),l&&!o&&n.apply(t,r)})()}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var n=this.scrollY;t.checkForParallax(n)}))}},o=e(43),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{style:t.styles},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports}}]);