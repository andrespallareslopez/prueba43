/// <reference path="../shared/js/main.d.ts" />

import {util} from './util01.js';
import {components} from './components01.js';

var controls;

;(function(ns){
    ns.tab=(function(){
        return function(options){
            this.init(options);
        };
    })();
    //**************************************************************
    // Inicializar variables
    var container=".tab-container";
    //var btnleft=".slide-button.left";
    //var btnright=".slide-button.right";
    var items=".tab-items";
    var containerItems=".tab-container-items";
    var item=".tab-item";
    var ctrlnav=".tab-controls";
    var ii,cntli,delta,altura,i;
    
    function is_touch_device() {
        return 'ontouchstart' in window        // works on most browsers 
       || navigator.maxTouchPoints;       // works on IE10/11 and Surface
    };
    var createControlSelector=function(cnt){
        for(i=0;i<=cnt-1;i++){
           //$("<a href='#' />").css({left:"calc(50% - ("+cnt+" * 15px)/2)"}).appendTo(ctrlnav);
        }
        //revisar si es necesario anadir esto
        //$(container+" "+ctrlnav).find("a").css({left:"calc(50% - ("+cnt+" * 15px)/2)"});
    };
    //**************************************************************
    var currentSelector=function(index){
      $(container+" "+ctrlnav).find("a").removeClass("current");
      $(container+" "+ctrlnav).find("a").eq(index).addClass("current");
    };
     //****************************************************************
   
    ns.tab.prototype.init=function(options){
        var self=this;
        //console.log("estoy dentro de init en Tab")
        
        altura=$(container+" "+items).find("li"+item).height();
        cntli=$(container+" "+items).find("li"+item).length;
        delta=100/cntli;
        ii=0;
        $(container+" "+items+" ul"+containerItems).css({visibility:"hidden"});
        $(container+" "+items).find("ul"+containerItems).css({width:(cntli*100)+"%"});
        $(container+" "+items).find("li"+item).css({width:(100/cntli)+"%"});
        
        //console.dir($(container+" "+items).find("li").height());
        
        createControlSelector(cntli);
        currentSelector(ii);
        /*
        if (ii==0)
           $(container+" "+btnleft).css({visibility:"hidden"});
        
        if (cntli>0)
           $(container+" "+btnright).css({visibility:"visible"});  
        */   
        //********************************************************
        /*
        $(container+" "+btnright).click(function(event){
             console.log("boton izquierdo");
             atras();
        });
        //*********************************************************
        $(container+" "+btnleft).click(function(event){
             console.log("boton derecho");
             avance();
        });
        */
        //********************************************************
        $(container+" "+ctrlnav).find("a").each(function(index,value){
        //var self=this;
             $(this).on("click",{index:index},function(event){
                 
                 var index=event.data.index;
                 //console.dir(event)
                 ii=index;
                 /*
                 if ((ii-1>=0)){
                     if (ii<cntli-1){ 
                         $(container+" "+btnright).css({visibility:"visible"});
                     }          
                 }
                 if (ii<cntli-1){
                     if (ii-1>=0){
                         $(container+" "+btnleft).css({visibility:"visible"})
                     }   
                 }
                 if (ii==0){
                         $(container+" "+btnleft).css({visibility:"hidden"})
                         $(container+" "+btnright).css({visibility:"visible"});
                 }
                 if (ii==cntli-1){
                         $(container+" "+btnleft).css({visibility:"visible"})
                         $(container+" "+btnright).css({visibility:"hidden"});
                 }
                 */
                 $(container+" " +items+" ul"+containerItems).css({transform:"translateX("+index*(-delta)+"%)"}); 
                 currentSelector(ii);
                 
             });
        });
        if (is_touch_device()){
            $(container+" "+items).find("li"+item).each(function(index,value){
                   
                  // $(this).on("click",{index:index},function(event){
                       //var index=event.data.index;
                       //ii=index;
                       var options = {
                          preventDefault: true
                       };
                       var mt=new Hammer(this,options);
                       //mt.get("pan").set({direccion:Hammer.DIRECTION_ALL});
                       //mt.get("swipe").set({direction:Hammer.DIRECTION_ALL})
                       /*
                       mt.on("panleft",function(ev){
                          console.log("estoy en left");
                           //var index=event.data.index;
                           ii=index;
                           atras();
                       });
                       mt.on("panright",function(ev){
                          console.log("estoy en right");
                            //var index=event.data.index;
                           ii=index;
                          avance();
                       });
                       */
                       mt.on("swipeleft",function(event){
                           console.log("drag left");
                           ii=index;
                           atras();
                       })
                       mt.on("swiperight",function(event){
                           console.log("drag right");
                           ii=index;
                           avance(); 
                       })
                       /*
                       mt.on("panup",function(event){
                           console.log("pan up");
                       });
                       */
                       mt.on("panend",function(){
                           console.log("pan end");
                       });
                   });
            //})
        }
        //************************************************
        var mytimer=setTimeout(function() {
             $(container+" "+items+" ul"+containerItems).css({visibility:"visible"});
        }, 250);
     };
    
})(controls=controls||{});


var Tab=controls.tab;
export {Tab}

if (!window.controls)
   window.controls={}
      
util.addNameSpace(window.controls,controls);
