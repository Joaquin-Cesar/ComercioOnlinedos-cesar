
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainers from "./components/ItemListContainers/ItemListContainers.js";
import ItemDetailContainers from "./components/ItemDetailContainers/ItemDetailContainers.js";
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
  <>
  <BrowserRouter>
    <div className="App">
      <NavBar/>
      <main>
        <h2>Mis Productos</h2>
        <Routes>
          <Route path="/" element={<ItemListContainers/>}/>
          <Route path="/productos" element={<ItemListContainers/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainers/>}/>
         <Route path="/items/:productId" element={<ItemDetailContainers/>}/>
        
        </Routes>
     
      </main>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
