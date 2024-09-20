
/**
 * Pas de controle d'arité
 */

const fn1 = (a = '',b) => {
    console.log(a,b)
};

fn1();
fn1();
fn1(1,2,3);

/**
 * Une fonction peut retourner toute valeur
 * 
 * - fonction
 * - instance
 * - class
 * - ...
 */

// 🤢
const fn2 = (a) => (b) => a * b;
const times10 = fn2(10) // (b) => 10 * b;
const times50 = fn2(50) // (b) => 50 * b;
const times100 = fn2(100)(50) // 5000
console.log(
    times10(10),
    times50(10)
)

// Fonction Fléchée

// Avec corps de fonction
const fn3 = () => {
    // crops de fonction
    return null //return explicit
}

// sans corps de fonction
const fn4 = () => null // retun implicit

// Test de lecture : que retourne la fonction ?
const fn5 = () => ({ 
}) 


// FUNCTION

function fn6( a, b, c = 10 , d = a + b){
    return null
}

// fn6(1,'coucou')

// REST / SPREAD operator
function fn7( a, ...others /* ... rest */){
    console.log( a, others, ...others /*spread*/)
}

fn7(1)
fn7(1,2)
fn7(1,2,3,4)

const msg = 'stm'

console.log(msg, ...msg);