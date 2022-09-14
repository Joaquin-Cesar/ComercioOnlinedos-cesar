import React from 'react'
import { useState } from 'react'
const ItemCount = ({stock,initial,onAdd}) => {
    const[count, setCount]=useState(initial)

    const decrementar= ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar= ()=>{
        if (count < stock) {
            setCount(count+1)
        }
    }
  return (
    <div className='contenedorCount'>
        <p>Stock disponible {stock}</p>
        <div className='ContenedorControles'>
            <button disabled={stock===0} onClick={incrementar} className="botones">+</button>
            <p>{count}</p>
            <button disabled={stock===0} onClick={decrementar} className="botones">-</button>
        </div>
        <button disabled={stock===0} onClick={()=>onAdd(count)} className="botonAgregar">Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount