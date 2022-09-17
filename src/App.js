import "./components/Estilo/estilo.css"
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainers from "./components/ItemListContainers/ItemListContainers.js";
import ItemDetailContainers from "./components/ItemDetailContainers/ItemDetailContainers.js";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from "react";
import { CartProviders} from "./Context/CartContext";
import CartContainers from "./components/CartContainers/CartContainers";

function App() {
  const [valor,setValor]=useState(0)
  return (
  <>
  <CartProviders value={valor}>
  <BrowserRouter>
    <div className="App">
      <NavBar/>
      <main>
        <h2>Mis Productos</h2>
        <Routes>
          
          <Route path="/" element={<div className="ItemList">
                                       <ul className="items"><ItemListContainers/></ul>
                                   </div>} />
          <Route path="/productos" element={ <ul className="items"><ItemListContainers/></ul>}/>
          <Route path="/productos/:categoryId" element={<ul className="items"><ItemListContainers/></ul>}/>
          <Route path="/items/:productId" element={<ItemDetailContainers/>}/>
          <Route path="/cart" element={<CartContainers/>}/>
        
        </Routes>
     
      </main>
    </div>
    </BrowserRouter>
    </CartProviders>
    </>
  );
}

export default App;
