import{util}from"./util01.js";import{components}from"./components01.js";import{appendToContainer,recreateNode,removeContainer}from"./utilContainer.js";var controls;;(function(ns,components,$){"use strict";ns.UXButtonPanelChangeAnimation=function(){return function(options){var params=[].slice.call(arguments);if(0<params.length){this.initControl.apply(this,params)}}}();ns.UXButtonPanelChangeAnimation.prototype=new components.container;ns.UXButtonPanelChangeAnimation.prototype.initControl=function(options){;(function(options){options.id=options.id||void 0;options.containerComponent=options.containerComponent||".wrapper.page.child";options.data=options.data||void 0;options.buttonBack=options.buttonBack||"#btn-toggle-back-3";options.onButtonClick=options.onButtonClick||void 0})(options);this.init(options);this.initEventButtonChangeAnimation(options);if(!this.options.textTemplate&&this.initevent){this.initevent(options)}};ns.UXButtonPanelChangeAnimation.prototype.initEventButtonChangeAnimation=function(options){var self=this,$template=$("#"+options.id+options.containerComponent);let reftemplate="#"+options.id+options.containerComponent;if(0==$template.length){$template=$("#"+options.id+" "+options.containerComponent);reftemplate="#"+options.id+" "+options.containerComponent}var $buttonBack=$("#"+options.id+" "+options.buttonBack);//console.dir($buttonBack)
$buttonBack.on("click",function(e){console.log("estoy dentro de click en mybuttoncollection01");changeAnimation(!0,options.id)})};var changeAnimation=function(remove,id){console.log("estoy dentro de changeAnimation en UXButtonPanelChangeAnimation");//console.dir($template)
var $template=$("#"+id+".wrapper.page.child"),reftemplate="#"+id+".wrapper.page.child";if(0==$template.length){$template=$("#"+id+" .wrapper.page.child");reftemplate="#"+id+" .wrapper.page.child"}if($template.hasClass("animation")){$template.removeClass("animation");if(remove){var timer=setTimeout(function(){//removeContainer('#'+id+'.wrapper.page.child')
removeContainer(reftemplate);clearTimeout(timer)},400)}}else{$template.addClass("animation")}}})(controls=controls||{},components,jQuery);export{controls};if(!window.controls)window.controls={};util.addNameSpace(window.controls,controls);