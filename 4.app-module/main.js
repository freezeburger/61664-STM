
// Exécuter le script : "node index.js"
// Exécuter le script : "node ."

console.log('Main Script');

// Un script node reste actif tant qu'un "callback" est en attente
// setTimeout( () => console.log('Done') , 3000 );


// NodeJS peut charger et "parser" automatiquement les fichiers JSON
const pkg = require('./package.json');
console.log(pkg, pkg.main); // pkg est l'objet résultant

// L'instruction require permet de charger un fichier en tant que module (CommonJS ou CJS)
// Depuis 2015 on trouve aussi les EcmaScript Module ou ESM
// Un module n'est chargé qu'une seule fois en mémoire.
require('./mod-a.js');

// require.main référence le premier module chargé dans le process

require('mod-b.js');

/* console.log(module);

console.log(
    require.main == module
) */

console.log(global);
