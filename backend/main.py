from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image

app = FastAPI()

# CORS (IMPORTANTE pro frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Carregar modelo
model = load_model("model/modelo.h5")

classes = ["bicicleta", "carro", "moto"]

def preprocess(image):
    image = image.resize((128,128))
    image = np.array(image) / 255.0
    return np.expand_dims(image, axis=0)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = Image.open(file.file)

    img = preprocess(image)

    prediction = model.predict(img)

    index = np.argmax(prediction)

    return {
        "classe": classes[index],
        "confianca": float(np.max(prediction))
    }