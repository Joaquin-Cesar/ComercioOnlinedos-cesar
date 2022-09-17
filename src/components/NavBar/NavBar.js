import logo from '../../logo.svg';
import "../Estilo/estilo.css";
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
const NavBar = () =>{
    return(
         
        <div className='NavBar-container'>
          <div> <img src={logo} width={"50px"} alt= "logo"/></div>  
          <div>
            <ul className='ContenedorProductos'>
              <li className='TipoDeProducto'>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/">Todos</NavLink>
             </li>
             <li className='TipoDeProducto'>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/hamburguesa">Hamburguesa</NavLink>
               </li>
              <li className='TipoDeProducto'>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/pizza">Pizza</NavLink>
               </li>
             <li className='TipoDeProducto'> 
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/complemento">Complementos</NavLink>
                 </li>
              <li className='TipoDeProducto'> 
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/bebida">Bebida</NavLink>
                </li>
              <li className='TipoDeProducto'>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/postre">Postre</NavLink>
              </li>
            </ul>



           </div> 
          <div><button className='Carrito'><CartWidget/></button></div> 
        </div>
      
    )
}
export default NavBar