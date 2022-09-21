import carrito from '../../carrito.jpg';
import React from 'react';
import {Link}  from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';

const CartWidget = () =>{
    const {ProductosTotal} = useContext(CartContext)
    return(
        <Link to={"/cart"}>
        <div>
            <img src={carrito}/>
            <span>{ProductosTotal()}</span>
        </div>
        </Link>
    )
}

export default CartWidget;