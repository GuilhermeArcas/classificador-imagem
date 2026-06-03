import { useState } from "react";

function App() {
  const [resultado, setResultado] = useState("");
  const [imagem, setImagem] = useState(null);

  const enviarImagem = async (e) => {
    const file = e.target.files[0];

    setImagem(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    setResultado(
      `Classe: ${data.classe} | Confiança: ${(data.confianca * 100).toFixed(2)}%`
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Classificador de Imagens</h1>

      <input type="file" onChange={enviarImagem} />

      {imagem && <img src={imagem} alt="preview" width="250" />}

      <h2>{resultado}</h2>
    </div>
  );
}

export default App;