# 🏗️ ARCHITECTURE.md
## Documentación Técnica Completa - SIGCT-Rural v2

<div align="center">

![Architecture](https://img.shields.io/badge/Architecture-v2.0-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Complete%20Reference-green?style=flat-square)
![Last Updated](https://img.shields.io/badge/Updated-October%202025-orange?style=flat-square)

**Guía técnica detallada del diseño, componentes y flujos de datos del sistema SIGCT-Rural v2**

[🏠 Volver a README](#) • [📚 Documentación](#-documentación-relacionada) • [🔗 Enlaces](#-referencias-externas)

</div>

---

## 📑 Tabla de Contenidos

1. [Visión General](#1-visión-general)
2. [Stack Tecnológico](#2-stack-tecnológico)
3. [Arquitectura de Sistemas](#3-arquitectura-de-sistemas)
4. [Modelos de Datos](#4-modelos-de-datos)
5. [Flujo de Datos](#5-flujo-de-datos)
6. [APIs REST](#6-apis-rest)
7. [Comunicación IoT](#7-comunicación-iot)
8. [Autenticación & Seguridad](#8-autenticación--seguridad)
9. [Despliegue & DevOps](#9-despliegue--devops)
10. [Optimización & Performance](#10-optimización--performance)
11. [Troubleshooting](#11-troubleshooting)
12. [Roadmap Técnico](#12-roadmap-técnico)

---

## 1. Visión General

### 1.1 Descripción del Sistema

SIGCT-Rural v2 es una plataforma distribuida de **monitoreo agrícola inteligente** diseñada para instituciones educativas en zonas rurales. Combina:

- **Edge Computing:** 3 BeagleBone Black en el terreno
- **Cloud Computing:** Infraestructura en Render (validación) → Azure (producción)
- **Machine Learning:** Modelos predictivos ARIMA + CNN
- **Educación STEM:** LMS integrado con contenidos interactivos

### 1.2 Objetivos Técnicos

```
┌─────────────────────────────────────────────────┐
│         OBJETIVOS TÉCNICOS DEL PROYECTO         │
├─────────────────────────────────────────────────┤
│                                                 │
│  ✅ Captura de datos en tiempo real (< 1s)    │
│  ✅ Almacenamiento eficiente (series temporales)│
│  ✅ Análisis predictivo con IA                 │
│  ✅ APIs REST escalables y seguras             │
│  ✅ Frontend PWA con soporte offline           │
│  ✅ Comunicación IoT confiable (MQTT)          │
│  ✅ Despliegue automatizado                    │
│  ✅ Monitoreo y alertas en tiempo real         │
│                                                 │
└─────────────────────────────────────────────────┘
```

### 1.3 Principios de Diseño

- **Modularidad:** Componentes independientes y reutilizables
- **Escalabilidad:** Arquitectura preparada para crecimiento
- **Resiliencia:** Tolerancia a fallos y reconexión automática
- **Educación:** Código legible y documentado
- **Open-Source:** Transparencia y comunidad

---

## 2. Stack Tecnológico

### 2.1 Backend & APIs

```
┌────────────────────────────────────────────────┐
│           BACKEND STACK                        │
├────────────────────────────────────────────────┤
│                                                │
│  Framework:       Django 4.2 LTS               │
│  API Framework:   Django REST Framework 3.14   │
│  Python:          3.9+                         │
│                                                │
│  Authentication:  djangorestframework-simplejwt│
│  Serialization:   DRF Serializers              │
│  Validation:      Pydantic + DRF validators    │
│  Task Queue:      Celery (opcional)            │
│  Cache:           Redis (opcional)             │
│                                                │
│  WSGI Server:     Gunicorn                     │
│  ASGI Server:     Daphne (WebSockets)         │
│                                                │
└────────────────────────────────────────────────┘
```

**Dependencias Principales:**

```txt
# requirements.txt
Django==4.2.7
djangorestframework==3.14.0
djangorestframework-simplejwt==5.3.2
psycopg2-binary==2.9.9          # PostgreSQL adapter
influxdb-client==1.18.0         # InfluxDB client
paho-mqtt==1.6.1                # MQTT client
celery==5.3.4                   # Task queue (opcional)
redis==5.0.1                    # Redis cache (opcional)
django-cors-headers==4.3.1      # CORS support
python-decouple==3.8            # Environment variables
gunicorn==21.2.0                # WSGI server
channels==4.0.0                 # WebSockets
channels-redis==4.1.0           # Redis backend for channels
```

### 2.2 Frontend

```
┌────────────────────────────────────────────────┐
│           FRONTEND STACK                       │
├────────────────────────────────────────────────┤
│                                                │
│  Framework:       React 18.2                   │
│  Bundler:         Vite 5.0                     │
│  Node:            18 LTS+                      │
│  Package Manager: npm 9+                       │
│                                                │
│  HTTP Client:     Axios 1.6                    │
│  Routing:         React Router v6              │
│  State:           Context API / Zustand        │
│  Styling:         Tailwind CSS 3               │
│  Charts:          Recharts / Chart.js          │
│  PWA:             Workbox                      │
│  Testing:         Vitest + React Testing      │
│                                                │
└────────────────────────────────────────────────┘
```

**Dependencias Principales:**

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "axios": "^1.6.2",
    "zustand": "^4.4.7",
    "recharts": "^2.10.3",
    "chart.js": "^4.4.0",
    "tailwindcss": "^3.3.6",
    "framer-motion": "^10.16.16",
    "workbox-window": "^7.0.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.1.2"
  }
}
```

### 2.3 IoT & Edge Computing

```
┌────────────────────────────────────────────────┐
│            IoT STACK (BeagleBone)              │
├────────────────────────────────────────────────┤
│                                                │
│  OS:              Debian Bullseye              │
│  Python:          3.9+                         │
│  Hardware GPIO:   Adafruit_BBIO               │
│  Sensores:        Adafruit_DHT                 │
│                                                │
│  MQTT:            paho-mqtt                    │
│  Broker:          Mosquitto 2.x                │
│  IA/ML:           scikit-learn + numpy         │
│  Time Series:     statsmodels (ARIMA)         │
│  Vision:          OpenCV (CNN)                 │
│                                                │
│  Logging:         Python logging               │
│  Systemd:         Auto-restart services        │
│                                                │
└────────────────────────────────────────────────┘
```

### 2.4 Bases de Datos

| BD | Propósito | Versión | Características |
|---|---|---|---|
| **PostgreSQL** | Datos relacionales | 14+ | ACID, replicación, JSON support |
| **InfluxDB** | Series temporales | 2.x | Compresión, agregaciones, rentención |
| **Redis** | Cache + Sesiones | 7+ | Velocidad, pub/sub, TTL |
| **SQLite** | Buffer local (BBB) | 3.x | Sin dependencias externas |

### 2.5 Infraestructura

| Componente | Desarrollo | Validación | Producción |
|-----------|-----------|-----------|-----------|
| **Servidor** | Local (Docker) | Render | Azure App Service |
| **BD Relacional** | PostgreSQL local | Render PG | Azure Database for PG |
| **BD Temporal** | InfluxDB local | Render | InfluxDB Cloud |
| **IoT** | Localhost MQTT | Render WebSockets | Azure IoT Hub |
| **CDN/Static** | Local | Render | Azure CDN |
| **Monitoreo** | Prometheus | - | Application Insights |

---

## 3. Arquitectura de Sistemas

### 3.1 Diagrama General

```
┌──────────────────────────────────────────────────────────────────┐
│                    CAPA DE PRESENTACIÓN                          │
│                   Frontend React PWA                             │
│  ┌─────────────┬──────────────┬──────────────┬────────────────┐ │
│  │  Dashboard  │  LMS Viewer  │ Sensor Panel │  Admin Panel   │ │
│  └─────────────┴──────────────┴──────────────┴────────────────┘ │
│                    HTTPS / WebSocket                             │
└──────────────────┬──────────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────────┐
│                CAPA DE APLICACIÓN (API)                         │
│              Django REST Framework 3.14                         │
│  ┌────────────┬─────────────┬──────────────┬────────────────┐ │
│  │  Usuarios  │  Sensores   │   Alertas    │   Cursos/LMS   │ │
│  │  (JWT)     │  (CRUD)     │  (Reglas)    │   (Contenidos) │ │
│  └────────────┴─────────────┴──────────────┴────────────────┘ │
│                        Serializers                              │
│                      Permissions                                │
│                      Validations                                │
└──────────────────┬──────────────────────────────────────────────┘
                   │
         ┌─────────┴──────────┬──────────────┐
         │                    │              │
┌────────▼────────┐ ┌─────────▼────────┐ ┌─▼─────────────────┐
│  PostgreSQL     │ │   InfluxDB       │ │   Redis (opt)     │
│  (Relacional)   │ │   (Series Temps) │ │   (Cache/Sesiones)│
│                 │ │                  │ │                   │
│ • NodoIoT       │ │ • Lecturas       │ │ • Auth tokens     │
│ • Sensor        │ │ • Predicciones   │ │ • Sessions        │
│ • Usuario       │ │ • Alertas hist.  │ │ • Rate limit      │
│ • Curso         │ │ • Eventos        │ │                   │
│ • Laboratorio   │ │ • Métricas       │ │                   │
└────────────────┘ └──────────────────┘ └───────────────────┘
         ▲                    ▲
         │                    │
┌────────┴────────────────────┴─────────────────────────────────┐
│                    CAPA IoT / EDGE                            │
│                 MQTT Broker (Mosquitto)                       │
│                    Port 1883 / 8883                            │
└────────┬──────────────────┬────────────────┬─────────────────┘
         │                  │                │
    ┌────▼────┐        ┌────▼────┐     ┌───▼────┐
    │  BBB1   │        │  BBB2   │     │  BBB3  │
    │ Gateway │        │   IA    │     │Sensores│
    │         │        │         │     │        │
    │ • MQTT  │        │ • ARIMA │     │• DHT22 │
    │ • Sync  │        │ • CNN   │     │• Capac │
    │ • Auth  │        │ • Train │     │• Foto  │
    └─────────┘        └─────────┘     └────────┘
```

### 3.2 Capas de Aplicación Detalladas

```
┌─────────────────────────────────────────────────────────────────┐
│ CAPA 7: Presentación (Interfaz Usuario)                        │
│ ├─ React Components (Dashboard, Charts, Forms)                 │
│ ├─ PWA Service Worker (Offline, Caching)                       │
│ └─ Estado Global (Context API, Zustand)                        │
├─────────────────────────────────────────────────────────────────┤
│ CAPA 6: Aplicación Web (Frontend Business Logic)              │
│ ├─ Custom Hooks (useAuth, useSensores, useAlertas)           │
│ ├─ Services (api.js, mqtt.js, formatters.js)                 │
│ └─ Utilidades (validators, transformers)                      │
├─────────────────────────────────────────────────────────────────┤
│ CAPA 5: API REST (Django Viewsets)                            │
│ ├─ SensorViewSet (CRUD sensores + lecturas)                   │
│ ├─ AlertaViewSet (Gestión de alertas)                         │
│ ├─ CursoViewSet (LMS content)                                 │
│ └─ UsuarioViewSet (Perfiles + autenticación)                  │
├─────────────────────────────────────────────────────────────────┤
│ CAPA 4: Lógica de Negocios (Services/Serializers)            │
│ ├─ Validación de datos                                        │
│ ├─ Reglas de negocio (alertas, predicciones)                 │
│ ├─ Transformación de datos                                    │
│ └─ Integraciones externas                                     │
├─────────────────────────────────────────────────────────────────┤
│ CAPA 3: Acceso a Datos (ORM + Queries)                        │
│ ├─ Django ORM (Models)                                        │
│ ├─ Raw SQL (queries complejas)                                │
│ ├─ InfluxDB client (escritura/lectura)                        │
│ └─ Cache layer (Redis)                                        │
├─────────────────────────────────────────────────────────────────┤
│ CAPA 2: Persistencia (Bases de Datos)                         │
│ ├─ PostgreSQL (transacciones, relaciones)                     │
│ ├─ InfluxDB (series temporales)                               │
│ ├─ Redis (sesiones, caché)                                    │
│ └─ SQLite (buffer local en BBB)                               │
├─────────────────────────────────────────────────────────────────┤
│ CAPA 1: Infraestructura                                        │
│ ├─ Render (contenedores Docker)                               │
│ ├─ Azure (App Service, DB, IoT Hub)                           │
│ ├─ MQTT Broker (comunicación IoT)                             │
│ └─ Monitoreo (Prometheus, Grafana, App Insights)             │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 Componentes Modulares

#### Backend Apps (Django)

```python
# Estructura recomendada
backend/
├── apps/
│   ├── usuarios/
│   │   ├── models.py       # User, Profile, Rol
│   │   ├── serializers.py  # UsuarioSerializer, LoginSerializer
│   │   ├── views.py        # ViewSets con JWT
│   │   ├── permissions.py  # Permisos personalizados
│   │   └── urls.py
│   │
│   ├── sensores/
│   │   ├── models.py       # NodoIoT, Sensor, LecturaSensor
│   │   ├── serializers.py
│   │   ├── viewsets.py     # ReadOnly para NodoIoT, CRUD para Sensor
│   │   ├── filters.py      # Filtros por rango, fechas
│   │   └── urls.py
│   │
│   ├── alertas/
│   │   ├── models.py       # Alerta, HistoricoAlerta
│   │   ├── signals.py      # Auto-trigger de alertas
│   │   └── tasks.py        # Celery tasks
│   │
│   ├── cursos/
│   │   ├── models.py       # Curso, Leccion, Modulo
│   │   ├── serializers.py
│   │   └── views.py
│   │
│   └── laboratorios/
│       └── models.py       # Laboratorio virtual
│
└── core/
    ├── settings.py         # Configuración (dev/prod)
    ├── urls.py
    ├── wsgi.py
    └── middleware.py       # CORS, Auth, Logging
```

#### Frontend Components

```jsx
// Estructura recomendada
src/
├── components/
│   ├── Dashboard/
│   │   ├── Dashboard.jsx
│   │   ├── CardMetrica.jsx
│   │   └── GraficoTiempoReal.jsx
│   │
│   ├── Sensores/
│   │   ├── SensorMonitor.jsx
│   │   ├── SensorList.jsx
│   │   └── SensorDetail.jsx
│   │
│   ├── Alertas/
│   │   ├── AlertPanel.jsx
│   │   ├── AlertConfig.jsx
│   │   └── AlertHistory.jsx
│   │
│   ├── LMS/
│   │   ├── CursoList.jsx
│   │   ├── LeccionViewer.jsx
│   │   └── Quiz.jsx
│   │
│   └── Common/
│       ├── Navbar.jsx
│       ├── Sidebar.jsx
│       ├── Loading.jsx
│       └── ErrorBoundary.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── SensoresPage.jsx
│   ├── CursosPage.jsx
│   ├── AdminPage.jsx
│   └── NotFound.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useSensores.js
│   ├── useAlertas.js
│   └── useMQTT.js
│
├── services/
│   ├── api.js              # Axios instance + endpoints
│   ├── mqtt.js             # MQTT client
│   └── auth.js             # JWT management
│
├── utils/
│   ├── formatters.js
│   ├── validators.js
│   └── constants.js
│
├── store/
│   ├── authStore.js
│   └── sensoresStore.js
│
└── App.jsx
```

---

## 4. Modelos de Datos

### 4.1 PostgreSQL Models

```python
# apps/sensores/models.py

class NodoIoT(models.Model):
    """Representa un BeagleBone Black en el terreno"""
    
    TIPOS = [
        ('gateway', 'Gateway (BBB1) - MQTT + Sync'),
        ('ia', 'Motor IA (BBB2) - Predicciones'),
        ('sensores', 'Sensores (BBB3) - Lectura datos'),
    ]
    
    ESTADOS = [
        ('activo', 'Activo'),
        ('inactivo', 'Inactivo'),
        ('mantenimiento', 'En mantenimiento'),
    ]
    
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True)
    tipo = models.CharField(max_length=20, choices=TIPOS)
    ip = models.GenericIPAddressField()
    puerto = models.IntegerField(default=8000)
    estado = models.CharField(max_length=20, choices=ESTADOS, default='activo')
    ultimo_latido = models.DateTimeField(null=True, blank=True)
    timestamp_creado = models.DateTimeField(auto_now_add=True)
    timestamp_actualizado = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['nombre']
        verbose_name_plural = "Nodos IoT"
        indexes = [
            models.Index(fields=['estado']),
            models.Index(fields=['tipo']),
        ]
    
    def __str__(self):
        return f"{self.nombre} ({self.get_tipo_display()})"
    
    @property
    def conectado(self):
        """Verifica si el nodo envió latido en los últimos 5 min"""
        if not self.ultimo_latido:
            return False
        return (timezone.now() - self.ultimo_latido).seconds < 300


class Sensor(models.Model):
    """Sensor físico conectado a un BBB"""
    
    TIPOS = [
        ('dht22', 'DHT22 - Temperatura/Humedad'),
        ('capacitivo', 'Capacitivo - Humedad suelo'),
        ('camara', 'Cámara USB - Detección visual'),
        ('luz', 'Fotodiodo - Intensidad luz'),
    ]
    
    nodo_iot = models.ForeignKey(NodoIoT, on_delete=models.CASCADE, related_name='sensores')
    tipo = models.CharField(max_length=20, choices=TIPOS)
    modelo = models.CharField(max_length=100)
    pin_gpio = models.CharField(max_length=10, help_text="P8_03, etc")
    nombre = models.CharField(max_length=100)
    ubicacion = models.CharField(max_length=200, blank=True)
    estado = models.CharField(max_length=20, default='activo')
    rango_minimo = models.FloatField(help_text="Valor mínimo esperado")
    rango_maximo = models.FloatField(help_text="Valor máximo esperado")
    unidad = models.CharField(max_length=20, default='°C')
    timestamp_creado = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('nodo_iot', 'pin_gpio')
        indexes = [
            models.Index(fields=['nodo_iot', 'tipo']),
        ]
    
    def __str__(self):
        return f"{self.nombre} ({self.get_tipo_display()})"


class LecturaSensor(models.Model):
    """Lectura individual de un sensor - Se escribe en PostgreSQL y InfluxDB"""
    
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE, related_name='lecturas')
    valor = models.FloatField()
    calidad = models.FloatField(default=100, help_text="0-100% confianza")
    timestamp = models.DateTimeField(auto_now_add=True, db_index=True)
    
    class Meta:
        ordering = ['-timestamp']
        indexes = [
            models.Index(fields=['sensor', 'timestamp']),
            models.Index(fields=['timestamp']),
        ]
        verbose_name_plural = "Lecturas de sensores"


class Alerta(models.Model):
    """Configuración de alertas basadas en umbrales"""
    
    TIPOS = [
        ('minima', 'Valor mínimo'),
        ('maxima', 'Valor máximo'),
        ('rango', 'Fuera de rango'),
        ('cambio', 'Cambio abrupto'),
    ]
    
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE, related_name='alertas')
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=20, choices=TIPOS)
    umbral_valor = models.FloatField()
    activa = models.BooleanField(default=True)
    usuarios_notificados = models.ManyToManyField(User, related_name='alertas')
    timestamp_creada = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Alerta: {self.nombre}"


class HistoricoAlerta(models.Model):
    """Registro de alertas disparadas"""
    
    SEVERIDADES = [
        ('baja', 'Baja'),
        ('media', 'Media'),
        ('alta', 'Alta'),
    ]
    
    alerta = models.ForeignKey(Alerta, on_delete=models.CASCADE)
    valor_registrado = models.FloatField()
    severidad = models.CharField(max_length=10, choices=SEVERIDADES)
    resuelta = models.BooleanField(default=False)
    timestamp_inicio = models.DateTimeField(auto_now_add=True)
    timestamp_fin = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        ordering = ['-timestamp_inicio']


# apps/usuarios/models.py

class Usuario(models.Model):
    """Perfil de usuario extendido"""
    
    ROLES = [
        ('admin', 'Administrador'),
        ('profesor', 'Profesor/Investigador'),
        ('estudiante', 'Estudiante'),
        ('tecnico', 'Técnico'),
    ]
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    rol = models.CharField(max_length=20, choices=ROLES, default='estudiante')
    institucion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=20, blank=True)
    foto = models.ImageField(upload_to='usuarios/', blank=True)
    timestamp_creado = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.get_full_name()} ({self.get_rol_display()})"


# apps/cursos/models.py

class Curso(models.Model):
    """Curso educativo del LMS"""
    
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    profesor = models.ForeignKey(User, on_delete=models.PROTECT)
    estudiantes = models.ManyToManyField(User, related_name='cursos')
    creado = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.titulo


class Leccion(models.Model):
    """Lección dentro de un curso"""
    
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name='lecciones')
    titulo = models.CharField(max_length=200)
    contenido_html = models.TextField()
    orden = models.IntegerField()
    
    class Meta:
        ordering = ['orden']
    
    def __str__(self):
        return f"{self.curso.titulo} - {self.titulo}"
```

### 4.2 InfluxDB Measurements

```yaml
# Estructuras de datos en InfluxDB

# Measurement: sensores
measurement: sensores
  tags:
    nodo_id: "bbb3"
    sensor_id: "1"
    tipo: "dht22"
    ubicacion: "parcela-a"
  fields:
    temperatura: 28.5 (float)
    humedad: 65.0 (float)
    calidad: 95.5 (float)
  timestamp: 1697300400000000000

# Measurement: predicciones
measurement: predicciones
  tags:
    modelo: "arima"
    nodo_id: "bbb2"
    sensor_id: "1"
    horizonte: "1h"
  fields:
    valor_predicho: 29.2 (float)
    confianza: 0.95 (float)
    mape: 3.2 (float)
  timestamp: 1697300400000000000

# Measurement: alertas
measurement: alertas
  tags:
    tipo: "temperatura_alta"
    severidad: "alta"
    sensor_id: "1"
  fields:
    valor_trigger: 35.0 (float)
    duracion_segundos: 300 (int)
  timestamp: 1697300400000000000

# Measurement: metricas_sistema
measurement: metricas_sistema
  tags:
    nodo: "bbb1"
    componente: "cpu"
  fields:
    uso_porcentaje: 45.2 (float)
    memoria_mb: 512 (float)
    temperatura_cpu: 65.3 (float)
  timestamp: 1697300400000000000
```

---

## 5. Flujo de Datos

### 5.1 Ciclo Completo: Sensor → Cloud → Dashboard

```
PASO 1: LECTURA EN TERRENO (BBB3)
└─ Cada 30 segundos
   ├─ Lee DHT22 vía GPIO
   ├─ Valida rango (0-50°C)
   ├─ Publica en MQTT:
   │  Topic: sensores/bbb3/dht22/temperatura
   │  Payload: {"valor": 28.5, "calidad": 95.5, "ts": 1697300400}
   └─ Almacena en buffer local (SQLite) si falla conexión

PASO 2: RECEPCIÓN EN GATEWAY (BBB1)
└─ Suscrito a sensores/#
   ├─ Recibe mensaje MQTT
   ├─ Almacena en buffer local (SQLite)
   ├─ POST /api/sensores/lecturas/ → Django
   └─ Espera confirmación 200 OK

PASO 3: PROCESAMIENTO EN BACKEND (Django)
└─ ViewSet SensorViewSet recibe POST
   ├─ Valida LecturaSensorSerializer
   ├─ Guarda en PostgreSQL (LecturaSensor)
   ├─ Envía async a InfluxDB (Celery task)
   ├─ Evalúa reglas de alertas
   ├─ Si alerta disparada:
   │  ├─ Crea HistoricoAlerta
   │  ├─ Publica MQTT: alerts/criticas
   │  └─ Envía notificación (email/WebSocket)
   └─ Retorna 201 Created

PASO 4: ACTUALIZACIÓN EN TIEMPO REAL (Frontend)
└─ React conectado vía WebSocket
   ├─ Recibe evento de nueva lectura
   ├─ Actualiza estado global (Zustand)
   ├─ Redibuja gráfico en tiempo real
   ├─ Si hay alerta: muestra notificación PWA
   └─ Persiste en IndexedDB (offline)

PASO 5: VISUALIZACIÓN EN DASHBOARD
└─ Dashboard.jsx
   ├─ Gráfico actualiza cada 30s
   ├─ Muestra últimas 24h
   ├─ Alerta visual si umbral superado
   └─ Sincroniza al reconectar
```

### 5.2 Ciclo de Predicción (ARIMA)

```
CADA HORA EN BBB2:
├─ Descarga últimas 168 lecturas (7 días) de API
├─ Ejecuta modelo ARIMA(p=1,d=1,q=1)
├─ Genera predicción para próxima hora
├─ Publica en MQTT: ia/bbb2/prediccion/temperatura
└─ Registra confianza y MAPE

BBB1 RECIBE:
├─ Publica nuevamente al backend
└─ Django guarda en InfluxDB

FRONTEND MUESTRA:
├─ Línea punteada en gráfico (predicción)
├─ Intervalo de confianza (95%)
└─ Compara con valor real cuando se obtiene
```

---

## 6. APIs REST

### 6.1 Endpoints Sensores

```bash
# NODOS IoT
GET    /api/nodos/                      # Listar BBB
POST   /api/nodos/                      # Crear nodo (admin)
GET    /api/nodos/{id}/                 # Detalle
PATCH  /api/nodos/{id}/                 # Actualizar estado
DELETE /api/nodos/{id}/                 # Eliminar

# SENSORES
GET    /api/sensores/                   # Listar sensores
POST   /api/sensores/                   # Crear sensor
GET    /api/sensores/{id}/              # Detalle
GET    /api/sensores/{id}/lecturas/     # Histórico (últimas 24h)
GET    /api/sensores/{id}/predicciones/ # Predicciones ARIMA

# LECTURAS
GET    /api/lecturas/?sensor=1&fecha_desde=2025-10-14&fecha_hasta=2025-10-15
POST   /api/lecturas/                   # Nueva lectura (desde BBB)
GET    /api/lecturas/estadisticas/      # Resumen diario

# ALERTAS
GET    /api/alertas/                    # Alertas configuradas
POST   /api/alertas/                    # Crear alerta
PATCH  /api/alertas/{id}/               # Modificar umbral
DELETE /api/alertas/{id}/               # Desactivar
GET    /api/alertas/historial/          # Alertas disparadas

# AUTENTICACIÓN
POST   /api/auth/login/                 # Obtener token JWT
POST   /api/auth/refresh/               # Refrescar token
POST   /api/auth/logout/                # Revocar token
GET    /api/auth/usuario-actual/        # Perfil del usuario

# LMS
GET    /api/cursos/                     # Listar cursos
GET    /api/cursos/{id}/lecciones/      # Lecciones del curso
POST   /api/cursos/{id}/marcar-completo/ # Marcar leccion como hecha
GET    /api/cursos/{id}/progreso/       # % completitud
```

### 6.2 Ejemplo: Crear Lectura de Sensor

**Request:**
```bash
curl -X POST http://localhost:8000/api/lecturas/ \
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLC..." \
  -H "Content-Type: application/json" \
  -d '{
    "sensor": 1,
    "valor": 28.5,
    "calidad": 95.5
  }'
```

**Response (201):**
```json
{
  "id": 12345,
  "sensor": 1,
  "valor": 28.5,
  "calidad": 95.5,
  "timestamp": "2025-10-14T15:30:45.123456Z"
}
```

---

## 7. Comunicación IoT

### 7.1 Estructura MQTT Topics

```
sensores/
├── bbb3/dht22/
│   ├── temperatura       → 28.5
│   └── humedad           → 65.0
├── bbb3/capacitivo/
│   └── suelo             → 450
└── bbb3/camara/
    └── detecciones       → {"objeto": "plaga", "confianza": 0.92}

ia/
├── bbb2/prediccion/
│   ├── temperatura       → {"valor": 29.2, "confianza": 0.95}
│   └── humedad           → {"valor": 63.0, "confianza": 0.92}
└── bbb2/entrenamiento/
    └── status            → {"modelo": "arima", "status": "completado"}

alertas/
├── criticas              → {"tipo": "temp_alta", "valor": 35.0, "sensor": 1}
├── advertencias          → {"tipo": "humedad_baja", "valor": 30.0}
└── mantenimiento         → {"tipo": "sensor_offline", "nodo": "bbb3"}

estado/
├── bbb1/conexion         → {"status": "online", "ip": "192.168.1.100"}
├── bbb2/recursos         → {"cpu": 45.2, "memoria": 512, "temp_cpu": 65.3}
└── bbb3/bateria          → {"nivel": 85.0, "voltaje": 5.1}
```

### 7.2 Configuración Mosquitto (BBB1)

```conf
# /etc/mosquitto/mosquitto.conf

listener 1883 0.0.0.0
protocol mqtt

listener 8883 0.0.0.0
protocol mqtt
cafile /etc/mosquitto/ca.crt
certfile /etc/mosquitto/server.crt
keyfile /etc/mosquitto/server.key

persistence true
persistence_location /var/lib/mosquitto/

log_dest file /var/log/mosquitto/mosquitto.log
log_dest stdout
log_type all

max_queued_messages 1000
message_size_limit 0
allow_anonymous true
```

### 7.3 Cliente MQTT en BBB3 (Python)

```python
import paho.mqtt.client as mqtt
import json
import time
import Adafruit_DHT

BROKER = "bbb1_ip"
PORT = 1883
TOPIC_TEMP = "sensores/bbb3/dht22/temperatura"
TOPIC_HUM = "sensores/bbb3/dht22/humedad"

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("✓ Conectado a MQTT broker")
    else:
        print(f"✗ Error conexión: {rc}")

def leer_dht22():
    humidity, temperature = Adafruit_DHT.read_retry(Adafruit_DHT.DHT22, pin=4)
    return temperature, humidity

client = mqtt.Client("bbb3-sensores")
client.on_connect = on_connect
client.connect(BROKER, PORT, 60)
client.loop_start()

while True:
    try:
        temp, hum = leer_dht22()
        if temp is not None:
            payload_temp = json.dumps({
                "valor": round(temp, 2),
                "calidad": 95.5,
                "ts": int(time.time())
            })
            payload_hum = json.dumps({
                "valor": round(hum, 2),
                "calidad": 95.5,
                "ts": int(time.time())
            })
            client.publish(TOPIC_TEMP, payload_temp, qos=1)
            client.publish(TOPIC_HUM, payload_hum, qos=1)
            print(f"📊 Publicado: {temp}°C, {hum}%")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    time.sleep(30)  # Lectura cada 30 segundos
```

---

## 8. Autenticación & Seguridad

### 8.1 JWT Token Flow

```
┌────────────────────────────────────────┐
│ 1. USUARIO INGRESA CREDENCIALES        │
│    Frontend: POST /api/auth/login/     │
└────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────┐
│ 2. DJANGO VALIDA CREDENCIALES          │
│    ├─ Usuario existe                   │
│    ├─ Contraseña correcta              │
│    └─ Usuario activo                   │
└────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────┐
│ 3. GENERA JWT TOKENS                   │
│    ├─ Access Token (15 min)            │
│    └─ Refresh Token (7 días)           │
└────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────┐
│ 4. RESPONSE AL CLIENTE                 │
│    {                                   │
│      "access": "eyJ0eXAiOi...",       │
│      "refresh": "eyJ0eXAiOi...",      │
│      "user": {...}                     │
│    }                                   │
└────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────┐
│ 5. FRONTEND ALMACENA TOKEN             │
│    Authorization header en requests    │
│    "Authorization: Bearer <access>"    │
└────────────────────────────────────────┘
```

### 8.2 Permisos por Rol

```python
# apps/usuarios/permissions.py

class IsAdmin(permissions.BasePermission):
    """Solo administradores"""
    def has_permission(self, request, view):
        return request.user and request.user.usuario.rol == 'admin'

class IsProfesor(permissions.BasePermission):
    """Profesores y admins"""
    def has_permission(self, request, view):
        return request.user and request.user.usuario.rol in ['profesor', 'admin']

class IsOwner(permissions.BasePermission):
    """Solo dueño del objeto"""
    def has_object_permission(self, request, view, obj):
        return obj.usuario == request.user

# En viewsets:
class SensorViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsProfesor]
    
    def create(self, request, *args, **kwargs):
        # Solo profesores pueden crear sensores
        pass
```

### 8.3 Validación de Datos

```python
# apps/sensores/serializers.py

class LecturaSensorSerializer(serializers.ModelSerializer):
    def validate_valor(self, value):
        # Validar que esté en rango
        sensor = self.instance.sensor if self.instance else None
        if sensor:
            if not (sensor.rango_minimo <= value <= sensor.rango_maximo):
                raise serializers.ValidationError(
                    f"Valor fuera de rango [{sensor.rango_minimo}-{sensor.rango_maximo}]"
                )
        return value
    
    class Meta:
        model = LecturaSensor
        fields = ['id', 'sensor', 'valor', 'calidad', 'timestamp']
        read_only_fields = ['id', 'timestamp']
```

---

## 9. Despliegue & DevOps

### 9.1 Docker Compose (Desarrollo)

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:14-alpine
    environment:
      POSTGRES_DB: sigct_rural
      POSTGRES_USER: sigct
      POSTGRES_PASSWORD: changeme123
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U sigct"]
      interval: 10s
      timeout: 5s
      retries: 5

  influxdb:
    image: influxdb:2.6-alpine
    environment:
      INFLUXDB_DB: sigct
      INFLUXDB_ADMIN_USER: admin
      INFLUXDB_ADMIN_PASSWORD: admin123
    ports:
      - "8086:8086"
    volumes:
      - influx_data:/var/lib/influxdb2
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8086/health"]
      interval: 10s
      timeout: 5s
      retries: 5

  mosquitto:
    image: eclipse-mosquitto:latest
    ports:
      - "1883:1883"
      - "9001:9001"
    volumes:
      - ./config/mosquitto.conf:/mosquitto/config/mosquitto.conf
      - mosquitto_data:/mosquitto/data
    healthcheck:
      test: ["CMD", "mosquitto_sub", "-h", "localhost", "-t", "$SYS/#", "-C", "1"]
      interval: 10s
      timeout: 5s
      retries: 5

  backend:
    build: ./backend
    command: gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 4
    ports:
      - "8000:8000"
    environment:
      - DEBUG=False
      - DATABASE_URL=postgresql://sigct:changeme123@postgres:5432/sigct_rural
      - INFLUXDB_URL=http://influxdb:8086
      - MQTT_BROKER=mosquitto
      - MQTT_PORT=1883
    volumes:
      - ./backend:/app
    depends_on:
      postgres:
        condition: service_healthy
      influxdb:
        condition: service_healthy
      mosquitto:
        condition: service_healthy

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - VITE_API_URL=http://localhost:8000
    volumes:
      - ./frontend:/app
      - /app/node_modules
    depends_on:
      - backend

  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./config/prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus

volumes:
  postgres_data:
  influx_data:
  mosquitto_data:
  prometheus_data:
```

### 9.2 Despliegue en Render

```bash
# Crear render.yaml en raíz del proyecto
services:
  - type: web
    name: sigct-api
    env: python
    buildCommand: pip install -r backend/requirements.txt && python backend/manage.py migrate
    startCommand: gunicorn core.wsgi:application --bind 0.0.0.0:$PORT
    envVars:
      - key: DATABASE_URL
        scope: shared
      - key: SECRET_KEY
        scope: shared
        
  - type: web
    name: sigct-frontend
    staticPublishPath: dist
    buildCommand: npm install && npm run build
    envVars:
      - key: VITE_API_URL
        value: https://sigct-api.onrender.com

databases:
  - name: sigct_db
    dbName: sigct_rural
    user: sigct
```

---

## 10. Optimización & Performance

### 10.1 Índices en PostgreSQL

```sql
-- apps/sensores/migrations/XXXX_add_indexes.py
CREATE INDEX idx_lectura_sensor_ts ON lecturas(sensor_id, timestamp DESC);
CREATE INDEX idx_alerta_sensor ON historico_alertas(alerta_id, timestamp_inicio DESC);
CREATE INDEX idx_nodo_estado ON nodos_iot(tipo, estado);
```

### 10.2 Caché en Redis

```python
# Backend: Caché de lecturas recientes
from django.views.decorators.cache import cache_page
from django.core.cache import cache

@cache_page(60)  # Cache 60 segundos
def lecturas_ultimas_24h(request, sensor_id):
    cache_key = f"lecturas_{sensor_id}_24h"
    data = cache.get(cache_key)
    if not data:
        data = LecturaSensor.objects.filter(
            sensor_id=sensor_id,
            timestamp__gte=timezone.now() - timedelta(hours=24)
        ).values('valor', 'timestamp')
        cache.set(cache_key, data, 300)
    return data
```

### 10.3 Frontend: Code Splitting

```jsx
// Lazy loading de componentes pesados
const Dashboard = lazy(() => import('./pages/Dashboard'));
const CursosPage = lazy(() => import('./pages/CursosPage'));

<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/cursos" element={<CursosPage />} />
  </Routes>
</Suspense>
```

---

## 11. Troubleshooting

### Problema: BBB no conecta a MQTT

**Solución:**
```bash
# En BBB3, verificar conectividad
mosquitto_pub -h bbb1_ip -t test -m "hola"

# Si falla, revisar firewall
sudo ufw allow 1883/tcp

# Revisar logs
sudo journalctl -u mosquitto -n 50
```

### Problema: InfluxDB no escribe datos

**Solución:**
```python
# Verificar en Django shell
from influxdb_client import InfluxDBClient
client = InfluxDBClient(url="http://localhost:8086", token="token", org="sigct")
print(client.health())
```

---

## 12. Roadmap Técnico

| Fase | Mes | Actividades |
|------|-----|------------|
| **1** | Oct 2025 | ✅ Setup Render, APIs base, MQTT |
| **2** | Nov 2025 | 🔄 Frontend completo, JWT, alertas |
| **3** | Dic 2025 | 🔄 Preparar Azure, CI/CD |
| **4** | Ene 2026 | 📅 Migración Azure, optimización |

---

## 📚 Documentación Relacionada

- [README.md](../README.md) - Información general
- [API.md](./API.md) - Especificación completa endpoints
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guía despliegue
- [DATABASE.md](./DATABASE.md) - Esquema BD
- [MQTT.md](./MQTT.md) - Protocolo IoT

---

**Versión:** 2.0 | **Fecha:** Octubre 2025 | **Autor:** Bernardo Adolfo Gómez Montoya