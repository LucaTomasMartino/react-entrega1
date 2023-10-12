import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import NavBar from './components/NavBar/NavBar';
import ListContainer from './components/ListContainer/ListContainer';
import InicioPage from "./pages/InicioPage";
import NosotrosPage from "./pages/NosotrosPage";
function App() {
  return (
    <Router>
    <div>
      <Header />
      <NavBar />
      <div className='userSection '>
        <div className='tarjeta'>
        <CardUser 
        img = "https://sporting.vtexassets.com/arquivos/ids/759484/2600350-152-1.jpg?v=638156941617630000"
        title = "Camiseta Unión"
        description = "Camiseta modelo titular - temporada 2022/23"
        />
        </div>
        <div className='tarjeta'>
        <CardUser
        img = "https://images.pagina12.com.ar/styles/width960/public/2023-08/759469-camiseta-201-0.jpg?itok=xdZIPgv0"
        title = "Camiseta Boca"
        description = "Camiseta modelo titular - temporada 2022/23" 
        />
        </div>
        <div className='tarjeta'>
        <CardUser
        img = "https://tiendariver.vteximg.com.br/arquivos/ids/170353-1000-1000/HT3679_1.jpg?v=638283227890430000"
        title = "Camiseta River"
        description = "Camiseta modelo titular - temporada 2023"
        />
        </div>
      </div>
      <ListContainer />
    </div>
    <Routes>
      <Route path='/' element={<InicioPage />}/>
      <Route path='/nosotros' element={<NosotrosPage />}/>
    </Routes>
    </Router>
  );
};

export default App
