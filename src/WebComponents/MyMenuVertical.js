import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'
import {util} from '/src/componentsImports/util01.js'
import {components} from '/src/componentsImports/components01.js'
import {UXScroll} from '/src/componentsImports/UXScroll.js'
import {UXScrollV} from '/src/componentsImports/UXScrollV.js'

import {UXAccordeon} from '/src/componentsImports/UXAccordeon.js'

const cadenamenuverticalstring=html`
<link rel="stylesheet" href="src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css" type="text/css" > 
<link rel="stylesheet" href="src/components/list/03List-collections.css" type="text/css" > 
<div class="menu-vertical01"  >
 <div class="container-menu-scroll" >
                <ul class="items " >
                    <li class="parent element pr"><a class="element-link gr ripple" href="#" >Link 1<span class="fa fa-chevron-right push-float-right" ></span></a>
                         <div class="sub-menu sb" >
                           <a class="element-link el ripple" href="#/plantilla1" data-panel-id="template01" >SubLink 1</a>
                           <a class="element-link el ripple" href="#/plantilla2" data-panel-id="template02" >SubLink 2</a>
                           <a class="element-link el ripple" href="#/plantilla3" data-panel-id="template03" >SubLink 3</a>
                           <a class="element-link el ripple" href="#/plantilla4" data-panel-id="template04" >SubLink 4</a>
                           <a class="element-link el ripple" href="#/plantilla5" data-panel-id="template05" >SubLink 5</a>
                         </div>
                    </li>
                    <li class="parent element pr" ><a class="element-link gr ripple" href="#">Link 2<span class="fa fa-chevron-right push-float-right" ></span></a>
                         <div class="sub-menu sb" >
                           <a class="element-link el ripple" href="#/plantilla6" data-panel-id="template06" >SubLink 1</a>
                           <a class="element-link el ripple" href="#/plantilla7" data-panel-id="template07" >SubLink 2</a>
                           <a class="element-link el ripple" href="#/plantilla8" data-panel-id="template08" >SubLink 3</a>
                           <a class="element-link el ripple" href="#/plantilla9" data-panel-id="template09" >SubLink 4</a>
                           <a class="element-link el ripple" href="#/plantilla10" data-panel-id="template10" >SubLink 5</a>
                         </div>
                    </li>
                    <li class="element item itm" ><a class="element-link el ripple" href="#/plantilla11">Link 3
                        <!--
                        <span class="fa-fix-chevron-right push-float-right" ></span>
                        -->
                    </a>
                    
                    </li>
                    <li class="parent element pr" ><a class="element-link gr ripple" href="#">Link 4<span class="fa fa-chevron-right push-float-right" ></span></a>
                       <div class="sub-menu sb" >
                           <a class="element-link el ripple" href="#" >SubLink 1</a>
                           <a class="element-link el ripple" href="#" >SubLink 2</a>
                           <a class="element-link el ripple" href="#" >SubLink 3</a>
                           <a class="element-link el ripple" href="#" >SubLink 4</a>
                           <a class="element-link el ripple" href="#" >SubLink 5</a>
                       </div>
                    </li>
                     <li class="parent element pr" ><a class="element-link gr ripple" href="#">Link 5<span class="fa fa-chevron-right push-float-right" ></span></a>
                       <div class="sub-menu sb" >
                           <a class="element-link el ripple" href="#" >SubLink 1</a>
                           <a class="element-link el ripple" href="#" >SubLink 2</a>
                           <a class="element-link el ripple" href="#" >SubLink 3</a>
                           <a class="element-link el ripple" href="#" >SubLink 4</a>
                           <a class="element-link el ripple" href="#" >SubLink 5</a>
                       </div>
                    </li>
                </ul>
              </div>
              <button id="btn-slide-up" class="slide-button top" ><i class="fa fa-chevron-up fa-2x"></i></button>
              <button id="btn-slide-down" class="slide-button bottom" ><i class="fa fa-chevron-down fa-2x"></i></button>
    </div>  

`
export class MyMenuVertical extends LitElement {
    
    constructor(){
        super();
        //console.dir($)
        //console.dir(jQuery)
        //console.dir(UXAccordeon)
        var id=this.attributes[0].value
        //console.log(id)
        //console.dir($('my-layout'))
        var container=new components.container({
            container:"my-layout"
        })
        container.promise.then(function(mutation){
            //console.log("Estoy en mutation")
            //console.dir(mutation)
            //Ojo que no esta .container .pages en el index.html esta el elemento<my-layout></my-layout>
            //por tanto tenemos que observar este elemento
        
            var timer=setTimeout(()=>{
            
            new controls.UXScrollV({
                id:id
            })
            
           
            new UXAccordeon({
            id:id,
            onClickMenu:function(e){
                console.log("estoy en click menu")
            }
            })
            
            },50)
         
        })
      
       
        
        
    }
    
    render(){  
        return cadenamenuverticalstring;
    }
    createRenderRoot() {
        return this;
      }
    connectedCallback() {
        super.connectedCallback()
       
        //console.log('connected')
    }
    adoptedCallback(){
         
         
        console.log("adopted")
    }
}

customElements.define('my-menu-vertical-01', MyMenuVertical);
