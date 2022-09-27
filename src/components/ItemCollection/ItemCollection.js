import React from 'react'
import { db } from '../../utils/firebise'
import {doc,getDoc, collection, getDocs, query, where} from "firebase/firestore"
import {useContext, useEffect } from 'react'
const ItemCollection = () => {

    useEffect(()=>{
      const getData = async()=>{
        const queryRef = query(collection(db, "Items"), where("categoria", "==", "hamburguesa"))
        const response = await getDocs(queryRef)
     const products =  response.docs.map(doc =>  { const NewProduct ={
            ...doc.data(),
            id: doc.id 
          }
        return NewProduct})
      /*const query = doc (db, "Items", "3ASFY0c0TAL287UMMiFI")
      const response = await getDoc(query)
      console.log("response",response)
      const NewProduct ={
        ...response.data(),
        id: response.id 
      }*/
       }
       getData()
    },[])
  return (
    <div>ItemCollection</div>
  )
}

export default ItemCollection