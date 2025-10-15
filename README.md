# 🌾 SIGCT-Rural v2
## Sistema Inteligente de Gestión Científica y Tecnológica para Zonas Rurales

<div align="center">

![SIGCT-Rural Banner](https://img.shields.io/badge/SIGCT--Rural-v2.0-2ecc71?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active%20Development-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT%20Adapted-orange?style=for-the-badge)
![SENA](https://img.shields.io/badge/SENA-Magdalena%20Medio-red?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.9+-3776ab?style=flat-square&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-4.2-092E20?style=flat-square&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white)

**Plataforma educativa e IoT open-source para monitoreo agrícola inteligente en zonas rurales de Colombia**

[🚀 Quick Start](#-quick-start) • [📚 Documentación](#-documentación) • [🔗 Enlaces](#-enlaces-importantes) • [👥 Comunidad](#-comunidad) • [📄 Licencia](#-licencia)

</div>

---

## 📋 Información del Proyecto

| Aspecto | Detalle |
|--------|---------|
| **Autor** | Bernardo Adolfo Gómez Montoya |
| **Ficha SENA** | 3070388 |
| **Programa** | Tecnología en Análisis y Desarrollo de Software (ADSO) |
| **Regional SENA** | Magdalena Medio |
| **Versión** | 2.0 (Octubre 2025) |
| **Estado** | ✅ Desarrollo Activo |
| **Licencia** | [MIT Adaptada](./LICENSE) |
| **Repositorio** | [badolgm/SigctRuralSena](https://github.com/badolgm/SigctRuralSena) |
| **Plataforma Validación** | [Render.com](https://render.com) |
| **Plataforma Producción** | [Microsoft Azure](https://azure.microsoft.com) |

---

## 🎯 Propósito & Visión

SIGCT-Rural v2 es una solución integral diseñada para llevar tecnología educativa STEM a zonas rurales de Colombia. Combina monitoreo agrícola real con un ecosistema de aprendizaje, permitiendo a estudiantes de instituciones rurales comprender conceptos complejos de IoT, IA y programación mediante casos de uso prácticos.

**Objetivos principales:**
- 🎓 Educación STEM accesible en zonas rurales
- 🌱 Monitoreo agrícola inteligente en tiempo real
- 🤖 Implementación de modelos de IA (ARIMA, CNN)
- 📊 Análisis de datos para toma de decisiones
- 🏗️ Arquitectura escalable y replicable en otras instituciones SENA

---

## 🏗️ Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────────┐
│             FASE 1: VALIDACIÓN (Oct-Nov 2025)                   │
│                      RENDER.COM                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │ Django REST  │  │ React PWA    │  │ PostgreSQL   │           │
│  │ API (8000)   │  │ Frontend     │  │ Database     │           │
│  │              │  │ (3000)       │  │              │           │
│  └──────┬───────┘  └──────────────┘  └──────┬───────┘           │
│         │                                    │                    │
│         └────────────┬─────────────────────┘                     │
│                      │                                            │
│              ┌───────▼────────┐                                  │
│              │   InfluxDB     │                                  │
│              │ (Series Temps) │                                  │
│              └────────────────┘                                  │
│                                                                   │
└────────────────────────┬──────────────────────────────────────────┘
                         │ MQTT over WebSockets
            ┌────────────┼────────────┐
            │            │            │
       ┌────▼───┐   ┌────▼───┐  ┌───▼────┐
       │ BBB1   │   │ BBB2   │  │ BBB3   │
       │Gateway │   │  IA    │  │Sensores│
       │(MQTT)  │   │(ARIMA) │  │(DHT22) │
       └────────┘   └────────┘  └────────┘
       
┌─────────────────────────────────────────────────────────────────┐
│         FASE 2: PRODUCCIÓN (Dic 2025 - Ene 2026)                │
│                   MICROSOFT AZURE                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│ Azure App Service │ Database for PG │ IoT Hub │ App Insights    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Componentes Principales

**Backend:**
- Django 4.2 REST Framework
- PostgreSQL 14+ (datos relacionales)
- InfluxDB 2.x (series temporales)
- Autenticación JWT
- Sistema de alertas inteligente
- Celery para tareas asincrónicas (opcional)

**Frontend:**
- React 18+ con Vite
- PWA responsivo (soporte offline)
- Gráficos en tiempo real (Recharts/Chart.js)
- Dashboard interactivo
- Panel de control LMS

**IoT (3 BeagleBone Black RevC):**
- **BBB1 (Gateway):** MQTT Broker + Sincronización Cloud
- **BBB2 (IA):** Modelos ARIMA + CNN
- **BBB3 (Sensores):** DHT22, capacitivos, cámara USB

**Hardware Complementario:**
- Sensores: DHT22 (T°/Humedad), capacitivos (humedad suelo), cámara USB
- Actuadores: Sonoff WiFi (control remoto)
- Conectividad: Ethernet + WiFi

---

## 🚀 Quick Start

### ⚡ Opción 1: Docker (Recomendado)

```bash
# 1. Clonar repositorio
git clone https://github.com/badolgm/SigctRuralSena.git
cd SigctRuralSena

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores (database, JWT secret, etc.)

# 3. Iniciar servicios con Docker Compose
docker-compose up -d

# 4. Verificar estado de servicios
docker-compose ps

# 5. Crear superusuario (primera vez)
docker-compose exec backend python manage.py createsuperuser

# ✅ Servicios disponibles:
# - Backend API:  http://localhost:8000
# - Admin Django: http://localhost:8000/admin
# - Frontend:     http://localhost:3000
# - InfluxDB UI:  http://localhost:8086
# - PostgreSQL:   localhost:5432
# - MQTT Broker:  localhost:1883
```

### 🔧 Opción 2: Desarrollo Local

#### Backend Django

```bash
cd backend

# Crear y activar entorno virtual
python3 -m venv venv
source venv/bin/activate        # Linux/Mac
# venv\Scripts\activate         # Windows

# Instalar dependencias
pip install -r requirements.txt

# Configurar base de datos
python manage.py migrate

# Crear usuario administrador
python manage.py createsuperuser

# Iniciar servidor
python manage.py runserver
# Acceder: http://localhost:8000
```

#### Frontend React

```bash
cd frontend

# Instalar dependencias
npm install

# Desarrollo (hot reload)
npm run dev
# Acceder: http://localhost:5173

# Build producción
npm run build

# Servir build
npm run preview
```

#### IoT (En cada BeagleBone)

```bash
# BBB1 - Gateway + Sincronización
cd iot/bbb1-gateway/sync
python3 sync_to_cloud.py

# BBB2 - Motor de IA
cd iot/bbb2-ia/arima
python3 predictor.py

# BBB3 - Sensores
cd iot/bbb3-sensores/dht22
python3 read_dht22.py
```

---

## 🧪 Testing & QA

```bash
# Backend - Unit Tests
cd backend
python manage.py test

# Backend - Coverage
pip install coverage
coverage run --source='.' manage.py test
coverage report

# Frontend - Unit & Integration Tests
cd frontend
npm test

# Frontend - E2E Tests
npm run test:e2e

# Linting
npm run lint
python -m flake8 backend/
```

---

## 📊 Monitoreo (Desarrollo)

Accede a las herramientas de monitoreo en desarrollo:

- **Prometheus:** [http://localhost:9090](http://localhost:9090)
- **Grafana:** [http://localhost:3000](http://localhost:3000)
- **InfluxDB UI:** [http://localhost:8086](http://localhost:8086)
- **Django Admin:** [http://localhost:8000/admin](http://localhost:8000/admin)

---

## 📁 Estructura del Proyecto

```
SIGCT-Rural-v2/
│
├── 📄 README.md                     # Este archivo
├── 📄 LICENSE                       # MIT Adaptada
├── 📄 CONTRIBUTING.md               # Guía de contribución
├── 📄 .env.example                  # Variables de entorno
│
├── 🐳 docker-compose.yml            # Orquestación local
├── 🐳 Dockerfile                    # Backend container
├── 🐳 render.yaml                   # Config Render
│
├── 📚 docs/                         # Documentación técnica
│   ├── ARCHITECTURE.md              # Diseño de sistemas
│   ├── DEPLOYMENT.md                # Guía de despliegue
│   ├── API.md                       # Especificación de APIs
│   ├── DATABASE.md                  # Esquema de BD
│   ├── MQTT.md                      # Comunicación IoT
│   └── TROUBLESHOOTING.md           # Resolución de problemas
│
├── 🔙 backend/                      # Django REST API
│   ├── manage.py
│   ├── requirements.txt
│   ├── core/                        # Configuración central
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   │
│   └── apps/                        # Aplicaciones Django
│       ├── usuarios/                # Autenticación & Perfiles
│       ├── sensores/                # Gestión de sensores IoT
│       ├── cursos/                  # LMS - Contenidos
│       ├── laboratorios/            # Laboratorios virtuales
│       └── alertas/                 # Sistema de alertas
│
├── 🎨 frontend/                     # React PWA
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── nginx.conf
│   │
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── hooks/
│       └── utils/
│
├── 🤖 iot/                          # Código para 3 BBB
│   ├── bbb1-gateway/                # MQTT Broker + Sync
│   ├── bbb2-ia/                     # Motor de IA
│   └── bbb3-sensores/               # Lectores de sensores
│
├── ⚙️ hardware/                     # Esquemáticos y BOM
├── 🛠️ tools/                        # Scripts de despliegue
└── 🧪 tests/                        # Suite de pruebas
```

---

## 🔄 Fases del Proyecto

### 📍 Fase 1: Validación en Render (Oct-Nov 2025)
- ✅ Setup infraestructura en Render
- ✅ APIs REST funcionales
- 🔄 Frontend inicial
- 🔄 Comunicación MQTT BBB ↔ Cloud
- 🔄 Testing con usuarios SENA

### 📍 Fase 2: Migración a Azure (Dic 2025 - Ene 2026)
- [ ] Infraestructura Azure (App Service, Database, IoT Hub)
- [ ] Optimización performance
- [ ] Escalabilidad
- [ ] CI/CD pipelines
- [ ] Monitoreo con Application Insights

### 📍 Fase 3: Expansión (Feb 2026+)
- [ ] Dashboard avanzado
- [ ] Modelos IA mejorados
- [ ] Integración más instituciones SENA
- [ ] Documentación final

---

## 🔐 Seguridad

### Autenticación & Autorización
- JWT Tokens (djangorestframework-simplejwt)
- Roles: Admin, Profesor, Estudiante
- Permisos granulares por aplicación

### Validación de Datos
- Serializers DRF con validación
- Rangos permitidos en sensores
- Rate limiting en APIs

### Comunicación
- HTTPS en producción
- MQTT over TLS (opcional)
- CORS configurado

Más detalles en [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)

---

## 📚 Documentación

| Documento | Descripción |
|-----------|------------|
| [**ARCHITECTURE.md**](./docs/ARCHITECTURE.md) | Diseño técnico completo del sistema |
| [**API.md**](./docs/API.md) | Especificación de endpoints REST |
| [**DATABASE.md**](./docs/DATABASE.md) | Esquema de bases de datos |
| [**DEPLOYMENT.md**](./docs/DEPLOYMENT.md) | Guía de despliegue (Render + Azure) |
| [**MQTT.md**](./docs/MQTT.md) | Comunicación IoT y topics |
| [**CONTRIBUTING.md**](./CONTRIBUTING.md) | Normas para contribuir al proyecto |

### 📖 Recursos Externos de Aprendizaje

**Backend & APIs:**
- [Django Official Docs](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

**Frontend:**
- [React 18 Official](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [PWA Fundamentals](https://web.dev/progressive-web-apps/)

**IoT & Embedded:**
- [MQTT Protocol](https://mqtt.org/)
- [BeagleBone Black Official](https://beagleboard.org/black)
- [Python for IoT](https://docs.python.org/3/)

**Machine Learning:**
- [Scikit-learn (ARIMA)](https://scikit-learn.org/)
- [TensorFlow Lite](https://www.tensorflow.org/lite/)
- [Time Series Analysis](https://otexts.com/fpp3/)

---

## 🔗 Enlaces Importantes

### 📦 Infraestructura & Servicios

- **GitHub Repository:** [badolgm/SigctRuralSena](https://github.com/badolgm/SigctRuralSena)
- **Render Deployment:** [render.com](https://render.com) - Validación
- **Microsoft Azure:** [azure.microsoft.com](https://azure.microsoft.com) - Producción
- **Docker Hub:** [hub.docker.com](https://hub.docker.com) - Imágenes

### 🏫 SENA Regional Magdalena Medio

- **Sitio SENA Nacional:** [www.sena.edu.co](https://www.sena.edu.co)
- **Portal SENA Virtual:** [senaintro.blackboard.com](https://senaintro.blackboard.com)
- **Regional Magdalena Medio:** [Regional Page](https://www.sena.edu.co/es-co/regional-magdalena-medio)
- **ADSO Ficha:** 3070388 - Tecnología en Análisis y Desarrollo de Software

### 📚 Documentación Oficial Tecnologías

| Tecnología | Enlace |
|------------|--------|
| **Django** | [https://www.djangoproject.com/](https://www.djangoproject.com/) |
| **React** | [https://react.dev/](https://react.dev/) |
| **PostgreSQL** | [https://www.postgresql.org/](https://www.postgresql.org/) |
| **InfluxDB** | [https://www.influxdata.com/](https://www.influxdata.com/) |
| **MQTT** | [https://mqtt.org/](https://mqtt.org/) |
| **Docker** | [https://www.docker.com/](https://www.docker.com/) |
| **BeagleBone** | [https://beagleboard.org/](https://beagleboard.org/) |

### 🛠️ Herramientas de Desarrollo

- **VS Code:** [code.visualstudio.com](https://code.visualstudio.com)
- **Git:** [git-scm.com](https://git-scm.com)
- **Postman:** [postman.com](https://www.postman.com)
- **DBeaver (SQL):** [dbeaver.io](https://dbeaver.io)
- **Mosquitto MQTT:** [mosquitto.org](https://mosquitto.org)

### 🤝 Comunidades & Foros

- [Stack Overflow - Django](https://stackoverflow.com/questions/tagged/django)
- [Stack Overflow - React](https://stackoverflow.com/questions/tagged/reactjs)
- [GitHub Discussions](https://github.com/badolgm/SigctRuralSena/discussions)
- [SENA Comunidad Virtual](https://senavirtual.edu.co/)

---

## 💻 Requisitos del Sistema

### Hardware
| Componente | Especificación |
|-----------|---------------|
| **Servidor** | 2 CPU cores, 2GB RAM (mínimo) |
| **Almacenamiento** | 10GB SSD |
| **BeagleBone Black** | 3 unidades (Gateway + IA + Sensores) |
| **Sensores** | DHT22, capacitivos, cámara USB |

### Software
```bash
# Backend
- Python 3.9+
- Django 4.2+
- PostgreSQL 14+
- Redis (opcional)

# Frontend
- Node.js 18+
- npm 9+

# IoT
- Python 3.9+
- Debian Bullseye (BBB)

# General
- Docker & Docker Compose
- Git 2.35+
```

---

## 📋 Variables de Entorno (.env)

```env
# Django Configuration
DEBUG=False
SECRET_KEY=tu-clave-super-secreta-cambiar-en-produccion
ALLOWED_HOSTS=localhost,127.0.0.1,tu-dominio.com
ENVIRONMENT=production

# Database
DATABASE_URL=postgresql://usuario:password@localhost:5432/sigct_rural
DB_NAME=sigct_rural
DB_USER=sigct
DB_PASSWORD=changeme
DB_HOST=localhost
DB_PORT=5432

# InfluxDB
INFLUXDB_URL=http://localhost:8086
INFLUXDB_BUCKET=sigct_rural
INFLUXDB_ORG=sigct
INFLUXDB_TOKEN=tu-token-influx

# JWT Authentication
JWT_SECRET=tu-secret-jwt-super-seguro
JWT_ALGORITHM=HS256
JWT_EXPIRATION=900

# MQTT Configuration
MQTT_BROKER=localhost
MQTT_PORT=1883
MQTT_USERNAME=mqtt_user
MQTT_PASSWORD=mqtt_password

# Email (para notificaciones)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=tu-email@gmail.com
EMAIL_HOST_PASSWORD=tu-app-password

# Render/Azure
RENDER_URL=https://tu-app.onrender.com
AZURE_TENANT_ID=tu-tenant-id
AZURE_CLIENT_ID=tu-client-id
AZURE_CLIENT_SECRET=tu-client-secret

# Frontend
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=SIGCT-Rural
```

---

## 🤝 Contribuir

¡Contribuciones son bienvenidas! Este es un proyecto educativo SENA y cualquier mejora es valorada.

### Pasos para Contribuir

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

### Normas de Contribución

Revisa [**CONTRIBUTING.md**](./CONTRIBUTING.md) para:
- Convenciones de código
- Estilo de commits
- Proceso de review
- Código de conducta

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT Adaptada**. Ver [`LICENSE`](./LICENSE) para detalles completos.

### Resumen MIT Adaptada
- ✅ Uso comercial
- ✅ Modificación
- ✅ Distribución
- ✅ Uso privado
- ⚠️ Mantener aviso de licencia
- ❌ Sin responsabilidad

---

## 👨‍💻 Autor & Contacto

**Bernardo Adolfo Gómez Montoya**

<div align="center">

| Canal | Información |
|-------|------------|
| 📧 **Email** | [bgomezm9@soy.sena.edu.co](mailto:bgomezm9@soy.sena.edu.co) |
| 🐙 **GitHub** | [@badolgm](https://github.com/badolgm) |
| 🎓 **SENA** | Ficha: 3070388 • Regional Magdalena Medio |
| 📍 **Ubicación** | Magdalena Medio, Colombia 🇨🇴 |

</div>

---

## 🙏 Agradecimientos

- **SENA Nacional** por la formación y recursos educativos
- **Regional Magdalena Medio** por el apoyo institucional
- **Comunidad Open-Source** por herramientas y librerías
- **Docentes ADSO** por la guía académica
- **Compañeros de programa** por feedback y apoyo

---

## 📊 Estadísticas del Proyecto

![GitHub repo size](https://img.shields.io/github/repo-size/badolgm/SigctRuralSena?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/badolgm/SigctRuralSena?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/badolgm/SigctRuralSena?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/badolgm/SigctRuralSena?style=flat-square)

---

## 📈 Roadmap Futuro

- [ ] Dashboard avanzado con analytics
- [ ] App móvil nativa (React Native)
- [ ] Integración con más instituciones SENA
- [ ] Modelos IA más complejos (Deep Learning)
- [ ] Marketplace de laboratorios virtuales
- [ ] Certificaciones en línea integradas

---

## ⚡ Quick Links

<div align="center">

[🏠 Home](https://github.com/badolgm/SigctRuralSena) • 
[📖 Docs](./docs/) • 
[🐛 Issues](https://github.com/badolgm/SigctRuralSena/issues) • 
[💬 Discussions](https://github.com/badolgm/SigctRuralSena/discussions) • 
[📝 Licencia](./LICENSE)

</div>

---

<div align="center">

**Hecho con ❤️ para zonas rurales de Colombia 🌾🇨🇴**

Versión 2.0 | Octubre 2025 | SENA Regional Magdalena Medio

---

![Python](https://img.shields.io/badge/Python-3776ab?style=flat-square&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![IoT](https://img.shields.io/badge/IoT-BeagleBone-black?style=flat-square)

</div>