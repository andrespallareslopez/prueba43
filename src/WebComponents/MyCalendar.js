import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'

//import {components} from '/src/componentsImports/components01.js'
import {UXDatePicker} from '/src/componentsImports/UXDatePicker.js'


export class MyCalendar extends LitElement {
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
    
  }
  
  render(){
     
  return html`
    <link rel="stylesheet" href="node_modules/pikaday/css/pikaday.css" type="text/css" >
    <link rel="stylesheet" href="node_modules/tether/dist/css/tether.css" type="text/css" >
    
      <div class="group group-block">
      <div class="label-help">
        <span class="logo fa fa-question-circle fa-2x"></span>
        <span class="text">Introduce otra fecha  </span>
      </div>
      <div class="label-input">
      <span class="logo fa fa-tag fa-2x"></span>
      <input id="fecha" autocomplete="off" data-inputmask="'alias':'date','placeholder':'_'"  class="input medium" type="text" placeholder="">
      <button id="btn-fecha" class="list-button"><span class="fa fa-calendar"></span></button>
      </div>
    </div>
  `
  }
  
  createRenderRoot() {
      return this;
  }
  connectedCallback() {
      super.connectedCallback()
      let id=this.attributes[0].value
      let timer1=setTimeout(() => { 
         new controls.UXDatePicker({
           id:id
         })        
      }, 450);  
      //console.log('connected')
  }
}

customElements.define('my-calendar', MyCalendar);
