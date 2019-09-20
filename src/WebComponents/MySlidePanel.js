import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'
import {util} from '/src/componentsImports/util01.js'
import {components} from '/src/componentsImports/components01.js'
import {UXSlidePanels} from '/src/componentsImports/UXSlidePanels.js'

import {datos,mesas,categorias,articulos} from '/src/listInMemory.js'



const slidePanelContainerTemplate = html`
<link rel="stylesheet" href="src/components/slides/04slide-container.css" type="text/css" >
<link rel="stylesheet" href="src/components/list/03List-group-buttons.css" type="text/css" >
    
    <div class="slide-container">
    <button class="slide-button left">
    <i class="fa fa-chevron-left fa-2x" ></i>
    </button>
    <div class="slide-items">
         
    </div>
    <button class="slide-button right">
    <i class="fa fa-chevron-right fa-2x"></i>
    </button>
    </div>
`


 export class MySlidePanel extends LitElement{
    static get properties(){
        return {
            datalist:{type:Array},
            sizes:{type:Object},
            nameDescription:{type:String}
        }
    }
    constructor(){
        super()
        var self=this
        this.datalist=[]
        this.sizes={}
        this.sizes.pages=[]
      
      
    }
    render(){    
        return  slidePanelContainerTemplate;
    }
    createRenderRoot() {
        return this;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super. attributeChangedCallback(name, oldValue, newValue)
        var self=this
        console.log(name)
        //console.dir(JSON.parse(newValue))
        //this.datalist=JSON.parse(newValue)
        /*
        var timer=setTimeout(()=>{
          
            var $listCategoriasDetail=$('#myslidedetail1')[0]
          //console.dir($listCategoriasDetail)
          var slidepaneldetail = new UXSlidePanels({
              data: self.datalist,
              textTemplate: self.slidePanelDetailTemplate
          })
          var sizes=slidepaneldetail.getSizes()
          console.dir(sizes)
          $listCategoriasDetail.sizes=sizes
          var timer1=setTimeout(()=>{
            slidepaneldetail.eventSlidePanels()
            
            clearTimeout(timer1)
          },350)
           
           clearTimeout(timer) 
        },550)
        */
      }
    connectedCallback() {
        super.connectedCallback()
        var self=this
        var id=this.attributes[0].value
        //console.log(id)
            
            
            var timer=setTimeout(()=>{
                //console.dir(this.data)
                //Podemos utilizar eventcustom para centralizar el repindado 
                //del template tanto aqui como en attributteChangeCallback
                //self.datalist=categorias
                


                var slidepaneldetail = new UXSlidePanels({
                    container:".slide-container .slide-items",
                    data: self.datalist,
                    textTemplate:slidePanelDetailTemplate
                })
                
                
                /*
                var cadenaSlidePanelDetail ='<my-slide-panel-detail id="myslidedetail1" ></my-slide-panel-detail>'
                var myslidePanelDetail= new  components.container({
                    container:".slide-container .slide-items",
                    textTemplate: cadenaSlidePanelDetail
                })
                myslidePanelDetail.initevent=function(options){
                    console.log("Estoy en myslidePanelDetail initevent")
                    var $listCategoriasDetail=$('#myslidedetail1')[0]
                    //console.dir($listCategoriasDetail)
                }
                */
                
            },750)
        
    }      
 }
 customElements.define('my-slide-panel', MySlidePanel);
 
 function slidePanelDetailTemplate(self){
    return html `
    <ul class="slide-container-items">
        ${
            self.sizes.pages.map(function(page){     
            return  html`
            <li class="slide-item" >
                <div class="list-grp-buttons list-center">
                ${
                    page.slides.map(function(slide){                                 
                    //console.dir(slide);
                    return html`
                        <a class="list-grp-button box-shadow-3"   data-codigo=${slide.codigo} href="#"  >
                            <div class="list-grp-content-top" >
                            <span class="list-grp-content-text list-grp-context-text-center" >${slide.categoria}</span>
                            </div>  
                        </a>
                    `  
                    })
                }
                </div>
            </li>
            `
            })
        } 
    </ul>
    `
    
 }