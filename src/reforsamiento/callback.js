

const getUsuarioByID = ( id, callback ) => {
  const usuario = {
    id,
    nombre: 'Lucas',
    apellido: 'Aquino'
  }


  setTimeout( () => {
    callback(usuario)
  }, 1500)

}


getUsuarioByID( 10 , ( usuario ) => {
  const { nombre, apellido } = usuario
  console.log(`{ usuario: { nombre: '${nombre}', apellido: '${apellido}' } }`)
})


