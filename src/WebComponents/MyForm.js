import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'



//src/components/forms/03form-fix-basic-01.css
const cadenaformstring = html `
<link rel="stylesheet" href="src/components/forms/03form-fix-basic-01.css" type="text/css" > 
  <form id="form01" class="form-fix-basic-01 " >
    <my-calendar id="cal1"></my-calendar>
    <my-input></my-input>
    <my-search id="search01"></my-search>
    <my-combo id="combo01"></my-combo>
    <my-calendar id="cal2"></my-calendar>
    <my-combo id="combo02"></my-combo>
</form>
`

export class MyForm extends LitElement {
    
    constructor(){
        super();
      
    }
    
    render(){
       
        return cadenaformstring;

    }

    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback()
          
        //console.log('connected')
    }
}

customElements.define('my-form', MyForm);

