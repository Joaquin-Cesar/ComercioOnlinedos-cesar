import React from 'react';
import '../Estilo/estilo.css'
import data from './mock-data';
import ItemsList from '../ItemsList/ItemsList';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
const ItemListContainers = () => {
  const {categoryId}= useParams();
   const[items, setItems] = useState([])
  const getData = new Promise ((resolve,reject)=>{
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })

   useEffect(() => {
   getData.then((result)=>{

    if (categoryId) {
      const newProducts= result.filter(item =>item.categoria ===categoryId)
   
    setItems(newProducts)
    }
    else{
      setItems(result)
    }
    
  
   })
   }, [categoryId])
  return (
      <>
          <ItemsList itemsList={items}/>
      </>
    )
  }
  
  export default ItemListContainers 