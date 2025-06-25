// src/components/Header.jsx
import './cabecalho.css'
import logo from '../../assets/logo.png'


export default function Header() {
  return (
    <header>
        <img src={logo} alt="Logo do FutClub" width={150} />
        <div>
          {/* Logo / Nome do site */}
          <h1>FutClub</h1>

          {/* Navegação */}
          <nav>
              <a href="/">Início</a>
              <a href="/times">Times</a>
              <a href="/criar">Criar Clube</a>
              <a href="/login">Entrar</a>
          </nav>
        </div>
    </header>
  );
}
