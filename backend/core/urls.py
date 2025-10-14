from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/sensores/', include('backend.apps.sensores.urls')),
    path('api-auth/', include('rest_framework.urls')),
]