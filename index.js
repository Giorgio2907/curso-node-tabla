//Primer codigo

/* const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')(process.argv.slice(2))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
  }) 
  .check((argv, options) => {
    if(isNaN(argv.b)){
      throw 'La base debe ser un Numero'
    }
    return true;
  }) 
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false
  })
  .argv;

console.clear();
crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
  .catch(err => console.log(err)); */

//Segundo codigo

/* const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./Config/yargs');

console.clear();
crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
  .catch(err => console.log(err)); */

//Tercer codigo

const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./Config/yargs');

console.clear();
crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
  .catch(err => console.log(err));