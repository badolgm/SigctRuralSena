from rest_framework import serializers
from .models import PlantDisease, Classification

class PlantDiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantDisease
        fields = '__all__'


class ClassificationSerializer(serializers.ModelSerializer):
    disease_name = serializers.CharField(source='disease.name', read_only=True)
    
    class Meta:
        model = Classification
        fields = ['id', 'image', 'disease', 'disease_name', 'confidence', 
                  'prediction_data', 'created_at']
        read_only_fields = ['disease', 'confidence', 'prediction_data', 'created_at']
