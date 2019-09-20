

import {util} from './util01.js';


var controls;
;(function(ns,$){
    "use strict";
    ns.UXDatePicker=(function(){
       return function(options){
           
          (function(options){
              options.id=options.id||undefined
              options.namefield=options.namefield||'#fecha'
              options.namepicker=options.namepicker||'calendar'
              options.namebutton=options.namebutton||'#btn-fecha'
              
          })(options); 
          this.options={};
            
          util.extend(options,this.options);  
          this.init();
       };
    })();
    
    ns.UXDatePicker.prototype.init=function(){
        var self=this
        var id=self.options.id;
        //console.log("UXDatePicker "+id)
        var nameCalendar=self.options.id+self.options.namepicker;
        var field = document.querySelector("#"+id+" "+self.options.namefield); 
        
        var picker = new Pikaday({
            field: field,
            trigger: document.querySelector("#"+id+" "+self.options.namebutton),
            format: "DD/MM/YYYY",
            bound: false,
            onSelect: function () {
                //console.log(d);
                field.value = picker.toString();
                picker.hide();
                $("#"+nameCalendar).toggleClass("tether-open");
                tepicker.position();
            }
            
            //position: 'top left'
            //reposition:true,
            //container:document.querySelector(".main .content")
        });
        picker.el.id = nameCalendar;
        picker.hide();
        //console.dir(picker.el);
        
        $("#"+id+" #btn-fecha").on("click", function (e) {
            e.preventDefault();
            
            $("#"+nameCalendar).toggleClass("tether-open");
            //tepicker.position();
            console.log("estoy en click");
            
            if (picker.isVisible()) {
                //picker.show();
                picker.hide();
                //picker._o.bound=true;
            } else {
                picker.show();
                tepicker.position();
                tepicker.position();
                //picker._o.bound=false;
                //picker.adjustPosition()
                //picker.show();
                
            }
        }); 
        var tepicker = new Tether({
            element: "#"+nameCalendar,
            target: "#"+id+" "+self.options.namebutton,
            attachment: "bottom right",
            targetAttachment: 'top right',
            constraints: [
                {
                    to: 'scrollParent',
                    pin: true
                }]
        });
        tepicker.position()
        picker.hide()
    };
    

})(controls=controls||{},jQuery)

var UXDatePicker = controls.UXDatePicker
export {UXDatePicker}

//console.dir(controls)
if (window.controls==undefined){
   window.controls={}
}
util.addNameSpace(window.controls,controls);
