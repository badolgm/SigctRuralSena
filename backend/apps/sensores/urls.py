from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import viewsets

router = DefaultRouter()
router.register(r'nodos', viewsets.NodoIoTViewSet, basename='nodo')
router.register(r'sensores', viewsets.SensorViewSet, basename='sensor')
router.register(r'lecturas', viewsets.LecturaSensorViewSet, basename='lectura')
router.register(r'alertas', viewsets.AlertaViewSet, basename='alerta')

urlpatterns = [
    path('', include(router.urls)),
]