(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{300:function(t,n,o){"use strict";o.r(n);var e={name:"n-switch",props:{value:[Array,Boolean],onText:String,offText:String},computed:{switchClass:function(){return"bootstrap-switch-"+(this.model?"on":"off")},model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{triggerToggle:function(){this.model=!this.model}}},r=o(43),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate",class:t.switchClass},[o("div",{staticClass:"bootstrap-switch-container",on:{click:function(n){return t.triggerToggle()}}},[o("span",{staticClass:"bootstrap-switch-handle-on "},[t._t("on",(function(){return[t._v("\n        "+t._s(t.onText)+"\n      ")]}))],2),t._v(" "),o("span",{staticClass:"bootstrap-switch-label"}),t._v(" "),o("span",{staticClass:"bootstrap-switch-handle-off bootstrap-switch-default"},[t._t("off",(function(){return[t._v("\n        "+t._s(t.offText)+"\n      ")]}))],2)])])}),[],!1,null,null,null);n.default=component.exports}}]);