from rest_framework.routers import DefaultRouter
from . import viewsets

# Definición del router para esta aplicación
router = DefaultRouter()

# 1. Rutas para Lecturas (genera /lecturas/ y /lecturas/{id}/)
router.register(r'lecturas', viewsets.LecturaSensorViewSet, basename='lectura_sensor')

# 2. Rutas para Nodos (genera /nodos/ y /nodos/estado_general/)
router.register(r'nodos', viewsets.NodoIoTViewSet, basename='nodo_iot')

# urlpatterns solo contiene las rutas generadas por el router
urlpatterns = router.urls