from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from .models import LecturaSensor, NodoIoT, Sensor, Alerta
from .serializers import LecturaSensorSerializer, NodoIoTSerializer, SensorSerializer, AlertaSerializer


class NodoIoTViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet para consultar nodos IoT (solo lectura)"""
    queryset = NodoIoT.objects.all()
    serializer_class = NodoIoTSerializer
    permission_classes = [IsAuthenticated]


class SensorViewSet(viewsets.ModelViewSet):
    """ViewSet para CRUD de sensores"""
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        nodo = self.request.query_params.get('nodo', None)
        if nodo:
            return Sensor.objects.filter(nodo_iot_id=nodo)
        return Sensor.objects.all()


class LecturaSensorViewSet(viewsets.ModelViewSet):
    """ViewSet para CRUD de lecturas de sensores"""
    queryset = LecturaSensor.objects.all().order_by('-timestamp')
    serializer_class = LecturaSensorSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        sensor = self.request.query_params.get('sensor', None)
        if sensor:
            return LecturaSensor.objects.filter(sensor_id=sensor).order_by('-timestamp')[:1000]
        return LecturaSensor.objects.all()[:1000]
    
    @action(detail=False, methods=['get'])
    def ultimas(self, request):
        """Obtiene la última lectura de cada sensor"""
        lecturas = {}
        for lectura in LecturaSensor.objects.all().order_by('sensor', '-timestamp').distinct('sensor'):
            lecturas[lectura.sensor.id] = LecturaSensorSerializer(lectura).data
        return Response(list(lecturas.values()))
    
    @action(detail=False, methods=['post'])
    def crear_batch(self, request):
        """Recibe múltiples lecturas del IoT en un batch"""
        lecturas_data = request.data if isinstance(request.data, list) else [request.data]
        serializer = self.get_serializer(data=lecturas_data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AlertaViewSet(viewsets.ModelViewSet):
    """ViewSet para CRUD de alertas"""
    queryset = Alerta.objects.all().order_by('-timestamp')
    serializer_class = AlertaSerializer
    permission_classes = [IsAuthenticated]
    
    @action(detail=False, methods=['get'])
    def no_atendidas(self, request):
        """Obtiene solo alertas sin atender"""
        alertas = Alerta.objects.filter(atendida=False).order_by('-timestamp')
        serializer = self.get_serializer(alertas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def marcar_atendida(self, request, pk=None):
        """Marca una alerta como atendida"""
        alerta = self.get_object()
        alerta.atendida = True
        alerta.save()
        return Response({'status': 'alerta marcada como atendida'})