from django.contrib import admin
from .models import PlantDisease, Classification

@admin.register(PlantDisease)
class PlantDiseaseAdmin(admin.ModelAdmin):
    list_display = ['name', 'scientific_name', 'created_at']
    search_fields = ['name', 'scientific_name']
    list_filter = ['created_at']

@admin.register(Classification)
class ClassificationAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'disease', 'confidence', 'created_at']
    list_filter = ['created_at', 'disease']
    search_fields = ['user__username']
    readonly_fields = ['confidence', 'prediction_data', 'created_at']
