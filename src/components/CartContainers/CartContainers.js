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

    const form =[{inputLabel: "nombre", tipo: "text"},
                 {inputLabel: "apellido", tipo: "text"},
                 {inputLabel: "celular", tipo: "text"},
                 {inputLabel: "Email", tipo: "email"}]

    return (
   <div>
     {idOrder ? <div><p>su orden fue creada, id {idOrder}</p>
     <button onClick={ClearCart}>
  <Link to={"/"}>
 FINALIZAR
  </Link>
  </button></div>:
     <>
     
    {ProductoCartList.length > 0 ? 
      <div>
 
    
      <table class="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cantidad</th>
              <th>Costo</th>
              <th>Total</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody id="cards">
          {ProductoCartList.map(item=>(
          <tr>
          <td>{item.nombre}</td>
          <td>{item.quantity}</td>
          <td>${item.precio}</td>
          <td>${item.quantityPrice}</td>
          <td><button onClick={()=>removeItem(item.id)}>Eliminar</button></td>
        </tr>
      
        
          ))}
             </tbody>
          </table>
   
      <button onClick={ClearCart}>Eliminar Carrito</button>
      <p>PrecioTotal: ${PrecioTotal()}</p>
      
      <div className='formulario'>
        <h2>Generar orden</h2>
      <form onSubmit={sendOrder}>
       <div className='contenedForm'>
        
        {
          form.map(el=>(
            <div className='form'>
            <label>{el.inputLabel} </label>
            <input type={el.tipo}/>
            </div>
          ))
        }
        </div>
        <button type='submit'>Enviar orden</button>
      </form>
      </div>
  </div> 
  :
  <>
       <table class="table">
          <tfoot>
            <tr id="footer">
              <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
              </tr>
             <tr>
              <th scope="row" colspan="5"> <button>
  <Link to={"/"}>
  Ir al listado de productos
  </Link>
  </button></th>
            </tr>
          </tfoot>
      
        </table>
  </>
    }
    </>
    }
    
   </div>
  )
}

export default CartContainers