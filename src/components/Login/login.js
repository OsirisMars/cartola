import { useState } from 'react';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login bem-sucedido:', data);
        // Redirecionar ou salvar token
        // Ex: localStorage.setItem("token", data.token);
      } else {
        setErro(data.msg || 'Erro ao fazer login');
      }
    } catch (err) {
      console.error(err);
      setErro('Erro de conexão com o servidor');
    }
  };

  return (
    <section>
      <form className="Prompt" onSubmit={handleLogin}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        <a href="/cadastro">Cadastro</a>
      </form>
    </section>
  );
}
