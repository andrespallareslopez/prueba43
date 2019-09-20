import {util} from './util01.js'


export const Input = function(attrib){
    //console.log('estoy dentro de Input decorators')  
    return function(target,key,descriptor){
        //console.log('estoy dentro de Input decorators')
        //console.dir(target)
        //console.log('key:'+key) 
        //console.dir(target.options)
        let value 
        const getter = function() {
            console.log(`Get => ${key}`);
            return value;
          };
          
          const setter = function(newVal) {
            console.log(`Set: ${key} => ${newVal} on ${attrib}`);
            value = newVal;
          };
         
          let prop=Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
          });
          return prop
    }
}