import{util}from"./util01.js";import{components}from"./components01.js";var controls;;(function(ns,components,$){"use strict";ns.UXSearchPanel=function(){return function(options){var params=[].slice.call(arguments);if(0<params.length){this.initControl.apply(this,params)}}}();ns.UXSearchPanel.prototype=new components.container;ns.UXSearchPanel.prototype.initControl=function(options){;(function(options){options.id=options.id||void 0;options.containerComponent=options.containerComponent||".form-search";options.data=options.data||void 0;options.inputText=options.inputText||"#input-search";options.onButtonClick=options.onButtonClick||void 0;options.onClose=options.onClose||void 0;options.onSearch=options.onSearch||void 0,options.onSearchBefore=options.onSearchBefore||void 0})(options);var id=options.id;this.$inputText=void 0;this.init(options);this.initEventInputSearch(options);if(!this.options.textTemplate&&this.initevent){this.initevent(options)}};ns.UXSearchPanel.prototype.initEventInputSearch=function(options){var self=this;console.log("estoy dentro de UXSearchPanel initEventInputSearch");//self.$inputText=$("#"+options.id+" "+options.containerComponent+" "+options.inputText)
//self.$inputText=$(options.inputText)
self.$inputText=$("#"+options.id+" "+options.inputText);console.dir(self.$inputText);self.$inputText.on("keydown",function(e){if(options.onSearchBefore){options.onSearchBefore(options.data,self.$inputText.val(),options.id)}});self.$inputText.on("keyup",debounce(function(e){if(options.onSearch){//console.log(self.$inputText.val())
options.onSearch(options.data,self.$inputText.val(),options.id)}},300))};function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments,later=function(){timeout=null;if(!immediate)func.apply(context,args)},callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args)}}})(controls=controls||{},components,jQuery);export{controls};if(!window.controls)window.controls={};util.addNameSpace(window.controls,controls);