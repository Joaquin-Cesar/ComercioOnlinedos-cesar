import React from 'react'
import Items from '../Items/Items'

const ItemsDetail = ({itemsDetail} ) => {
 console.log("itemsDetail:",itemsDetail)


     
     return(
        <>
        <Items 
        id={itemsDetail.id}
        nombre={itemsDetail.nombre}
        precio={itemsDetail.precio}
        imagen={itemsDetail.imagen}
        
        />
        </> 
     )

}

export default ItemsDetail