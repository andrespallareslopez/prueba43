;(function(ns,util){"use strict";ns.panelScroll=function(){return function(options){(function(options){//ejemplo para guia, como ejemplo, no borrar, dejar el comentario 
//para poder hacer un seguimiento del codigo de los posibles valores
//que podra tomar options en un menuVerticalScroll
/*
                 container:"aside.box.menu-area"
                 containerComponent=".menu-vertical01";
                 items:".items",
                 item:".element.item",
                 scroll:".container-menu-scroll",
                 btnup:"#btn-slide-up",
                 btndown:"#btn-slide-down"           
           */options.nameid=options.nameid||"";//options.containerMain=options.containerMain||undefined;
options.container=options.container||void 0;options.containerComponent=options.containerComponent||void 0;options.items=options.items||void 0;options.item=options.item||void 0;options.scroll=options.scroll||void 0;options.btnup=options.btnup||void 0;options.btndown=options.btndown||void 0;options.fnClickElement=options.fnClickElement||void 0})(options);//**********************************************
//**********************************************
this.config={};(function(config){if(options.containerComponent){config.containerComponent=config.containerComponent||options.containerComponent}else{config.containerComponent=config.containerComponent||".panel-scroll"}config.btnup=config.btnup||"#btn-slide-up";config.btndown=config.btndown||"#btn-slide-down";config.items=config.items||".panel-scroll-item";config.scroll=config.scroll||".panel-scroll-content";if(options.item){config.item=config.item||options.item}else{config.item=config.item||".list-acordion .gr"}//config.slideContainer=config.slideContainer||".list-grp-buttons";
config.slide=config.ctrlnav=".slide-controls"})(this.config);//********************************************
this.$holder=void 0;this.menuHeight=void 0;this.menuHeightScroll=void 0;this.menuHeightItems=void 0;this.menuHeightItem=void 0;this.scrolltop=void 0;this.doclick=void 0;this.movesum=0;this.options={};util.extend(options,this.options)}}();//******************************************************** */
ns.panelScroll.prototype=new ns.container;//************************************************
ns.panelScroll.prototype.calcularAltura=function(){var self=this;self.menuHeightScroll=$(self.options.nameid+self.config.containerComponent+" "+self.config.scroll).height();self.menuHeightItems=$(self.options.nameid+self.config.containerComponent+" "+self.config.items).height();self.menuHeight=self.menuHeightItems-self.menuHeightScroll};//************************************************
ns.panelScroll.prototype.initevent=function(){var self=this;self.$holder=$(self.options.nameid+self.config.containerComponent+" "+self.config.scroll);//console.dir(self.$holder);
self.calcularAltura.apply(self,[]);//console.log(self.menuHeightScroll);
//console.log(self.menuHeightItems);   
//console.log(self.menuHeight);
self.menuHeightItem=$(self.options.nameid+self.config.containerComponent+" "+self.config.item).height();//console.log(self.menuHeightItem);
//**********************************************************************
holdit($(self.options.nameid+self.config.containerComponent+" "+self.config.btndown),buttonMove,-1,400,2,self);holdit($(self.options.nameid+self.config.containerComponent+" "+self.config.btnup),buttonMove,1,400,2,self);$(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).addClass("disabled");if(self.options.fnClickElement){self.options.fnClickElement.apply(self,[self.options])}debounceScroll.apply(self,[]);self.deactivateButtons();self.$holder[0].addEventListener("scroll",function(){console.log("estoy en scroll");// console.log($holder[0].scrollTop);
//console.log(delta);
self.calcularAltura.apply(self,[]);//self.menuHeightScroll=$(self.options.nameid+self.config.containerComponent+" "+self.config.scroll).height();
//self.menuHeightItems=$(self.options.nameid+self.config.containerComponent+" "+self.config.items).height();
//self.menuHeight=self.menuHeightItems-self.menuHeightScroll;
//hemos puesto el doclick porque al cargar en otro panel de datos,al hacer click, con mas de un slide
//por ejemplo hace un efecto raro en el scroll y no lo deja de en su sitio, cambia el scroll, y trato de 
//dejarlo en la mmisma position
if(self.doclick){self.$holder[0].scrollTop=self.scrolltop;self.doclick=!1}self.movesum=-self.$holder[0].scrollTop;self.activateButtons()})};ns.panelScroll.prototype.resize=function(){var self=this;console.log("estoy en panelscroll resize");self.calcularAltura.apply(self,[]);self.menuHeightItem=$(self.options.nameid+self.config.containerComponent+" "+self.config.item).height();self.deactivateButtons();// self.calcularAltura.apply(self,[]);
//if (self.doclick){
//  self.$holder[0].scrollTop=self.scrolltop;
//  self.doclick=false;
// }
//self.movesum=-self.$holder[0].scrollTop;
self.activateButtons()};ns.panelScroll.prototype.destroy=function(){};ns.panelScroll.prototype.deactivateButtons=function(){var self=this;if(0<self.menuHeight){$(self.options.nameid+self.config.containerComponent+" "+self.config.btndown).removeClass("no-visible");$(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).removeClass("no-visible")}else{$(self.options.nameid+self.config.containerComponent+" "+self.config.btndown).addClass("no-visible");$(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).addClass("no-visible")}};ns.panelScroll.prototype.activateButtons=function(){var self=this;if(0===self.movesum){$(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).addClass("disabled");//$(container+" "+btnup).css({visibility:"hidden"})
}else{$(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).removeClass("disabled");//$(container+" "+btnup).css({visibility:"visible"})
}//console.log("---------")
//console.log(movesum);
//console.log(menuHeight);
if(self.movesum==-self.menuHeight){$(self.options.nameid+self.config.containerComponent+" "+self.config.btndown).addClass("disabled");if(self.options.endScroll){self.options.endScroll()}// $(container+" "+btndown).css({visibility:"hidden"})
}else{$(self.options.nameid+self.config.containerComponent+" "+self.config.btndown).removeClass("disabled");//$(container+" "+btndown).css({visibility:"visible"})
}};var buttonMove=function(cn){//importante que esto este aqui tambien
var touchmovey,movey,self=this;if(self.doclick){self.$holder[0].scrollTop=self.scrolltop;self.doclick=!1}// self=this;
touchmovey=cn*self.menuHeightItem;movey=touchmovey;self.movesum+=movey;//console.log(movesum);
console.log(self.menuHeight);self.movesum=Math.max(-self.menuHeight,self.movesum);self.movesum=Math.min(0,self.movesum);//console.log(cn);
//console.log(movey);
console.log(touchmovey);//console.log(menuHeightItem);
console.log(self.movesum);self.$holder[0].scrollTop=Math.abs(self.movesum);//$holder.css("transform","translate(0px,"+movesum+"px)");
self.activateButtons.apply(self,[])},holdit=function(btn,action,cn,start,speedup,context){var self=context,t,startold=start,repeat=function(){action.call(self,cn);t=setTimeout(repeat,startold);startold=startold/speedup};btn.on("click",function(event){console.log("estoy en click");action.call(self,cn)});if(util.is_touch_device()){if("Hammer"in window){//console.log("hay Hammer");
var mt=new Hammer(btn[0]);mt.on("press",function(ev){console.log("estoy en press");repeat()});mt.on("pressup",function(ev){console.log("estoy en pressup");clearTimeout(t);startold=start})}}else{btn.on("mousedown",function(event){console.log("estoy en mousedown");repeat()});btn.on("mouseup",function(event){console.log("estoy en mouseup");clearTimeout(t);startold=start})}},debounceScroll=function(){var self=this,rtime,timeout=!1,delta=300,mytimer;function resizeEnd(){if(new Date-rtime<delta){mytimer=setTimeout(resizeEnd,delta)}else{timeout=!1;//$(".wrapper.root .content .slide-container .slide-items").empty();
var mytimer1;mytimer1=setTimeout(function(){//self.render(self.options.data,"resize");
self.resize();clearTimeout(mytimer1)},100);clearTimeout(mytimer)}}$(window).on("resize",function(evt){//console.log("estoy dentro de resize");
rtime=new Date;if(!1===timeout){timeout=!0;mytimer=setTimeout(resizeEnd,delta)}})};//*****************************************************************
//var activateButtons=function(){
// }
//*******************************************************************
})(this.components||(this.components={}),this.util);