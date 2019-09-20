/// <reference path="../shared/js/main.d.ts" />

import {util} from './util01.js';
import {components} from './components01.js';

var controls;

;(function(ns,components,$){
    "use strict";
    ns.UXDataList=(function(){
       return function(options){
                      
       
        var params=[].slice.call(arguments);
        if (params.length>0){
            
            this.initControl.apply(this,params);
        }
        
       }
    })();
    ns.UXDataList.prototype=new components.container();
    
   
   
    ns.UXDataList.prototype.initControl=function(options){
        
        
        ;(function(options){
            options.id=options.id||undefined
            options.containerComponent=options.containerComponent||".panel-datalist"
            options.data=options.data||undefined
            options.nameblock=options.nameblock||'.group-block'
            options.namefield=options.namefield||'#combotxt'
            options.namedatalist=options.namedatalist||'.datalist'
            options.namebutton=options.namebutton||'#search'
            options.namebuttonclose=options.namebuttonclose||'#btn-slide-close01'
            options.inputText=options.inputText||'#combotxt' 
            options.onButtonClick=options.onButtonClick||undefined
            options.onClose=options.onClose||undefined
        })(options)
        //renombramos el datalist
        var id=options.id;
        var namedatalist=id+"datalist";
        $("#"+id+" "+options.namedatalist).get(0).id=namedatalist;
        //******************************** */
        options.container="#"+namedatalist+" "+options.containerComponent;
        //********************************* */
        this.$inputText=undefined

        this.init(options)
        
        this.eventbuttons()

        //Si no estubiera definida la propiedad textTemplate entonces
        //no va a iniciar el initevent desde components01.js, por tanto
        //tenemos que lanzarlo nosotros manualmente.
        if (!this.options.textTemplate && this.initevent){
            this.initevent(options)
         }   
    }
    ns.UXDataList.prototype.eventbuttons=function(){
        var self=this
        console.log('estoy en UXDATAlist event buttons con id:'+self.options.id)

        var id=self.options.id;
        var namedatalist=id+"datalist";
        //console.log("UXDataList "+id)
        //console.dir( $("#"+id+" "+".datalist").get(0).id)
        $("#"+id+" "+self.options.namedatalist).get(0).id=namedatalist;
        //console.dir($("#"+namedatalist))
        $("#"+id+" "+self.options.namebutton).on("click", function (e) {
            console.log('estoy dentro de:'+"#"+id+" "+self.options.namebutton)
            e.preventDefault();
            //console.log("estoy dentro")
            //console.dir(e)
            $(getnamedatalist.apply(self,[])).toggleClass("tether-open");
            telist.position();
            
             
            if (self.options.onButtonClick  && $("#"+namedatalist).hasClass("tether-open")){
                console.log("estoy dentro de onButtonClick")
                self.options.onButtonClick(self.options)
            }else if ((self.options.fncreate ) && $("#"+namedatalist).hasClass("tether-open")){
                console.log("estoy dentro de fncreate")
                self.options.fncreate()
            }
        });

        $("#"+namedatalist+" "+self.options.namebuttonclose).on("click",function(e){
           e.preventDefault()
           
           //console.log("estoy dentro")
           $(getnamedatalist.apply(self,[])).toggleClass("tether-open");
           telist.position();
           
           if (self.options.onClose){
               self.options.onClose()
           }
           
        })
        
        $("#"+id+" "+self.options.nameblock).on("click",function(e){
            console.log("estoy dentro"+"#"+id+" "+self.options.nameblock)
            //console.dir(e)
            e.preventDefault()
            if ($(getnamedatalist.apply(self,[])).hasClass("tether-open") && ((e.target.className!='fa fa-sort-desc' && e.target.className!='fa fa-search' ) && e.target.id!=self.options.namebutton.replace('#',''))){
               //cerramos el panel del combo si pinchamos en cualquier lugar del control
               $(getnamedatalist.apply(self,[])).toggleClass("tether-open");
               telist.position();
               if (self.options.onClose){
                self.options.onClose()
               }
            }
        })
        
        var telist = new Tether({
            element: "#"+namedatalist,
            target: "#"+id+" "+self.options.namebutton,
            attachment: "top right",
            targetAttachment: 'bottom left',
            constraints: [
                {
                    to: 'scrollParent',
                    pin: true
                }]
        });
        telist.position();
        
        self.$telist=telist;
        self.$inputText=$("#"+id+" "+self.options.inputText);
        //console.dir(self.$inputText)
    }
    ns.UXDataList.prototype.toggle=function(){
       var self=this
       
       $(getnamedatalist.apply(self,[])).toggleClass("tether-open");
       self.$telist.position();
       
    }
    ns.UXDataList.prototype.open=function(){
        var self=this
        
        if  (!$(getnamedatalist.apply(self,[])).hasClass("tether-open")){
            toggleclass.apply(self,[true])
            //$("#"+namedatalist).toggleClass("tether-open");
            //self.$telist.position();
            //self.openit=true;
        }
        
     }
     ns.UXDataList.prototype.opened=function(){
        return this.openit
     }
     ns.UXDataList.prototype.close=function(){
        var self=this
        
        if  (  $(getnamedatalist.apply(self,[])).hasClass("tether-open")){
             
            toggleclass.apply(self,[false])
            //$("#"+namedatalist).toggleClass("tether-open");
            //self.$telist.position();
            //self.openit=false;
        }
     }
     var toggleclass = function(openit){
        var self=this
            
            $(getnamedatalist.apply(self,[])).toggleClass("tether-open");
            self.$telist.position();
            self.openit=openit;
     }
     var getnamedatalist = function(){
        var self=this
        var id=self.options.id;
        return "#"+id+"datalist";
     }
    
})(controls=controls||{},components,jQuery)

var UXDataList=controls.UXDataList
export {UXDataList}

if (!window.controls)
   window.controls={}
   
util.addNameSpace(window.controls,controls);

