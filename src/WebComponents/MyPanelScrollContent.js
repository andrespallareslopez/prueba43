import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'
import {util} from '/src/componentsImports/util01.js'
import {components} from '/src/componentsImports/components01.js'
import {UXScroll} from '/src/componentsImports/UXScroll.js'
import {UXScrollV} from '/src/componentsImports/UXScrollV.js'
import {UXPanelScroll} from '/src/componentsImports/UXPanelScroll.js'


import {datos,mesas,categorias,articulos} from '/src/listInMemory.js'


const cadenascrollstring = html`

<link rel="stylesheet" href="src/components/panel/04PanelScroll02.css" type="text/css" > 
<link rel="stylesheet" href="src/components/list/03List-group-buttons.css" type="text/css" >
<div  class="panel-scroll-01">
        <div class="panel-scroll-content fix-panel-scroll-content-tab">
            <div class="panel-scroll-item"  >
               
            </div>
        </div>
        <button id="btn-slide-up" class="slide-button-panel top"><i class="fa fa-chevron-up fa-2x"></i></button>
        <button id="btn-slide-down" class="slide-button-panel bottom"><i class="fa fa-chevron-down fa-2x"></i></button>
</div>    
`

export class MyPanelScrollContent extends LitElement {
    
    constructor(){
        super();
        var id=this.attributes[0].value
        //console.log(id)

        var timer=setTimeout(()=>{
            switch(id){
                case "panelMesas":
                //console.log("Estoy en panelMesas switch")
                
                const panelmesasTemplate=`
                  <my-list-grp-buttons id="list-panel-mesas"></my-list-grp-buttons>
                `
                var myPanelMesas = new components.container({
                    container:'#tabMesas .panel-scroll-item',
                    textTemplate: panelmesasTemplate  
                }) 
                myPanelMesas.initevent = function(options,id){
                    //console.log("estoy en Panel mesas")
                    var $listMesas=$("#list-panel-mesas")[0]
                    //console.dir($listMesas)
                    $listMesas.data=mesas
                }  
                myPanelMesas.create=function(){
                    var timer1=setTimeout(()=>{
                        var panel=new UXPanelScroll({
                            id:id,
                            item:".list-grp-buttons .list-grp-content-top"
                        })
                        clearTimeout(timer1)
                    },50)
                     
                } 
                break;
                case "panelArticulos":
                    //console.log("Estoy en panelArticulos switch")
                    var panelArticulosTemplate=`
                       <my-list-grp-buttons id="list-panel-articulos"></my-list-grp-buttons>
                    `
                    var myPanelArticulos=new components.container({
                        container:'#tabArticulos .panel-scroll-item',
                        textTemplate:panelArticulosTemplate
                    })
                    myPanelArticulos.initevent=function(options,id){
                       
                        var $listArticulos=$('#list-panel-articulos')[0]
                        $listArticulos.data=articulos 
                        
                    }
                    myPanelArticulos.create=function(){
                        var timer1=setTimeout(()=>{
                            var panel=new UXPanelScroll({
                                id:id,
                                item:".list-grp-buttons .list-grp-content-top"
                              })
                              clearTimeout(timer1)
                        },50)
                     
                    }
                break;
            } 
         },50)
    }
    
    render(){
       
        return cadenascrollstring;
    }
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback()
       
        //console.log('connected')
    }
    
    
}

customElements.define('my-panel-scroll-content', MyPanelScrollContent);
