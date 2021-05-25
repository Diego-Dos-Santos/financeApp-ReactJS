import React, { useState } from 'react';
import Pregunta from "./components/Pregunta"

function App() {

  // definir o STATE 

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);

  return (
    <div className="container">
        <header>
          <h1>Gastos Semanales</h1>
        </header>

        <div className="contenido-principal contenido">
          <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante} 
          />
        </div>
    </div>
  );
}

export default App;
