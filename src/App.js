import './App.css';
/* import ItemListContainer from './components/ItemListContainer/ItemListContainer'; */
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer greeting="Bienvenido..."/> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
