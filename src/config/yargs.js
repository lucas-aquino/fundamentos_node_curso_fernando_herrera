const log = require('./log')
const argv = require('yargs')
.option( 'b',
  {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base en la que se genera la tabla'
  }
).option( 't',
{
  alias: 'top',
  type: 'number',
  default: 10,
  describe: 'Es el numero hasta donde se calcula la tabla'
}
)
.option( 'l',
  {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra en pantalla la tabla generada'
  }
)
.check( (argv, options) => {
  if( isNaN(argv.b) ) {
    throw log.error(`ERROR: La base tiene que ser un numero`)
  }
  return true
})
.argv

module.exports = argv
