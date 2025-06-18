// src/components/Footer.jsx
import './rodape.css'


export default function Footer() {
  return (
    <footer className="Footer">
      <div>
        <p>&copy; {new Date().getFullYear()} FutClub. Todos os direitos reservados.</p>
        
        <div>
          <a href="/termos" >Termos</a>
          <a href="/privacidade" >Privacidade</a>
          <a href="/contato">Contato</a>
        </div>
      </div>
    </footer>
  );
}
