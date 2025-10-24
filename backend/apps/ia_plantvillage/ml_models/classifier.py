"""
Clasificador de enfermedades de plantas usando TensorFlow Lite.
Versión optimizada para BeagleBone Black.
"""
import numpy as np
from PIL import Image
import io
import logging

logger = logging.getLogger(__name__)


class PlantDiseaseClassifier:
    """Clasificador de enfermedades de plantas"""
    
    def __init__(self):
        self.model = None
        self.classes = self._load_classes()
        self.confidence_threshold = 0.7
        
    def _load_classes(self):
        """Cargar clases de enfermedades"""
        # Clases comunes del PlantVillage Dataset
        return [
            'Apple___Apple_scab',
            'Apple___Black_rot',
            'Apple___Cedar_apple_rust',
            'Apple___healthy',
            'Corn_(maize)___Cercospora_leaf_spot',
            'Corn_(maize)___Common_rust',
            'Corn_(maize)___Northern_Leaf_Blight',
            'Corn_(maize)___healthy',
            'Grape___Black_rot',
            'Grape___Esca_(Black_Measles)',
            'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
            'Grape___healthy',
            'Potato___Early_blight',
            'Potato___Late_blight',
            'Potato___healthy',
            'Tomato___Bacterial_spot',
            'Tomato___Early_blight',
            'Tomato___Late_blight',
            'Tomato___Leaf_Mold',
            'Tomato___healthy'
        ]
    
    def preprocess_image(self, image_file):
        """Preprocesar imagen para el modelo"""
        try:
            # Leer imagen
            image = Image.open(image_file)
            
            # Convertir a RGB si es necesario
            if image.mode != 'RGB':
                image = image.convert('RGB')
            
            # Redimensionar
            image = image.resize((224, 224))
            
            # Convertir a array numpy
            img_array = np.array(image)
            
            # Normalizar
            img_array = img_array / 255.0
            
            # Añadir dimensión batch
            img_array = np.expand_dims(img_array, axis=0)
            
            return img_array
            
        except Exception as e:
            logger.error(f"Error al preprocesar imagen: {str(e)}")
            raise
    
    def classify_image(self, image_file):
        """
        Clasificar imagen de planta.
        
        NOTA: Por ahora retorna predicciones simuladas.
        En producción, se cargará el modelo real de TensorFlow Lite.
        """
        try:
            # Preprocesar imagen
            processed_image = self.preprocess_image(image_file)
            
            # SIMULACIÓN: En producción, usar modelo real
            # predictions = self.model.predict(processed_image)
            
            # Simulación de predicción
            import random
            predicted_class_idx = random.randint(0, len(self.classes) - 1)
            confidence = random.uniform(0.75, 0.95)
            
            disease_name = self.classes[predicted_class_idx]
            
            # Extraer nombre limpio
            clean_name = disease_name.replace('___', ' - ').replace('_', ' ')
            
            result = {
                'disease': clean_name,
                'confidence': round(confidence, 4),
                'raw_class': disease_name,
                'all_predictions': {
                    self.classes[i]: round(random.uniform(0.01, 0.1), 4) 
                    for i in range(min(5, len(self.classes)))
                }
            }
            
            # Añadir predicción principal
            result['all_predictions'][disease_name] = confidence
            
            logger.info(f"Clasificación exitosa: {clean_name} ({confidence:.2%})")
            
            return result
            
        except Exception as e:
            logger.error(f"Error en clasificación: {str(e)}")
            raise
