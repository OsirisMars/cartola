import { useState } from "react";

export default function CadastrarTime() {
  const [time, setTime] = useState({
    nome: "",
    volante: "",
    zagueiro: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime({ ...time, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/times", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(time),
    });

    setTime({ nome: "", volante: "", zagueiro: "" });
  };

  return (
    <div>
      <h2>Cadastrar Time</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do time"
          value={time.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="volante"
          placeholder="Nome do volante"
          value={time.volante}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="zagueiro"
          placeholder="Nome do zagueiro"
          value={time.zagueiro}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
