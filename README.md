# SIGC&T-Rural v2.0

**Sistema Inteligente de Gestión Científica y Tecnológica para Zonas Rurales**

Plataforma educativa e IoT open-source basada en 3 BeagleBone Black para monitoreo agrícola inteligente.

## 📋 Información General

- **Autor**: Bernardo Adolfo Gómez Montoya
- **Ficha SENA**: 3070388
- **Programa**: Tecnología en Análisis y Desarrollo de Software
- **Regional**: Magdalena Medio
- **Versión**: 2.0 (Octubre 2025)
- **Licencia**: MIT Adaptada
- **Estado**: ✅ Desarrollo Activo

## 🎯 Características Principales

- 3 BeagleBone Black RevC (Gateway + IA + Sensores)
- Modelos IA: ARIMA (predicción) + CNN (detección visual)
- Sensores: DHT22, capacitivo, cámara USB
- Actuadores: Sonoff WiFi inteligentes
- Backend: Django REST API + PostgreSQL
- Frontend: React PWA responsive
- LMS integrado con contenidos STEM

## 🏗️ Arquitectura

```
Edge Local (15W)           Cloud Oracle (∞ Storage)
├─ BBB1: Gateway          ├─ PostgreSQL (BD Central)
├─ BBB2: IA               ├─ React LMS PWA
└─ BBB3: Sensores         └─ Django API REST
```

## 📂 Estructura del Proyecto

```
SIGCT-Rural-v2/
├── docs/                 # Documentación técnica
├── backend/              # Django REST API
├── frontend/             # React PWA
├── iot/                  # Código 3 BBB
├── hardware/             # Esquemáticos, BOM
├── tools/                # Scripts despliegue
├── tests/                # Suite pruebas
├── docker-compose.yml    # Orquestación
└── README.md
```

## 🚀 Quick Start

```bash
# 1. Clonar repositorio
git clone https://github.com/badolgm/SIGCT-Rural-ADSO.git
cd SIGCT-Rural-v2

# 2. Configurar entorno
cp .env.example .env
# Editar .env con credenciales reales

# 3. Iniciar con Docker (RECOMENDADO)
docker-compose up -d

# 4. Verificar servicios
docker-compose ps

# Acceder:
# - Backend API: http://localhost:8000
# - Frontend: http://localhost:3000
# - PostgreSQL: localhost:5432
# - InfluxDB: http://localhost:8086
```

## 🛠️ Desarrollo Local

### Backend (Django)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

## 📚 Documentación

- [Arquitectura Completa](docs/arquitectura/README.md)
- [API REST Endpoints](docs/api/README.md)
- [Manual IoT BBB](docs/iot/README.md)
- [Guía SENA](docs/guia-sena/README.md)

## 🧪 Testing

```bash
# Backend
cd backend
python manage.py test

# Frontend
cd frontend
npm test
```

## 📊 Monitoreo

- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3000
- **InfluxDB UI**: http://localhost:8086

## 🤝 Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 Licencia

MIT Adaptada - Ver [LICENSE](LICENSE)

## 📞 Contacto

**Bernardo Adolfo Gómez Montoya**  
📧 bgomezm9@soy.sena.edu.co  
🎓 SENA Regional Magdalena Medio  
📋 Ficha: 3070388

---

**Hecho con ❤️ para zonas rurales de Colombia** 🇨🇴
