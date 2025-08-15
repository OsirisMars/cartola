import './cadastro.css';
import { useState } from 'react';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
     e.preventDefault();

     if (email !== confirmarEmail) {
       setMensagem('Os e-mails não coincidem.');
       return;
     }

     if (senha !== confirmarSenha) {
       setMensagem('As senhas não coincidem.');
       return;
     }

     try {
       // CORREÇÃO AQUI: Adicionado o '/usuarios' na URL
       const response = await fetch('http://localhost:8000/usuarios/cadastro', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, senha }),
       });

       const data = await response.json();

       if (response.ok) {
         setMensagem('Usuário cadastrado com sucesso!');
       } else {
         setMensagem(data.detail || 'Erro ao cadastrar.');
       }
     } catch (err) {
       setMensagem('Erro de conexão com o servidor.');
     }
  };

  return (
     <section>
       <form className="Prompt" onSubmit={handleSubmit}>
         <div>
          <label htmlFor="email">E-mail</label>
          <input
             type="email"
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
          />
         </div>

         <div>
          <label htmlFor="confirmarEmail">Confirmar E-mail</label>
          <input
             type="email"
             id="confirmarEmail"
             value={confirmarEmail}
             onChange={(e) => setConfirmarEmail(e.target.value)}
             required
          />
         </div>

         <div>
          <label htmlFor="senha">Senha</label>
          <input
             type="password"
             id="senha"
             value={senha}
             onChange={(e) => setSenha(e.target.value)}
             required
          />
         </div>

         <div>
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
             type="password"
             id="confirmarSenha"
             value={confirmarSenha}
             onChange={(e) => setConfirmarSenha(e.target.value)}
             required
          />
         </div>

         <button type="submit">Cadastrar</button>

         {mensagem && <p className="mensagem">{mensagem}</p>}

         <a href="/login">Já tem uma conta?</a>
       </form>
    </section>
  );
}