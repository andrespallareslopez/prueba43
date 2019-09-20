

;(function(ns,$){

    
    ns.menuVerticalScroll=(function(){
      return function(options){
        (function(options){
            //ejemplo para guia, como ejemplo, no borrar, dejar el comentario 
            //para poder hacer un seguimiento del codigo de los posibles valores
            //que podra tomar options en un menuVerticalScroll
            /*
                 containerMain:"aside.box.menu-area",
                 container:".menu-vertical01",
                 items:".items",
                 item:".element.item",
                 scroll:".container-menu-scroll",
                 btnup:"#btn-slide-up",
                 btndown:"#btn-slide-down"           
            */
            options.nameid=options.nameid||undefined;
            //options.containerMain=options.containerMain||undefined;
            options.container=options.container||undefined;
            options.containerComponent=options.containerComponent||undefined;
            options.items=options.items||undefined;
            options.item=options.item||undefined;
            options.scroll=options.scroll||undefined;
            options.btnup=options.btnup||undefined;
            options.btndown=options.btndown||undefined;
        })(options);
     
        this.config={};
        var self=this;
            (function(config){
               //algunas veces nos interesara cambiar el container component a una clase distinta
                if (options.containerComponent){
                    config.containerComponent=options.containerComponent; 
                }else{
                    config.containerComponent=config.containerComponent||".menu-vertical-01";
                }
               
                config.btnup=config.btnup||"#btn-slide-up";
                config.btndown=config.btndown||"#btn-slide-down";
                config.items=config.items||".items";
                config.scroll=config.scroll||".container-menu-scroll";
                if (options.item){
                    config.item=config.item||options.item;                    
                }else{
                    config.item=config.item||".gr";
                }
                
                //config.slideContainer=config.slideContainer||".list-grp-buttons";
                config.slide=config.ctrlnav=".slide-controls";
                
            })(this.config);
        
        this.$holder=undefined;
        this.menuHeight=undefined;
        this.menuHeightScroll=undefined;
        this.menuHeightItems=undefined;
        this.menuHeightItem=undefined;
        this.scrolltop=undefined;
        this.doclick=undefined;
        this.movesum=0;
        
        this.options={};
        this.extend(options,this.options);
        //this.initevent();
      };
    })();
    ns.menuVerticalScroll.prototype.extend=function(base,extension){
        for (var property in base){
            extension[property]=base[property];
        };
    };
    ns.menuVerticalScroll.prototype.is_touch_device=function() {
          return 'ontouchstart' in window        // works on most browsers 
          || navigator.maxTouchPoints;       // works on IE10/11 and Surface
    };
    ns.menuVerticalScroll.prototype.initevent=function(){
       var self=this;
       //console.dir(self);
       self.$holder=$(self.options.nameid+self.config.containerComponent+" "+self.config.scroll);
       //console.log(self.options.nameid+self.config.containerComponent+" "+self.config.scroll);
       //console.dir(self.$holder);
     
       self.calcularAltura.apply(self,[]);

       self.menuHeightItem=$(self.options.nameid+self.config.containerComponent+" "+self.config.item).height();
       //**********************************************************************
       $(self.options.nameid+self.config.containerComponent+" "+self.config.item).on("click",function(event){
             console.log("estoy el click de element vertical scroll01 link");
             //event.preventDefault();
             var mytimer=setTimeout(function() {
                 
               
                 self.calcularAltura.apply(self,[]);

                 //console.log(self.menuHeightScroll);
                 //console.log(self.menuHeightItems);
                 //console.log(self.menuHeight);
                 self.doclick=true;
                 self.scrolltop=self.$holder[0].scrollTop;
                 self.movesum=-(self.$holder[0].scrollTop);
                 
                 self.deactivateButtons.apply(self,[]);
                 self.activateButtons.apply(self,[]);
                 
                 if (self.doclick){
                    self.$holder[0].scrollTop=self.scrolltop;
                    self.doclick=false;
                 }
                 
                 clearTimeout(mytimer);
             }, 350);   //es muy importante que este a 350 ms porque la transicionn del
                        //del menu vertical cuando le pinchamos y se desplaza hacia abajo
                        //tarda unos 300ms y por tanto para saber la altura real tendremos
                        //que esperar hasta los 350ms
             
       });
      
        //**********************************************************************
        
        
        
        $(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).addClass("disabled");
        
        //ojo que los botones de scroll estan fuera de los botones;
        this.holdit($(self.options.nameid+self.config.containerComponent+" "+self.config.btndown),this.buttonmove,-1,400,2);
        this.holdit($(self.options.nameid+self.config.containerComponent+" "+self.config.btnup),this.buttonmove,1,400,2);
        self.deactivateButtons();
        $(self.$holder[0]).on("scroll",function(){
               console.log("estoy en scroll");
               
               // console.log($holder[0].scrollTop);
                //console.log(delta);
               
               
               self.calcularAltura.apply(self,[]);
               
               //hemos puesto el doclick porque al cargar en otro panel de datos,al hacer click, con mas de un slide
               //por ejemplo hace un efecto raro en el scroll y no lo deja de en su sitio, cambia el scroll, y trato de 
               //dejarlo en la mmisma position
               if (self.doclick){
                  self.$holder[0].scrollTop=self.scrolltop;
                  self.doclick=false;
               }
               
               
               self.movesum=-self.$holder[0].scrollTop;

               self.activateButtons();
        })
        //self.$holder[0].addEventListener("scroll",function(){
            
        //});
        self.resizeDebounce();  
       
    };
    ns.menuVerticalScroll.prototype.resizeDebounce=function(){
        var self=this;
         var rtime;
            var timeout=false;
            var delta=350;
            var mytimer;
            function resizeEnd(){
                if (new Date()-rtime<delta){
                mytimer= setTimeout(resizeEnd, delta);
                }else{
                    timeout=false;
                        self.calcularAltura.apply(self,[]);

                        //console.log(self.menuHeightScroll);
                        //console.log(self.menuHeightItems);
                        //console.log(self.menuHeight);
                        self.doclick=true;
                        self.scrolltop=self.$holder[0].scrollTop;
                        self.movesum=-(self.$holder[0].scrollTop);
                        
                        self.deactivateButtons.apply(self,[]);
                        self.activateButtons.apply(self,[]);
                        
                        if (self.doclick){
                            self.$holder[0].scrollTop=self.scrolltop;
                            self.doclick=false;
                        }
                    
                    clearTimeout(mytimer);
                }
            }
            $(window).on("resize",function(event){
              rtime=new Date();
              if (timeout==false){
                timeout=true;
                mytimer=setTimeout(resizeEnd, delta);
              }
            }); 
    }
    ns.menuVerticalScroll.prototype.destroy=function(){
       $(self.options.nameid+self.config.containerComponent+" "+self.config.item).off("click");
       $(self.options.nameid+self.config.containerComponent+" "+self.config.btndown).off("click");
       $(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).off("click");
    }
    //****************************************************
     ns.menuVerticalScroll.prototype.buttonmove=function(cn){
              var self=this;
              if (self.doclick){
                  self.$holder[0].scrollTop=self.scrolltop;
                  self.doclick=false;
              }
              
              self.touchmovey=cn*self.menuHeightItem;
              self.movey=(self.touchmovey);
              self.movesum+=self.movey;
              //console.log(movesum);
              //console.log(menuHeight);
              self.movesum=Math.max(-self.menuHeight,self.movesum);
              self.movesum=Math.min(0,self.movesum);
              //console.log(cn);
              //console.log(movey);
              //console.log(touchmovey);
              //console.log(menuHeightItem);
              //console.log(movesum);
              
              self.$holder[0].scrollTop=Math.abs(self.movesum);
              //$holder.css("transform","translate(0px,"+movesum+"px)");
              self.activateButtons();
     }
     //*********************************************************
     ns.menuVerticalScroll.prototype.deactivateButtons=function(){
        //console.log("estoy dentro de deactivateButtons--");
        
        var self=this;
        //console.log(self.options.nameid+self.options.containerComponent+" "+self.options.btndown);
        //console.dir(  $(self.options.nameid+self.options.containerComponent+" "+self.options.btndown));
        
        if (self.menuHeight>0){
          $(self.options.nameid+self.config.containerComponent+" "+self.config.btndown).removeClass("no-visible");
          $(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).removeClass("no-visible");      
        }else{
          $(self.options.nameid+self.config.containerComponent+" "+self.config.btndown).addClass("no-visible");
          $(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).addClass("no-visible");  
        }

     }
     //*********************************************************
     ns.menuVerticalScroll.prototype.activateButtons=function(){
       var self=this;
                if (self.movesum==0){
                       $(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).addClass("disabled");
                     //$(container+" "+btnup).css({visibility:"hidden"})
                }else{
                       $(self.options.nameid+self.config.containerComponent+" "+self.config.btnup).removeClass("disabled");
                     //$(container+" "+btnup).css({visibility:"visible"})
                }
                //console.log("---------")
                //console.log(movesum);
                //console.log(menuHeight);
                if (self.movesum==-self.menuHeight){
                     $(self.options.nameid+self.config.containerComponent+" "+self.config.btndown).addClass("disabled");
                     // $(eocontainer+" "+btndown).css({visibility:"hidden"})
                } else{
                     $(self.options.nameid+self.config.containerComponent+" "+self.config.btndown).removeClass("disabled");
                     //$(container+" "+btndown).css({visibility:"visible"})
                }
     }
     ns.menuVerticalScroll.prototype.calcularAltura=function(){
       var self=this;
        self.menuHeightScroll=$(self.options.nameid+self.config.containerComponent+" "+self.config.scroll).height();
        self.menuHeightItems=$(self.options.nameid+self.config.containerComponent+" "+self.config.items).height();
        self.menuHeight=self.menuHeightItems-self.menuHeightScroll; 
     }
     ns.menuVerticalScroll.prototype.holdit=function(btn,action,cn,start,speedup){
                //Aplicar un debounce Press o click
                
                var self=this;
                var t;
                var startold=start;
                var rtime;
                var delta=200;
                var timeout=false;
                
                var repeat=function(){
                   //if (new Date()-rtime<delta){
                   //   t=setTimeout(repeat, delta);
                   //}else{
                       timeout=false;
                        action.call(self,cn);
                        t=setTimeout(repeat,startold)
                        startold=startold/speedup;
                        //clearTimeout(t);
                   //}
                };

                btn.on("click",function(event){
                     console.log("estoy en click");
                     action.call(self,cn);
                });
                
                if (self.is_touch_device()){

                    if ("Hammer" in window){
                    
                    //console.log("hay Hammer");
                    
                    var mt=new Hammer(btn[0]);
                    mt.on("press",function(ev){
                        console.log("estoy en press");
                        rtime=new Date();
                        //if (timeout==false){
                            timeout=true;
                        //    t=setTimeout(repeat, delta);
                       // }
                        repeat();
                    });
                    mt.on("pressup",function(ev){
                         console.log("estoy en pressup");
                         clearTimeout(t);
                         startold=start;
                    });
                    
                   };
                   
                }else{
                  
                  btn.on("mousedown",function(event){
                    console.log("estoy en mousedown");
                      rtime=new Date();
                        if (timeout==false){
                            timeout=true;
                            t=setTimeout(repeat, delta);
                        }
                    //repeat();
                  });
                  btn.on("mouseup",function(event){
                    console.log("estoy en mouseup");
                    clearTimeout(t);
                    startold=start;
                  });
                   
                }  
            };

})(this.components||(this.components={}),jQuery);