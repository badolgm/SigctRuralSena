from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views  # Importar las vistas

urlpatterns = [
    # Health check para Render (CRÍTICO)
    path('', views.health_check, name='health_check'),
    path('health/', views.health_check, name='health_check_alt'),
    
    path('admin/', admin.site.urls),
    path('api/sensores/', include('apps.sensores.urls')), 
    path('api-auth/', include('rest_framework.urls')),
    
    # Añade aquí las otras URLs de tus apps
    # path('api/usuarios/', include('apps.usuarios.urls')),
    # path('api/cursos/', include('apps.cursos.urls')),
]