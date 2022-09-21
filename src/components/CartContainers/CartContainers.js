import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import "../Estilo/estilo.css"
import { Link } from 'react-router-dom'
const CartContainers = () => {
    const {ProductoCartList, removeItem, ClearCart, PrecioTotal}= useContext(CartContext)
    console.log("ProductoCartList",ProductoCartList.length)
    return (
   <div> {
      ProductoCartList.length > 0 ? 
      <div>
      CartContainers
      <div className='CartContainer'>
          {ProductoCartList.map(item=>(
             
             <div className='CartProducto'>
             <p>{item.nombre}</p>
             <p>{item.quantity}</p>
             <p>Precio unitario: ${item.precio}</p>
             <p>Precio de productos: ${item.quantityPrice}</p>
             <button onClick={()=>removeItem(item.id)}>Eliminar</button>
             </div>
             
          ))}
      </div>
      <button onClick={ClearCart}>Eliminar Carrito</button>
      <p>PrecioTotal: ${PrecioTotal()}</p>
  </div> 
  :
  <>
  <div>
  <h1>Cart Container</h1>
  <p>Carrito vacio</p>
  <button>
  <Link to={"/"}>
  Ir al listado de productos
  </Link>
  </button>
  </div>
  </>
    }
   </div>
  )
}

export default CartContainers