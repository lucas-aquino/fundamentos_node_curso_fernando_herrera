


const empleados = [
  {
    id: 1,
    nombre: 'Lucas'
  },
  {
    id: 2,
    nombre: 'Juan'
  },
  {
    id: 3,
    nombre: 'Roberto'
  },
  {
    id: 4,
    nombre: 'Karen'
  }
]


const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  },
  {
    id: 3,
    salario: 3000
  }
]


const getEmpleado = ( id, callback ) => {
  const empleado = empleados.find( e => e.id === id )

  if ( !empleado ){
    return callback( `El empleado con id ${id} no existe`, null)
  }

  return callback( null, empleado )
}


const getSalario = ( id, callback ) => {
  const salario = salarios.find( s => s.id === id)?.salario
  if ( !salario ){
    return callback( `El empleado con id ${id} no tiene salario`, null)
  }

  return callback( null, salario )
}


const id = 4;

getEmpleado( id, ( err, empleado ) => {

  if( err ) {
    return console.log(`ERROR: ${err}`)
  }

  getSalario( id, ( err, salario ) => {
    
    if( err ) {
      return console.log(`ERROR: ${err}`)
    }
    
    console.log( `Empledado: ${empleado.nombre}, Salario: $${salario}` )
  })
})


