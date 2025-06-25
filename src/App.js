import Cabecalho from './components/Cabecalho/cabecalho'
import Rodape from './components/Rodape/rodape'
import Principal from './components/Main/principal';
import Login from './components/Login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Cabecalho/>
      {/* Área de troca de página */}
      <Routes>
        <Route path="/" element={<Principal />} />
        {/* <Route path="/times" element={<Times />} /> */}
        {/* <Route path="/criar" element={<CriarClube />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
