/// <reference path="../shared/js/main.d.ts" />
import{util}from"./util01.js";var controls;;(function(ns,$){"use strict";ns.UXDatePicker=function(){return function(options){(function(options){options.id=options.id||void 0;options.namefield=options.namefield||"#fecha";options.namepicker=options.namepicker||"calendar";options.namebutton=options.namebutton||"#btn-fecha"})(options);this.options={};util.extend(options,this.options);this.init()}}();ns.UXDatePicker.prototype.init=function(){var self=this,id=self.options.id,nameCalendar=self.options.id+self.options.namepicker,field=document.querySelector("#"+id+" "+self.options.namefield),picker=new Pikaday({field:field,trigger:document.querySelector("#"+id+" "+self.options.namebutton),format:"DD/MM/YYYY",bound:!1,onSelect:function(){//console.log(d);
field.value=picker.toString();picker.hide();$("#"+nameCalendar).toggleClass("tether-open");tepicker.position()}//position: 'top left'
//reposition:true,
//container:document.querySelector(".main .content")
});picker.el.id=nameCalendar;picker.hide();//console.dir(picker.el);
$("#"+id+" #btn-fecha").on("click",function(e){e.preventDefault();$("#"+nameCalendar).toggleClass("tether-open");//tepicker.position();
console.log("estoy en click");if(picker.isVisible()){//picker.show();
picker.hide();//picker._o.bound=true;
}else{picker.show();tepicker.position();tepicker.position();//picker._o.bound=false;
//picker.adjustPosition()
//picker.show();
}});var tepicker=new Tether({element:"#"+nameCalendar,target:"#"+id+" "+self.options.namebutton,attachment:"bottom right",targetAttachment:"top right",constraints:[{to:"scrollParent",pin:!0}]});tepicker.position();picker.hide()}})(controls=controls||{},jQuery);export{controls};//console.dir(controls)
if(window.controls==void 0){window.controls={}}util.addNameSpace(window.controls,controls);