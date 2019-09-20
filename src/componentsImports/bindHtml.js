/// <reference path="../shared/js/main.d.ts" />

import {util} from './util01.js'
import {bindAttr} from './bindAttr.js'
import {components} from './components01.js';

var controls;
;(function(ns,util){
    "use strict";
    ns.bindHtml=(function(){
        
        return function(options){
         
          var params=[].slice.call(arguments);
          if (params.length>0){  
             this.initbind.apply(this,params);
          }
        }  
    })()
    ns.bindHtml.prototype=new bindAttr();
    /*
    ns.bindHtml.prototype.initbind=function(options){
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
    */
    ns.bindHtml.prototype.bind=function(options){
        var self=this
        console.log("Estoy en bindHtml")
        var firstAttr=options.customAttr.split(":")[0]
        var secondAttr=options.customAttr.split(":")[1]
        console.log("estoy dentro de bindOn")
        console.dir(options.element)
        console.log("firstAttr:"+firstAttr)
        console.log("secondAttr:"+secondAttr)
        switch(firstAttr){
            case 'content':
               
            break;
            case 'include':
               var url=secondAttr
               getTemplateByUrl(url).then(function(data){
                  options.element.innerHTML=data
               })
            break;
            case 'property':
               
            break;
               
        }
        
    }
    var getTemplateByUrl=(function(){
        return function(url){
           var promise=new Promise(function(resolve,reject){
               $.ajax({
                   type:"GET",
                   url:url,
                   timeout:30000
               }).done(function(data,textstatus){
                   //console.log("getTemplate  ************************");
                   //console.log(data);
                   
                   resolve(data); 
                   
               }).fail(function(jqxhr,settings,exception){
                   console.log(exception);
                   console.log(path+template+".html");
                   reject(exception);
               });            
           });
           return promise;
        };
    })();
    var appendToContainer=function(html,containerview){
        
        console.log("estoy dentro de appendToContainer en bindHtml");
        console.log(containerview)
        
        
        $(html).appendTo(containerview);
        
    };

})(controls=controls||{},util);

var bindHtml=controls.bindHtml;
export {bindHtml}

util.addNameSpace(window.controls,controls);


