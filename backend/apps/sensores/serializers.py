from rest_framework import serializers
from .models import LecturaSensor, NodoIoT, Sensor, Alerta


class NodoIoTSerializer(serializers.ModelSerializer):
    """Serializador para nodos BeagleBone Black"""
    class Meta:
        model = NodoIoT
        fields = ['id', 'nombre', 'tipo', 'ip', 'estado', 'timestamp_creado']
        read_only_fields = ['id', 'timestamp_creado']


class SensorSerializer(serializers.ModelSerializer):
    """Serializador para sensores individuales"""
    nodo_nombre = serializers.CharField(source='nodo_iot.nombre', read_only=True)
    
    class Meta:
        model = Sensor
        fields = ['id', 'nodo_iot', 'nodo_nombre', 'tipo', 'modelo', 'pin_gpio', 'estado', 'timestamp_creado']
        read_only_fields = ['id', 'timestamp_creado']


class LecturaSensorSerializer(serializers.ModelSerializer):
    """Serializador para lecturas de sensores"""
    sensor_info = SensorSerializer(source='sensor', read_only=True)
    
    class Meta:
        model = LecturaSensor
        fields = ['id', 'sensor', 'sensor_info', 'temperatura', 'humedad_ambiente',
                  'humedad_suelo', 'ph', 'conductividad', 'timestamp', 'synced']
        read_only_fields = ['id', 'timestamp', 'synced']


class AlertaSerializer(serializers.ModelSerializer):
    """Serializador para alertas"""
    lectura_info = LecturaSensorSerializer(source='lectura', read_only=True)
    
    class Meta:
        model = Alerta
        fields = ['id', 'lectura', 'lectura_info', 'nivel', 'mensaje', 'atendida', 'timestamp']
        read_only_fields = ['id', 'timestamp']