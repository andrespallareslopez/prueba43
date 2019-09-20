import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'



const cadenanavstring = html`

<link rel="stylesheet" href="src/components/buttons/03buttonmovile01.css" type="text/css" > 
<button type="button" id="btn-toggle-left" class="nav-mobile ripple push-float-left">
   <i class="fa fa-bars fa-2x" ></i>  
</button>

<button type="button" id="btn-toggle-right" class="nav-mobile ripple push-float-right">
   <i class="fa fa-list fa-2x" ></i>
</button>
<button type="button" id="btn-toggle-sign-in" class="nav-mobile ripple push-float-right">
   <i class="fa fa-sign-in fa-2x" ></i>  
</button>
<my-button-search id="buttonsearch01" ></my-button-search>

`

export class MyNav extends LitElement {
    
    constructor(){
        super();
        //console.log("Estoy en my nav")
        var timer1=setTimeout(() => {
              $("#btn-toggle-right").click(function(event){
                event.preventDefault();
                $(".menu-horizontal").toggleClass("navbars-open");    
              });
              
              $("#btn-toggle-left").click(function(event){
                
                event.preventDefault();
                $(".main-body").toggleClass("section-open");
              });
              //*******************************************************
              
              $(document).on("click","#btn-toggle-sign-in",function(event){
                //console.log("estoy en sig-in");
                event.preventDefault();
                $(".form-login").toggleClass("open-login");
                
              });
              //*********************************************************
              $("#btn-footer-menu01").click(function(event){
                console.log("estoy en boton footer");
                event.preventDefault();
                if ($(".footer-menu").hasClass("expand-footer")){
                   $(".footer-menu").removeClass("expand-footer");
                }else{
                   $(".footer-menu").addClass("expand-footer");
                }
              });
        }, 50);
     
    }
    
    render(){
       
        return cadenanavstring;
    }
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback()
          
        //console.log('connected')
    }
}

customElements.define('my-nav', MyNav);
