import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
const CartContainers = () => {
    const {ProductoCartList, removeItem, ClearCart }= useContext(CartContext)
  return (
    <div>
        CartContainers
        <div>
            {ProductoCartList.map(item=>(
               <>
               <p>{item.nombre} - {item.quantity}</p>
               <button onClick={()=>removeItem(item.id)}>Eliminar</button>
               </>
            ))}
        </div>
        <button onClick={ClearCart}>Eliminar Carrito</button>
    </div>
  )
}

export default CartContainers