import Cabecalho from './components/Cabecalho/cabecalho';
import Rodape from './components/Rodape/rodape';
import Principal from './components/Main/principal';
import Login from './components/Login/login';
import Times from './components/Times/times';
import Cadastro from './components/Cadastro/cadastro'; // <- novo
// import CriarClube from './components/CriarClube/criarClube'; <- futuro

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/times" element={<Times />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* <Route path="/criar" element={<CriarClube />} /> */}

        {/* Rota curinga para páginas não encontradas */}
        <Route path="*" element={<p style={{ padding: 20 }}>Página não encontrada.</p>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;
