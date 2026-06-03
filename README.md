# 🚀 Classificador de Imagens com CNN

Este projeto consiste em um sistema de classificação de imagens utilizando Redes Neurais Convolucionais (CNN), capaz de identificar se uma imagem pertence a uma das seguintes classes:

- 🚗 Carro
- 🏍️ Moto
- 🚲 Bicicleta

O sistema permite o upload de imagens através de uma interface web e retorna a classe prevista juntamente com o nível de confiança.

# 🧠 Tecnologias Utilizadas

## Backend
- Python 3.11
- FastAPI
- TensorFlow / Keras
- NumPy
- Pillow

## Frontend
- React (Vite)
- JavaScript
- HTML / CSS

# 🧪 Como Funciona

1. O modelo CNN é treinado com imagens organizadas por classe
2. O usuário envia uma imagem pelo frontend
3. A imagem é enviada para a API (FastAPI)
4. O modelo processa e retorna:
   - Classe prevista
   - Probabilidade (confiança)

# 📁 Estrutura do Projeto
classificador-imagens/
│
├── backend/
│ ├── dataset/
│ │ ├── carro/
│ │ ├── moto/
│ │ └── bicicleta/
│ │
│ ├── model/
│ │ └── modelo.h5
│ │
│ ├── train.py
│ ├── main.py
│ └── requirements.txt
│
├── frontend/
│
└── README.md


# ⚙️ Como Rodar o Projeto

```bash

1. Backend

cd backend
pip install -r requirements.txt
python train.py
python -m uvicorn main:app --reload

A API estará disponível em:
👉 http://127.0.0.1:8000/docs

2. Frontend

cd frontend
npm install
npm run dev

A aplicação estará disponível em:
👉 http://localhost:5173

## Dataset

O dataset é composto por imagens organizadas em três classes:

carro
moto
bicicleta

As imagens foram obtidas a partir de fontes públicas (como Kaggle) e organizadas manualmente em diretórios, permitindo o carregamento automático pelo TensorFlow.

🧠 Arquitetura do Modelo

O modelo utiliza uma CNN simples composta por:

Camadas Conv2D (extração de características)
MaxPooling (redução de dimensionalidade)
Flatten
Camadas Dense (classificação final)
