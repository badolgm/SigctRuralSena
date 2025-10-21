from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('admin/', admin.site.urls),
    # CORREGIDO: Se quitó el prefijo 'backend.'
    path('api/sensores/', include('apps.sensores.urls')), 
    path('api-auth/', include('rest_framework.urls')),
    
    # Añade aquí las otras URLs de tus apps (cursos, usuarios, etc.)
    # path('api/usuarios/', include('apps.usuarios.urls')),
    # path('api/cursos/', include('apps.cursos.urls')),
]