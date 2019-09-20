import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'
import {Tab} from '/src/componentsImports/componentstabcontainer.js'

import {datos,mesas,categorias,articulos} from '/src/listInMemory.js'

export class MyTab extends LitElement {
    static get properties(){
        return {
            data:{type:Array}
        }
    }
    

    constructor(){
        super();
        this.data=categorias
        var container=new components.container({
            container:"my-layout"
            
        })
        container.promise.then(function(mutation){
            //console.log("Estoy en mutation")
            //console.dir(mutation)
            //Ojo que no esta .container .pages en el index.html esta el elemento<my-layout></my-layout>
            //por tanto tenemos que observar este elemento
           
            var timer=setTimeout(()=>{
                var tabs=new Tab() 
                var $listCategorias=$('#panelCategorias')[0]
                console.dir($listCategorias)
                //$listCategorias.datalist=categorias
                console.dir(categorias)
                
            },50)
         
        })

        //datalist=${JSON.stringify(this.data)} 
    }
    
    render(){
       
        return html`

        <link rel="stylesheet" href="src/components/tabs/tabs01.css" type="text/css" > 
        <div class="tab-container" >
            <div class="tab-controls">
                  <a class="ripple" href="#" >Mesas</a>
                  <a class="ripple" href="#" >Categorias</a>
                  <a class="ripple" href="#" >Articulos</a>
                  <a class="ripple" href="#" >Comandas</a>
            </div>  
            <div class="tab-items" >
              
                    <ul class="tab-container-items">
                            <li class="tab-item" id="tabMesas" name-container="Mesas">
                              <my-panel-scroll-content id="panelMesas"></my-panel-scroll-content>
                            </li>
                            <li class="tab-item" id="tabCategorias" name-container="Categorias">
                                <my-slide-panel .datalist=${this.data}  id="panelCategorias"></my-slide-panel>
                            </li>
                            <li class="tab-item" id="tabArticulos" name-container="Articulos">
                                <my-panel-scroll-content id="panelArticulos"></my-panel-scroll-content>
                            </li>
                            <li class="tab-item" id="tabComandas" name-container="Comandas">
                                  <my-form id="panelComandas" ></my-form>
                            </li>     
                          </ul>    
            
          </div>
        `
    }
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback()
       
        //console.log('connected')
    }
}

customElements.define('my-tab', MyTab);
