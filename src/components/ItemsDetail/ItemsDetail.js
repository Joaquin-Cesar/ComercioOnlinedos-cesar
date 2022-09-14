import React from 'react'

import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
const ItemsDetail = ({itemsDetail} ) => {
 console.log("itemsDetail:",itemsDetail)
const [contador,setContador] =useState(0)
 
const onAdd = (dato)=>{
   setContador(dato)
}
     
return (
   <>

     <div className='contenedorPadre'>
            <img src={itemsDetail.imagen} alt={itemsDetail.nombre}/>
            <div>
              <h5>{itemsDetail.nombre}</h5>
            <p> {itemsDetail.precio}</p>
              <h6>{contador}</h6>
               <ItemCount stock={10} initial={0} onAdd={onAdd}/>
            </div>
          </div>
 
   </>
  )

}

export default ItemsDetail