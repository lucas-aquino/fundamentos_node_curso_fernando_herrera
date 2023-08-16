const fs = require('fs')
const log = require('../config/log')

const crearArchivo = async ( path, content ) => {
  try {
    fs.writeFileSync(path, content)

    return `${path}`
  } catch (err) {
    throw log.error(`FILE ERROR: ${err}`)
  }
}

const crearTabla = async (base = 5, top = 10) => {
  try {
    let salida = []
    
    if ( base < 0 ) {
      throw `la base '${base}' no puede ser negativo`
    }

    if ( top < 1 ) {
      throw `el top '${top}' no puede ser menor a 1`
    }

    for( let i = 1;  i <= top; i++ ) {
      salida.push(`${base} X ${i} = ${base * i}`)
    }
    
    return salida
  } catch ( err ) {
    throw log.error(`MULTIPLY ERROR: ${err}`)
  }
}

const crearArchivoMultiplicacion = async ( base = 5, top = 10, listar = false, folderPath = '' ) => {
  try{

    const tabla = await crearTabla(base, top)
      .then( res => res.join('\n\t'))
      .catch( err => {
        throw err
      })

    
    let res = ''

    const tablaString = `TABLA ${base}:\n\n\t${tabla}\n\n`

    const file = await crearArchivo(`${folderPath}tabla-${base}.txt`, tablaString)
      .catch(err => {
        throw err
      })
    
    if ( listar ) {
      res += log.head(`TABLA ${base}: \n\n`)
      res += log.data(`\t${tabla} \n\n`)
    }
    
    res += log.success(`Se creo el archivo '${file}' con la tabla del ${base}`)
    
    return res
  } catch (err) {
    throw err
  }
}

module.exports = {
  crearArchivoMultiplicacion
}
