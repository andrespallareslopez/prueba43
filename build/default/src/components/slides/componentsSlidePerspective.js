;(function(ns,$){ns.slidePerspective=function(){return function(options,config){if(options&&!options.nameid){options.nameid=""}if(!config){config={}}(function(config){config.containerComponent=config.containerComponent||".slide-container-perspective";config.btnleft=config.btnleft||".slide-button.left";config.btnright=config.btnright||".slide-button.right";config.items=config.items||".slide-items";config.slides=config.slides||".slide-items";config.slide=config.slide||".el.border";config.slideContainer=config.slideContainer||".list-grp-buttons"})(this.config||(this.config=config));//this.config={}
//this.config=this.config||config;
//console.dir(this.config); 
//var components
this.$holder=void 0;this.$el=void 0;this.longTouch=!1;this.ii=void 0;this.delta=void 0;this.slideWidth=void 0;this.cntli=4;//var touchEvents 
this.touchstartx=void 0;this.touchmovex=void 0;this.movex=void 0;this.scx=void 0;this.scy=void 0;this.prscx=void 0;this.prscy=void 0;this.prDelta=void 0;this.scDeltax=void 0;this.scDeltay=void 0;this.sclx=void 0;this.scly=void 0;this.grados=void 0;//25 grados
this.degDelta=void 0;//*************************
this.height=128;this.width=129+2;this.delta=void 0;this.altura=void 0;this.anchura=void 0;this.resto=void 0;this.index=void 0;this.maxwidth=void 0;this.alturali=void 0;this.anchurali=void 0;this.cntx=void 0;this.cnty=void 0;this.pagex=void 0;this.numslide=void 0;this.cntnum=void 0;this.anchuraparcial=void 0;this.alturaparcial=void 0;this.sizes={};this.data=void 0;this.slides=[];this.pages=[];this.init(options)}}();ns.slidePerspective.prototype=new ns.container;ns.slidePerspective.prototype.initevent=function(){var self=this;//hay que establecer el cntli y otras variables
self.ii=0;self.cntli=4;self.scx=.45;self.scy=.9;self.grados=25;self.slideWidth=$(self.options.nameid+self.config.containerComponent+" "+self.config.slide).width();//console.log(self.slideWidth);
self.$holder=$(self.options.nameid+self.config.containerComponent+" "+self.config.items);self.$el=$(self.options.nameid+self.config.containerComponent+" "+self.config.slide);$(self.options.nameid+self.config.containerComponent+" "+self.config.btnright).click(function(event){avance.apply(self,[])});$(self.options.nameid+self.config.containerComponent+" "+self.config.btnleft).click(function(event){atras.apply(self,[])});self.$holder[0].addEventListener("wheel",function(ev){//console.log("estoy en mousewheel");
if(0<ev.deltaY){avance.apply(self,[])}else{atras.apply(self,[])}});var mt=new Hammer(self.$holder[0]);touchEvents.apply(self,["panstart",touchstart,mt]);touchEvents.apply(self,["panmove",touchmove,mt]);touchEvents.apply(self,["panend",touchend,mt])};ns.slidePerspective.prototype.render=function(result,state){var self=this;self.datatemplate=void 0;self.dataResult=void 0;//definimos esta nueva variable para esta clase
//console.dir(result);
if(result){self.options.data=result}calcularmedidas.apply(self,[self.options]);self.dataResult={elementos:self.data,sizes:self.sizes};if(self.dataResult){self.options.datatemplate=self.dataResult}util.rendertemplate.apply(self,[self.options.datatemplate,self.options.nametemplate,state])};ns.slidePerspective.prototype.destroy=function(){};//**************************************************
var touchEvents=function(nameTouchEvent,action,mt){var self=this,paramEvent=void 0;mt.on(nameTouchEvent,function(ev){//console.log(nameTouchEvent);
switch(nameTouchEvent){case"panstart":action.apply(self,[ev.center.x]);break;case"panmove":action.apply(self,[ev.pointers[0].pageX]);break;case"panend":action.apply(self,[]);break;}})},avance=function(){var self=this;//$(self.options.nameid+self.config.containerComponent+" "+self.config.btnright).click(function(event){
console.log("boton derecho");self.ii+=1;if(self.ii<self.cntli-1){$(self.options.nameid+self.config.containerComponent+" "+self.config.btnleft).css({visibility:"visible"})}else{$(self.options.nameid+self.config.containerComponent+" "+self.config.btnright).css({visibility:"hidden"});self.ii=self.cntli-1}if(0<=self.ii-1){self.$el.eq(self.ii-1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(25deg)")}self.$el.eq(self.ii).addClass("animate").css("transform","scale3d(1,1,1) rotateY(0deg)");//elemento centro
if(self.ii<=self.cntli){self.$el.eq(self.ii+1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(-25deg)")}self.$holder.addClass("animate").css("transform","translate3d(-"+self.ii*(100/self.cntli)+"%,0,0)");//});
},atras=function(){var self=this;//$(self.options.nameid+self.config.containerComponent+" "+self.config.btnleft).click(function(event){
console.log("boton izquierdo");self.ii-=1;if(0<=self.ii-1){$(self.options.nameid+self.config.containerComponent+" "+self.config.btnright).css({visibility:"visible"})}else{$(self.options.nameid+self.config.containerComponent+" "+self.config.btnleft).css({visibility:"hidden"});self.ii=0}if(0<=self.ii-1){self.$el.eq(self.ii-1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(25deg)")}self.$el.eq(self.ii).addClass("animate").css("transform","scale3d(1,1,1) rotateY(0deg)");//elemento centro
if(self.ii<=self.cntli){self.$el.eq(self.ii+1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(-25deg)")}self.$holder.addClass("animate").css("transform","translate3d(-"+self.ii*(100/self.cntli)+"%,0,0)");//}); 
},touchstart=function(x){var self=this;self.longTouch=!1;setTimeout(function(){self.longTouch=!0},250);self.touchstartx=x;if(self.$holder.hasClass("animate")){self.$holder.removeClass("animate")}if(self.$el.hasClass("animate")){self.$el.removeClass("animate")}},touchmove=function(x){var self=this;self.touchmovex=x;//console.log(self.touchmovex);
self.movex=self.ii*self.slideWidth+(self.touchstartx-self.touchmovex);//console.log(self.movex);            
//var panx=100 - movex/6;
if(self.movex<(self.cntli-1)*self.slideWidth){self.prDelta=(self.touchstartx-self.touchmovex)/self.slideWidth;self.scDeltax=1-self.scx;self.scDeltay=1-self.scy;self.sclx=1-self.scDeltax*Math.abs(self.prDelta);self.scly=1-self.scDeltay*Math.abs(self.prDelta);self.degDelta=self.grados*self.prDelta;//console.dir($el.eq(ii));
if(0<=self.ii-1){self.$el.eq(self.ii-1).css("transform","scale3d("+(.45-.55*self.prDelta+"")+","+(.9-.1*self.prDelta+"")+",1) rotateY("+Math.ceil(self.grados-Math.abs(self.degDelta))+"deg)")}self.$el.eq(self.ii).css("transform","scale3d("+(self.sclx+"")+","+(self.scly+"")+",1) rotateY("+Math.ceil(self.degDelta)+"deg)");//elemento centro
if(self.ii<=self.cntli){self.$el.eq(self.ii+1).css("transform","scale3d("+(.45+.55*self.prDelta)+","+(.9+.1*self.prDelta)+",1) rotateY(-"+Math.ceil(self.grados-Math.abs(self.degDelta))+"deg)")}self.$holder.css("transform","translate3d(-"+(self.movex+"")+"px,0,0)")}},touchend=function(){var self=this,absMove=Math.abs(self.ii*self.slideWidth-self.movex),absMovex=Math.abs(self.touchstartx-self.touchmovex);//****
//console.log("touchstarx-tochmovex:"+(touchstartx-touchmovex));
//console.log("ii*slideWidth:"+ii*slideWidth+" movex:"+movex);
//console.log("absMove:"+absMove+" slideWidth/2:"+slideWidth/2+" longTouch:"+longTouch);
//****
if(absMove>self.slideWidth/2||!1===self.longTouch){if(self.movex>self.ii*self.slideWidth&&self.ii<self.cntli-1){if(absMovex>.35*self.slideWidth){self.ii++}}else if(self.movex<self.ii*self.slideWidth&&0<self.ii){if(absMovex>.35*self.slideWidth){self.ii--}}}if(0<=self.ii-1){self.$el.eq(self.ii-1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(25deg)")}self.$el.eq(self.ii).addClass("animate").css("transform","scale3d(1,1,1) rotateY(0deg)");//elemento centro
if(self.ii<=self.cntli){self.$el.eq(self.ii+1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(-25deg)")}self.$holder.addClass("animate").css("transform","translate3d(-"+self.ii*(100/self.cntli)+"%,0,0)")},calcularmedidas=function(options){console.log("estoy dentro de calcular medidas");var self=this,i,j,parteDecimal;self.sizes={};self.slides=[];self.pages=[];self.index=0;self.altura=$(self.options.nameid+self.config.containerComponent+" "+self.config.items).height();self.anchura=$(self.options.nameid+self.config.containerComponent+" "+self.config.items).width();self.cntx=Math.floor(self.anchura/self.width);self.cnty=Math.floor(self.altura/self.height);//console.log(cntx);
self.cntnum=self.cntx*self.cnty;//*********************************
if(options.data){self.data=options.data;self.numslide=Math.round(options.data.length/self.cntnum);//solo hay una pagina
self.resto=options.data.length%self.cntnum;parteDecimal=options.data.length/self.cntnum-Math.floor(options.data.length/self.cntnum);console.log("cntnum:"+self.cntnum);console.log("data.length:"+options.data.length);console.log("data.length/cntnum:"+options.data.length/self.cntnum);console.log("parteDecimal:"+parteDecimal);console.log("numslide:"+self.numslide);console.log("resto:"+self.resto);if(0<self.resto&&.5>parteDecimal){self.numslide=self.numslide+1}for(i=0;i<=self.numslide-1;++i){self.pages.push({slides:[]});for(j=1;j<=self.cntnum;++j){if(self.index<=self.data.length-1){self.pages[i].slides.push(self.data[self.index]);self.index++}}}//console.dir(slides); 
};//******************************************
self.sizes={anchura:self.anchura,altura:self.altura,width:self.width,height:self.height,cntx:self.cntx,cnty:self.cnty,cntnum:self.cntnum,numslide:self.numslide,pages:self.pages};//console.dir(sizes);
},calcularslides=function(){var self=this;//ahora es cuando tenemos que calcular maxwidth, justo en este punto
//console.dir( $(this.config.container+" "+this.config.items));
self.maxwidth=$(self.options.nameid+self.config.containerComponent+" "+self.config.items).find(self.config.slide).width();//console.log(self.maxwidth);
self.cntli=$(self.options.nameid+self.config.containerComponent+" "+self.config.items).find(self.config.slide).length;self.alturali=$(self.options.nameid+self.config.containerComponent+" "+self.config.items).find(self.config.slide).height();console.log("alturali:"+self.alturali);self.delta=100/self.cntli;self.ii=0;$(self.options.nameid+self.config.containerComponent+" "+self.config.items+" "+self.config.slides).css({visibility:"hidden"});$(self.options.nameid+self.config.containerComponent+" "+self.config.items).find(self.config.slides).css({width:100*self.cntli+"%"});$(self.options.nameid+self.config.containerComponent+" "+self.config.items).find(self.config.slide).css({width:100/self.cntli+"%"});self.anchuraparcial=self.sizes.cntx*(self.width+2);self.alturaparcial=self.sizes.cnty*(self.height+2);if(0<self.maxwidth){//if (anchuraparcial>maxwidth){
// anchuraparcial=maxwidth;
// }
}else{self.anchuraparcial=Math.max(self.anchuraparcial,self.maxwidth)}if(self.alturaparcial>self.alturali){self.alturaparcial=self.alturali}console.log("anhuraparcial:"+self.anchuraparcial);console.log("alturaparcial:"+self.alturaparcial);$(self.options.nameid+self.config.containerComponent+" "+self.config.items+" "+self.config.slide+" "+self.config.slideContainer).css({width:self.anchuraparcial+"px"});// $(this.config.container+" "+this.config.items+" "+"li"+" "+".list-grp-buttons").css({"margin-top":(-alturaparcial/2)+"px",top:"50%"});
//$(this.config.container+" "+this.config.items+" "+"li"+" "+".list-grp-buttons").css({"top":(alturali/2)+"px"});
// $(this.config.container+" "+this.config.items+" "+"li"+" "+".list-grp-buttons").css({"margin-top":(-alturaparcial/2)+"px"});
$(self.options.nameid+self.config.containerComponent+" "+self.config.items+" "+self.config.slide+" "+self.config.slideContainer).css({height:self.alturaparcial+"px"})},showButtons=function(){var self=this;$(self.options.nameid+self.config.containerComponent+" "+self.config.btnleft).css({visibility:"hidden"});if(1<self.sizes.numslide){$(self.options.nameid+self.config.containerComponent+" "+self.config.btnright).css({visibility:"visible"})}else{$(self.options.nameid+self.config.containerComponent+" "+self.config.btnright).css({visibility:"hidden"})}},showSlides=function(){var self=this,mytimer=setTimeout(function(){$(self.options.nameid+self.config.containerComponent+" "+self.config.items+" "+self.config.slides).css({visibility:"visible"});clearTimeout(mytimer)},320)};//**************************************************
})(this.components||(this.components={}),jQuery);