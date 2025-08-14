import { useEffect, useState } from "react";
import TimeCard from '../TimeCard/timecard';

export default function Times() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/times")
      .then((res) => res.json())
      .then((data) => setTimes(data));
  }, []);

  return (
    <div 
        style={{ padding: "20px",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        minHeight: "100vh"
        }}>
      <button className="button_cadastro">Cadastre um Time</button>
      <h2>Lista de Times</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {times.map((time) => (
          <TimeCard key={time.id} {...time} />
        ))}
      </div>
    </div>
  );
}
