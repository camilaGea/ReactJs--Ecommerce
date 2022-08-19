import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './components/cartContext/CartContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Bienvenido..." />} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
