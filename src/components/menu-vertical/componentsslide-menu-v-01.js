

;(function(ns){
    var containermain="aside";
    var container=".menu-vertical01"
    var items=".items";
    var slide="li";
    var btnup="#btn-slide-up";
    var btndown="#btn-slide-down";
    var touchstarty= undefined;
    var touchmovey= undefined;
    var movey= undefined;
    var movesum=undefined;
    var longTouch=undefined;
    var $holder,$holdermain;
    var slideHeight;
    var slideHeightItem;
         movesum=0;
         ns.slidemenuVertical={};
         
         ns.slidemenuVertical.initevent=function(){
                
                //$holdermain=$(containermain);
                $holder=$(container+" "+items);
                slideHeight=$holder.height();
                slideHeightItem=$holder.find(slide).height();
                

                //console.log(slideHeightItem);
                
                
                //$(container+" "+btnup).css({visibility:"hidden"})
                $(container+" "+btnup).addClass("disabled");
                holdit($(container+" "+btndown),buttonmove,-1,400,2);
                holdit($(container+" "+btnup),buttonmove,1,400,2);
                //********************************************************
                 
                 //console.dir($holder[0]);
                 
                 var holder=$holder[0];
                      
                      var options = {
                         preventDefault: true
                      };

                if (is_touch_device()){
                    /*
                    $holder.find("li").each(function(index,value){
                        
                        var mt=new Hammer(this);
                        mt.get("pan").set({direccion:Hammer.DIRECTION_ALL});
                        mt.on("panstart",function(ev){
                                $holder.removeClass("no-animate");
                            touchstart.apply(this,[ev.center.y]);     
                        });
                        mt.on("panmove",function(ev){
                            console.log("estoy en move de li");
                                $holder.addClass("no-animate");
                            touchmove.apply(this,[ev.pointers[0].pageY]);
                        });
                        mt.get("panend",function(ev){
                              $holder.removeClass("no-animate"); 
                        touchend.apply(this,[]);
                        })
                        
                    });
                    */
                     /*
                    holder.addEventListener("ontouchstart",function(event){
                        console.log("estoy dentro de on touchstart");
                        //this.start(event);
                        //console.log(alert("estoy aqui"));
                        
                    });
                    
                    holder.addEventListener("ontouchmove",function(event){
                        console.log("estoy dentro de on touchmove");
                        //this.move(event);
                    
                    });
                    holder.addEventListener("ontouchend",function(event){
                    
                       //this.end(event);
                    
                    });  
                    */
                        
                     
                    var mt=new Hammer.Manager($holder[0], {
                        touchAction: 'auto',
                        recognizers: [
                        [Hammer.Pan,{ direction: Hammer.DIRECTION_HORIZONTAL }],
                        ]
                    });
                    
                    
                    //mt.get("pan").set({direccion:Hammer.DIRECTION_ALL});
                    //mt.get("swipe").set({direction:Hammer.DIRECTION_ALL})
                    
                    mt.on("panstart",function(ev){
                    console.log("estoy en start");
                            //console.dir(ev);
                            //console.log(ev.center.x);
                            $holder.removeClass("no-animate");
                            touchstart.apply(this,[ev.center.y]);    
                    }.bind(this));
                    
                    mt.on("panmove",function(ev){
                    console.log("estoy en move");
                            //console.dir(ev);
                            //console.log(ev.pointers[0].pageY);
                            $holder.addClass("no-animate");
                            touchmove.apply(this,[ev.pointers[0].pageY]);
                    }.bind(this));
                        
                    mt.on("panend",function(ev){
                        console.log("estoy en panend");
                        $holder.removeClass("no-animate"); 
                        touchend.apply(this,[]);
                        ev.preventDefault();
                    }.bind(this));
                    
                    
                }  //if is_touch_device
                $holder[0].addEventListener("wheel",function(ev){
                  console.log("estoy en mousewheel");
                  console.log(ev.deltaY);
                  if (ev.deltaY>0){
                    buttonmove.call(this,-1);
                  }else{
                      buttonmove.call(this,1);  
                  };
                });
         };

        
      
         
         var touchstart=function(y){
         //console.log("estoy dentro de start");
            longTouch=false;
            setTimeout(function(){
                longTouch=true;
            },250);
            touchstarty=y;
                 
         };
          var buttonmove=function(cn){
              touchmovey=cn*slideHeightItem;
              movey=(touchmovey);
              movesum+=movey
              movesum=Math.max(-slideHeight,movesum);
              movesum=Math.min(0,movesum);
              $holder.css("transform","translate(0px,"+movesum+"px)");
              activateButtons();
          }
          var touchmove=function(y){
                //console.log("estoy dentro de move");
                     touchmovey=y;
                     movey=(touchstarty - touchmovey)*0.05;
                     movesum+=movey
                     movesum=Math.max(-slideHeight,movesum);
                     movesum=Math.min(0,movesum);
                     $holder.css("transform","translate(0px,"+movesum+"px)");
                     
                    //movesum+=movey
                    //console.log(touchstarty);
                    //console.log(touchmovey);
                    //console.log(movey);
                    //console.log(movesum);        
            };
            var touchend=function(){
                movesum+=movey
                movesum=Math.max(-slideHeight,movesum);
                movesum=Math.min(0,movesum);
                $holder.css("transform","translate(0px,"+movesum+"px)");

               activateButtons();
               

            };
            var activateButtons=function(){
                   if (movesum==0){
                       $(container+" "+btnup).addClass("disabled");
                     //$(container+" "+btnup).css({visibility:"hidden"})

                }else{
                      $(container+" "+btnup).removeClass("disabled");
                     //$(container+" "+btnup).css({visibility:"visible"})
                }
                if (movesum==-slideHeight){
                     $(container+" "+btndown).addClass("disabled");
                     // $(container+" "+btndown).css({visibility:"hidden"})
                } else{
                     $(container+" "+btndown).removeClass("disabled");
                     //$(container+" "+btndown).css({visibility:"visible"})
                }
            }
            var holdit=function(btn,action,cn,start,speedup){
                var t;
                var startold=start;
                var repeat=function(){
                   action.call(this,cn);
                   t=setTimeout(repeat,startold)
                   startold=startold/speedup;
                };
                 btn.on("click",function(event){
                     console.log("estoy en click");
                     action.call(this,cn);
                });

                if (is_touch_device()){
                    if ("Hammer" in window){
                    
                    console.log("hay Hammer");
                    
                    var mt=new Hammer(btn[0]);
                    mt.on("press",function(ev){
                        console.log("estoy en press");
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
                    repeat();
                  });
                  btn.on("mouseup",function(event){
                    console.log("estoy en mouseup");
                    clearTimeout(t);
                    startold=start;
                  });
                  
                }
               

            };
            function is_touch_device() {
              return 'ontouchstart' in window        // works on most browsers 
                  || navigator.maxTouchPoints;       // works on IE10/11 and Surface
            };
         
})(this.components=this.components||{});