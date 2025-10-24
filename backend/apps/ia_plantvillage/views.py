from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from django.core.cache import cache
from .models import PlantDisease, Classification
from .serializers import PlantDiseaseSerializer, ClassificationSerializer
from .ml_models.classifier import PlantDiseaseClassifier
import logging

logger = logging.getLogger(__name__)


class PlantDiseaseViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet para enfermedades de plantas"""
    queryset = PlantDisease.objects.all()
    serializer_class = PlantDiseaseSerializer


class ClassificationViewSet(viewsets.ModelViewSet):
    """ViewSet para clasificaciones de IA"""
    queryset = Classification.objects.all()
    serializer_class = ClassificationSerializer
    parser_classes = (MultiPartParser, FormParser)

    @action(detail=False, methods=['post'])
    def classify(self, request):
        """Endpoint para clasificar una imagen de planta"""
        try:
            if 'image' not in request.FILES:
                return Response(
                    {'error': 'No se proporcionó ninguna imagen'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            image = request.FILES['image']
            
            # Inicializar clasificador
            classifier = PlantDiseaseClassifier()
            
            # Clasificar imagen
            result = classifier.classify_image(image)
            
            # Guardar clasificación
            classification = Classification.objects.create(
                user=request.user if request.user.is_authenticated else None,
                image=image,
                confidence=result['confidence'],
                prediction_data=result
            )
            
            # Buscar enfermedad si la confianza es alta
            if result['confidence'] > 0.7:
                try:
                    disease = PlantDisease.objects.get(name__icontains=result['disease'])
                    classification.disease = disease
                    classification.save()
                except PlantDisease.DoesNotExist:
                    logger.warning(f"Enfermedad no encontrada: {result['disease']}")
            
            serializer = self.get_serializer(classification)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            logger.error(f"Error en clasificación: {str(e)}")
            return Response(
                {'error': f'Error al procesar la imagen: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    @action(detail=False, methods=['get'])
    def history(self, request):
        """Obtener historial de clasificaciones del usuario"""
        if not request.user.is_authenticated:
            return Response(
                {'error': 'Usuario no autenticado'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        classifications = Classification.objects.filter(user=request.user)
        serializer = self.get_serializer(classifications, many=True)
        return Response(serializer.data)
