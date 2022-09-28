import React from 'react';
import '../Estilo/estilo.css'

import { db } from '../../utils/firebise'
import { collection, getDocs, query, where} from "firebase/firestore"
import ItemsList from '../ItemsList/ItemsList';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
const ItemListContainers = () => {
  
  const {categoryId}= useParams();
   const[items, setItems] = useState([])
 

   useEffect(() => {

    const getDatas = async()=>{
  
   if (categoryId) {
    const queryfilter = query(collection(db, "Items"), where("categoria", "==", categoryId))
    const filter = await getDocs(queryfilter)
 const productsFilter =  filter.docs.map(doc =>  { const NewProduct ={
        ...doc.data(),
        id: doc.id 
      }
    return NewProduct})
   
    setItems(productsFilter)
    }
    else{
      const queryRef = collection(db, "Items")
      const response = await getDocs(queryRef)
   const products =  response.docs.map(doc =>  { const NewProduct ={
          ...doc.data(),
          id: doc.id 
        }
        
      return NewProduct}
      )
    console.log("firebase",products)
      setItems(products)
    }
    
  
  }
     
      getDatas()
      
   

  
   }, [categoryId])
  return (
      <>
          <ItemsList itemsList={items}/>
      </>
    )
  }
  
  export default ItemListContainers 