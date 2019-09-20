
import {util} from './util01.js';
import {components} from './components01.js';
import {BindComponent} from './bindComponent.js'

import { appendToContainer,recreateNode,removeContainer } from "./utilContainer.js";

var controls;


;(function(ns,components,$){
    "use strict";
    ns.UXLoadPanel = (function(){
    
        return function(options){
                       
           
           var params=[].slice.call(arguments);
           if (params.length>0){  
              this.initControl.apply(this,params);
           }
           
        }
    })();
    
    ns.UXLoadPanel.prototype = new components.container();
    
    
    ns.UXLoadPanel.prototype.initControl=function(options){
        ;(function(options){
            
            options.id=options.id||undefined
            options.containerComponent=options.containerComponent||".wrapper.page.child";
            options.containerView = options.containerView || ".main-body"
            options.textTemplate = options.textTemplate||undefined   
        })(options)
        
        this.init(options)
        this.initEventLoadPanel(options)
          
    }
    ns.UXLoadPanel.prototype.initEventLoadPanel = function(options){
       var self=this
       var optionsLoadPanel=options
       console.log('estoy en initeventloadpantel')
       console.log(options.id)
       var containerView=".main-body"
       var id=options.id
       var $template=$('#'+id+'.wrapper.page.child');
       /*
         puede ser que el id no este al misno nivel que .wrapper.page.child
         por tanto tenemos que tratar de buscar por id+' .wrapper.page.....
       */
       if (!$template[0]){
        $template=$('#'+id+' .wrapper.page.child');
       }
       var $buttonBack
      
       if ($template.length==0 && id){
          
        var panelControl=new components.container({
           container:containerView,
           textTemplate:options.textTemplate,
           data:{id:id}
        })
        panelControl.initevent=function(options){
            console.log('estoy dentro de initeent de panelControl')
            var timer=setTimeout(function(){
               changeAnimation.apply(self,[optionsLoadPanel,false])
               clearTimeout(timer)
               onClick()  
            },350)
             
              
          
            
            
            function onClick(){
               console.log("estoy en onClick")
               $buttonBack=$('#'+id+' '+'#btn-toggle-back-3')
               console.dir($buttonBack)
               //console.dir($buttonBack)
               $buttonBack.on("click",function(e){
                 console.log("estoy dentro de click")
                 changeAnimation.apply(self,[optionsLoadPanel,true]) 
                 
               })
            }
        }
        panelControl.bind=function(options){
            var self=this;
            console.log("estoy en function bind")
            console.dir(self)
            
            var bind=new BindComponent({
                containerView:'#'+id,
                target:self
            })
            
        }
        panelControl.onClick=function(e){
           console.log("estoy dentro de panelControl Click")
        }
       }

    }
    
    var changeAnimation = function(options,remove){
        console.log("estoy dentro de changeAnimation")
        //console.dir($template)
        var id=options.id
        var $template=$('#'+id+'.wrapper.page.child');
        var reftemplate= '#'+id+'.wrapper.page.child'
        
        if ($template.length==0){
          $template=$('#'+id+' .wrapper.page.child');
          reftemplate='#'+id+' .wrapper.page.child'
        }
        console.dir($template)
        console.log(reftemplate)
        if ($template.hasClass("animation")){
         $template.removeClass("animation")
         if (remove){
             var timer=setTimeout(function(){
                 //removeContainer('#'+id+'.wrapper.page.child')
                 removeContainer(reftemplate)
                 clearTimeout(timer)
             },400) 
         }
        }else{
         $template.addClass("animation")
        }
    }
    
})(controls=controls||{},components,jQuery)

export {controls}
if (!window.controls)
   window.controls={}
   
util.addNameSpace(window.controls,controls);
