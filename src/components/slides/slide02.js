
 
 ;(function(ns){
            
            ns.slider=(function(){
                return function(){
                   //console.log("estoy en el contructor");
                this.el={
                   slider: $("#slider"),
                   holder: $(".holder"),
                   imgSlide: $(".slide-image")             
                };    
                this.slideWidth= $("#slider").width();
                this.touchstartx= undefined;
                this.touchmovex= undefined;
                this.movex= undefined;
                this.index=0;
                this.longTouch=undefined;
                this.init();
            };
            })();
            ns.slider.prototype={
                init:function(){

                      
                  bindUIEvents.call(this);
                  
                }
                /*
                ,
                start:function(event){
                    console.log("estoy dentro de start");
                    this.longTouch=false;
                    setTimeout(function(){
                       ns.slider.longTouch=true;
                    },250);
                    this.touchstartx=event.originalEvent.touches[0].pageX;
                    $(".animate").removeClass("animate");
                    
                },
                move:function(event){
                    console.log("estoy dentro de move");
                    this.touchmovex=event.originalEvent.touches[0].pageX;
                    this.movex=this.index*this.slideWidth + (this.touchstartx - this.touchmovex);
                    
                    var panx=100-this.movex/6;
                    if (this.movex<600){
                        this.el.holder.css("transform","translate(-"+this.movex+"px,0)");
                    }
                    if (panx<100){
                        this.el.imgSlide.css("transform","translate(-"+panx+"px,0");              
                    }
                  },
                end:function(event){
                    var absMove=Math.abs(this.index*this.slideWidth-this.movex);
                    if (absMove>this.slideWidth/2 ||this.longTouch===false){
                       if (this.movex > this.index*this.slideWidth && this.index<2){
                           this.index++;
                  eo     } else if (this.movex < this.index*this.slideWidth && this.index>0){
                           this.index--;
                       } 
                    }
                    this.el.holder.addClass("animate").css("transform","translate(-"+this.index*this.slideWidth+"px,0)");
                    this.el.imgSlide.addClass("animate").css("transform","translate(-"+100-this.index*50+"px,0)");
                }
                */
            };
            
            var bindUIEvents=function(){
                   //console.log("estoy dentro de bindUIEvents");
                //console.dir(this.el.holder);
                /*
                this.el.holder.on("touchstart",function(event){
                    console.log("estoy dentro de on touchstart");
                   this.start(event);
                }.bind(this));
                
                this.el.holder.on("touchmove",function(event){
                   console.log("estoy dentro de on touchmove");
                   this.move(event);
                }.bind(this));
                this.el.holder.on("touchend",function(event){
                   this.end(event);
                }.bind(this));  
                */

                                      /*
                      var options = {
                         preventDefault: true
                      };
                      */
                      var mt=new Hammer(this.el.holder[0]);
             
                       mt.on("panstart",function(ev){
                          //console.log("estoy en start");
                          //console.dir(ev);
                          //console.log(ev.center.x);
                          touchstart.apply(this,[ev.center.x]);
                      }.bind(this));
                      mt.on("panmove",function(ev){
                         //console.log("estoy en move");
                         //console.dir(ev);
                         touchmove.apply(this,[ev.center.x]);
                      }.bind(this));
                     
                      mt.on("panend",function(ev){
                          //console.log("estoy en panend");
                          touchend.apply(this,[ev.center.x]); 
                      }.bind(this));
            };
            var touchstart=function(x){
                  //console.log("estoy dentro de start");
                    this.longTouch=false;
                    setTimeout(function(){
                       ns.slider.longTouch=true;
                    },250);
                    this.touchstartx=x;
                    $(".animate").removeClass("animate");
            };
            var touchmove=function(x){
                //console.log("estoy dentro de move");
                    this.touchmovex=x;
                    this.movex=this.index*this.slideWidth + (this.touchstartx - this.touchmovex);
                    
                    var panx=100-this.movex/6;
                    if (this.movex<600){
                        this.el.holder.css("transform","translate(-"+this.movex+"px,0)");
                    }
                    if (panx<100){
                        this.el.imgSlide.css("transform","translate(-"+panx+"px,0");              
                    }
            };
            var touchend=function(x){
                            var absMove=Math.abs(this.index*this.slideWidth-this.movex);
                            var absMovex=Math.abs(this.touchstartx-this.touchmovex);
                            //****
                            console.log("touchstarx-tochmovex:"+(this.touchstartx-this.touchmovex));
                            console.log("index*slideWidth:"+this.index*this.slideWidth+" movex:"+this.movex);
                            console.log("absMove:"+absMove+" slideWidth/2:"+this.slideWidth/2+" longTouch:"+this.longTouch);
                            //****
                            if (absMove>this.slideWidth/2 ||this.longTouch===false){
                               if (this.movex > this.index*this.slideWidth && this.index<2){
                                  if (absMovex > this.slideWidth*0.35){
                                        this.index++;
                                  }
                                

                               } else if (this.movex < this.index*this.slideWidth && this.index>0){
                                  if (absMovex > this.slideWidth*0.35){
                                       this.index--;
                                  }
                                 

                               } 
                            }

                            this.el.holder.addClass("animate").css("transform","translate(-"+this.index*this.slideWidth+"px,0)");
                            this.el.imgSlide.addClass("animate").css("transform","translate(-"+100-this.index*50+"px,0)");
            };

          })(this.components=this.components||{});