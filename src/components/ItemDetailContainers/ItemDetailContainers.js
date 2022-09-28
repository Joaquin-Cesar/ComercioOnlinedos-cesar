import React from 'react'
import ItemsData from '../ItemsDetail/ItemsDetail';
import { db } from '../../utils/firebise'
import {doc,getDoc} from "firebase/firestore"
import "../Estilo/estilo.css"
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
const ItemDetailContainers =() => {
  const {productId} = useParams();
  const [item, setItem] = useState({});



  useEffect(()=>{
    const getItem =async ()=>{
        const query = doc (db, "Items", productId)
        const response = await getDoc(query)
        const NewProduct ={
            ...response.data(),
            id: response.id 
          }
          setItem(NewProduct)
      }
      getItem()
  },[productId])


    return (
        <>
            <ItemsData itemsDetail={item}/>
        </>
      )
}
export default ItemDetailContainers