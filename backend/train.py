import tensorflow as tf
from tensorflow.keras import layers, models

# Carregar dataset
dataset = tf.keras.preprocessing.image_dataset_from_directory(
    "dataset",
    image_size=(128, 128),
    batch_size=16
)

# Criar modelo CNN
model = models.Sequential([
    layers.Rescaling(1./255, input_shape=(128,128,3)),

    layers.Conv2D(32, (3,3), activation='relu'),
    layers.MaxPooling2D(),

    layers.Conv2D(64, (3,3), activation='relu'),
    layers.MaxPooling2D(),

    layers.Flatten(),
    layers.Dense(128, activation='relu'),

    layers.Dense(3, activation='softmax')
])

# Compilar
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Treinar
model.fit(dataset, epochs=10)

# Salvar modelo
model.save("model/modelo.h5")

print(dataset.class_names)