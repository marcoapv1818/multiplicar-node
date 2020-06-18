const argv = require('yargs').argv;


const { crearArchivo} = require('./multiplicar/multiplicar');

let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(process.argv);

  crearArchivo(base)
  .then( archivo => console.log(`Archivo creado:${ archivo}`))
  .catch(err =>console.log(err));