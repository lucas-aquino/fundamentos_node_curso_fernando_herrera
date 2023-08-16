

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

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id)
    const salario = await getSalario(id)
  
    return `empleado: ${ empleado?.nombre }, salario: $${ salario?.salario }`
  } catch (err) {
    throw err
  }
}

const id = 5

getInfoUsuario(id)
  .then( msg => console.log(msg) )
  .catch( err => console.log(`ERROR: ${err}`) )