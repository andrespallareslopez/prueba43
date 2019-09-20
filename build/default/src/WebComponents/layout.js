import{LitElement,html}from"../../node_modules/lit-element/lit-element.js";const cadenaweblatoutsstring=`
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
        <my-menu-vertical-04 id="menu-vertical02"></my-menu-vertical-01>
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
                 <my-scroll></my-scroll>
                 <!--
                    <div class="panel-scroll-01">
                        <div class="panel-scroll-content">
                            <div class="panel-scroll-item">
                              
                            </div>
                        </div>
                        <button id="btn-slide-up" class="slide-button-panel top"><i class="fa fa-chevron-up fa-2x"></i></button>
                        <button id="btn-slide-down" class="slide-button-panel bottom"><i class="fa fa-chevron-down fa-2x"></i></button>
                    </div>
                   -->

                </div>
            </main>
        </div>

        <div class="footer">
            <footer>
              <!--  
              <div class="push-center-inner push-center-3x">
                 <button id="btn-ok" class="nav-mobile nav-2x push-float-left ripple">
                  <span class="fa fa-check-circle fa-2x" ></span>
                  <span class="title" >Aceptar</span>
                 </button>

                 <button id="btn-cancel" class="nav-mobile nav-2x push-float-right ripple">
                  <span class="fa fa-times-circle fa-2x" ></span>
                  <span class="title" >Cancelar</span>
                 </button>
              </div>
              -->
            </footer>
        </div>

    </div>

</div>
`;class MyLayout extends LitElement{render(){return html`Hola mundo`}}customElements.define("my-layout",MyLayout);