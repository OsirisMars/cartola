import { useState } from 'react';
import './principal.css';

export default function Principal() {
  // Lista com as ligas e seus conteúdos
  const ligas = [
    { id: 1, nome: 'Liga 1', conteudo: 'Conteúdo detalhado da Liga 1' },
    { id: 2, nome: 'Liga 2', conteudo: 'Informações sobre a Liga 2' },
    { id: 3, nome: 'Liga 3', conteudo: 'Estatísticas e dados da Liga 3' },
  ];

  // Estado que controla quais ligas estão expandidas
  const [openStates, setOpenStates] = useState(Array(ligas.length).fill(false));

  // Alterna o estado de uma liga específica
  const toggleContent = (index) => {
    const updated = [...openStates];
    updated[index] = !updated[index];
    setOpenStates(updated);
  };

  return (
    <section className="teste">
      {ligas.map((liga, index) => (
        <div key={liga.id}>
          {/* Botão da liga */}
          <button className="time" onClick={() => toggleContent(index)}>
            {openStates[index] ? 'Colapsar' : 'Expandir'} - {liga.nome}
          </button>

          {/* Conteúdo colapsável */}
          <div className={`content ${openStates[index] ? 'show' : 'hide'}`}>
            <p>{liga.conteudo}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
