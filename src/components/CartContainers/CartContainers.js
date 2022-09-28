import React, {useContext, useState} from 'react'
import { CartContext } from '../../Context/CartContext'
import "../Estilo/estilo.css"
import { Link } from 'react-router-dom'
import { db } from '../../utils/firebise'
import {collection, addDoc} from "firebase/firestore"
const CartContainers = () => {
    const {ProductoCartList, removeItem, ClearCart, PrecioTotal}= useContext(CartContext)
    const [idOrder, setIdOrder] = useState("")
    console.log("ProductoCartList",ProductoCartList.length)

   

    const sendOrder = (evento) =>{
      evento.preventDefault()
 
      const order ={
        buyer: {
          name:evento.target[0].value,
          phone: evento.target[1].value,
           email: evento.target[2].value
        },
        items: ProductoCartList,
        total: PrecioTotal()
      }
  
      console.log("order", order)

      const queryRef = collection(db, "orders")
      addDoc(queryRef, order).then(response=>{
        setIdOrder(response.id)
      })
    }

    return (
   <div>
     {idOrder ? <p>su orden fue creada, id {idOrder}</p>:
     <>
     
    {ProductoCartList.length > 0 ? 
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
      <form onSubmit={sendOrder}>
        <label>Nombre: </label>
        <input type="text"/>
        <label>Celular: </label>
        <input type="text"/>
        <label>Email: </label>
        <input type="email"/>
        <button type='submit'>Enviar orden</button>
      </form>
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
    </>
    }
    
   </div>
  )
}

export default CartContainers