import React from 'react'
import{Link} from 'react-router-dom'
const Items = ({id, nombre, precio, imagen}) => {

 return (
   <>

     <div className='contenedorPadre'>
            <img src={imagen} alt={nombre}/>
            <div>
              <h5>{nombre}</h5>
            <p> {precio}</p>
                <Link to={`/items/${id}`}>
              <button className={id}>Comprar</button>
                </Link>
            </div>
          </div>
 
   </>
  )
}

export default Items