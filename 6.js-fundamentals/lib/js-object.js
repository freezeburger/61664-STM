
/* const o1 = { value:1, getValue(){ return this.value }}

const o2 = { value:2, getValue(){ return this.value }}

console.log(o1.getValue === o2.getValue )  */

/**
 * Prototype
 * Un objet lie a un autre afin de servir de context de résolution
 */

const proto = { getValue(){ return this.value }}

const o1 = { value:1, __proto__:proto }

const o2 = { value:2, __proto__:proto }

console.log(o1.getValue === o2.getValue, o2.getValue, o2.getValue() ) 

console.log( proto.getValue() )
console.log( proto.getValue.call(o1) /* this = o1 */)

// Constructor

function Custom( val ){
    // new -> this = { __proto__: Custom.prototype }
    this.value = val; // Assignation
    // new -> return this;
}
Custom.prototype.getValue = function(){
    return this.value;
}
const o3 =  new Custom(3)
const o4 = new Custom(4)

// console.log(o3.getValue === o4.getValue, o3.getValue() ) 


// Class

class CustomObj{
    constructor( val ){
        this.value = val;
    }
    // CustomObj.prototype
    getValue(){
        return this.value;
    }
}

const o5 = new CustomObj(5)
const o6 = new CustomObj(6)
console.log(o5.getValue === o6.getValue, o6.getValue() ) 
console.log( JSON.stringify(CustomObj.prototype) ) 
console.log( o6.constructor ) 