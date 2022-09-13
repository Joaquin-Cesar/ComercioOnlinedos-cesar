import logo from '../../logo.svg';
import "./styles.css";
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
const NavBar = () =>{
    return(
         
        <div className='NavBar-container'>
          <div> <img src={logo} width={"50px"} alt= "logo"/></div>  
          <div>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/">Todos</NavLink>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/hamburguesa">Hamburguesa</NavLink>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/pizza">Pizza</NavLink>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/complemento">Complementos</NavLink>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/bebida">Bebida</NavLink>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to="/productos/postre">Postre</NavLink>


           </div> 
          <div><button><CartWidget/></button></div> 
        </div>
      
    )
}
export default NavBar