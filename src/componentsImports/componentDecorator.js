import {util} from './util01.js'
import {components} from 'component'

export const Component=function(options){
        
    return function(target){
        //console.log("estoy dentro de target");
        //console.dir(target);
        //components.container.prototype=target
        //var container=new components.container(options);
        //container.prototype=target
        //target.prototype=new components.container()
       
        var targetInstance=new target();
        
        var container=new components.container();
        util.extend(container,targetInstance);
        //console.dir(targetInstance) 
        targetInstance.init(options)
        if ('initevent' in targetInstance){
            //console.log("estoy dentro de target initevent")
            //container.prototype.initevent=targetInstance.initevent
        }
         
        
        //console.dir(targetInstance)
        //targetInstance.prototype=new components.container()
        //var component=new targetInstance(options)
        //target.prototype=new components.container()
        //var targetInstance=new target(options);
        //console.dir(window)
       
        
        //if ('initevent' in targetInstance)
        //   targetInstance.initevent(options);
        
    }
} 