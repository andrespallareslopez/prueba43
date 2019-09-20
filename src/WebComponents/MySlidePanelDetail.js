import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'



export class MySlidePanelDetail extends LitElement{
    static get properties(){
        return {
            sizes:{type:Object},
            nameDescription:{type:String}
        }
    }
    
    constructor(){
        super()
        this.sizes={}
        this.sizes.pages=[]
        
    }
    set Description(value){
        this.nameDescription = value
    }
    render(){    
        
        return   html`
        <ul class="slide-container-items">
               ${
                this.sizes.pages.map(function(page){     
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
    
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback()
    
    }    
}
customElements.define('my-slide-panel-detail', MySlidePanelDetail);

