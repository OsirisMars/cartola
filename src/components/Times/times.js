// src/pages/Times.jsx
import { useEffect, useState } from 'react';

export default function Times() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/times')
      .then(res => res.json())
      .then(data => setTimes(data));
  }, []);

  return (
    <div>
      <h2>Lista de Times</h2>
      <ul>
        {times.map(time => (
          <li key={time.id}>{time.nome}</li>
        ))}
      </ul>
    </div>
  );
}
