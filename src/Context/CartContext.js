import React from "react";
import { useState } from "react";
export const CartContext = React.createContext();

export const CartProviders = ({children}) =>{
    const [ProductoCartList,setProductoCartList]=useState([])
    console.log(ProductoCartList)
    const addItem =(item, quantity) =>{

   
        const newProducts ={
           ...item,
            quantity:  quantity
        }
        
       const newArreglo = [... ProductoCartList]
       newProducts.quantityPrice = newProducts.quantity * newProducts.precio
            newArreglo.push(newProducts)
            setProductoCartList(newArreglo)
        }
         
        const PrecioTotal = () =>{
          return ProductoCartList.reduce((acc, item)=> acc +item.quantityPrice, 0)
        }

        const ProductosTotal = () =>{
          return ProductoCartList.reduce((acc, item)=> acc +item.quantity, 0)
        }

        const filtroItem = (item, quantity) => {
         const productoDuplicado= ProductoCartList.find( prod => prod.id === item.id);
           console.log("productoDuplicado",productoDuplicado)
           const indiceProductoDuplicado = ProductoCartList.indexOf(productoDuplicado);
           console.log("foundProductIndex", indiceProductoDuplicado)
           const newArreglo = [...ProductoCartList];
           newArreglo[indiceProductoDuplicado].quantity += quantity;
           newArreglo[indiceProductoDuplicado].quantityPrice =   newArreglo[indiceProductoDuplicado].quantity *  
           newArreglo[indiceProductoDuplicado].precio

           setProductoCartList(newArreglo);
           localStorage.setItem("producto", JSON.stringify(newArreglo))
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
        
        <CartContext.Provider value={{ProductoCartList, addItem, removeItem, ClearCart, filtroItem, isInCart, PrecioTotal, ProductosTotal}}>
             {children}
        </CartContext.Provider>
    )
}

