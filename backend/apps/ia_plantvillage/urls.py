from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlantDiseaseViewSet, ClassificationViewSet

router = DefaultRouter()
router.register(r'diseases', PlantDiseaseViewSet, basename='disease')
router.register(r'classifications', ClassificationViewSet, basename='classification')

urlpatterns = [
    path('', include(router.urls)),
]
