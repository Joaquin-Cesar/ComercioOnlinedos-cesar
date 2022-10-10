import logo from './logo.png'
import "../Estilo/estilo.css";
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
const NavBar = () =>{

  const link =[{direccion:"/", nombre:"Todos"},
               {direccion:"/productos/hamburguesa", nombre:"Hamburguesa"},
               {direccion:"/productos/pizza", nombre:"Pizza"},
               {direccion:"/productos/complemento", nombre:"Complementos"},
               {direccion:"/productos/bebida", nombre:"Bebida"},
               {direccion:"/productos/postre", nombre:"Postre"}]
    return(
         
        <div className='NavBar-container'>
          <div className='logo'> <img src={logo} width={"40px"} alt= "logo"/></div>  
          <div>
            <ul className='ContenedorProductos'>
              {
                link.map(el=>(
                  <li className='TipoDeProducto'>
             <NavLink className={({isActive})=> isActive ? "claseActive" : 
             "claseInactive"} to={el.direccion}>{el.nombre}</NavLink>
             </li>
                ))
                }
            </ul>



           </div> 
          <div><button className='Carrito'><CartWidget/></button></div> 
        </div>
      
    )
}
export default NavBar