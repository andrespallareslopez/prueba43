/// <reference path="../shared/js/main.d.ts" />
//import {default as Handlebars} from '../../node_modules/handlebars/dist/handlebars.js'
//import {util} from './util01.js'
import{util}from"./util01.js";import{components}from"./components01.js";var controls;;(function(ns,components,$){"use strict";ns.slidePanels=function(){return function(options){if(!options.nameid){options.nameid=""}this.config={};(function(config){config.containerComponent=config.containerComponent||".slide-container";config.btnleft=config.btnleft||".slide-button.left";config.btnright=config.btnright||".slide-button.right";config.items=config.items||".slide-items";config.slides=config.slides||"ul.slide-container-items";config.slide=config.slide||"li.slide-item";config.slideContainer=config.slideContainer||".list-grp-buttons";config.ctrlnav=config.ctrlnav=".slide-controls"})(this.config);//console.log(this.config)
this.height=128;this.width=129+2;this.ii=void 0;this.cntli=void 0;this.delta=void 0;this.altura=void 0;this.anchura=void 0;this.resto=void 0;this.index=void 0;this.maxwidth=void 0;this.alturali=void 0;this.anchurali=void 0;this.cntx=void 0;this.cnty=void 0;this.pagex=void 0;this.numslide=void 0;this.cntnum=void 0;this.anchuraparcial=void 0;this.alturaparcial=void 0;this.sizes={};this.data=void 0;this.slides=[];this.pages=[];this.init(options);/*
            var self=this;
            var state;
            if ( this.options.templateReact && this.options.element){
               
            }
            */}}();ns.slidePanels.prototype=new components.container;//******************************************
//******************************************
ns.slidePanels.prototype.initevent=function(){var self=this;//var result=self.options.data;
//console.log("estoy dentro de initvent de slidePanels");
//console.dir(self.options);
calcularslides.apply(self,[]);//en calcularslides el ul se oculta y al final de la 
//funcion se vuelve a poner a visible
self.ii=0;/*
        $(self.config.container+" "+self.config.btnleft).css({visibility:"hidden"});
        
        if (sizes.numslide>1){
           $(self.config.container+" "+self.config.btnright).css({visibility:"visible"});
        }else{
            $(self.config.container+" "+self.config.btnright).css({visibility:"hidden"});
        }
        */showButtons.apply(self,[]);$(self.config.containerComponent+" "+self.config.btnright).click(function(event){console.log("boton dereccho");atras.call(self)});//*********************************************************
$(self.config.containerComponent+" "+self.config.btnleft).click(function(event){console.log("boton izquierdo");avance.call(self)});//************************************************************
debounceScroll.apply(self,[]);//************************************************************
showSlides.apply(self,[])};//******************************************************
ns.slidePanels.prototype.render=function(result,state){//ponemos parametro result porque hay ahora mismo un var data, por eso como
//parametro de esta funcion no ponemos data
var self=this;self.datatemplate=void 0;self.dataResult=void 0;//definimos esta nueva variable para esta clase
//console.dir(result);
if(result){self.options.data=result}calcularmedidas.apply(self,[self.options]);self.dataResult={elementos:self.data,sizes:self.sizes};//este tipo de optios.data,mas tarde se lo pasamos a options.datatemplate
//para que el render de esta clase, que esta definido mas adelante, en esta misma clase,
//lo procese y lo pase a datatemplate, 
// este options.data es diferente de los demas porque el objeto 'sizes'
//lo vamos a utilizar en handlebar en la plantilla slide03 o templateslidepanels.
//console.dir(sizes);  
if(self.dataResult){//console.log("estoy dentro de render de slidePanels")
//this.options.datatemplate=this.options.fetchRemote;
self.options.datatemplate=self.dataResult}//console.dir(self.options.fncreate);
if(this.options.nametemplate&&this.options.element){util.rendertemplate.apply(self,[self.options.datatemplate,self.options.nametemplate,state])}else if(this.options.textTemplate&&this.options.element){util.renderTemplateRaw.apply(this,[this.options.datatemplate,this.options.textTemplate,state])}else if(this.options.templateReact&&this.options.element){//console.log("el estado es "+state)
//this.options.conected=true;
return util.renderTemplateCustomElementReact.apply(this,[this.options.datatemplate,this.options.templateReact,state]).then(function(source,statec){//var state=state;
//console.log(source)
//console.dir(self)
//console.dir(self.options.element)
//console.dir(self.options.datatemplate)
//console.log("estoy dentro de renderTemplateCustomElementReact then")
self.renderReactTemplate();/*
                if (self.options.templateReact){
                    //console.log("estoy dentro")
                    if (self.options.datatemplate)
                      self.options.ReactDOM.render(self.options.templateReact(self.options.datatemplate),self.options.element)
                    else
                    self.options.ReactDOM.render(self.options.templateReact,self.options.element)
                }
                */return self.promise}).then(function(m){//console.log(m);
//console.log("estoy dentro del promise con estado "+state)
util.manageStateComponent.apply(self,[state,m])})}};ns.slidePanels.prototype.renderReactTemplate=function(){//console.log("estoy dentro de renderReactTemplate")
var self=this,elementSelector;//console.dir(self)
if(self.options.container){elementSelector=document.querySelector(self.options.container)}else if(self.options.selector){elementSelector=document.querySelector(self.options.selector)}if(self.options.templateReact){//console.log("estoy dentro")
if(self.options.datatemplate)self.options.ReactDOM.render(self.options.templateReact(self.options.datatemplate,self.options.nameDescription),elementSelector);else{self.options.ReactDOM.render(self.options.templateReact,elementSelector)}}};//*************************************************************
ns.slidePanels.prototype.destroy=function(){$(self.config.containerComponent+" "+self.config.btnright).off("click");$(self.config.containerComponent+" "+self.config.btnleft).off("click")};//***********************************************
ns.slidePanels.prototype.resize=function(){var self=this;//self.renderReactTemplate();
calcularslides.apply(self,[]);showButtons.apply(self,[]);showSlides.apply(self,[])};//*************************************************
ns.slidePanels.prototype.reload=function(){var self=this;calcularslides.apply(self,[]);self.ii=0;showButtons.apply(self,[]);showSlides.apply(self,[])};//*************************************************************
var showButtons=function(){var self=this;$(self.config.containerComponent+" "+self.config.btnleft).css({visibility:"hidden"});if(1<self.sizes.numslide){$(self.config.containerComponent+" "+self.config.btnright).css({visibility:"visible"})}else{$(self.config.containerComponent+" "+self.config.btnright).css({visibility:"hidden"})}},showSlides=function(){var self=this,mytimer=setTimeout(function(){$(self.config.containerComponent+" "+self.config.items+" "+self.config.slides).css({visibility:"visible"});clearTimeout(mytimer)},370)},calcularmedidas=function(options){//console.log("estoy dentro de calcular medidas");
var self=this,i,j,parteDecimal;//console.dir(self)
self.sizes={};self.slides=[];self.pages=[];self.index=0;self.altura=$(self.config.containerComponent+" "+self.config.items).height();self.anchura=$(self.config.containerComponent+" "+self.config.items).width();//console.log(self.anchura)
self.cntx=Math.floor(self.anchura/self.width);self.cnty=Math.floor(self.altura/self.height);//console.log(cntx);
self.cntnum=self.cntx*self.cnty;//console.dir(options.data)
//*********************************
if(options.data){self.data=options.data;self.numslide=Math.round(options.data.length/self.cntnum);//solo hay una pagina
self.resto=options.data.length%self.cntnum;parteDecimal=options.data.length/self.cntnum-Math.floor(options.data.length/self.cntnum);//console.log("cntnum:"+self.cntnum);
//console.log("data.length:"+options.data.length);
//console.log("data.length/cntnum:"+(options.data.length/self.cntnum));
//console.log("parteDecimal:"+parteDecimal);
//console.log("numslide:"+self.numslide);
//console.log("resto:"+self.resto);
if(0<self.resto&&.5>parteDecimal){self.numslide=self.numslide+1}for(i=0;i<=self.numslide-1;++i){self.pages.push({slides:[]});for(j=1;j<=self.cntnum;++j){if(self.index<=self.data.length-1){self.pages[i].slides.push(self.data[self.index]);self.index++}}}//console.dir(slides); 
}//******************************************
self.sizes={anchura:self.anchura,altura:self.altura,width:self.width,height:self.height,cntx:self.cntx,cnty:self.cnty,cntnum:self.cntnum,numslide:self.numslide,pages:self.pages};//console.dir(sizes);
},calcularslides=function(){var self=this;//ahora es cuando tenemos que calcular maxwidth, justo en este punto
//console.dir( $(this.config.container+" "+this.config.items));
self.maxwidth=$(self.config.containerComponent+" "+self.config.items).find("li").width();//console.log(self.maxwidth);
self.cntli=$(self.config.containerComponent+" "+self.config.items).find("li").length;self.alturali=$(self.config.containerComponent+" "+self.config.items).find("li").height();//console.log("alturali:"+self.alturali);
self.delta=100/self.cntli;self.ii=0;$(self.config.containerComponent+" "+self.config.items+" ul").css({visibility:"hidden"});$(self.config.containerComponent+" "+self.config.items).find("ul").css({width:100*self.cntli+"%"});$(self.config.containerComponent+" "+self.config.items).find("li").css({width:100/self.cntli+"%"});self.anchuraparcial=self.sizes.cntx*(self.width+2);self.alturaparcial=self.sizes.cnty*(self.height+2);if(0<self.maxwidth){//if (anchuraparcial>maxwidth){
// anchuraparcial=maxwidth;
// }
}else{self.anchuraparcial=Math.max(self.anchuraparcial,self.maxwidth)}if(self.alturaparcial>self.alturali){self.alturaparcial=self.alturali}//console.log("anhuraparcial:"+self.anchuraparcial);
//console.log("alturaparcial:"+self.alturaparcial);
$(self.config.containerComponent+" "+self.config.items+" "+"li"+" "+".list-grp-buttons").css({width:self.anchuraparcial+"px"});// $(this.config.container+" "+this.config.items+" "+"li"+" "+".list-grp-buttons").css({"margin-top":(-alturaparcial/2)+"px",top:"50%"});
//$(this.config.container+" "+this.config.items+" "+"li"+" "+".list-grp-buttons").css({"top":(alturali/2)+"px"});
// $(this.config.container+" "+this.config.items+" "+"li"+" "+".list-grp-buttons").css({"margin-top":(-alturaparcial/2)+"px"});
$(self.config.containerComponent+" "+self.config.items+" "+"li"+" "+".list-grp-buttons").css({height:self.alturaparcial+"px"});var mytimer1=setTimeout(function(){$(self.config.containerComponent+" "+self.config.items+" ul").css({visibility:"hidden"});clearTimeout(mytimer1)},350)},avance=function(){var self=this;self.ii=self.ii-1;if(0<=self.ii-1){$(self.config.containerComponent+" "+self.config.btnright).css({visibility:"visible"})}else{$(self.config.containerComponent+" "+self.config.btnleft).css({visibility:"hidden"});$(self.config.containerComponent+" "+self.config.btnright).css({visibility:"visible"});self.ii=0}$(self.config.containerComponent+" "+self.config.items+" ul").css({transform:"translateX("+self.ii*-self.delta+"%)"});//$(container+" "+items+" ul").find("li").eq(ii).css({height:altura});
//currentSelector(ii);
},atras=function(){var self=this;self.ii=self.ii+1;if(self.ii<self.cntli-1){$(self.config.containerComponent+" "+self.config.btnleft).css({visibility:"visible"})}else{$(self.config.containerComponent+" "+self.config.btnright).css({visibility:"hidden"});$(self.config.containerComponent+" "+self.config.btnleft).css({visibility:"visible"});self.ii=self.cntli-1}$(self.config.containerComponent+" "+self.config.items+" ul").css({transform:"translateX("+self.ii*-self.delta+"%)"});//$(container+" "+items+" ul").find("li").eq(ii).css({height:altura});
//currentSelector(ii);  
},debounceScroll=function(){var self=this,rtime,timeout=!1,delta=300,mytimer;function resizeEnd(){if(new Date-rtime<delta){mytimer=setTimeout(resizeEnd,delta)}else{timeout=!1;console.log("estoy en debounceSroll");//calcularmedidas.apply(self,[self.options]);
if(!self.options.templateReact)$(".wrapper.root .content .slide-container .slide-items").empty();//behaviors.destroyEventsSlidePanel({ });
//calcularslides.apply(self,[]);
var mytimer1;mytimer1=setTimeout(function(){self.render(self.options.data,"resize");clearTimeout(mytimer1)},100);clearTimeout(mytimer)}}$(window).on("resize",function(evt){//console.log("estoy dentro de resize");
rtime=new Date;if(!1===timeout){timeout=!0;mytimer=setTimeout(resizeEnd,delta)}})};//*************************************************************
})(controls=controls||{},components,jQuery);export{controls};//console.dir(controls)
util.addNameSpace(window.controls,controls);//console.dir(window.controls)
//window.controls=controls;