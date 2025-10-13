from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import LecturaSensor, NodoIoT
from .serializers import LecturaSensorSerializer, NodoIoTSerializer
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

class LecturaSensorViewSet(viewsets.ModelViewSet):
    """
    ViewSet para CRUD de las lecturas de sensores.
    Maneja las solicitudes POST (recibir datos del sensor) y GET (consulta del dashboard).
    """
    queryset = LecturaSensor.objects.all().order_by('-timestamp')
    serializer_class = LecturaSensorSerializer
    permission_classes = [IsAuthenticated] # Requiere autenticación

    def get_queryset(self):
        """ Optimización: Limita a las últimas 1000 lecturas. """
        queryset = super().get_queryset()
        return queryset[:1000] 

    def create(self, request, *args, **kwargs):
        """ Lógica al recibir una lectura (POST) desde un dispositivo. """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class NodoIoTViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet de solo lectura para el estado de los nodos IoT (BBB).
    """
    queryset = NodoIoT.objects.all()
    serializer_class = NodoIoTSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'])
    def estado_general(self, request):
        """ Endpoint: /api/sensores/nodos/estado_general/ para resumen rápido. """
        activos = NodoIoT.objects.filter(estado='ACTIVO').count()
        inactivos = NodoIoT.objects.filter(estado='INACTIVO').count()
        return Response({'activos': activos, 'inactivos': inactivos})