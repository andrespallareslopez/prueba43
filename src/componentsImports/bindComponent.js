/// <reference path="../shared/js/main.d.ts" />

import {util} from './util01.js'
import {BindElement} from './bindElement.js'

var controls
;(function(ns,util){
    "use strict";
    ns.BindComponent=(function(){
    
       return function(options){
        
        var params=[].slice.call(arguments);
        if (params.length>0){
           
            this.initbind.apply(this,params);
        }
       }
         
    })()
    ns.BindComponent.prototype.initbind=function(options){
        (function(options){
            options.containerView=options.containerView||undefined
            options.customAttr=options.customAttr||['data-bind-up','data-bind-to','data-bind-on','data-bind-html','data-bind-style']
            options.target=options.target||undefined
        })(options);

        this.options={};
            
        util.extend(options,this.options);
        this.findAttr.apply(this,[]); 
        
         
    }
    ns.BindComponent.prototype.findAttr=function(){
       console.log("estoy dentro de findAttr de la clase bindComponent")
       var self=this;
       var $elements=document.querySelector(self.options.containerView)
       //var cadenabind='['+self.options.customAttr.join('],[')+']';
       /*
       var customAttr=self.options.customAttr.map(function(x){
        var cad=x;     
        if (x.includes("data")){
            var cadArray=x.split('-')
            //console.dir(cadArray)
            cadArray.shift()
            cad=cadArray.join('-')             
        }   
        return dashToCamelCase(cad)
           
       })
       console.log(customAttr);
       */
       //var $attrElements=[];
       var bindElements=[]; 
       self.options.customAttr.forEach(function(e,i){
           //console.dir(e)
           var dataset;
           var cad;
           if (e.includes("data")){
            var cadArray=e.split('-')
            //console.dir(cadArray)
            cadArray.shift()
            cad=cadArray.join('-') 
           }      
           dataset=dashToCamelCase(cad)
           //console.log(dataset)
           var elements=Array.from($elements.querySelectorAll('['+e+']'))
           ///console.dir(elements)
           if (elements.length>0){
              elements.forEach(function(e){
                //$attrElements.push(e)
                //console.log(i)
                //var attr=Object.keys(e.dataset)[i]
                var attr=dataset
                //console.dir(Object.keys(e.dataset))
                //console.log(attr)
                var bindelement;
                var options={
                    typebind:dataset,
                   customAttr:e.dataset[attr], 
                   element:e,
                   target:self.options.target
                }
                bindelement=new BindElement(options)
                bindElements.push(bindelement)
              })
           }
         
           //return elements
       })
       //var $attrElements=$elements.querySelectorAll(cadenabind)
       
       console.dir(bindElements);
       /*
       var bindElements=Array.from($attrElements).map(function(b){
           var attr=Object.keys(b.dataset)[0]
           //console.dir(attr)
           var options={
               typebind:attr,
              customAttr:b.dataset[attr], 
              element:b,
              target:self.options.target
           }
           return options
       })
       console.dir(bindElements)
       */
    }
    function camelCaseToDash( myStr ) {
       return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
    }
    function dashToCamelCase( myStr ) {
        return myStr.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    }
    
    
})(controls=controls||{},util);  //podriamos poner simplemente this, y no definir components

var BindComponent=controls.BindComponent;
export {BindComponent}


util.addNameSpace(window.controls,controls);

