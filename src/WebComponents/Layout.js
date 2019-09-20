
import {LitElement,html} from '/../node_modules/lit-element/lit-element.js'

//import 'src/components/layouts/03layout02/03layout02.css'
//import 'src/components/layouts/03layout02/03transition02.css'
//import 'src/components/effects/03rippleEffects01.css' 

const cadenaweblatoutsstring =html`

<link rel="stylesheet" href="src/components/layouts/03layout02/03layout02.css" type="text/css" > 
<link rel="stylesheet" href="src/components/layouts/03layout02/03transition02.css" type="text/css" > 
<link rel="stylesheet" href="src/components/effects/03rippleEffects01.css" type="text/css" > 
<div id="container" class="container lyt03layout02"  >
         
<div class="pages" data-template="webroot30" data-action="layout02bootstrap">

<header>
    <div class="logo">
        <div class="spinner">
            <div class="ball ball-1"></div>
            <div class="ball ball-2"></div>
            <div class="ball ball-3"></div>
            <div class="ball ball-4"></div>
        </div>
    </div>
    <h1 class="title-application">My Application</h1>
</header>




<div class="main-body">
    <aside id="menuvertical" class="menu-area">
        <my-menu-vertical-01 id="menu-vertical02"></my-menu-vertical-01>
    </aside>
    <div id="root" class="wrapper page root">

        <div class="nav">
            
            <nav data-behavior="navButtons03layout02">
                <my-nav></my-nav>
                <my-menu-horizontal-01></my-menu-horizontal-01>

            </nav>
            
        </div>

        <div class="main">
            <main>
                <div class="content" data-template="scroll02" data-action="panelform01" >
                 
                  <my-tab></my-tab>

                </div>
            </main>
        </div>

        <div class="footer">
            <footer>
            
            </footer>
        </div>

    </div>

</div>
</div>
</div>
`
export class MyLayout extends LitElement {
    
    constructor(){
        super();
    }
    
    render(){
       
        return cadenaweblatoutsstring;
    }
    createRenderRoot() {
        return this;
      }
}

customElements.define('my-layout', MyLayout);




