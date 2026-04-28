import { useState } from "react";

function App() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div style={{ textAlign: "center", margin: "50px auto" }}>
      <h1>Hola, Bienvenido Igor la Saenz</h1>
      <p>Has dado click {cuenta} veces</p>

      <button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
    </div>
  );
}

export default App;
