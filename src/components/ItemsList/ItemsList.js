import React from 'react'
import Items from '../Items/Items'

const ItemsList = ({itemsList}) => {

  return (
    <>
  {itemsList.map((producto)=>{

  return(
    <Items 
    id={producto.id}
    nombre={producto.nombre}
    precio={producto.precio}
    imagen={producto.imagen}
    />
   )
    })}
    </>
  )
}

export default ItemsList