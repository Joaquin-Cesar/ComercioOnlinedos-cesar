import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
const ItemsDetail = ({itemsDetail} ) => {
const {addItem, isInCart, filtroItem } = useContext(CartContext)
const [contador,setContador] =useState(0)
 
const onAdd = (dato)=>{
  setContador(dato)

   if (isInCart(itemsDetail.id)) {
    filtroItem(itemsDetail, dato);
  } else {
    addItem(itemsDetail, dato)
  }

 
}
     
return (
   <>

     <div className='contenedorPadreDetail'>
            <img src={itemsDetail.imagen} alt={itemsDetail.nombre} className="ImagenDelProductoDetail"/>
            <div>
              <h5>{itemsDetail.nombre}</h5>
            <p> {itemsDetail.precio}</p>
              <h6>{contador}</h6>
              <hr/>
               <ItemCount stock={10} initial={0} onAdd={onAdd}/>
            </div>
            {
              contador > 0 &&
            <Link to={"/cart"}>
             <button className="IrAlCarrito"> Ir al Carrito</button>
            </Link>
            }
          </div>
      
   </>
  )

}

export default ItemsDetail