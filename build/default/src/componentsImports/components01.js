/// <reference path="../shared/js/main.d.ts" />
import{util}from"./util01.js";var components,Container;(function(ns,util){"use strict";ns.enumInsertHTML={before:1,normal:2,after:3,customElement:4};ns.container=function(){return function(options){//var observer;
//var allparams=[].slice.call(arguments);
//console.log(allparams);
//**********************
//otra manera de comprobar el parametro
// if (options){}else{}
//importante comprobar si options existe,y entonces lanzar el init
//porque si no cuando instanciamos el objeto container en
//en el prototype de menuvertical,panel,etc..., con el constructor vacio nos interesa que no
//haga nada
var params=[].slice.call(arguments);if(0<params.length){this.init.apply(this,params)}//console.dir(params);
//if (options){
//    this.init(options);
//}
}}();ns.container.extend=function(){return function(objeto){//console.log("estoy dentro de extend");
//console.dir(this);
util.extend(objeto,ns.container.prototype)}}();ns.container.prototype.init=function(options,config){var self=this;if(!Function.prototype.bind){Function.prototype.bind=function(oThis){if("function"!==typeof this){// closest thing possible to the ECMAScript 5
// internal IsCallable function
throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")}var aArgs=Array.prototype.slice.call(arguments,1),fToBind=this,fNOP=function(){},fBound=function(){return fToBind.apply(this instanceof fNOP&&oThis?this:oThis,aArgs.concat(Array.prototype.slice.call(arguments)))};fNOP.prototype=this.prototype;fBound.prototype=new fNOP;return fBound}}//console.dir(config);
(function(config){config.renderName=config.renderName||"rendertemplate"})(config||(config={}));//console.dir(this.config)
if(this.config===void 0){//console.log("config esta a undefined")
this.config={}}util.extend(config,this.config);//console.dir(this.config);
(function(options){var elemento;options.nameDescription=options.nameDescription||void 0;options.customElement=options.customElement||void 0;options.selector=options.selector||void 0;options.templateReact=options.templateReact||void 0;options.ReactDOM=options.ReactDOM||void 0;options.importsUrl=options.importsUrl||void 0;options.dependencies=options.dependencies||void 0;options.container=options.container||void 0;//".container";
options.containerComponent=options.containerComponent||void 0;options.clearContainer=options.clearContainer||!1;elemento=document.querySelector(options.container);options.element=options.element||elemento;options.observerConfig=options.observerConfig||{attributes:!0,childList:!0,//subtree:true,
characterData:!0//attributes:true
//attributeOldValue:true
};options.conected=options.conected||!0;options.behavior=options.behavior||void 0;options.action=options.action||void 0;options.fnbehavior=options.fnbehavior||void 0;options.fncreate=options.fncreate||void 0;options.url=options.url||void 0;options.fetchRemote=options.fetchRemote||function(url){if(url){return util.http.get(url)}}(options.url);//fetchTransform
options.fetchTransform=options.fetchTransform||void 0;options.data=options.data||void 0;options.id=options.id||void 0;options.nameid=options.nameid||void 0;options.nametemplate=options.nametemplate||void 0;options.pathTemplate=options.pathTemplate||void 0;options.cssUrls=options.cssUrls||void 0;options.cssTemplate=options.cssTemplate||void 0;options.typeInsertHTML=options.typeInsertHTML||ns.enumInsertHTML.normal;options.callbackObserver=options.callbackObserver||function(mutation){//console.log("Estoy dentro de callback por defecto");
};//options.promiseObserver=Promise;                                              
})(options);this.data=void 0;this.options={};util.extend(options,this.options);//console.dir(this.options);
this.promise=new Promise(function(resolve,reject){this.observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){//console.log("estoy dentro de mutation");
//console.dir(mutation);
this.options.callbackObserver(mutation);// console.log(this.options.conected);
resolve(mutation);if(this.options.conected){this.observer.disconnect();//console.log("observer desconectado")
}}.bind(this))}.bind(this))}.bind(this));if(this.options.importsUrl||this.options.cssUrls){this.loadDependencies(function(){self.processRender()})}else{this.processRender()}};function loadError(oError){throw new URIError("The script "+oError.target.src+" didn't load correctly.")}var prefixScript=function(url,onloadFunction){var newScript=document.createElement("script");newScript.onerror=loadError;if(onloadFunction){newScript.onload=onloadFunction}document.currentScript.parentNode.insertBefore(newScript,document.currentScript);newScript.src=url},affixScriptToHead=function(url,onloadFunction){var newScript=document.createElement("script");newScript.onerror=loadError;if(onloadFunction){newScript.onload=onloadFunction}document.head.appendChild(newScript);newScript.src=url},processCssUrls=function(i){//console.log(i)
var fileref=document.createElement("link");fileref.setAttribute("rel","stylesheet");fileref.setAttribute("type","text/css");fileref.setAttribute("href",i);if("undefined"!=typeof fileref)document.getElementsByTagName("head")[0].appendChild(fileref)},checkSrc=function(){function _check(tag){return function(src){//var urlscript='node_modules/webcomponentsjs/lite.js';
var urlscript=src;console.log(urlscript);switch(tag){case"script":break;case"link":break;}console.log(tag+"[src='"+urlscript+"']");var element=document.querySelectorAll(tag+"[src='"+urlscript+"']");console.log(element);if(0==element.length){return!1}else{return!0}}}return{js:_check("script"),css:_check("link")}}(),load=function(){function _load(tag){return function(url,typeLoad){return new Promise(function(resolve,reject){var element=document.createElement(tag),parent="body",attr="src";element.onload=function(a){//console.dir(this);
resolve(url)};element.onerror=function(){reject(url)};switch(tag){case"script":element.async=!0;if(typeLoad){//console.log("estoy dentro de typeLoad"); 
if("type"in element){element.type="module";//console.log('tiene type');
}}//if ("type" in element)
//   element.type="module";
break;case"link":element.type="text/css";element.rel="stylesheet";attr="href";parent="head";break;}element[attr]=url;document[parent].appendChild(element)})}}return{css:_load("link"),js:_load("script")}}();ns.container.prototype.processRender=function(){var self=this;if(this.options.selector){this.options.typeInsertHTML=ns.enumInsertHTML.customElement;this.config.renderName="renderTemplateCustomElement";this.options.conected=!1;//console.log("estoy en options.selector:"+this.options.selector);
//this.observer.observe(document.head, this.options.observerConfig);
//this.createSelector();
this.renderHtmlSelector()}if(this.options.cssTemplate&&this.options.element){}else if(this.options.element){//console.dir(this.options.element+" elemento de container "+this.options.container)
//console.log("estoy en options.element:"+this.options.element+" "+this.options.container);
//this.observer.observe(this.options.element,this.options.observerConfig);
this.renderHtml()}else{if(!this.options.selector)console.log("error al crear el observer, objeto this.options.element vacio, el container no esta bien establecido")}};ns.container.loadDependenciesSystemJS=function(myfn){console.log("estoy en loadDependencies:"+this.options.selector)};ns.container.prototype.loadDependencies=function(myfn){var self=this;//console.log("estoy en loadDependencies:"+this.options.selector);
this.options.dependencies=(this.options.dependencies||[]).concat(this.options.importsUrl||[]).map(function(i){//console.log(typeof i);
if("string"===typeof i)return i+"!js";else if("object"===typeof i){//console.log('estoy en object')
if("url"in i){i.url=i.url+"!js";return i}else{console.log("problema en la carga de script dependencias, objeto de importUrl no esta bien formado ");console.dir(i)}}}).concat((this.options.cssUrls||[]).map(function(k){return k+"!css"}));//console.dir(this.options.dependencies);
Promise.all(this.options.dependencies.map(function(i){//i.split("!")
//console.log(i);
if("string"===typeof i)return load[i.split("!")[1]](i.split("!")[0]);else if("object"===typeof i){//console.log("estoy dentro del promise object")  
var url=void 0,typemodule=void 0;if("url"in i)url=i.url;if("typemodule"in i)typemodule=i.typemodule;return load[url.split("!")[1]](url.split("!")[0],typemodule)}})).then(function(values){//console.dir(values);
if(myfn)myfn()}).catch(function(e){console.log("Error en load dependencies "+self.options.selector+" al cargar la url-src de: "+e)})};ns.container.prototype.loadCssUrls=function(){this.options.conected=!1;//console.log("estoy en options.cssUrls")
this.observer.observe(document.head,this.options.observerConfig);//estoy en carga de url de css dinamicamente
this.options.cssUrls.forEach(function(i,index){//console.log(index)
if(index+1==this.options.cssUrls.length){this.options.cssUrl=i}processCssUrls(i);//console.dir(this)                  
}.bind(this))};ns.container.prototype.setData=function(data,id,Template){console.log("estoy en setData "+id);//console.dir(data)
//console.log(id)
var self=this;if(id){if(!self.options.data){//console.log("no esta definido")
self.options.data={}}self.options.data[id.replace(/-/g,"")]=data}else{self.options.data=data}if(self.options.templateReact){self.renderReactTemplate(self.options.templateReact,data,id)}else if(self.options.element){//********************** */
//self.render(data);
console.log("estoy dentro de setdata en options.element");if(!Template&&self.options.textTemplate){Template=self.options.textTemplate}if(Template)util.renderTemplateHtml.apply(self,[data,Template]);else if(self.options.textTemplate)util.renderTemplateHtml.apply(self,[data,self.options.textTemplate])}if("reloaddata"in self){self.reloaddata.apply(self,[self.options,id])}};ns.container.prototype.getData=function(id){return this.options.data};ns.container.prototype.renderHtml=function(){var self=this;this.options.conected=!0;//this.options.cssUrl=undefined;  //reseteamos este valor para que en el mutation observer no entre al valor nodevalues si no nos data un error
if(this.options.element){this.observer.observe(this.options.element,this.options.observerConfig);this.render(self.options.data)}else{console.log("error al crear el observer, objeto this.options.element vacio, el container no esta bien establecido")}};ns.container.prototype.renderReactTemplate=function(templateReact,data,id){let self=this;//console.log(id)
//console.dir(data)
var elementSelector;if(self.options.container){elementSelector=document.querySelector(self.options.container)}else if(self.options.selector){if(self.options.customElement.id){elementSelector=document.getElementById(id);//console.log("selector "+self.options.selector+" con Id "+elementSelector.id)
//console.dir(elementSelector)
}else{elementSelector=document.querySelector(self.options.selector)}}if(self.options.templateReact){//console.log("estoy dentro")
//if (self.options.datatemplate){
//  self.options.ReactDOM.render(self.options.templateReact(self.options.datatemplate,self.options.nameDescription),elementSelector)
//}else 
if(data){self.options.ReactDOM.render(templateReact(data,self.options.nameDescription),elementSelector)}else{self.options.ReactDOM.render(self.options.templateReact,elementSelector)}}};ns.container.prototype.renderHtmlSelector=function(){let self=this;//console.log("estoy dentro de renderHtmlSelector: "+this.options.selector);
this.options.conected=!0;this.options.cssUrl=void 0;//reseteamos este valor para que en el mutation observer no entre al valor nodevalues si no nos data un error
this.mycustom=Object.create(HTMLElement.prototype);this.mycustom.self=this;this.mycustom.createdCallback=function(){var that=this;self=this.self;self.options.customElement=that;//console.log("estoy dentro del create Callback :"+self.options.selector);
if(self.options.textTemplate||self.options.nametemplate||self.options.templateReact){self.render().then(function(source){//console.log(source);
if(!source){source="En construccion"}//Hay que encontrar el elemento selector
//var elementSelector=document.querySelector(self.options.selector);
//var elementSelector=that;
//console.dir(elementSelector);
//if (elementSelector)
//  self.observer.observe(elementSelector,self.options.observerConfig);
if(self.options.templateReact){//self.options.ReactDOM.render(self.options.templateReact,elementSelector)
self.renderReactTemplate(self.options.templateReact,self.options.data,that.id)}else if(self.options.textTemplate||self.options.nametemplate){that.innerHTML=source}//console.log(that.id)
self.options.id=that.id;if("initevent"in self){if("my-nav"==self.options.selector){}//console.log("estoy dentro de lanzador de initevent")
//console.log("estoy dentro de lanzador de initevent")
self.initevent.apply(self,[self.options,that.id])}if("afterinit"in self){if("my-nav"==self.options.selector){//console.log("tiene afterinit "+self.options.selector)
//console.dir(self.afterinit)
}self.afterinit.apply(self,[self.options,that.id])}})}else{console.log("No se ha establecido nameTemplate o textTemplate: "+self.options.selector)}};this.mycustom.detachedCallback=function(){};this.mycustom.attributeChangedCallback=function(attrName,oldVal,newVal){//console.log("cambio el atributo:"+attrName)
};this.mycustom.attachedCallback=function(){let that=this;//console.log("estoy dentro del attached callback: "+self.options.selector+" con id "+this.id);
//console.dir(this.data)
//console.dir(self.getData())
//this.innerHTML="web component 01"
};this.mycustom.render=function(templateReact,data){//console.log("estoy en render "+self.options.selector+" en id "+this.id)
//console.dir(data)
if(this.id){//console.log(this.id.replace(/-/g,"",))
if(!self.options.data){//console.log("no esta definido")
self.options.data={}}//quitamos el guion del nombre del componente por ejemplo:
//my-component lo dejariamos en mycomponent 
self.options.data[this.id.replace(/-/g,"")]=data}//console.dir(self.data)
if(templateReact){self.renderReactTemplate(templateReact,data,this.id)}};this.mycustom.setData=function(data,id,Template){if(self.setData){self.setData(data,id,Template)}};this.mycustom.resize=function(options,id){if("resize"in self){self.resize(options,id)}};this.myElement=document.registerElement(self.options.selector,{prototype:this.mycustom})};ns.container.prototype.renderCssSelector=function(){this.loadCssUrls()};ns.container.prototype.create=function(fncreate){//console.log(fncreate);
this.options.fncreate=fncreate};ns.container.prototype.render=function(data,state){var self=this;this.options.datatemplate=void 0;if(data){this.options.data=data}//console.log(this.options.fetchRemote);
if(this.options.data){this.options.datatemplate=this.options.data}else if(this.options.fetchRemote){this.options.datatemplate=this.options.fetchRemote}//console.dir(this.config.renderName);
//importante comprobar si tiene name template
if(this.options.nametemplate&&this.options.element){//renderName es por defecto renderTemplate
util[this.config.renderName].apply(this,[this.options.datatemplate,this.options.nametemplate,state])}else if(this.options.textTemplate&&this.options.element){this.config.renderName="renderTemplateRaw";util[this.config.renderName].apply(this,[this.options.datatemplate,this.options.textTemplate,state])}else if(this.options.selector&&this.options.nametemplate){//Devuelve un promise
this.config.renderName="renderTemplateCustomElement";return util[this.config.renderName].apply(this,[this.options.datatemplate,this.options.nametemplate,state])}else if(this.options.selector&&this.options.textTemplate){//Devuelve un promise
this.config.renderName="renderTemplateCustomElementRaw";return util[this.config.renderName].apply(this,[this.options.datatemplate,this.options.textTemplate,state])}else if(this.options.selector&&this.options.templateReact){this.config.renderName="renderTemplateCustomElementReact";return util[this.config.renderName].apply(this,[this.options.datatemplate,this.options.templateReact,state])}else if(this.options.templateReact&&this.options.element){return util.renderTemplateCustomElementReact.apply(this,[this.options.datatemplate,this.options.templateReact,state]).then(function(source,statec){//console.log("estoy dentro de renderTemplateCustomElementReact then "+self.options.container)
self.renderReactTemplate(self.options.templateReact,self.options.datatemplate);return self.promise}).then(function(m){//console.log(m);
//console.log("estoy dentro del promise con estado "+state)
util.manageStateComponent.apply(self,[state,m])})}}})(components=components||{},util);//podriamos poner simplemente this, y no definir components
Container=components.container;export{components,Container};if(!window.components)window.components={};util.addNameSpace(window.components,components);