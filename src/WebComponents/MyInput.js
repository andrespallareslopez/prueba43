import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'


export class MyInput extends LitElement {
    static get properties(){
      return {
        msgText:{type: String},
        msgErr:{type: String},
        msgPlaceHolder:{type: String},
        required:{type:Boolean}
      }
    }
    constructor(){
        super();
        this.msgText="Text"
        this.msgPlaceHolder="Input here"
        this.msgErr="Error"
        this.required=false
    }
    
    render(){
       
    return html`
      <div class="group group-block">
        <div class="label-help">
          <span class="logo fa fa-question-circle fa-2x"></span>
          <span class="text">${this.msgText}</span>
        </div>
        <div class="label-input" >
          <span class="logo fa fa-tag fa-2x" ></span>
          <input type="text" placeholder="${this.msgPlaceHolder}" class="input" >
        </div>                                             
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

customElements.define('my-input', MyInput);