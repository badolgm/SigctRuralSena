from rest_framework import serializers
from .models import LecturaSensor, NodoIoT

# Asume que LecturaSensor tiene los campos: nodo_iot, temperatura, humedad_ambiente, etc.

class LecturaSensorSerializer(serializers.ModelSerializer):
    """
    Serializador para las lecturas de los sensores.
    Maneja la conversión de datos (JSON -> Python / Python -> JSON).
    """
    class Meta:
        model = LecturaSensor
        fields = ['id', 'nodo_iot', 'temperatura', 'humedad_ambiente', 
                  'humedad_suelo', 'ph', 'conductividad', 'timestamp']
        read_only_fields = ['id', 'timestamp']
        
class NodoIoTSerializer(serializers.ModelSerializer):
    """
    Serializador para la gestión de los nodos (BeagleBone Black).
    """
    class Meta:
        model = NodoIoT
        fields = ['id', 'nombre', 'mac_address', 'ultima_conexion', 'estado']
        read_only_fields = ['id', 'ultima_conexion', 'estado']