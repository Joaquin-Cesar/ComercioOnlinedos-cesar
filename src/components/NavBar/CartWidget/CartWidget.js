import carrito from '../../carrito.jpg';
import React from 'react';
import {Link}  from 'react-router-dom'

const CartWidget = () =>{
    return(
        <Link to={"/cart"}>
        <div>
            <img src={carrito}/>
        </div>
        </Link>
    )
}

export default CartWidget;