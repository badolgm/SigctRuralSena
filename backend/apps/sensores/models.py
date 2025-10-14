from django.db import models

class NodoIoT(models.Model):
    """Representa un BeagleBone Black (BBB)"""
    TIPO_NODO = [
        ('gateway', 'Gateway (BBB1)'),
        ('ia', 'Motor IA (BBB2)'),
        ('sensores', 'Sensores (BBB3)'),
    ]
    
    nombre = models.CharField(max_length=100, unique=True)
    tipo = models.CharField(max_length=20, choices=TIPO_NODO)
    ip = models.GenericIPAddressField()
    estado = models.CharField(max_length=20, default='activo')
    timestamp_creado = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['nombre']
        verbose_name_plural = "Nodos IoT"
    
    def __str__(self):
        return f"{self.nombre} ({self.tipo})"


class Sensor(models.Model):
    """Sensores conectados a BBB3"""
    TIPO_SENSOR = [
        ('dht22', 'DHT22 (Temp/Hum)'),
        ('capacitivo', 'Capacitivo (Humedad Suelo)'),
        ('ph', 'pH Sensor'),
        ('camara', 'Cámara USB'),
    ]
    
    nodo_iot = models.ForeignKey(NodoIoT, on_delete=models.CASCADE, related_name='sensores')
    tipo = models.CharField(max_length=50, choices=TIPO_SENSOR)
    modelo = models.CharField(max_length=100)
    pin_gpio = models.CharField(max_length=20)
    estado = models.BooleanField(default=True)
    timestamp_creado = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['nodo_iot', 'pin_gpio']
        ordering = ['nodo_iot', 'tipo']
    
    def __str__(self):
        return f"{self.tipo} en {self.nodo_iot.nombre}"


class LecturaSensor(models.Model):
    """Lecturas de sensores (series temporales)"""
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE, related_name='lecturas')
    temperatura = models.FloatField(null=True, blank=True)
    humedad_ambiente = models.FloatField(null=True, blank=True)
    humedad_suelo = models.FloatField(null=True, blank=True)
    ph = models.FloatField(null=True, blank=True)
    conductividad = models.FloatField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True, db_index=True)
    synced = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-timestamp']
        indexes = [
            models.Index(fields=['sensor', '-timestamp']),
        ]
        verbose_name_plural = "Lecturas de Sensores"
    
    def __str__(self):
        return f"{self.sensor.tipo}: {self.temperatura}°C @ {self.timestamp}"


class Alerta(models.Model):
    """Alertas generadas por anomalías"""
    NIVEL = [
        ('info', 'Información'),
        ('warning', 'Advertencia'),
        ('critical', 'Crítica'),
    ]
    
    lectura = models.ForeignKey(LecturaSensor, on_delete=models.CASCADE, related_name='alertas')
    nivel = models.CharField(max_length=20, choices=NIVEL)
    mensaje = models.TextField()
    atendida = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-timestamp']
        verbose_name_plural = "Alertas"
    
    def __str__(self):
        return f"[{self.nivel.upper()}] {self.mensaje[:50]}"