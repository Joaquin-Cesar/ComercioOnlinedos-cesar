import React from 'react'
import ItemsData from '../ItemsDetail/ItemsDetail';
import data from '../ItemListContainers/mock-data';
import "../Estilo/estilo.css"
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
const ItemDetailContainers =() => {
  const {productId} = useParams();
  const [item, setItem] = useState({});

  const getItem = (id)=>{
      return new Promise((resolve, reject)=>{
          const item = data.find(item=>item.id === parseInt(id));
          resolve(item)
      })
  }

  useEffect(()=>{
      const getProducto = async()=>{
          const producto = await getItem(productId);
         
          setItem(producto);
      }
      getProducto();
  },[productId])


    return (
        <>
            <ItemsData itemsDetail={item}/>
        </>
      )
}
export default ItemDetailContainers