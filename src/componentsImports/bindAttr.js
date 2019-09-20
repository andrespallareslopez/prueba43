/// <reference path="../shared/js/main.d.ts" />

import {util} from './util01.js'

var controls;
;(function(ns,util){
    "use strict";
    ns.bindAttr=(function(){
        
        return function(options){
         
         var params=[].slice.call(arguments);
         if (params.length>0){
            
             this.initbind.apply(this,params);
         }
        }
          
    })()
    ns.bindAttr.prototype.initbind=function(options){
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
    ns.bindAttr.prototype.bind=function(options){
        var self=this
        var firstAttr=options.customAttr.split(":")[0]
        var secondAttr=options.customAttr.split(":")[1]
        console.log("estoy dentro de bindAttr")
        console.dir(options.element)
        console.log("firstAttr:"+firstAttr)
        console.log("secondAttr:"+secondAttr)
        
    }
    
})(controls=controls||{},util);

var bindAttr=controls.bindAttr;
export {bindAttr}

util.addNameSpace(window.controls,controls);
