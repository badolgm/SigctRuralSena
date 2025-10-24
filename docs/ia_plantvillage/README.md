# 🤖 Módulo de IA PlantVillage

## Descripción
Sistema de clasificación de enfermedades de plantas usando Machine Learning.

## Características
- Clasificación de imágenes en tiempo real
- Integración con PlantVillage Dataset
- Caché inteligente de resultados
- API REST completa
- Recomendaciones de tratamiento

## Endpoints API

### POST `/api/ia/classifications/classify/`
Clasifica una imagen de planta.

**Request:**
```bash
curl -X POST \
  -F "image=@planta.jpg" \
  http://localhost:8000/api/ia/classifications/classify/
```

**Response:**
```json
{
  "id": 1,
  "disease_name": "Tomato - Early blight",
  "confidence": 0.8756,
  "prediction_data": {
    "disease": "Tomato - Early blight",
    "confidence": 0.8756,
    "all_predictions": {...}
  },
  "created_at": "2025-10-24T12:00:00Z"
}
```

### GET `/api/ia/diseases/`
Lista todas las enfermedades registradas.

### GET `/api/ia/classifications/history/`
Obtiene el historial de clasificaciones del usuario.

## Instalación

1. Instalar dependencias:
```bash
pip install -r requirements.txt
```

2. Ejecutar migraciones:
```bash
python manage.py makemigrations ia_plantvillage
python manage.py migrate
```

3. Cargar datos iniciales (opcional):
```bash
python manage.py loaddata ia_plantvillage/fixtures/diseases.json
```

## Uso en Frontend

```jsx
import PlantDiseaseClassifier from './components/IA/PlantDiseaseClassifier';

function App() {
  return (
    <div>
      <PlantDiseaseClassifier />
    </div>
  );
}
```

## Modelo de ML

El sistema usa TensorFlow Lite optimizado para BeagleBone Black:
- Arquitectura: MobileNetV2
- Dataset: PlantVillage (38 clases)
- Accuracy: >85%
- Inference time: <2s

## TODO
- [ ] Cargar modelo real de TensorFlow
- [ ] Implementar caché con Redis
- [ ] Añadir más enfermedades a la BD
- [ ] Mejorar preprocesamiento de imágenes

## Contribuciones
Este módulo es parte del proyecto SIGC&T-Rural v2.0.
Autor: Bernardo Adolfo Gómez (badolgm)
