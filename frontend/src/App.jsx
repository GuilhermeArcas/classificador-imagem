import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  const handleClassify = () => {
    // Simulação da resposta do backend
  };

  return (
    <div>
      <h1>Classificador de Imagens CNN</h1>

      <p>Faça upload de uma imagem para classificação.</p>

      <input type="file" />

      <br />
      <br />

      <button onClick={handleClassify}>
        Classificar
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Resultado</h2>

          <p>
            <strong>Classe:</strong> {result.classe}
          </p>

          <p>
            <strong>Confiança:</strong> {result.confianca}%
          </p>
        </div>
      )}
    </div>
  );
}

export default App;