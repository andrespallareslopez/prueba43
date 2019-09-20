/// <reference path="../shared/js/main.d.ts" />

import {util} from './util01.js'
import {bindOn} from './bindOn.js'
import {bindHtml} from './bindHtml.js'


var controls;
;(function(ns,util){
    "use strict";
    ns.BindElement=(function(){
    
        return function(options){
         
         var params=[].slice.call(arguments);
         if (params.length>0){
             this.initbind.apply(this,params);
         }
        }
          
    })()
    ns.BindElement.prototype.initbind=function(options){
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
    ns.BindElement.prototype.bind=function(options){
        var self=this
        switch(options.typebind){
            case 'bindTo':
              console.log("estoy en bindTo")
              
            break;
            case 'bindUp':
              console.log("estoy en bindUp")

            break;
            case 'bindOn':
              console.log('estoy en bindOn')
              var event=new bindOn(options)
            break;
            case 'bindHtml':
              console.log('estoy en bindHtml')
              var html=new bindHtml(options)
            break;
            case 'bindStyle':
               console.log('estoy en bindStyle')
               
            break;
        }
    }
    
})(controls=controls||{},util);  //podriamos poner simplemente this, y no definir components

var BindElement=controls.BindElement;
export {BindElement}

util.addNameSpace(window.controls,controls);

