


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


const getEmpleado = ( id ) => new Promise((resolve, reject) => {

  const empleado = empleados.find( e => e.id === id )

  if ( !empleado ) {
    reject( `El empleado con id ${id} no existe` )
  }
  
  resolve( empleado )

})


const getSalario = ( id ) => new Promise((resolve, reject) => {

  const salario = salarios.find( s => s.id === id )

  if ( !salario ) {
    reject( `El salario con id ${id} no existe` )
  }
  
  resolve( salario )
  
})


const id = 5;

/*
getEmpleado(id)
  .then( ({ nombre })  => console.log(nombre))
  .catch( err => console.log(`ERROR: ${err}`))

getSalario(id)
  .then( ({ salario })  => console.log(salario) )
  .catch( err => console.log(`ERROR: ${err}`) )
*/

/*
getEmpleado(id)
  .then( empleado => {
    getSalario(id) 
     .then( ({ salario }) => {
      console.log(`El empleado ${empleado.nombre} tine un salario de $${salario}`)
     })
     .catch( err => console.log(`ERROR: ${err}`) )
  })
  .catch( err => console.log(`ERROR: ${err}`) )
*/

let nombre

getEmpleado(id)
  .then( empleado => {
    nombre = empleado.nombre
    return getSalario( id )
  })
  .then( ({ salario }) => console.log(`El empleado ${nombre} tine un salario de $${salario}`))
  .catch( err => console.log(`ERROR: ${err}`) )