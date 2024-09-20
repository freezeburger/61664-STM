
/**
 * Object litteral
 */
const s1 = {}

// Object.seal et Object.freeze 
const s2 = {
    keyA:'valA'
}
s2.keyB = 'valB'

// Object Explicit
const s3 = new Object(); // {}
s3.keyA = 'valA';


const s4 = [];
const s5 = new Array();

const s6 = new Map();
s6.set('key', 'value');

const s7 = new Set();
s7.add('value');


const s8 = {}
const s9 = new WeakSet([s8])
s8 = null;