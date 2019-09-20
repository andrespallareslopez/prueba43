
;(function(ns){
    var container=".slide-container";
    var btnleft=".slide-button.left";
    var btnright=".slide-button.right";
    var items=".slide-items";
    var slide=".el";
    var ii,cntli,delta;
    
    var slideWidth= $(container+" "+slide).width();
    var touchstartx= undefined;
    var touchmovex= undefined;
    var movex= undefined;
    var $holder=$(container+" "+items);
    var $el=$(container+" "+slide);
    var scx=0.45;
    var scy=0.9;
    var prscX;
    var prscY;
    var prDelta;
    var scDeltax;
    var scDeltaY;
    var sclx;
    var scly;
    var grados=25;
    var degDelta;
    
    //console.log(slideWidth);
    
       cntli=4;
       ii=0;
       $(container+" "+btnright).click(function(event){
            console.log("boton derecho");

            //removeclassatras();
            //removeclasscurrent();

            ii+=1;
            if (ii<cntli-1){
                $(container+" "+btnleft).css({visibility:"visible"})
            }else{
                $(container+" "+btnright).css({visibility:"hidden"});
                ii=cntli-1;
            }
             if (ii-1>=0){
                                $el.eq(ii-1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(25deg)");
                            } 
                            $el.eq(ii).addClass("animate").css("transform","scale3d(1,1,1) rotateY(0deg)");  //elemento centro
                            if (ii<=cntli){
                                $el.eq(ii+1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(-25deg)");
                            }
                            $holder.addClass("animate").css("transform","translate3d(-"+ii*(100/cntli)+"%,0,0)");
            /*
            $(container+" "+items).addClass("atras-"+ii);
            //console.dir($(items+" "+slide)[ii-1]);
            if (ii-2>=0){
               $(items+" "+slide)[ii-2].classList.add("iz");
            }
            $(items+" "+slide)[ii-1].classList.add("centro");
            if (ii<=cntli-1){
               $(items+" "+slide)[ii].classList.add("der");
            }
            */

       });
       //*********************************************************
       $(container+" "+btnleft).click(function(event){
            console.log("boton izquierdo");
            //removeclassatras();
            //removeclasscurrent();
            
            ii-=1;
            if ((ii>=0)){
                $(container+" "+btnright).css({visibility:"visible"});
            }else{
                $(container+" "+btnleft).css({visibility:"hidden"});
                ii=0;
            }
             if (ii-1>=0){
                                $el.eq(ii-1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(25deg)");
                            } 
                            $el.eq(ii).addClass("animate").css("transform","scale3d(1,1,1) rotateY(0deg)");  //elemento centro
                            if (ii<=cntli){
                                $el.eq(ii+1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(-25deg)");
                            }
                            $holder.addClass("animate").css("transform","translate3d(-"+ii*(100/cntli)+"%,0,0)");
            /*
            $(container+" "+items).addClass("atras-"+ii);

            if (ii-2>=0){
               $(items+" "+slide)[ii-2].classList.add("iz");
            }
            $(items+" "+slide)[ii-1].classList.add("centro");
            if (ii<=cntli-1){
               $(items+" "+slide)[ii].classList.add("der");
            }
            */

       });
       
       ii=0;
         var mt=new Hammer( $(container+" "+items)[0]);
             
         mt.on("panstart",function(ev){
            console.log("estoy en start");
                          //console.dir(ev);
                          //console.log(ev.center.x);
                          touchstart.apply(this,[ev.center.x]);
                          
                          
         }.bind(this));
         mt.on("panmove",function(ev){
            console.log("estoy en move");
                         //console.dir(ev);
                         touchmove.apply(this,[ev.pointers[0].pageX]);
                         
                         
         }.bind(this));
                     
         mt.on("panend",function(ev){
            console.log("estoy en panend");
                          touchend.apply(this,[]);
                          
                          
         }.bind(this));
         
         //**************************************************************************
         //**************************************************************************
         var touchstart=function(x){
                  //console.log("estoy dentro de start");
                    longTouch=false;
                    setTimeout(function(){
                       longTouch=true;
                    },250);
                    touchstartx=x;
                    //removeclasscurrent();
                    if ($holder.hasClass("animate")){
                        $holder.removeClass("animate");
                    }
                    if ($el.hasClass("animate")){
                        $el.removeClass("animate");
                    } 
                    //$(".animate").removeClass("animate");

            };
            var touchmove=function(x){
                //console.log("estoy dentro de move");
                    touchmovex=x;
                    movex=ii*slideWidth + (touchstartx - touchmovex);
                    
                    //var panx=100 - movex/6;
                    if (movex < (cntli-1)*slideWidth){
                        
                        prDelta=(touchstartx-touchmovex)/slideWidth;
                        scDeltax=1-scx;
                        scDeltay=1-scy;
                        sclx=1-(scDeltax*Math.abs(prDelta));
                        scly=1-(scDeltay*Math.abs(prDelta));
                        degDelta=grados*prDelta;
                        //console.dir($el.eq(ii));
                        if (ii-1>=0){
                           $el.eq(ii-1).css("transform","scale3d("+String((0.45-(0.55*prDelta)))+","+String((0.9-(0.1*prDelta)))+",1) rotateY("+Math.ceil((grados-Math.abs(degDelta)))+"deg)")
                        }
                        $el.eq(ii).css("transform","scale3d("+String(sclx)+","+String(scly)+",1) rotateY("+Math.ceil(degDelta)+"deg)");  //elemento centro
                        if (ii<=cntli){
                            $el.eq(ii+1).css("transform","scale3d("+(0.45+(0.55*prDelta))+","+(0.9+(0.1*prDelta))+",1) rotateY(-"+Math.ceil(grados-Math.abs(degDelta))+"deg)")
                        }
                        $holder.css("transform","translate3d(-"+String(movex)+"px,0,0)");
                    }
                    
                    //if (panx<100){
                        //$el.css("transform","translate(-"+panx+"px,0");              
                    //}
                    
            };
            var touchend=function(){
                            var absMove=Math.abs(ii*slideWidth-movex);
                            var absMovex=Math.abs(touchstartx-touchmovex);
                            //****
                            //console.log("touchstarx-tochmovex:"+(touchstartx-touchmovex));
                            //console.log("ii*slideWidth:"+ii*slideWidth+" movex:"+movex);
                            //console.log("absMove:"+absMove+" slideWidth/2:"+slideWidth/2+" longTouch:"+longTouch);
                            //****
                            if (absMove>slideWidth/2 ||longTouch===false){
                               if (movex > ii*slideWidth && ii<cntli-1){
                                  if (absMovex > slideWidth*0.35){
                                        ii++;
                                  }
                                
                               } else if (movex < ii*slideWidth && ii>0){
                                  if (absMovex > slideWidth*0.35){
                                       ii--;
                                  }
                                 
                               } 
                            }
                            

                            if (ii-1>=0){
                                $el.eq(ii-1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(25deg)");
                            } 
                            $el.eq(ii).addClass("animate").css("transform","scale3d(1,1,1) rotateY(0deg)");  //elemento centro
                            if (ii<=cntli){
                                $el.eq(ii+1).addClass("animate").css("transform","scale3d(0.45,0.9,1) rotateY(-25deg)");
                            }
                            $holder.addClass("animate").css("transform","translate3d(-"+ii*(100/cntli)+"%,0,0)");
                            
                            //$el.addClass("animate").css("transform","translate(-"+(100-ii*50)+"px,0)");
            };
         
       //*****************************************************************************
       //*****************************************************************************  
       /*
       function removeclasscurrent(){
           $(items+" "+slide).removeClass("centro");
           $(items+" "+slide).removeClass("iz");
           $(items+" "+slide).removeClass("der");
       }; 
       function removeclassatras(){
           $(container+" "+items).removeClass("atras-1");
           $(container+" "+items).removeClass("atras-2");
           $(container+" "+items).removeClass("atras-3");
           $(container+" "+items).removeClass("atras-4"); 
       };
       */
})();
