const colors = require('colors');
console.log(colors.blue('Creating File'));

[
 `./lib/js-function.js`,
 `./lib/js-object.js`,
 `./lib/js-structure.js`,
 `./lib/node-devlopment.js`
].forEach( file => require('fs').writeFileSync(file, ''));

console.log(colors.green('Done'));