import React from "react";
import { useState } from "react";
export const CartContext = React.createContext();

export const CartProviders = ({children}) =>{
    const [ProductoCartList,setProductoCartList]=useState([])
    
    const addItem =(item, quantity) =>{

   
        const newProducts ={
           ...item,
            quantity:  quantity
        }
        
       const newArreglo = [... ProductoCartList]
            newArreglo.push(newProducts)
            setProductoCartList(newArreglo)
        }

        const filtroItem = (item, quantity) => {
        
           const productoDuplicado= ProductoCartList.find( prod => prod.id === item.id);
           console.log("productoDuplicado",productoDuplicado)
           const indiceProductoDuplicado = ProductoCartList.indexOf(productoDuplicado);
           console.log("foundProductIndex", indiceProductoDuplicado)
           const newArreglo = [...ProductoCartList];
           newArreglo[indiceProductoDuplicado].quantity += quantity;
           setProductoCartList(newArreglo);
          };
       
          const isInCart = (itemId) => {
            const productoRepetido = ProductoCartList.find((item) => item.id === itemId);
    
            if (productoRepetido !== undefined) {
        
              return true;
            } else {
              console.log('falsito');
              return false;
            }
          };
   

    const removeItem = (itemId) =>{
  console.log("itemId", itemId)
  const newArreglo = ProductoCartList.filter(producto=>producto.id !== itemId)
  setProductoCartList(newArreglo)
    }

    const ClearCart = ()=>{
        setProductoCartList([])
    }

    return(
        
        <CartContext.Provider value={{ProductoCartList, addItem, removeItem, ClearCart, filtroItem, isInCart}}>
             {children}
        </CartContext.Provider>
    )
}

