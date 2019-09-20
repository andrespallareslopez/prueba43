import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'

export class MyListGrpButtons extends LitElement {
    
    static get properties(){
        return {
            data:{type:Array}
        }
    }
     
    constructor(){
        super();
        this.data =[]
        
    }
    
    set Description(value){
        this.nameDescription = value
    }
    
    render(){
       
        return html`
        <link rel="stylesheet" href="src/components/list/03List-group-buttons.css" type="text/css" >

        <div class="list-grp-buttons space-top-1x">
        ${
           this.data.map(function(value){
              return html`
                   <a class="list-grp-button box-shadow-3" href="#" >
                     <div class="list-grp-content-top" >
                      <span class="list-grp-content-text list-grp-context-text-center" >${value.descripcion}</span>
                     </div>  
                   </a>`
           })
        } 
        </div>
        
        `
    }
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback()
    
    }
}

customElements.define('my-list-grp-buttons', MyListGrpButtons);
