const { crearArchivoMultiplicacion } = require('./helpers/multiplicar')
const argv = require('./config/yargs.js')
const log = require('./config/log')
const fs = require('fs')

console.clear()

//console.log(argv)

/*
const [ , , arg3 = 'base=5'] = process.argv

const [ , base = 5] = arg3.split('=')
*/

const { base, top, listar } = argv

const path = 'tablas'

fs.mkdirSync(path, {
  recursive: true
})


crearArchivoMultiplicacion( base, top, listar, `${path}/`)
  .then( res => console.log(res) )
  .catch( err => console.log(err) ) 