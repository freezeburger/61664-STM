/*
import pkg from '../package.json' with { type: "json" };
import colors from 'colors';

const OUTPUT = colors.blue( pkg.name.substring(2).toUpperCase() );
console.log(OUTPUT); 
*/

const pkg = require('../package.json');
const colors = require('colors'); 

const OUTPUT = colors.blue( package.name.substring(2).toUpperCase() );
// const OUTPUT = pkg.name.substring(2).toUpperCase().blue();

console.log(OUTPUT);
