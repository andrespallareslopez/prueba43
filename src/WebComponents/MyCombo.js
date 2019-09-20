import { LitElement, html } from "/../node_modules/lit-element/lit-element.js";

import {UXDataList} from '/src/componentsImports/UXDataList.js'
import {UXButtonScroll} from '/src/componentsImports/UXButtonScroll.js'


export class MyCombo extends LitElement {
  static get properties(){
    return {
      msgText:{type: String},
      msgErr:{type: String},
      msgPlaceHolder:{type: String},
      required:{type:Boolean}
    }
  }
  constructor() {
    super();

  }
  
  render() {
    
    return html`
    <link rel="stylesheet" href="node_modules/tether/dist/css/tether.css" type="text/css" >
    <link rel="stylesheet" href="src/components/panel/04PanelScroll01.css" type="text/css" >
    <link rel="stylesheet" href="src/components/list/03datalist01.css" type="text/css" >
      <div id="datalist01" class="datalist">
        <button
          id="btn-slide-close01"
          class="slide-button-panel button-close top-off"
        >
          <i class="fa fa-close fa-1x"></i>
        </button>
        <div class="panel-datalist"></div>
      </div>
      <div class="group group-block">
        <div class="label-help">
          <span class="logo fa fa-question-circle fa-2x"></span>
          <span class="text">Introduce grupo </span>
        </div>
        <div class="label-input">
          <span class="logo fa fa-tag fa-2x"></span>
          <input
            id="combotxt"
            type="text"
            placeholder=""
            class="input medium"
          />
          <button id="search" class="list-button">
            <span class="fa fa-sort-desc"></span>
          </button>
        </div>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    let id=this.attributes[0].value
    let timer1 = setTimeout(()=>{
      var scroll;
      var datalist;
      //console.log(id);
      datalist=new controls.UXDataList({
         id:id,
         clearContainer:true,
         /*
         data:(function(id){
          if (id=="combo01")    
           return   {articulos:articulos}
          else if(id=="combo02")
            return {mesas:mesas}
         })(id),
         */
         /*
         textTemplate:(function(id){
            if (id=="combo01")
              return cadenadataarticulos
            else if (id=="combo02")
              return cadenadatamesas
         })(id),
         */
         onButtonClick:function(options){
             if (id=="combo01")    
               datalist.setData({articulos:articulos},id,cadenadataarticulos)
             else if(id=="combo02")
               datalist.setData({mesas:mesas},id,cadenadatamesas)
                
             scroll=new controls.UXButtonScroll({
                 id:id+'datalist',
                 onItemClick:function(value,target){
                     console.dir(target)
                     //console.log("estoy dentro de onItemClick")
                     datalist.$inputText.val(value);
                     datalist.toggle();
                     scroll.destroy();
                 }
             })
         },
         onClose:function(){
            scroll.destroy();
         }
     })
    },50)
    //console.log('connected')
  }
}

customElements.define("my-combo", MyCombo);
