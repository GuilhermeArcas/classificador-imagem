import { useState } from "react";
import { api } from "./services/api";

function App() {

  const [result, setResult] = useState(null);

  const handleClassify = async () => {
    alert("Integração com API em desenvolvimento");
  };

  return (
    <div>
      <h1>Classificador de Imagens CNN</h1>

      <button onClick={handleClassify}>
        Classificar
      </button>

      {result && (
        <div>
          <h2>Resultado</h2>
          <p>{result.classe}</p>
        </div>
      )}
    </div>
  );
}

export default App;