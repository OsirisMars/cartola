export default function TimeCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        minWidth: "200px",
        background: "#f9f9f9",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {Object.entries(props).map(([key, value]) => (
        key !== "id" && (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </p>
        )
      ))}
    </div>
  );
}
