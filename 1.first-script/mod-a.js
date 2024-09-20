// Mot clef/symbol déclaratif : var , let , const ,  function , => , class
// Ne plus utiliser var
let msg = 'Module A Loaded';

console.log(msg);

function output(){
    console.log(msg);
}

// msg, output et sont "exportés" rendus visible
module.exports = {
    //msg,
    output
}

/* 
setInterval( 
    () => console.log('Module A'), 
    1000
); 
*/