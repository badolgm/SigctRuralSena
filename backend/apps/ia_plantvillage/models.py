from django.db import models
from django.contrib.auth.models import User

class PlantDisease(models.Model):
    """Modelo para enfermedades de plantas"""
    name = models.CharField(max_length=200, verbose_name="Nombre de la enfermedad")
    scientific_name = models.CharField(max_length=200, blank=True, null=True)
    symptoms = models.TextField(verbose_name="Síntomas")
    treatment = models.TextField(verbose_name="Tratamiento")
    prevention = models.TextField(verbose_name="Prevención")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Enfermedad de Planta"
        verbose_name_plural = "Enfermedades de Plantas"
        ordering = ['name']

    def __str__(self):
        return self.name


class Classification(models.Model):
    """Modelo para clasificaciones de IA"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    image = models.ImageField(upload_to='classifications/', verbose_name="Imagen")
    disease = models.ForeignKey(PlantDisease, on_delete=models.SET_NULL, null=True, blank=True)
    confidence = models.FloatField(verbose_name="Confianza", help_text="Porcentaje de confianza (0-1)")
    prediction_data = models.JSONField(verbose_name="Datos de predicción", default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Clasificación"
        verbose_name_plural = "Clasificaciones"
        ordering = ['-created_at']

    def __str__(self):
        return f"Clasificación #{self.id} - {self.disease.name if self.disease else 'Sin clasificar'}"
