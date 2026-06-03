import { useState } from "react";

function App() {

  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h1>Classificador de Imagens</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      {preview && (
        <img
          src={preview}
          alt="preview"
          width="300"
        />
      )}

      <button>
        Classificar
      </button>
    </div>
  );
}

export default App;