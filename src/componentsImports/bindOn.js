/// <reference path="../shared/js/main.d.ts" />

import {util} from './util01.js'

var controls;
;(function(ns,util){
    "use strict";
    
    ns.bindOn=(function(){
        
        return function(options){
         
         var params=[].slice.call(arguments);
         if (params.length>0){
            
             this.initbind.apply(this,params);
         }
        }
          
    })() 
    ns.bindOn.prototype.initbind=function(options){
        (function(options){
          options.customAttr=options.customAttr||undefined
          options.element=options.element||undefined
          options.typebind=options.typebind||undefined
          options.target=options.target||undefined    
        })(options);
        
        this.options={};
            
        util.extend(options,this.options);
        this.bind.apply(this,[options])
    }
    ns.bindOn.prototype.bind=function(options){
        var self=this
        var nameEvent=options.customAttr.split(":")[0]
        var nameMethod=options.customAttr.split(":")[1]
        console.log("estoy dentro de bindOn")
        console.dir(options.element)
        console.log("nameEvent:"+nameEvent)
        console.log("nameMethod:"+nameMethod)
        console.dir(options.target)
        console.dir(options.target[nameMethod])
        options.element.addEventListener(nameEvent,options.target[nameMethod])
    }
    
    
    
     
})(controls=controls||{},util);

var bindOn=controls.bindOn;
export {bindOn}

util.addNameSpace(window.controls,controls);