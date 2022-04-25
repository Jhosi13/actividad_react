import React from 'react'
import {nanoid} from 'nanoid'

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [listafruta, setListafruta] = React.useState([])
    const [id, setId] = React.useState('')
    
    const guardarFrutas = (e) =>{
      e.preventDefault()
      
      if(!fruta.trim()){
        alert('Digite la fruta')
        return
      }
      if(!descripcion.trim()){
        alert('Digite la descripción')
        return
      }


      setListafruta([
        ... listafruta,
        {id:nanoid(), nombreFruta: fruta, nombreDescripcion: descripcion}
      ])  
      e.target.reset()
      setFruta('')
      setDescripcion('')
    }
    
    const editar = item =>{
      setFruta(item.nombreFruta)
      setDescripcion(item.nombreDescripcion)
      /*setModoEdicion(true)*/
      setId(item.id)
  }

    const eliminar = id =>{
      const aux = listafruta.filter(item => item.id !== id)
      setListafruta(aux)
    }
  return (
    <div className='container mt-5'>
        <h1 className='text-center'>CRUD BASICO</h1>
        <div className='row'>
          <div className='col-8'>
              <h4 className='text-center'>Listado de Frutas</h4>
              <ul className='list-group'>
                    {
                listafruta.map((item,index)=>(
                  <li  className='list-group-item' key={index}>
                    <span className='lead'>{item.nombreFruta}-{item.nombreDescripcion}</span>
                    <button className='btn btn-danger btn-sm float-end mx-2' onClick={()=> eliminar(item.id)}>Eliminar</button>
                    <button className='btn btn-warning btn-sm float-end'onClick={()=>editar(item)}>Editar</button>
                  </li>
                ))
              }
              </ul>
          </div>
          <div className='col-4'>
            <h4 className='text-center'></h4>
            <form onSubmit={guardarFrutas}>
              <input className='form-control mb-2' 
              type="text" 
              placeholder="Ingrese Fruta"
              onChange={(e)=>setFruta(e.target.value)}
              value={fruta}
              />
              <input className='form-control mb-2'
              placeholder='Ingrese Descripción'
              type="text" 
              onChange={(e)=>setDescripcion(e.target.value)}
              value={descripcion}
              />
              <button className='btn btn-primary btn-block'
              type='submit'
              >Agregar</button>
            </form>
          </div>
        </div>
    </div>
  )
}
export default Formulario
