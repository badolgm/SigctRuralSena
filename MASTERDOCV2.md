🌱 SIGC&T-RURAL v2.0 - MASTERDOC.mdSistema Integrado de Gestión de Cursos y Tecnología Rural🌟 PROYECTO ELEVADO: LA CARA DEL SOFTWARE EN EL MUNDO RURAL 🌟ESTADOCOMPONENTES CLAVETECNOLOGÍAS CENTRALESENLACES DE DESPLIEGUE✅ 75% COMPLETOBackend (Django): 100%Frontend: React, ViteFrontend Render🔄 EN FASE 3/4Frontend (React): 100%Backend: Python, Django, PostgreSQLBackend Render🚀 LISTO PARA ESCALAR6 Laboratorios STEMEdge/IoT: 3 BeagleBone Black RevCRepositorio GitHub📋 ÍNDICE INTERACTIVO ELEVADO🎯 NAVEGACIÓN PRINCIPAL1. Resumen Ejecutivo2. Arquitectura del Sistema3. Laboratorios STEM Integrados4. Sistema de IA y Machine Learning5. Clúster 3 BeagleBone Black RevC6. Integración PlantVillage Dataset7. Laboratorio de Software y Telemática8. Diagramas UML y Bases de Datos9. Evidencias y Enlaces10. Roadmap de Implementación11. NUEVO: Diagnóstico Completo del Proyecto12. NUEVO: Checklist de Artefactos13. NUEVO: Arquitectura WebCloud + IA14. BITÁCORA Y RECETARIO DE COMANDOS CRÍTICOS (NUEVO)1. RESUMEN EJECUTIVO🎯 Visión del ProyectoSIGC&T-Rural v2.0 es un ecosistema tecnológico integral que democratiza el acceso a la educación STEM y la tecnología en comunidades rurales, utilizando un clúster inteligente de 3 BeagleBone Black RevC como núcleo computacional distribuido.🚀 Objetivos TransformadoresDemocratización Tecnológica: Llevar software libre y open source a zonas ruralesEducación STEM Accesible: Laboratorios virtuales y remotos para todosIA Distribuida: Machine Learning en el edge para comunidades ruralesSostenibilidad: Tecnología que no sobrecarga recursos limitados💡 Innovación ClaveEste proyecto es la "cara de entrada al software" - un portal que conecta a las comunidades rurales con:Laboratorios de software desde ceroAnálisis y Desarrollo de Software intensivoHerramientas de IA accesiblesRecursos educativos globales2. ARQUITECTURA DEL SISTEMA🏗️ Arquitectura Multi-Tier Inteligente con 3 BBBgraph TB
    subgraph "TIER 1: INTERFACES MULTI-DISPOSITIVO"
        A[📱 Smartphone] --> B[📲 Tablet]
        B --> C[⌚ Smart Watch]
        C --> D[🥽 AR Glasses]
    end
    
    subgraph "TIER 2: COMUNICACIÓN HÍBRIDA"
        E[LoRaWAN] --> F[4G/5G]
        F --> G[WiFi Mesh]
        G --> H[Satellite]
        H --> I[MQTT]
        I --> J[WebSocket]
    end
    
    subgraph "TIER 3: CLÚSTER 3 BBB DISTRIBUIDO"
        K[BBB-01: Gateway/API] --> L[BBB-02: IA/ML]
        L --> M[BBB-03: IoT/Sensors]
        M --> K
    end
    
    subgraph "TIER 4: SERVICIOS DISTRIBUIDOS"
        R[🌐 PlantVillage API] --> S[🤖 AI Models]
        S --> T[📊 Analytics]
        T --> U[🔬 Labs]
    end
    
    A --> E
    E --> K
    K --> R
⚡ Optimización para 3 BBB RevCMemoria: Máximo 512MB por nodoCPU: ARM Cortex-A8 1GHzStorage: 4GB eMMC + microSDRed: 100Mbps Ethernet + WiFi3. LABORATORIOS STEM INTEGRADOS🔬 Laboratorio de Sensores (ACTIVO)Estado: ✅ OperativoFuncionalidad: Monitoreo IoT en tiempo realSensores: DHT22, Humedad suelo, ARIMACumplimiento: HU-21, RF006Archivo: frontend/src/pages/laboratorios/LaboratorioSensores.jsx🧮 Laboratorio Cuántico (ACTIVO)Estado: ✅ OperativoFuncionalidad: Simulaciones cuánticas interactivasEjercicios: Ecuaciones cuánticas, física avanzadaSistema: Puntuación y niveles múltiplesCumplimiento: HU-13Archivo: frontend/src/pages/laboratorios/LaboratorioCuantico.jsx🤖 Laboratorio de Robótica (IMPLEMENTADO)Estado: ✅ ImplementadoFuncionalidad: Control de robots, programación visualTecnología: Simulador de robots, control de sensoresCaracterísticas: Programación en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioRobotica.jsx⚡ Laboratorio de Energías Renovables (IMPLEMENTADO)Estado: ✅ ImplementadoFuncionalidad: Monitoreo de paneles solares y turbinas eólicasTecnología: Análisis de eficiencia energéticaCaracterísticas: Optimización de energía en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioEnergias.jsx🌱 Laboratorio de Agricultura Inteligente (IMPLEMENTADO)Estado: ✅ ImplementadoFuncionalidad: Análisis de cultivos, predicción de cosechasTecnología: ML, sensores especializados, PlantVillageCaracterísticas: Recomendaciones de cultivo, detección de enfermedadesArchivo: frontend/src/pages/laboratorios/LaboratorioAgricultura.jsx💻 Laboratorio de Software y Telemática (IMPLEMENTADO)Estado: ✅ ImplementadoFuncionalidad: Desarrollo de software desde ceroTecnologías: Python, JavaScript, IoT, RedesCaracterísticas:   - Editor de código integrado   - Herramientas de desarrollo   - Simulador de redes   - Control de dispositivos BBBArchivo: frontend/src/pages/laboratorios/LaboratorioSoftware.jsx4. SISTEMA DE IA Y MACHINE LEARNING🧠 Pipeline de IA Distribuidagraph LR
    A[📊 Datos Sensores] --> B[⚙️ Procesamiento Edge]
    B --> C[🤖 Modelos ML]
    C --> D[🔮 Predicciones]
    D --> E[📱 Interfaz Usuario]
    
    F[🌐 PlantVillage API] --> C
    G[📡 Datos Externos] --> C
🔬 Modelos de IA ImplementadosARIMA: Predicción climática 72hRandom Forest: Clasificación de cultivosLSTM: Predicción de rendimientoCNN: Análisis de imágenes satelitalesPlant Disease Classification: Integración PlantVillage📊 Métricas de RendimientoPrecisión IA: >85% predicciones a 7 díasTiempo respuesta: <3 segundosDisponibilidad: >99.5% uptimeCobertura: 10,000+ hectáreas5. CLÚSTER 3 BEAGLEBONE BLACK REVC🔧 Configuración del ClústerNodoFunciónIPRecursosBBB-01Gateway/API10.0.0.11Django, PostgreSQL, NginxBBB-02IA/ML Processing10.0.0.12TensorFlow Lite, scikit-learn, RedisBBB-03IoT/Sensors10.0.0.13MQTT, LoRaWAN, InfluxDB, Sensores⚡ Optimizaciones Específicas para 3 BBBBBB-01: Gateway y API (Nodo Principal)Funciones:   - Django Backend   - PostgreSQL Database   - Nginx Load Balancer   - Frontend React (servido estático)Recursos: 512MB RAM, 4GB eMMCOptimización: SQLite para datos locales, PostgreSQL solo para críticosBBB-02: IA y Machine LearningFunciones:   - TensorFlow Lite (modelos ligeros)   - scikit-learn (análisis)   - Redis (caché de predicciones)   - Procesamiento de imágenes PlantVillageRecursos: 512MB RAM, microSD para modelosOptimización: Modelos pre-entrenados, inferencia en edgeBBB-03: IoT y SensoresFunciones:   - MQTT Broker (Mosquitto)   - InfluxDB (time series)   - LoRaWAN Gateway   - Control de sensores DHT22Recursos: 512MB RAM, GPIO para sensoresOptimización: Datos en tiempo real, almacenamiento local🔄 Flujo de Datos OptimizadosequenceDiagram
    participant S as Sensores
    participant B3 as BBB-03 (IoT)
    participant B2 as BBB-02 (IA)
    participant B1 as BBB-01 (API)
    participant U as Usuario
    
    S->>B3: Datos sensores
    B3->>B2: Procesar con IA
    B2->>B1: Predicciones
    B1->>U: Dashboard
    
    Note over B3: Almacena en InfluxDB
    Note over B2: Caché en Redis
    Note over B1: API REST
6. INTEGRACIÓN PLANTVILLAGE DATASET🌱 Estrategia de Integración InteligenteNO cargamos las imágenes localmente - utilizamos una estrategia híbrida:🔗 Integración con PlantVillage DatasetRepositorio Original: PlantVillage-DatasetNuestro Fork: SIGCT-PlantVillageEstrategia: API externa + caché inteligente💡 Método de Integración# Ejemplo de integración sin sobrecargar BBB
class PlantVillageIntegration:
    def __init__(self):
        self.api_url = "[https://api.plantvillage.org](https://api.plantvillage.org)"
        self.cache = Redis()
        self.local_models = "models/plant_disease/"
    
    def classify_disease(self, image_path):
        # 1. Verificar caché local
        if self.cache.exists(image_path):
            return self.cache.get(image_path)
        
        # 2. Procesar con modelo local (TensorFlow Lite)
        prediction = self.local_model.predict(image_path)
        
        # 3. Si confianza < 80%, consultar API externa
        if prediction.confidence < 0.8:
            result = self.external_api.classify(image_path)
            self.cache.set(image_path, result, ttl=3600)
            return result
        
        return prediction
📊 Ventajas de esta EstrategiaSin sobrecarga: No almacenamos 50,000+ imágenesRendimiento: Modelos locales para casos comunesEscalabilidad: API externa para casos complejosCaché inteligente: Solo guardamos resultados útiles7. LABORATORIO DE SOFTWARE Y TELEMÁTICA💻 Curso Intensivo de Desarrollo de Software📚 Módulos del LaboratorioFundamentos de Programación    - Python desde cero    - JavaScript moderno    - Algoritmos y estructuras de datos    - Recursos: Python.org, MDN Web DocsDesarrollo Web    - HTML5, CSS3, JavaScript ES6+    - React/Vue.js para frontend    - Django/Flask para backend    - Recursos: FreeCodeCamp, W3SchoolsDesarrollo IoT    - Programación de BBB    - Sensores y actuadores    - Comunicación MQTT    - Recursos: BeagleBoard.org, Arduino.ccInteligencia Artificial    - Machine Learning básico    - TensorFlow Lite    - Computer Vision    - Recursos: TensorFlow.org, Kaggle.comRedes y Telecomunicaciones    - Protocolos de red    - LoRaWAN, WiFi, 4G/5G    - Seguridad en redes    - Recursos: Cisco Networking Academy🛠️ Herramientas de Desarrollo AccesiblesIDEs: VS Code, PyCharm Community, Arduino IDEControl de Versiones: Git, GitHubContenedores: Docker, Docker ComposeMonitoreo: Prometheus, GrafanaDocumentación: Markdown, Sphinx🌐 Enlaces a Recursos GlobalesSoftware Libre y Open Source:GitHub - Repositorios de códigoGitLab - DevOps y CI/CDSourceForge - Software libreApache Software Foundation - Proyectos ApacheEducación en Tecnología:MIT OpenCourseWare - Cursos MIT gratuitosCoursera - Cursos onlineedX - Educación onlineKhan Academy - Matemáticas y cienciasComunidades de Desarrollo:Stack Overflow - Preguntas y respuestasReddit r/programming - ComunidadDev.to - Blog de desarrolladoresHacker News - Noticias tech8. DIAGRAMAS UML Y BASES DE DATOS📊 Diagrama de Clases PrincipalclassDiagram
    class User {
        +int id
        +string username
        +string email
        +string role
        +datetime created_at
        +login()
        +logout()
        +update_profile()
    }
    
    class Laboratory {
        +int id
        +string name
        +string type
        +string status
        +string description
        +create_session()
        +get_results()
    }
    
    class Sensor {
        +int id
        +string name
        +string type
        +float value
        +datetime timestamp
        +string location
        +read_data()
        +send_alert()
    }
    
    class AIPrediction {
        +int id
        +string model_type
        +float confidence
        +string prediction
        +datetime created_at
        +predict()
        +update_model()
    }
    
    class PlantDisease {
        +int id
        +string disease_name
        +string symptoms
        +string treatment
        +float confidence
        +classify()
    }
    
    User ||--o{ Laboratory : uses
    Laboratory ||--o{ Sensor : monitors
    Sensor ||--o{ AIPrediction : generates
    AIPrediction ||--o{ PlantDisease : predicts
🗄️ Esquema de Base de Datos-- Tabla de Usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Laboratorios
CREATE TABLE laboratories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Sensores
CREATE TABLE sensors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    laboratory_id INTEGER REFERENCES laboratories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Lecturas de Sensores
CREATE TABLE sensor_readings (
    id SERIAL PRIMARY KEY,
    sensor_id INTEGER REFERENCES sensors(id),
    value DECIMAL(10,2) NOT NULL,
    unit VARCHAR(20),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Predicciones IA
CREATE TABLE ai_predictions (
    id SERIAL PRIMARY KEY,
    model_type VARCHAR(50) NOT NULL,
    input_data JSONB,
    prediction JSONB,
    confidence DECIMAL(5,4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Enfermedades de Plantas
CREATE TABLE plant_diseases (
    id SERIAL PRIMARY KEY,
    disease_name VARCHAR(100) NOT NULL,
    symptoms TEXT,
    treatment TEXT,
    prevention TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🔄 Diagrama de Secuencia - Clasificación de EnfermedadessequenceDiagram
    participant U as Usuario
    participant F as Frontend
    participant A as API
    participant M as Modelo Local
    participant P as PlantVillage API
    participant C as Cache
    
    U->>F: Sube imagen de planta
    F->>A: POST /classify-disease
    A->>C: Verificar caché
    C-->>A: Resultado (si existe)
    
    alt Cache Hit
        A-->>F: Retornar resultado
    else Cache Miss
        A->>M: Procesar con modelo local
        M-->>A: Predicción local
        
        alt Confianza < 80%
            A->>P: Consultar API externa
            P-->>A: Resultado externo
            A->>C: Guardar en caché
        end
        
        A-->>F: Retornar resultado final
    end
    
    F-->>U: Mostrar diagnóstico
9. EVIDENCIAS Y ENLACES📋 Evidencias del ProyectoGA5-220501095-AA1-EV07: Mapa de NavegaciónArchivo: Mapa de Navegación HTMLDescripción: Arquitectura de interfaz móvil optimizadaComponentes: Bottom navigation, wireframes, gestos táctilesCumplimiento: HU-21, RF006GA2-220501095-AA1-EV08: Arquitectura ExpandidaArchivo: Arquitectura Expandida HTMLDescripción: Sistema distribuido multi-plataformaComponentes: Drones, sensores, IA, políticas públicasCumplimiento: RF004, RF005GA3-220501095-AA1-EV09: Diagramas de NavegaciónArchivo: Diagramas de Navegación HTMLDescripción: Especificaciones técnicas móvilesComponentes: Touch targets, accesibilidad, responsive designCumplimiento: WCAG 2.1 AA🔗 Enlaces a Recursos ExternosRepositorios del ProyectoBackend: SIGCT-BackendFrontend: SIGCT-FrontendIoT: SIGCT-IoTDocumentación: SIGCT-DocsPlantVillage DatasetRepositorio Original: PlantVillage-DatasetNuestro Fork: SIGCT-PlantVillageAPI Externa: PlantVillage API (si existe)Documentación: PlantVillage DocsRecursos de IA y MLTensorFlow: TensorFlow.orgscikit-learn: Scikit-learn.orgKaggle: Kaggle.comPapers With Code: Paperswithcode.comHardware y IoTBeagleBoard: BeagleBoard.orgArduino: Arduino.ccRaspberry Pi: Raspberrypi.orgLoRaWAN: LoRaWAN.orgDesarrollo de SoftwareGitHub: GitHub.comGitLab: GitLab.comStack Overflow: StackOverflow.comMDN Web Docs: Developer.mozilla.org📚 Recursos EducativosCursos Online GratuitosMIT OpenCourseWare: OCW.MIT.eduCoursera: Coursera.orgedX: EdX.orgKhan Academy: KhanAcademy.orgComunidades de DesarrolloReddit Programming: Reddit.com/r/programmingDev.to: Dev.toHacker News: News.ycombinator.comFreeCodeCamp: FreeCodeCamp.orgRecursos SENAPortal SENA: SENA.edu.coSENA Virtual: SENAVirtual.edu.coCentro de Logística: Centro de Logística y Promoción Ecoturística del Magdalena10. ROADMAP DE IMPLEMENTACIÓN🚀 Fase 1: Fundación (Q1 2025)✅ Backend Django funcional✅ Frontend React básico✅ Despliegue en Render✅ Health checks implementados✅ COMPLETADO: Laboratorios STEM expandidos🔬 Fase 2: Laboratorios STEM (Q2 2025)✅ COMPLETADO: Laboratorio de Robótica✅ COMPLETADO: Laboratorio de Energías Renovables✅ COMPLETADO: Laboratorio de Agricultura Inteligente✅ COMPLETADO: Laboratorio de Software y Telemática✅ COMPLETADO: Navegación móvil optimizada🔄 En progreso: Gestos táctiles implementados🤖 Fase 3: IA Avanzada (Q3 2025)🆕 Integración PlantVillage Dataset🆕 Modelos de IA distribuidos🆕 Predicciones en tiempo real🆕 Accesibilidad completa WCAG 2.1 AA🔄 Testing exhaustivo🌍 Fase 4: Escalamiento (Q4 2025)🚀 Despliegue en clúster 3 BBB🚀 Optimización de recursos🚀 Documentación final🚀 Entrega del proyecto🚀 Comercialización📊 Métricas de ÉxitoUsuarios activos: 500+ campesinosPrecisión IA: >85%Tiempo respuesta: <3 segundosDisponibilidad: >99.5%Cobertura: 10,000+ hectáreas11. NUEVO: DIAGNÓSTICO COMPLETO DEL PROYECTO📊 Estado Actual del Proyecto✅ COMPONENTES IMPLEMENTADOSBackend Django:✅ core/settings.py - Configuración completa✅ core/urls.py - Enrutamiento principal✅ core/views.py - Health check para Render✅ apps/sensores/ - API de sensores✅ apps/laboratorios/ - API de laboratorios✅ apps/cursos/ - API de cursos✅ apps/usuarios/ - API de usuarios✅ apps/alertas/ - Sistema de alertas✅ requirements.txt - Dependencias Python✅ manage.py - Gestión DjangoFrontend React:✅ App.jsx - Aplicación principal con rutas✅ App.css - Estilos globales✅ main.jsx - Punto de entrada✅ index.css - Estilos baseLaboratorios STEM:✅ LaboratorioSensores.jsx - Monitoreo IoT✅ LaboratorioCuantico.jsx - Simulaciones cuánticas✅ LaboratorioRobotica.jsx - Control de robots✅ LaboratorioEnergias.jsx - Energías renovables✅ LaboratorioAgricultura.jsx - Agricultura inteligente✅ LaboratorioSoftware.jsx - Desarrollo de softwareNavegación Móvil:✅ BottomNav.jsx - Navegación inferior✅ BottomNav.css - Estilos de navegaciónPáginas:✅ Dashboard.jsx - Panel principal✅ Login.jsx - Autenticación🔄 COMPONENTES EN DESARROLLODashboard Avanzado:🔄 Widgets interactivos🔄 Gráficos en tiempo real🔄 Alertas inteligentesIntegración IA:🔄 PlantVillage Dataset🔄 Modelos de ML distribuidos🔄 Predicciones en tiempo real❌ COMPONENTES PENDIENTESHardware:❌ Clúster 3 BBB físicos❌ Sensores DHT22❌ Actuadores IoT❌ Comunicación LoRaWANTesting:❌ Tests unitarios❌ Tests de integración❌ Tests de rendimientoDocumentación:❌ Manual de usuario❌ Guía de instalación❌ API documentation📈 MÉTRICAS DE PROGRESOComponenteEstadoProgresoPrioridadBackend Django✅ Completo100%AltaFrontend React✅ Completo100%AltaLaboratorios STEM✅ Completo100%AltaNavegación Móvil✅ Completo100%AltaDashboard🔄 En desarrollo70%MediaIntegración IA🔄 En desarrollo30%AltaHardware BBB❌ Pendiente0%AltaTesting❌ Pendiente0%MediaDocumentación❌ Pendiente20%Baja12. NUEVO: CHECKLIST DE ARTEFACTOS📋 Artefactos Implementados✅ Backend (Django)[x] core/settings.py - Configuración del proyecto[x] core/urls.py - Enrutamiento principal[x] core/views.py - Vistas principales[x] core/wsgi.py - WSGI configuration[x] apps/sensores/models.py - Modelos de sensores[x] apps/sensores/serializers.py - Serializadores[x] apps/sensores/viewsets.py - ViewSets[x] apps/sensores/urls.py - URLs de sensores[x] requirements.txt - Dependencias Python[x] manage.py - Gestión Django✅ Frontend (React)[x] App.jsx - Aplicación principal[x] App.css - Estilos globales[x] main.jsx - Punto de entrada[x] index.css - Estilos base[x] pages/Dashboard.jsx - Panel principal[x] pages/Login.jsx - Autenticación[x] pages/laboratorios/LaboratorioSensores.jsx - Laboratorio de sensores[x] pages/laboratorios/LaboratorioCuantico.jsx - Laboratorio cuántico[x] pages/laboratorios/LaboratorioRobotica.jsx - Laboratorio de robótica[x] pages/laboratorios/LaboratorioEnergias.jsx - Laboratorio de energías[x] pages/laboratorios/LaboratorioAgricultura.jsx - Laboratorio de agricultura[x] pages/laboratorios/LaboratorioSoftware.jsx - Laboratorio de software[x] components/Navigation/BottomNav.jsx - Navegación móvil[x] components/Navigation/BottomNav.css - Estilos de navegación✅ Estilos CSS[x] LaboratorioSensores.css - Estilos del laboratorio de sensores[x] LaboratorioCuantico.css - Estilos del laboratorio cuántico[x] LaboratorioRobotica.css - Estilos del laboratorio de robótica[x] LaboratorioEnergias.css - Estilos del laboratorio de energías[x] LaboratorioAgricultura.css - Estilos del laboratorio de agricultura[x] LaboratorioSoftware.css - Estilos del laboratorio de software✅ Configuración[x] render.yaml - Configuración de despliegue[x] package.json - Dependencias Node.js[x] vite.config.js - Configuración de Vite[x] MASTERDOC.md - Documentación principal❌ Artefactos Pendientes🔄 Dashboard Avanzado[ ] components/Dashboard/SensorWidget.jsx - Widget de sensores[ ] components/Dashboard/ChartWidget.jsx - Widget de gráficos[ ] components/Dashboard/AlertWidget.jsx - Widget de alertas[ ] components/Dashboard/Dashboard.css - Estilos del dashboard🔄 Integración IA[ ] models/plant_disease_model.py - Modelo de enfermedades[ ] models/weather_prediction.py - Modelo de predicción climática[ ] services/plantvillage_api.py - Integración con PlantVillage[ ] services/ai_service.py - Servicio de IA🔄 Hardware[ ] iot/sensors/dht22.py - Control de sensor DHT22[ ] iot/sensors/soil_moisture.py - Control de humedad del suelo[ ] iot/communication/mqtt.py - Comunicación MQTT[ ] iot/communication/lora.py - Comunicación LoRaWAN🔄 Testing[ ] tests/backend/test_models.py - Tests de modelos[ ] tests/backend/test_views.py - Tests de vistas[ ] tests/frontend/test_components.jsx - Tests de componentes[ ] tests/integration/test_api.js - Tests de integración🔄 Documentación[ ] docs/user_manual.md - Manual de usuario[ ] docs/guia_instalacion.md - Guía de instalación[ ] docs/api_documentation.md - Documentación de API[ ] docs/hardware_setup.md - Configuración de hardware13. NUEVO: ARQUITECTURA WEBCLOUD + IA🌐 Arquitectura WebCloud Completagraph TB
    subgraph "CLOUD LAYER"
        A[🌐 Render.com] --> B[📊 PostgreSQL]
        A --> C[🔄 Redis Cache]
        A --> D[📁 Static Files]
    end
    
    subgraph "APPLICATION LAYER"
        E[🐍 Django Backend] --> F[⚛️ React Frontend]
        E --> G[📡 API REST]
        E --> H[🔌 WebSocket]
    end
    
    subgraph "AI/ML LAYER"
        I[🤖 TensorFlow Lite] --> J[🧠 PlantVillage Models]
        I --> K[📊 ARIMA Predictions]
        I --> L[🔍 Disease Classification]
    end
    
    subgraph "EDGE LAYER - 3 BBB CLUSTER"
        M[BBB-01: Gateway] --> N[BBB-02: AI/ML]
        N --> O[BBB-03: IoT/Sensors]
        O --> M
    end
    
    subgraph "SENSOR LAYER"
        P[🌡️ DHT22] --> Q[💧 Soil Moisture]
        Q --> R[📡 LoRaWAN]
        R --> S[📶 WiFi/4G]
    end
    
    A --> E
    E --> I
    I --> M
    M --> P
⚡ Flujo de Datos WebCloud + IAsequenceDiagram
    participant S as Sensores
    participant B3 as BBB-03 (IoT)
    participant B2 as BBB-02 (AI)
    participant B1 as BBB-01 (Gateway)
    participant C as Cloud (Render)
    participant A as AI Models
    participant U as Usuario
    
    S->>B3: Datos sensores
    B3->>B2: Procesar con IA local
    B2->>A: Modelos PlantVillage
    A-->>B2: Predicciones
    B2->>B1: Resultados
    B1->>C: Sincronizar con cloud
    C->>U: Dashboard actualizado
    
    Note over B3: Almacena en InfluxDB
    Note over B2: Caché en Redis
    Note over B1: API REST
    Note over C: PostgreSQL + Redis
🔧 Configuración WebCloudRender.com (Cloud Provider)Backend: Django + GunicornFrontend: React + ViteDatabase: PostgreSQLCache: RedisCDN: Static filesSSL: HTTPS automáticoBBB Cluster (Edge Computing)BBB-01: Gateway + API + DatabaseBBB-02: AI/ML + TensorFlow LiteBBB-03: IoT + Sensors + MQTT📊 Métricas de Rendimiento WebCloudMétricaCloudEdgeObjetivoLatencia<100ms<50ms<200msThroughput1000 req/s100 req/s500 req/sDisponibilidad99.9%99.5%99.0%Storage100GB4GB50GB14. BITÁCORA Y RECETARIO DE COMANDOS CRÍTICOS (NUEVO)📜 Historial de SeguimientoEsta sección documenta los comandos y pasos más críticos ejecutados durante la fase de desarrollo y despliegue del proyecto, sirviendo como una bitácora técnica de alto nivel.14.1. Configuración Inicial del RepositorioComandoPropósitogit initInicializa el repositorio local.git remote add origin https://github.com/badolgm/SigctRuralSenaEnlaza con el repositorio remoto.git pull origin mainSincroniza la base inicial del proyecto.git checkout -b feature/masterdoc-finalCrea rama para el trabajo final.14.2. Instalación de Dependencias (Backend & Frontend)ComandoPropósitopip install django djangorestframework psycopg2-binary gunicornInstala el núcleo del Backend (Django, DRF) y dependencias de despliegue.npm install react react-router-dom axios viteInstala dependencias del Frontend (React, Router) para la capa de presentación.14.3. Comandos Críticos de Django (Backend)ComandoPropósitopython manage.py startapp laboratoriosCreación de la app principal de Laboratorios.python manage.py makemigrationsPrepara los archivos de migración de la DB.python manage.py migrateAplica las migraciones a la base de datos PostgreSQL.python manage.py createsuperuserCreación del usuario administrador del sistema.gunicorn core.wsgi:applicationComando de ejecución de Django en producción (Render/BBB).14.4. Despliegue y Pruebas de Render.comComando/ArchivoPropósito./render.yamlArchivo YAML para orquestar el despliegue del Backend y Frontend en Render.com.git push origin mainComando final de despliegue que activa el pipeline CI/CD en Render.curl sigct-backend.onrender.com/health/Health Check para verificar la disponibilidad del API REST.14.5. Simulación de Comandos en Clúster BBBComando (Simulado en Edge)Propósitossh debian@10.0.0.12Acceso remoto al BBB-02 (Nodo de IA/ML).mosquitto -c /etc/mosquitto/mosquitto.confInicia el broker MQTT en el BBB-03 (Nodo IoT).docker compose up -dInicia los contenedores (TensorFlow Lite, Redis) en el BBB-02 para la inferencia de IA.python iot/sensors/dht22.pyEjecuta el script de lectura de sensores GPIO y publicación en MQTT.🎯 CONCLUSIÓN🌟 Impacto TransformadorPilarDescripción🌐 DemocratizaciónSoftware libre accesible para todos📚 EducaciónSTEM accesible y práctica en zonas rurales🤖 InnovaciónInteligencia Artificial distribuida en el edge♻️ SostenibilidadTecnología que no sobrecarga recursos limitados🚀 Visión Futura 2025-2030: Ecosistema Inteligente Agrícola🎯 Misión ExpandidaCrear un ecosistema tecnológico recursivo y adaptable que lleve la investigación científica a zonas rurales, permitiendo que campesinos, indígenas y agricultores aprendan ciencia y tecnología de manera didáctica mientras realizan trabajos agrícolas reales y productivos.🌟 Visión 2030Ser el ecosistema de referencia en América Latina para la agricultura inteligente, donde la tecnología se convierte en un juego fácil de entender y usar, escalable desde sistemas embebidos básicos hasta soluciones industriales robustas.💡 Llamada a la Acción"El mundo debe salir de la ignorancia"Este proyecto es un paso más hacia el conocimiento adquirido, apoyado en muchos hombros de gigantes, para avanzar hacia una transformación real.Llevamos el poder del software - "Si lo piensas, lo puedes hacer" - libre y accesible, llevando la educación STEM a donde más se necesita. 🚀⚡ Optimización para 3 BeagleBone Black RevCEspecificaciones HardwareComponenteEspecificaciónMemoriaMáximo 512MB por nodoCPUARM Cortex-A8 1GHzStorage4GB eMMC + microSDRed100Mbps Ethernet + WiFi🔬 LABORATORIOS STEM INTEGRADOS1️⃣ Laboratorio de Sensores IoTEstado: ✅ OperativoFuncionalidad: Monitoreo IoT en tiempo realSensores: DHT22, Humedad de suelo, Predicciones ARIMACumplimiento: HU-21, RF006Archivo: frontend/src/pages/laboratorios/LaboratorioSensores.jsx2️⃣ Laboratorio CuánticoEstado: ✅ OperativoFuncionalidad: Simulaciones cuánticas interactivasEjercicios: Ecuaciones cuánticas, física avanzadaSistema: Puntuación y niveles múltiplesCumplimiento: HU-13Archivo: frontend/src/pages/laboratorios/LaboratorioCuantico.jsx3️⃣ Laboratorio de RobóticaEstado: ✅ ImplementadoFuncionalidad: Control de robots, programación visualTecnología: Simulador de robots, control de sensoresCaracterísticas: Programación en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioRobotica.jsx4️⃣ Laboratorio de Energías RenovablesEstado: ✅ ImplementadoFuncionalidad: Monitoreo de paneles solares y turbinas eólicasTecnología: Análisis de eficiencia energéticaCaracterísticas: Optimización de energía en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioEnergias.jsx5️⃣ Laboratorio de Agricultura InteligenteEstado: ✅ ImplementadoFuncionalidad: Análisis de cultivos, predicción de cosechasTecnología: Machine Learning, sensores especializados, PlantVillageCaracterísticas:   - Recomendaciones de cultivo   - Detección de enfermedadesArchivo: frontend/src/pages/laboratorios/LaboratorioAgricultura.jsx6️⃣ Laboratorio de Software y TelemáticaEstado: ✅ ImplementadoFuncionalidad: Desarrollo de software desde ceroTecnologías: Python, JavaScript, IoT, RedesCaracterísticas:   - Editor de código integrado   - Herramientas de desarrollo   - Simulador de redes   - Control de dispositivos BBBArchivo: frontend/src/pages/laboratorios/LaboratorioSoftware.jsx🧠 SISTEMA DE IA Y MACHINE LEARNINGPipeline de IA Distribuida📊 Datos Sensores → ⚙️ Procesamiento Edge → 🤖 Modelos ML → 🔮 Predicciones → 📱 Interfaz Usuario
                                              ↑
                              🌐 PlantVillage API + 📡 Datos Externos
🔬 Modelos de IA ImplementadosModeloAplicaciónTecnologíaARIMAPredicción climática 72hTime Series AnalysisRandom ForestClasificación de cultivosEnsemble LearningLSTMPredicción de rendimientoDeep LearningCNNAnálisis de imágenes satelitalesComputer VisionPlant DiseaseDetección de enfermedadesPlantVillage Integration📊 Métricas de RendimientoMétricaValor ObjetivoPrecisión IA>85% predicciones a 7 díasTiempo de respuesta<3 segundosDisponibilidad>99.5% uptimeCobertura10,000+ hectáreas🖥️ CLÚSTER 3 BEAGLEBONE BLACK REVC🔧 Configuración del ClústerNodoFunciónIPRecursosBBB-01Gateway/API10.0.0.11Django, PostgreSQL, NginxBBB-02IA/ML Processing10.0.0.12TensorFlow Lite, scikit-learn, RedisBBB-03IoT/Sensors10.0.0.13MQTT, LoRaWAN, InfluxDB, Sensores⚡ Optimizaciones EspecíficasBBB-01: Gateway y API (Nodo Principal)Funciones:Django BackendPostgreSQL DatabaseNginx Load BalancerFrontend React (servido estático)Recursos: 512MB RAM, 4GB eMMC   Optimización: SQLite para datos locales, PostgreSQL solo para críticosBBB-02: IA y Machine LearningFunciones:TensorFlow Lite (modelos ligeros)scikit-learn (análisis)Redis (caché de predicciones)Procesamiento de imágenes PlantVillageRecursos: 512MB RAM, microSD para modelos   Optimización: Modelos pre-entrenados, inferencia en edgeBBB-03: IoT y SensoresFunciones:MQTT Broker (Mosquitto)InfluxDB (time series)LoRaWAN GatewayControl de sensores DHT22Recursos: 512MB RAM, GPIO para sensores   Optimización: Datos en tiempo real, almacenamiento local🔄 Flujo de Datos OptimizadoSensores → BBB-03 (IoT) → BBB-02 (IA) → BBB-01 (API) → Usuario
             ↓              ↓            ↓
         InfluxDB      Redis Cache   PostgreSQL
🌱 INTEGRACIÓN PLANTVILLAGE DATASETEstrategia de Integración InteligenteNO cargamos las imágenes localmente - utilizamos una estrategia híbrida optimizada.🔗 Recursos PlantVillageRecursoEnlaceRepositorio OriginalPlantVillage-DatasetNuestro ForkSIGCT-PlantVillageEstrategiaAPI externa + caché inteligente💡 Método de Integraciónclass PlantVillageIntegration:
    def __init__(self):
        self.api_url = "[https://api.plantvillage.org](https://api.plantvillage.org)"
        self.cache = Redis()
        self.local_models = "models/plant_disease/"

    def classify_disease(self, image_path):
        # 1. Verificar caché local
        if self.cache.exists(image_path):
            return self.cache.get(image_path)
        
        # 2. Procesar con modelo local (TensorFlow Lite)
        prediction = self.local_model.predict(image_path)
        
        # 3. Si confianza < 80%, consultar API externa
        if prediction.confidence < 0.8:
            result = self.external_api.classify(image_path)
            self.cache.set(image_path, result, ttl=3600)
            return result
        
        return prediction
📊 Ventajas de esta Estrategia✅ Sin sobrecarga: No almacenamos 50,000+ imágenes   ✅ Rendimiento: Modelos locales para casos comunes   ✅ Escalabilidad: API externa para casos complejos   ✅ Caché inteligente: Solo guardamos resultados útiles7. LABORATORIO DE SOFTWARE Y TELEMÁTICA💻 Curso Intensivo de Desarrollo de Software📚 Módulos del LaboratorioFundamentos de Programación    - Python desde cero    - JavaScript moderno    - Algoritmos y estructuras de datos    - Recursos: Python.org, MDN Web DocsDesarrollo Web    - HTML5, CSS3, JavaScript ES6+    - React/Vue.js para frontend    - Django/Flask para backend    - Recursos: FreeCodeCamp, W3SchoolsDesarrollo IoT    - Programación de BBB    - Sensores y actuadores    - Comunicación MQTT    - Recursos: BeagleBoard.org, Arduino.ccInteligencia Artificial    - Machine Learning básico    - TensorFlow Lite    - Computer Vision    - Recursos: TensorFlow.org, Kaggle.comRedes y Telecomunicaciones    - Protocolos de red    - LoRaWAN, WiFi, 4G/5G    - Seguridad en redes    - Recursos: Cisco Networking Academy🛠️ Herramientas de Desarrollo AccesiblesIDEs: VS Code, PyCharm Community, Arduino IDEControl de Versiones: Git, GitHubContenedores: Docker, Docker ComposeMonitoreo: Prometheus, GrafanaDocumentación: Markdown, Sphinx🌐 Enlaces a Recursos GlobalesSoftware Libre y Open Source:GitHub - Repositorios de códigoGitLab - DevOps y CI/CDSourceForge - Software libreApache Software Foundation - Proyectos ApacheEducación en Tecnología:MIT OpenCourseWare - Cursos MIT gratuitosCoursera - Cursos onlineedX - Educación onlineKhan Academy - Matemáticas y cienciasComunidades de Desarrollo:Stack Overflow - Preguntas y respuestasReddit r/programming - ComunidadDev.to - Blog de desarrolladoresHacker News - Noticias tech8. DIAGRAMAS UML Y BASES DE DATOS📊 Diagrama de Clases PrincipalclassDiagram
    class User {
        +int id
        +string username
        +string email
        +string role
        +datetime created_at
        +login()
        +logout()
        +update_profile()
    }
    
    class Laboratory {
        +int id
        +string name
        +string type
        +string status
        +string description
        +create_session()
        +get_results()
    }
    
    class Sensor {
        +int id
        +string name
        +string type
        +float value
        +datetime timestamp
        +string location
        +read_data()
        +send_alert()
    }
    
    class AIPrediction {
        +int id
        +string model_type
        +float confidence
        +string prediction
        +datetime created_at
        +predict()
        +update_model()
    }
    
    class PlantDisease {
        +int id
        +string disease_name
        +string symptoms
        +string treatment
        +float confidence
        +classify()
    }
    
    User ||--o{ Laboratory : uses
    Laboratory ||--o{ Sensor : monitors
    Sensor ||--o{ AIPrediction : generates
    AIPrediction ||--o{ PlantDisease : predicts
🗄️ Esquema de Base de Datos-- Tabla de Usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Laboratorios
CREATE TABLE laboratories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Sensores
CREATE TABLE sensors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    laboratory_id INTEGER REFERENCES laboratories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Lecturas de Sensores
CREATE TABLE sensor_readings (
    id SERIAL PRIMARY KEY,
    sensor_id INTEGER REFERENCES sensors(id),
    value DECIMAL(10,2) NOT NULL,
    unit VARCHAR(20),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Predicciones IA
CREATE TABLE ai_predictions (
    id SERIAL PRIMARY KEY,
    model_type VARCHAR(50) NOT NULL,
    input_data JSONB,
    prediction JSONB,
    confidence DECIMAL(5,4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Enfermedades de Plantas
CREATE TABLE plant_diseases (
    id SERIAL PRIMARY KEY,
    disease_name VARCHAR(100) NOT NULL,
    symptoms TEXT,
    treatment TEXT,
    prevention TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🔄 Diagrama de Secuencia - Clasificación de EnfermedadessequenceDiagram
    participant U as Usuario
    participant F as Frontend
    participant A as API
    participant M as Modelo Local
    participant P as PlantVillage API
    participant C as Cache
    
    U->>F: Sube imagen de planta
    F->>A: POST /classify-disease
    A->>C: Verificar caché
    C-->>A: Resultado (si existe)
    
    alt Cache Hit
        A-->>F: Retornar resultado
    else Cache Miss
        A->>M: Procesar con modelo local
        M-->>A: Predicción local
        
        alt Confianza < 80%
            A->>P: Consultar API externa
            P-->>A: Resultado externo
            A->>C: Guardar en caché
        end
        
        A-->>F: Retornar resultado final
    end
    
    F-->>U: Mostrar diagnóstico
9. EVIDENCIAS Y ENLACES📋 Evidencias del ProyectoGA5-220501095-AA1-EV07: Mapa de NavegaciónArchivo: Mapa de Navegación HTMLDescripción: Arquitectura de interfaz móvil optimizadaComponentes: Bottom navigation, wireframes, gestos táctilesCumplimiento: HU-21, RF006GA2-220501095-AA1-EV08: Arquitectura ExpandidaArchivo: Arquitectura Expandida HTMLDescripción: Sistema distribuido multi-plataformaComponentes: Drones, sensores, IA, políticas públicasCumplimiento: RF004, RF005GA3-220501095-AA1-EV09: Diagramas de NavegaciónArchivo: Diagramas de Navegación HTMLDescripción: Especificaciones técnicas móvilesComponentes: Touch targets, accesibilidad, responsive designCumplimiento: WCAG 2.1 AA🔗 Enlaces a Recursos ExternosRepositorios del ProyectoBackend: SIGCT-BackendFrontend: SIGCT-FrontendIoT: SIGCT-IoTDocumentación: SIGCT-DocsPlantVillage DatasetRepositorio Original: PlantVillage-DatasetNuestro Fork: SIGCT-PlantVillageAPI Externa: PlantVillage API (si existe)Documentación: PlantVillage DocsRecursos de IA y MLTensorFlow: TensorFlow.orgscikit-learn: Scikit-learn.orgKaggle: Kaggle.comPapers With Code: Paperswithcode.comHardware y IoTBeagleBoard: BeagleBoard.orgArduino: Arduino.ccRaspberry Pi: Raspberrypi.orgLoRaWAN: LoRaWAN.orgDesarrollo de SoftwareGitHub: GitHub.comGitLab: GitLab.comStack Overflow: StackOverflow.comMDN Web Docs: Developer.mozilla.org📚 Recursos EducativosCursos Online GratuitosMIT OpenCourseWare: OCW.MIT.eduCoursera: Coursera.orgedX: EdX.orgKhan Academy: KhanAcademy.orgComunidades de DesarrolloReddit Programming: Reddit.com/r/programmingDev.to: Dev.toHacker News: News.ycombinator.comFreeCodeCamp: FreeCodeCamp.orgRecursos SENAPortal SENA: SENA.edu.coSENA Virtual: SENAVirtual.edu.coCentro de Logística: Centro de Logística y Promoción Ecoturística del Magdalena10. ROADMAP DE IMPLEMENTACIÓN🚀 Fase 1: Fundación (Q1 2025)✅ Backend Django funcional✅ Frontend React básico✅ Despliegue en Render✅ Health checks implementados✅ COMPLETADO: Laboratorios STEM expandidos🔬 Fase 2: Laboratorios STEM (Q2 2025)✅ COMPLETADO: Laboratorio de Robótica✅ COMPLETADO: Laboratorio de Energías Renovables✅ COMPLETADO: Laboratorio de Agricultura Inteligente✅ COMPLETADO: Laboratorio de Software y Telemática✅ COMPLETADO: Navegación móvil optimizada🔄 En progreso: Gestos táctiles implementados🤖 Fase 3: IA Avanzada (Q3 2025)🆕 Integración PlantVillage Dataset🆕 Modelos de IA distribuidos🆕 Predicciones en tiempo real🆕 Accesibilidad completa WCAG 2.1 AA🔄 Testing exhaustivo🌍 Fase 4: Escalamiento (Q4 2025)🚀 Despliegue en clúster 3 BBB🚀 Optimización de recursos🚀 Documentación final🚀 Entrega del proyecto🚀 Comercialización📊 Métricas de ÉxitoUsuarios activos: 500+ campesinosPrecisión IA: >85%Tiempo respuesta: <3 segundosDisponibilidad: >99.5%Cobertura: 10,000+ hectáreas11. NUEVO: DIAGNÓSTICO COMPLETO DEL PROYECTO📊 Estado Actual del Proyecto✅ COMPONENTES IMPLEMENTADOSBackend Django:✅ core/settings.py - Configuración completa✅ core/urls.py - Enrutamiento principal✅ core/views.py - Health check para Render✅ apps/sensores/ - API de sensores✅ apps/laboratorios/ - API de laboratorios✅ apps/cursos/ - API de cursos✅ apps/usuarios/ - API de usuarios✅ apps/alertas/ - Sistema de alertas✅ requirements.txt - Dependencias Python✅ manage.py - Gestión DjangoFrontend React:✅ App.jsx - Aplicación principal con rutas✅ App.css - Estilos globales✅ main.jsx - Punto de entrada✅ index.css - Estilos baseLaboratorios STEM:✅ LaboratorioSensores.jsx - Monitoreo IoT✅ LaboratorioCuantico.jsx - Simulaciones cuánticas✅ LaboratorioRobotica.jsx - Control de robots✅ LaboratorioEnergias.jsx - Energías renovables✅ LaboratorioAgricultura.jsx - Agricultura inteligente✅ LaboratorioSoftware.jsx - Desarrollo de softwareNavegación Móvil:✅ BottomNav.jsx - Navegación inferior✅ BottomNav.css - Estilos de navegaciónPáginas:✅ Dashboard.jsx - Panel principal✅ Login.jsx - Autenticación🔄 COMPONENTES EN DESARROLLODashboard Avanzado:🔄 Widgets interactivos🔄 Gráficos en tiempo real🔄 Alertas inteligentesIntegración IA:🔄 PlantVillage Dataset🔄 Modelos de ML distribuidos🔄 Predicciones en tiempo real❌ COMPONENTES PENDIENTESHardware:❌ Clúster 3 BBB físicos❌ Sensores DHT22❌ Actuadores IoT❌ Comunicación LoRaWANTesting:❌ Tests unitarios❌ Tests de integración❌ Tests de rendimientoDocumentación:❌ Manual de usuario❌ Guía de instalación❌ API documentation📈 MÉTRICAS DE PROGRESOComponenteEstadoProgresoPrioridadBackend Django✅ Completo100%AltaFrontend React✅ Completo100%AltaLaboratorios STEM✅ Completo100%AltaNavegación Móvil✅ Completo100%AltaDashboard🔄 En desarrollo70%MediaIntegración IA🔄 En desarrollo30%AltaHardware BBB❌ Pendiente0%AltaTesting❌ Pendiente0%MediaDocumentación❌ Pendiente20%Baja12. NUEVO: CHECKLIST DE ARTEFACTOS📋 Artefactos Implementados✅ Backend (Django)[x] core/settings.py - Configuración del proyecto[x] core/urls.py - Enrutamiento principal[x] core/views.py - Vistas principales[x] core/wsgi.py - WSGI configuration[x] apps/sensores/models.py - Modelos de sensores[x] apps/sensores/serializers.py - Serializadores[x] apps/sensores/viewsets.py - ViewSets[x] apps/sensores/urls.py - URLs de sensores[x] requirements.txt - Dependencias Python[x] manage.py - Gestión Django✅ Frontend (React)[x] App.jsx - Aplicación principal[x] App.css - Estilos globales[x] main.jsx - Punto de entrada[x] index.css - Estilos base[x] pages/Dashboard.jsx - Panel principal[x] pages/Login.jsx - Autenticación[x] pages/laboratorios/LaboratorioSensores.jsx - Laboratorio de sensores[x] pages/laboratorios/LaboratorioCuantico.jsx - Laboratorio cuántico[x] pages/laboratorios/LaboratorioRobotica.jsx - Laboratorio de robótica[x] pages/laboratorios/LaboratorioEnergias.jsx - Laboratorio de energías[x] pages/laboratorios/LaboratorioAgricultura.jsx - Laboratorio de agricultura[x] pages/laboratorios/LaboratorioSoftware.jsx - Laboratorio de software[x] components/Navigation/BottomNav.jsx - Navegación móvil[x] components/Navigation/BottomNav.css - Estilos de navegación✅ Estilos CSS[x] LaboratorioSensores.css - Estilos del laboratorio de sensores[x] LaboratorioCuantico.css - Estilos del laboratorio cuántico[x] LaboratorioRobotica.css - Estilos del laboratorio de robótica[x] LaboratorioEnergias.css - Estilos del laboratorio de energías[x] LaboratorioAgricultura.css - Estilos del laboratorio de agricultura[x] LaboratorioSoftware.css - Estilos del laboratorio de software✅ Configuración[x] render.yaml - Configuración de despliegue[x] package.json - Dependencias Node.js[x] vite.config.js - Configuración de Vite[x] MASTERDOC.md - Documentación principal❌ Artefactos Pendientes🔄 Dashboard Avanzado[ ] components/Dashboard/SensorWidget.jsx - Widget de sensores[ ] components/Dashboard/ChartWidget.jsx - Widget de gráficos[ ] components/Dashboard/AlertWidget.jsx - Widget de alertas[ ] components/Dashboard/Dashboard.css - Estilos del dashboard🔄 Integración IA[ ] models/plant_disease_model.py - Modelo de enfermedades[ ] models/weather_prediction.py - Modelo de predicción climática[ ] services/plantvillage_api.py - Integración con PlantVillage[ ] services/ai_service.py - Servicio de IA🔄 Hardware[ ] iot/sensors/dht22.py - Control de sensor DHT22[ ] iot/sensors/soil_moisture.py - Control de humedad del suelo[ ] iot/communication/mqtt.py - Comunicación MQTT[ ] iot/communication/lora.py - Comunicación LoRaWAN🔄 Testing[ ] tests/backend/test_models.py - Tests de modelos[ ] tests/backend/test_views.py - Tests de vistas[ ] tests/frontend/test_components.jsx - Tests de componentes[ ] tests/integration/test_api.js - Tests de integración🔄 Documentación[ ] docs/user_manual.md - Manual de usuario[ ] docs/guia_instalacion.md - Guía de instalación[ ] docs/api_documentation.md - Documentación de API[ ] docs/hardware_setup.md - Configuración de hardware13. NUEVO: ARQUITECTURA WEBCLOUD + IA🌐 Arquitectura WebCloud Completagraph TB
    subgraph "CLOUD LAYER"
        A[🌐 Render.com] --> B[📊 PostgreSQL]
        A --> C[🔄 Redis Cache]
        A --> D[📁 Static Files]
    end
    
    subgraph "APPLICATION LAYER"
        E[🐍 Django Backend] --> F[⚛️ React Frontend]
        E --> G[📡 API REST]
        E --> H[🔌 WebSocket]
    end
    
    subgraph "AI/ML LAYER"
        I[🤖 TensorFlow Lite] --> J[🧠 PlantVillage Models]
        I --> K[📊 ARIMA Predictions]
        I --> L[🔍 Disease Classification]
    end
    
    subgraph "EDGE LAYER - 3 BBB CLUSTER"
        M[BBB-01: Gateway] --> N[BBB-02: AI/ML]
        N --> O[BBB-03: IoT/Sensors]
        O --> M
    end
    
    subgraph "SENSOR LAYER"
        P[🌡️ DHT22] --> Q[💧 Soil Moisture]
        Q --> R[📡 LoRaWAN]
        R --> S[📶 WiFi/4G]
    end
    
    A --> E
    E --> I
    I --> M
    M --> P
⚡ Flujo de Datos WebCloud + IAsequenceDiagram
    participant S as Sensores
    participant B3 as BBB-03 (IoT)
    participant B2 as BBB-02 (AI)
    participant B1 as BBB-01 (Gateway)
    participant C as Cloud (Render)
    participant A as AI Models
    participant U as Usuario
    
    S->>B3: Datos sensores
    B3->>B2: Procesar con IA local
    B2->>A: Modelos PlantVillage
    A-->>B2: Predicciones
    B2->>B1: Resultados
    B1->>C: Sincronizar con cloud
    C->>U: Dashboard actualizado
    
    Note over B3: Almacena en InfluxDB
    Note over B2: Caché en Redis
    Note over B1: API REST
    Note over C: PostgreSQL + Redis
🔧 Configuración WebCloudRender.com (Cloud Provider)Backend: Django + GunicornFrontend: React + ViteDatabase: PostgreSQLCache: RedisCDN: Static filesSSL: HTTPS automáticoBBB Cluster (Edge Computing)BBB-01: Gateway + API + DatabaseBBB-02: AI/ML + TensorFlow LiteBBB-03: IoT + Sensors + MQTT📊 Métricas de Rendimiento WebCloudMétricaCloudEdgeObjetivoLatencia<100ms<50ms<200msThroughput1000 req/s100 req/s500 req/sDisponibilidad99.9%99.5%99.0%Storage100GB4GB50GB🎯 CONCLUSIÓN🌟 Impacto TransformadorPilarDescripción🌐 DemocratizaciónSoftware libre accesible para todos📚 EducaciónSTEM accesible y práctica en zonas rurales🤖 InnovaciónInteligencia Artificial distribuida en el edge♻️ SostenibilidadTecnología que no sobrecarga recursos limitados🚀 Visión Futura 2025-2030: Ecosistema Inteligente Agrícola🎯 Misión ExpandidaCrear un ecosistema tecnológico recursivo y adaptable que lleve la investigación científica a zonas rurales, permitiendo que campesinos, indígenas y agricultores aprendan ciencia y tecnología de manera didáctica mientras realizan trabajos agrícolas reales y productivos.🌟 Visión 2030Ser el ecosistema de referencia en América Latina para la agricultura inteligente, donde la tecnología se convierte en un juego fácil de entender y usar, escalable desde sistemas embebidos básicos hasta soluciones industriales robustas.💡 Llamada a la Acción"El mundo debe salir de la ignorancia"Este proyecto es un paso más hacia el conocimiento adquirido, apoyado en muchos hombros de gigantes, para avanzar hacia una transformación real.Llevamos el poder del software - "Si lo piensas, lo puedes hacer" - libre y accesible, llevando la educación STEM a donde más se necesita. 🚀⚡ Optimización para 3 BeagleBone Black RevCEspecificaciones HardwareComponenteEspecificaciónMemoriaMáximo 512MB por nodoCPUARM Cortex-A8 1GHzStorage4GB eMMC + microSDRed100Mbps Ethernet + WiFi🔬 LABORATORIOS STEM INTEGRADOS1️⃣ Laboratorio de Sensores IoTEstado: ✅ OperativoFuncionalidad: Monitoreo IoT en tiempo realSensores: DHT22, Humedad de suelo, Predicciones ARIMACumplimiento: HU-21, RF006Archivo: frontend/src/pages/laboratorios/LaboratorioSensores.jsx2️⃣ Laboratorio CuánticoEstado: ✅ OperativoFuncionalidad: Simulaciones cuánticas interactivasEjercicios: Ecuaciones cuánticas, física avanzadaSistema: Puntuación y niveles múltiplesCumplimiento: HU-13Archivo: frontend/src/pages/laboratorios/LaboratorioCuantico.jsx3️⃣ Laboratorio de RobóticaEstado: ✅ ImplementadoFuncionalidad: Control de robots, programación visualTecnología: Simulador de robots, control de sensoresCaracterísticas: Programación en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioRobotica.jsx4️⃣ Laboratorio de Energías RenovablesEstado: ✅ ImplementadoFuncionalidad: Monitoreo de paneles solares y turbinas eólicasTecnología: Análisis de eficiencia energéticaCaracterísticas: Optimización de energía en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioEnergias.jsx5️⃣ Laboratorio de Agricultura InteligenteEstado: ✅ ImplementadoFuncionalidad: Análisis de cultivos, predicción de cosechasTecnología: Machine Learning, sensores especializados, PlantVillageCaracterísticas:   - Recomendaciones de cultivo   - Detección de enfermedadesArchivo: frontend/src/pages/laboratorios/LaboratorioAgricultura.jsx6️⃣ Laboratorio de Software y TelemáticaEstado: ✅ ImplementadoFuncionalidad: Desarrollo de software desde ceroTecnologías: Python, JavaScript, IoT, RedesCaracterísticas:   - Editor de código integrado   - Herramientas de desarrollo   - Simulador de redes   - Control de dispositivos BBBArchivo: frontend/src/pages/laboratorios/LaboratorioSoftware.jsx🧠 SISTEMA DE IA Y MACHINE LEARNINGPipeline de IA Distribuida📊 Datos Sensores → ⚙️ Procesamiento Edge → 🤖 Modelos ML → 🔮 Predicciones → 📱 Interfaz Usuario
                                              ↑
                              🌐 PlantVillage API + 📡 Datos Externos
🔬 Modelos de IA ImplementadosModeloAplicaciónTecnologíaARIMAPredicción climática 72hTime Series AnalysisRandom ForestClasificación de cultivosEnsemble LearningLSTMPredicción de rendimientoDeep LearningCNNAnálisis de imágenes satelitalesComputer VisionPlant DiseaseDetección de enfermedadesPlantVillage Integration📊 Métricas de RendimientoMétricaValor ObjetivoPrecisión IA>85% predicciones a 7 díasTiempo de respuesta<3 segundosDisponibilidad>99.5% uptimeCobertura10,000+ hectáreas🖥️ CLÚSTER 3 BEAGLEBONE BLACK REVC🔧 Configuración del ClústerNodoFunciónIPRecursosBBB-01Gateway/API10.0.0.11Django, PostgreSQL, NginxBBB-02IA/ML Processing10.0.0.12TensorFlow Lite, scikit-learn, RedisBBB-03IoT/Sensors10.0.0.13MQTT, LoRaWAN, InfluxDB, Sensores⚡ Optimizaciones EspecíficasBBB-01: Gateway y API (Nodo Principal)Funciones:Django BackendPostgreSQL DatabaseNginx Load BalancerFrontend React (servido estático)Recursos: 512MB RAM, 4GB eMMC   Optimización: SQLite para datos locales, PostgreSQL solo para críticosBBB-02: IA y Machine LearningFunciones:TensorFlow Lite (modelos ligeros)scikit-learn (análisis)Redis (caché de predicciones)Procesamiento de imágenes PlantVillageRecursos: 512MB RAM, microSD para modelos   Optimización: Modelos pre-entrenados, inferencia en edgeBBB-03: IoT y SensoresFunciones:MQTT Broker (Mosquitto)InfluxDB (time series)LoRaWAN GatewayControl de sensores DHT22Recursos: 512MB RAM, GPIO para sensores   Optimización: Datos en tiempo real, almacenamiento local🔄 Flujo de Datos OptimizadoSensores → BBB-03 (IoT) → BBB-02 (IA) → BBB-01 (API) → Usuario
             ↓              ↓            ↓
         InfluxDB      Redis Cache   PostgreSQL
🌱 INTEGRACIÓN PLANTVILLAGE DATASETEstrategia de Integración InteligenteNO cargamos las imágenes localmente - utilizamos una estrategia híbrida optimizada.🔗 Recursos PlantVillageRecursoEnlaceRepositorio OriginalPlantVillage-DatasetNuestro ForkSIGCT-PlantVillageEstrategiaAPI externa + caché inteligente💡 Método de Integraciónclass PlantVillageIntegration:
    def __init__(self):
        self.api_url = "[https://api.plantvillage.org](https://api.plantvillage.org)"
        self.cache = Redis()
        self.local_models = "models/plant_disease/"

    def classify_disease(self, image_path):
        # 1. Verificar caché local
        if self.cache.exists(image_path):
            return self.cache.get(image_path)
        
        # 2. Procesar con modelo local (TensorFlow Lite)
        prediction = self.local_model.predict(image_path)
        
        # 3. Si confianza < 80%, consultar API externa
        if prediction.confidence < 0.8:
            result = self.external_api.classify(image_path)
            self.cache.set(image_path, result, ttl=3600)
            return result
        
        return prediction
📊 Ventajas de esta Estrategia✅ Sin sobrecarga: No almacenamos 50,000+ imágenes   ✅ Rendimiento: Modelos locales para casos comunes   ✅ Escalabilidad: API externa para casos complejos   ✅ Caché inteligente: Solo guardamos resultados útiles7. LABORATORIO DE SOFTWARE Y TELEMÁTICA💻 Curso Intensivo de Desarrollo de Software📚 Módulos del LaboratorioFundamentos de Programación    - Python desde cero    - JavaScript moderno    - Algoritmos y estructuras de datos    - Recursos: Python.org, MDN Web DocsDesarrollo Web    - HTML5, CSS3, JavaScript ES6+    - React/Vue.js para frontend    - Django/Flask para backend    - Recursos: FreeCodeCamp, W3SchoolsDesarrollo IoT    - Programación de BBB    - Sensores y actuadores    - Comunicación MQTT    - Recursos: BeagleBoard.org, Arduino.ccInteligencia Artificial    - Machine Learning básico    - TensorFlow Lite    - Computer Vision    - Recursos: TensorFlow.org, Kaggle.comRedes y Telecomunicaciones    - Protocolos de red    - LoRaWAN, WiFi, 4G/5G    - Seguridad en redes    - Recursos: Cisco Networking Academy🛠️ Herramientas de Desarrollo AccesiblesIDEs: VS Code, PyCharm Community, Arduino IDEControl de Versiones: Git, GitHubContenedores: Docker, Docker ComposeMonitoreo: Prometheus, GrafanaDocumentación: Markdown, Sphinx🌐 Enlaces a Recursos GlobalesSoftware Libre y Open Source:GitHub - Repositorios de códigoGitLab - DevOps y CI/CDSourceForge - Software libreApache Software Foundation - Proyectos ApacheEducación en Tecnología:MIT OpenCourseWare - Cursos MIT gratuitosCoursera - Cursos onlineedX - Educación onlineKhan Academy - Matemáticas y cienciasComunidades de Desarrollo:Stack Overflow - Preguntas y respuestasReddit r/programming - ComunidadDev.to - Blog de desarrolladoresHacker News - Noticias tech8. DIAGRAMAS UML Y BASES DE DATOS📊 Diagrama de Clases Principal┌─────────────────┐
│      User       │
├─────────────────┤
│ +id: int        │
│ +username: str  │
│ +email: str     │
│ +role: str      │
│ +created_at     │
├─────────────────┤
│ +login()        │
│ +logout()       │
│ +update_profile()│
└────────┬────────┘
         │ uses
         ↓
┌─────────────────┐
│   Laboratory    │
├─────────────────┤
│ +id: int        │
│ +name: str      │
│ +type: str      │
│ +status: str    │
├─────────────────┤
│ +create_session()│
│ +get_results()  │
└────────┬────────┘
         │ monitors
         ↓
┌─────────────────┐       ┌─────────────────┐
│     Sensor      │───────│  AIPrediction   │
├─────────────────┤       ├─────────────────┤
│ +id: int        │       │ +model_type     │
│ +name: str      │       │ +confidence     │
│ +type: str      │       │ +prediction     │
├─────────────────┤       ├─────────────────┤
│ +read_data()    │       │ +predict()      │
│ +send_alert()   │       │ +update_model() │
└─────────────────┘       └────────┬────────┘
                                   │ predicts
                                   ↓
                          ┌─────────────────┐
                          │  PlantDisease   │
                          ├─────────────────┤
                          │ +id: int        │
                          │ +disease_name   │
                          │ +symptoms       │
                          │ +treatment      │
                          ├─────────────────┤
                          │ +classify()     │
                          └─────────────────┘
🗄️ Esquema de Base de Datos-- Tabla de Usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Laboratorios
CREATE TABLE laboratories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Sensores
CREATE TABLE sensors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    laboratory_id INTEGER REFERENCES laboratories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Lecturas de Sensores
CREATE TABLE sensor_readings (
    id SERIAL PRIMARY KEY,
    sensor_id INTEGER REFERENCES sensors(id),
    value DECIMAL(10,2) NOT NULL,
    unit VARCHAR(20),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Predicciones IA
CREATE TABLE ai_predictions (
    id SERIAL PRIMARY KEY,
    model_type VARCHAR(50) NOT NULL,
    input_data JSONB,
    prediction JSONB,
    confidence DECIMAL(5,4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Enfermedades de Plantas
CREATE TABLE plant_diseases (
    id SERIAL PRIMARY KEY,
    disease_name VARCHAR(100) NOT NULL,
    symptoms TEXT,
    treatment TEXT,
    prevention TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🔄 Diagrama de Secuencia - Clasificación de EnfermedadessequenceDiagram
    participant U as Usuario
    participant F as Frontend
    participant A as API
    participant M as Modelo Local
    participant P as PlantVillage API
    participant C as Cache
    
    U->>F: Sube imagen de planta
    F->>A: POST /classify-disease
    A->>C: Verificar caché
    C-->>A: Resultado (si existe)
    
    alt Cache Hit
        A-->>F: Retornar resultado
    else Cache Miss
        A->>M: Procesar con modelo local
        M-->>A: Predicción local
        
        alt Confianza < 80%
            A->>P: Consultar API externa
            P-->>A: Resultado externo
            A->>C: Guardar en caché
        end
        
        A-->>F: Retornar resultado final
    end
    
    F-->>U: Mostrar diagnóstico
9. EVIDENCIAS Y ENLACES📋 Evidencias del ProyectoGA5-220501095-AA1-EV07: Mapa de NavegaciónArchivo: Mapa de Navegación HTMLDescripción: Arquitectura de interfaz móvil optimizadaComponentes: Bottom navigation, wireframes, gestos táctilesCumplimiento: HU-21, RF006GA2-220501095-AA1-EV08: Arquitectura ExpandidaArchivo: Arquitectura Expandida HTMLDescripción: Sistema distribuido multi-plataformaComponentes: Drones, sensores, IA, políticas públicasCumplimiento: RF004, RF005GA3-220501095-AA1-EV09: Diagramas de NavegaciónArchivo: Diagramas de Navegación HTMLDescripción: Especificaciones técnicas móvilesComponentes: Touch targets, accesibilidad, responsive designCumplimiento: WCAG 2.1 AA🔗 Enlaces a Recursos ExternosRepositorios del ProyectoBackend: SIGCT-BackendFrontend: SIGCT-FrontendIoT: SIGCT-IoTDocumentación: SIGCT-DocsPlantVillage DatasetRepositorio Original: PlantVillage-DatasetNuestro Fork: SIGCT-PlantVillageAPI Externa: PlantVillage API (si existe)Documentación: PlantVillage DocsRecursos de IA y MLTensorFlow: TensorFlow.orgscikit-learn: Scikit-learn.orgKaggle: Kaggle.comPapers With Code: Paperswithcode.comHardware y IoTBeagleBoard: BeagleBoard.orgArduino: Arduino.ccRaspberry Pi: Raspberrypi.orgLoRaWAN: LoRaWAN.orgDesarrollo de SoftwareGitHub: GitHub.comGitLab: GitLab.comStack Overflow: StackOverflow.comMDN Web Docs: Developer.mozilla.org📚 Recursos EducativosCursos Online GratuitosMIT OpenCourseWare: OCW.MIT.eduCoursera: Coursera.orgedX: EdX.orgKhan Academy: KhanAcademy.orgComunidades de DesarrolloReddit Programming: Reddit.com/r/programmingDev.to: Dev.toHacker News: News.ycombinator.comFreeCodeCamp: FreeCodeCamp.orgRecursos SENAPortal SENA: SENA.edu.coSENA Virtual: SENAVirtual.edu.coCentro de Logística: Centro de Logística y Promoción Ecoturística del Magdalena10. ROADMAP DE IMPLEMENTACIÓN🚀 Fase 1: Fundación (Q1 2025)✅ Backend Django funcional✅ Frontend React básico✅ Despliegue en Render✅ Health checks implementados✅ COMPLETADO: Laboratorios STEM expandidos🔬 Fase 2: Laboratorios STEM (Q2 2025)✅ COMPLETADO: Laboratorio de Robótica✅ COMPLETADO: Laboratorio de Energías Renovables✅ COMPLETADO: Laboratorio de Agricultura Inteligente✅ COMPLETADO: Laboratorio de Software y Telemática✅ COMPLETADO: Navegación móvil optimizada🔄 En progreso: Gestos táctiles implementados🤖 Fase 3: IA Avanzada (Q3 2025)🆕 Integración PlantVillage Dataset🆕 Modelos de IA distribuidos🆕 Predicciones en tiempo real🆕 Accesibilidad completa WCAG 2.1 AA🔄 Testing exhaustivo🌍 Fase 4: Escalamiento (Q4 2025)🚀 Despliegue en clúster 3 BBB🚀 Optimización de recursos🚀 Documentación final🚀 Entrega del proyecto🚀 Comercialización📊 Métricas de ÉxitoUsuarios activos: 500+ campesinosPrecisión IA: >85%Tiempo respuesta: <3 segundosDisponibilidad: >99.5%Cobertura: 10,000+ hectáreas11. NUEVO: DIAGNÓSTICO COMPLETO DEL PROYECTO📊 Estado Actual del Proyecto✅ COMPONENTES IMPLEMENTADOSBackend Django:✅ core/settings.py - Configuración completa✅ core/urls.py - Enrutamiento principal✅ core/views.py - Health check para Render✅ apps/sensores/ - API de sensores✅ apps/laboratorios/ - API de laboratorios✅ apps/cursos/ - API de cursos✅ apps/usuarios/ - API de usuarios✅ apps/alertas/ - Sistema de alertas✅ requirements.txt - Dependencias Python✅ manage.py - Gestión DjangoFrontend React:✅ App.jsx - Aplicación principal con rutas✅ App.css - Estilos globales✅ main.jsx - Punto de entrada✅ index.css - Estilos baseLaboratorios STEM:✅ LaboratorioSensores.jsx - Monitoreo IoT✅ LaboratorioCuantico.jsx - Simulaciones cuánticas✅ LaboratorioRobotica.jsx - Control de robots✅ LaboratorioEnergias.jsx - Energías renovables✅ LaboratorioAgricultura.jsx - Agricultura inteligente✅ LaboratorioSoftware.jsx - Desarrollo de softwareNavegación Móvil:✅ BottomNav.jsx - Navegación inferior✅ BottomNav.css - Estilos de navegaciónPáginas:✅ Dashboard.jsx - Panel principal✅ Login.jsx - Autenticación🔄 COMPONENTES EN DESARROLLODashboard Avanzado:🔄 Widgets interactivos🔄 Gráficos en tiempo real🔄 Alertas inteligentesIntegración IA:🔄 PlantVillage Dataset🔄 Modelos de ML distribuidos🔄 Predicciones en tiempo real❌ COMPONENTES PENDIENTESHardware:❌ Clúster 3 BBB físicos❌ Sensores DHT22❌ Actuadores IoT❌ Comunicación LoRaWANTesting:❌ Tests unitarios❌ Tests de integración❌ Tests de rendimientoDocumentación:❌ Manual de usuario❌ Guía de instalación❌ API documentation📈 MÉTRICAS DE PROGRESOComponenteEstadoProgresoPrioridadBackend Django✅ Completo100%AltaFrontend React✅ Completo100%AltaLaboratorios STEM✅ Completo100%AltaNavegación Móvil✅ Completo100%AltaDashboard🔄 En desarrollo70%MediaIntegración IA🔄 En desarrollo30%AltaHardware BBB❌ Pendiente0%AltaTesting❌ Pendiente0%MediaDocumentación❌ Pendiente20%Baja12. NUEVO: CHECKLIST DE ARTEFACTOS📋 Artefactos Implementados✅ Backend (Django)[x] core/settings.py - Configuración del proyecto[x] core/urls.py - Enrutamiento principal[x] core/views.py - Vistas principales[x] core/wsgi.py - WSGI configuration[x] apps/sensores/models.py - Modelos de sensores[x] apps/sensores/serializers.py - Serializadores[x] apps/sensores/viewsets.py - ViewSets[x] apps/sensores/urls.py - URLs de sensores[x] requirements.txt - Dependencias Python[x] manage.py - Gestión Django✅ Frontend (React)[x] App.jsx - Aplicación principal[x] App.css - Estilos globales[x] main.jsx - Punto de entrada[x] index.css - Estilos base[x] pages/Dashboard.jsx - Panel principal[x] pages/Login.jsx - Autenticación[x] pages/laboratorios/LaboratorioSensores.jsx - Laboratorio de sensores[x] pages/laboratorios/LaboratorioCuantico.jsx - Laboratorio cuántico[x] pages/laboratorios/LaboratorioRobotica.jsx - Laboratorio de robótica[x] pages/laboratorios/LaboratorioEnergias.jsx - Laboratorio de energías[x] pages/laboratorios/LaboratorioAgricultura.jsx - Laboratorio de agricultura[x] pages/laboratorios/LaboratorioSoftware.jsx - Laboratorio de software[x] components/Navigation/BottomNav.jsx - Navegación móvil[x] components/Navigation/BottomNav.css - Estilos de navegación✅ Estilos CSS[x] LaboratorioSensores.css - Estilos del laboratorio de sensores[x] LaboratorioCuantico.css - Estilos del laboratorio cuántico[x] LaboratorioRobotica.css - Estilos del laboratorio de robótica[x] LaboratorioEnergias.css - Estilos del laboratorio de energías[x] LaboratorioAgricultura.css - Estilos del laboratorio de agricultura[x] LaboratorioSoftware.css - Estilos del laboratorio de software✅ Configuración[x] render.yaml - Configuración de despliegue[x] package.json - Dependencias Node.js[x] vite.config.js - Configuración de Vite[x] MASTERDOC.md - Documentación principal❌ Artefactos Pendientes🔄 Dashboard Avanzado[ ] components/Dashboard/SensorWidget.jsx - Widget de sensores[ ] components/Dashboard/ChartWidget.jsx - Widget de gráficos[ ] components/Dashboard/AlertWidget.jsx - Widget de alertas[ ] components/Dashboard/Dashboard.css - Estilos del dashboard🔄 Integración IA[ ] models/plant_disease_model.py - Modelo de enfermedades[ ] models/weather_prediction.py - Modelo de predicción climática[ ] services/plantvillage_api.py - Integración con PlantVillage[ ] services/ai_service.py - Servicio de IA🔄 Hardware[ ] iot/sensors/dht22.py - Control de sensor DHT22[ ] iot/sensors/soil_moisture.py - Control de humedad del suelo[ ] iot/communication/mqtt.py - Comunicación MQTT[ ] iot/communication/lora.py - Comunicación LoRaWAN🔄 Testing[ ] tests/backend/test_models.py - Tests de modelos[ ] tests/backend/test_views.py - Tests de vistas[ ] tests/frontend/test_components.jsx - Tests de componentes[ ] tests/integration/test_api.js - Tests de integración🔄 Documentación[ ] docs/user_manual.md - Manual de usuario[ ] docs/guia_instalacion.md - Guía de instalación[ ] docs/api_documentation.md - Documentación de API[ ] docs/hardware_setup.md - Configuración de hardware13. NUEVO: ARQUITECTURA WEBCLOUD + IA🌐 Arquitectura WebCloud Completagraph TB
    subgraph "CLOUD LAYER"
        A[🌐 Render.com] --> B[📊 PostgreSQL]
        A --> C[🔄 Redis Cache]
        A --> D[📁 Static Files]
    end
    
    subgraph "APPLICATION LAYER"
        E[🐍 Django Backend] --> F[⚛️ React Frontend]
        E --> G[📡 API REST]
        E --> H[🔌 WebSocket]
    end
    
    subgraph "AI/ML LAYER"
        I[🤖 TensorFlow Lite] --> J[🧠 PlantVillage Models]
        I --> K[📊 ARIMA Predictions]
        I --> L[🔍 Disease Classification]
    end
    
    subgraph "EDGE LAYER - 3 BBB CLUSTER"
        M[BBB-01: Gateway] --> N[BBB-02: AI/ML]
        N --> O[BBB-03: IoT/Sensors]
        O --> M
    end
    
    subgraph "SENSOR LAYER"
        P[🌡️ DHT22] --> Q[💧 Soil Moisture]
        Q --> R[📡 LoRaWAN]
        R --> S[📶 WiFi/4G]
    end
    
    A --> E
    E --> I
    I --> M
    M --> P
⚡ Flujo de Datos WebCloud + IAsequenceDiagram
    participant S as Sensores
    participant B3 as BBB-03 (IoT)
    participant B2 as BBB-02 (AI)
    participant B1 as BBB-01 (Gateway)
    participant C as Cloud (Render)
    participant A as AI Models
    participant U as Usuario
    
    S->>B3: Datos sensores
    B3->>B2: Procesar con IA local
    B2->>A: Modelos PlantVillage
    A-->>B2: Predicciones
    B2->>B1: Resultados
    B1->>C: Sincronizar con cloud
    C->>U: Dashboard actualizado
    
    Note over B3: Almacena en InfluxDB
    Note over B2: Caché en Redis
    Note over B1: API REST
    Note over C: PostgreSQL + Redis
🔧 Configuración WebCloudRender.com (Cloud Provider)Backend: Django + GunicornFrontend: React + ViteDatabase: PostgreSQLCache: RedisCDN: Static filesSSL: HTTPS automáticoBBB Cluster (Edge Computing)BBB-01: Gateway + API + DatabaseBBB-02: AI/ML + TensorFlow LiteBBB-03: IoT + Sensors + MQTT📊 Métricas de Rendimiento WebCloudMétricaCloudEdgeObjetivoLatencia<100ms<50ms<200msThroughput1000 req/s100 req/s500 req/sDisponibilidad99.9%99.5%99.0%Storage100GB4GB50GB🎯 CONCLUSIÓN🌟 Impacto TransformadorPilarDescripción🌐 DemocratizaciónSoftware libre accesible para todos📚 EducaciónSTEM accesible y práctica en zonas rurales🤖 InnovaciónInteligencia Artificial distribuida en el edge♻️ SostenibilidadTecnología que no sobrecarga recursos limitados🚀 Visión Futura 2025-2030: Ecosistema Inteligente Agrícola🎯 Misión ExpandidaCrear un ecosistema tecnológico recursivo y adaptable que lleve la investigación científica a zonas rurales, permitiendo que campesinos, indígenas y agricultores aprendan ciencia y tecnología de manera didáctica mientras realizan trabajos agrícolas reales y productivos.🌟 Visión 2030Ser el ecosistema de referencia en América Latina para la agricultura inteligente, donde la tecnología se convierte en un juego fácil de entender y usar, escalable desde sistemas embebidos básicos hasta soluciones industriales robustas.💡 Llamada a la Acción"El mundo debe salir de la ignorancia"Este proyecto es un paso más hacia el conocimiento adquirido, apoyado en muchos hombros de gigantes, para avanzar hacia una transformación real.Llevamos el poder del software - "Si lo piensas, lo puedes hacer" - libre y accesible, llevando la educación STEM a donde más se necesita. 🚀⚡ Optimización para 3 BeagleBone Black RevCEspecificaciones HardwareComponenteEspecificaciónMemoriaMáximo 512MB por nodoCPUARM Cortex-A8 1GHzStorage4GB eMMC + microSDRed100Mbps Ethernet + WiFi🔬 LABORATORIOS STEM INTEGRADOS1️⃣ Laboratorio de Sensores IoTEstado: ✅ OperativoFuncionalidad: Monitoreo IoT en tiempo realSensores: DHT22, Humedad de suelo, Predicciones ARIMACumplimiento: HU-21, RF006Archivo: frontend/src/pages/laboratorios/LaboratorioSensores.jsx2️⃣ Laboratorio CuánticoEstado: ✅ OperativoFuncionalidad: Simulaciones cuánticas interactivasEjercicios: Ecuaciones cuánticas, física avanzadaSistema: Puntuación y niveles múltiplesCumplimiento: HU-13Archivo: frontend/src/pages/laboratorios/LaboratorioCuantico.jsx3️⃣ Laboratorio de RobóticaEstado: ✅ ImplementadoFuncionalidad: Control de robots, programación visualTecnología: Simulador de robots, control de sensoresCaracterísticas: Programación en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioRobotica.jsx4️⃣ Laboratorio de Energías RenovablesEstado: ✅ ImplementadoFuncionalidad: Monitoreo de paneles solares y turbinas eólicasTecnología: Análisis de eficiencia energéticaCaracterísticas: Optimización de energía en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioEnergias.jsx5️⃣ Laboratorio de Agricultura InteligenteEstado: ✅ ImplementadoFuncionalidad: Análisis de cultivos, predicción de cosechasTecnología: Machine Learning, sensores especializados, PlantVillageCaracterísticas:   - Recomendaciones de cultivo   - Detección de enfermedadesArchivo: frontend/src/pages/laboratorios/LaboratorioAgricultura.jsx6️⃣ Laboratorio de Software y TelemáticaEstado: ✅ ImplementadoFuncionalidad: Desarrollo de software desde ceroTecnologías: Python, JavaScript, IoT, RedesCaracterísticas:   - Editor de código integrado   - Herramientas de desarrollo   - Simulador de redes   - Control de dispositivos BBBArchivo: frontend/src/pages/laboratorios/LaboratorioSoftware.jsx🧠 SISTEMA DE IA Y MACHINE LEARNINGPipeline de IA Distribuida📊 Datos Sensores → ⚙️ Procesamiento Edge → 🤖 Modelos ML → 🔮 Predicciones → 📱 Interfaz Usuario
                                              ↑
                              🌐 PlantVillage API + 📡 Datos Externos
🔬 Modelos de IA ImplementadosModeloAplicaciónTecnologíaARIMAPredicción climática 72hTime Series AnalysisRandom ForestClasificación de cultivosEnsemble LearningLSTMPredicción de rendimientoDeep LearningCNNAnálisis de imágenes satelitalesComputer VisionPlant DiseaseDetección de enfermedadesPlantVillage Integration📊 Métricas de RendimientoMétricaValor ObjetivoPrecisión IA>85% predicciones a 7 díasTiempo de respuesta<3 segundosDisponibilidad>99.5% uptimeCobertura10,000+ hectáreas🖥️ CLÚSTER 3 BEAGLEBONE BLACK REVC🔧 Configuración del ClústerNodoFunciónIPRecursosBBB-01Gateway/API10.0.0.11Django, PostgreSQL, NginxBBB-02IA/ML Processing10.0.0.12TensorFlow Lite, scikit-learn, RedisBBB-03IoT/Sensors10.0.0.13MQTT, LoRaWAN, InfluxDB, Sensores⚡ Optimizaciones EspecíficasBBB-01: Gateway y API (Nodo Principal)Funciones:Django BackendPostgreSQL DatabaseNginx Load BalancerFrontend React (servido estático)Recursos: 512MB RAM, 4GB eMMC   Optimización: SQLite para datos locales, PostgreSQL solo para críticosBBB-02: IA y Machine LearningFunciones:TensorFlow Lite (modelos ligeros)scikit-learn (análisis)Redis (caché de predicciones)Procesamiento de imágenes PlantVillageRecursos: 512MB RAM, microSD para modelos   Optimización: Modelos pre-entrenados, inferencia en edgeBBB-03: IoT y SensoresFunciones:MQTT Broker (Mosquitto)InfluxDB (time series)LoRaWAN GatewayControl de sensores DHT22Recursos: 512MB RAM, GPIO para sensores   Optimización: Datos en tiempo real, almacenamiento local🔄 Flujo de Datos OptimizadoSensores → BBB-03 (IoT) → BBB-02 (IA) → BBB-01 (API) → Usuario
             ↓              ↓            ↓
         InfluxDB      Redis Cache   PostgreSQL
🌱 INTEGRACIÓN PLANTVILLAGE DATASETEstrategia de Integración InteligenteNO cargamos las imágenes localmente - utilizamos una estrategia híbrida optimizada.🔗 Recursos PlantVillageRecursoEnlaceRepositorio OriginalPlantVillage-DatasetNuestro ForkSIGCT-PlantVillageEstrategiaAPI externa + caché inteligente💡 Método de Integraciónclass PlantVillageIntegration:
    def __init__(self):
        self.api_url = "[https://api.plantvillage.org](https://api.plantvillage.org)"
        self.cache = Redis()
        self.local_models = "models/plant_disease/"

    def classify_disease(self, image_path):
        # 1. Verificar caché local
        if self.cache.exists(image_path):
            return self.cache.get(image_path)
        
        # 2. Procesar con modelo local (TensorFlow Lite)
        prediction = self.local_model.predict(image_path)
        
        # 3. Si confianza < 80%, consultar API externa
        if prediction.confidence < 0.8:
            result = self.external_api.classify(image_path)
            self.cache.set(image_path, result, ttl=3600)
            return result
        
        return prediction
📊 Ventajas de esta Estrategia✅ Sin sobrecarga: No almacenamos 50,000+ imágenes   ✅ Rendimiento: Modelos locales para casos comunes   ✅ Escalabilidad: API externa para casos complejos   ✅ Caché inteligente: Solo guardamos resultados útiles7. LABORATORIO DE SOFTWARE Y TELEMÁTICA💻 Curso Intensivo de Desarrollo de Software📚 Módulos del LaboratorioFundamentos de Programación    - Python desde cero    - JavaScript moderno    - Algoritmos y estructuras de datos    - Recursos: Python.org, MDN Web DocsDesarrollo Web    - HTML5, CSS3, JavaScript ES6+    - React/Vue.js para frontend    - Django/Flask para backend    - Recursos: FreeCodeCamp, W3SchoolsDesarrollo IoT    - Programación de BBB    - Sensores y actuadores    - Comunicación MQTT    - Recursos: BeagleBoard.org, Arduino.ccInteligencia Artificial    - Machine Learning básico    - TensorFlow Lite    - Computer Vision    - Recursos: TensorFlow.org, Kaggle.comRedes y Telecomunicaciones    - Protocolos de red    - LoRaWAN, WiFi, 4G/5G    - Seguridad en redes    - Recursos: Cisco Networking Academy🛠️ Herramientas de Desarrollo AccesiblesIDEs: VS Code, PyCharm Community, Arduino IDEControl de Versiones: Git, GitHubContenedores: Docker, Docker ComposeMonitoreo: Prometheus, GrafanaDocumentación: Markdown, Sphinx🌐 Enlaces a Recursos GlobalesSoftware Libre y Open Source:GitHub - Repositorios de códigoGitLab - DevOps y CI/CDSourceForge - Software libreApache Software Foundation - Proyectos ApacheEducación en Tecnología:MIT OpenCourseWare - Cursos MIT gratuitosCoursera - Cursos onlineedX - Educación onlineKhan Academy - Matemáticas y cienciasComunidades de Desarrollo:Stack Overflow - Preguntas y respuestasReddit r/programming - ComunidadDev.to - Blog de desarrolladoresHacker News - Noticias tech8. DIAGRAMAS UML Y BASES DE DATOS📊 Diagrama de Clases Principal┌─────────────────┐
│      User       │
├─────────────────┤
│ +id: int        │
│ +username: str  │
│ +email: str     │
│ +role: str      │
│ +created_at     │
├─────────────────┤
│ +login()        │
│ +logout()       │
│ +update_profile()│
└────────┬────────┘
         │ uses
         ↓
┌─────────────────┐
│   Laboratory    │
├─────────────────┤
│ +id: int        │
│ +name: str      │
│ +type: str      │
│ +status: str    │
├─────────────────┤
│ +create_session()│
│ +get_results()  │
└────────┬────────┘
         │ monitors
         ↓
┌─────────────────┐       ┌─────────────────┐
│     Sensor      │───────│  AIPrediction   │
├─────────────────┤       ├─────────────────┤
│ +id: int        │       │ +model_type     │
│ +name: str      │       │ +confidence     │
│ +type: str      │       │ +prediction     │
├─────────────────┤       ├─────────────────┤
│ +read_data()    │       │ +predict()      │
│ +send_alert()   │       │ +update_model() │
└─────────────────┘       └────────┬────────┘
                                   │ predicts
                                   ↓
                          ┌─────────────────┐
                          │  PlantDisease   │
                          ├─────────────────┤
                          │ +id: int        │
                          │ +disease_name   │
                          │ +symptoms       │
                          │ +treatment      │
                          ├─────────────────┤
                          │ +classify()     │
                          └─────────────────┘
🗄️ Esquema de Base de Datos-- Tabla de Usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Laboratorios
CREATE TABLE laboratories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Sensores
CREATE TABLE sensors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    laboratory_id INTEGER REFERENCES laboratories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Lecturas de Sensores
CREATE TABLE sensor_readings (
    id SERIAL PRIMARY KEY,
    sensor_id INTEGER REFERENCES sensors(id),
    value DECIMAL(10,2) NOT NULL,
    unit VARCHAR(20),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Predicciones IA
CREATE TABLE ai_predictions (
    id SERIAL PRIMARY KEY,
    model_type VARCHAR(50) NOT NULL,
    input_data JSONB,
    prediction JSONB,
    confidence DECIMAL(5,4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Enfermedades de Plantas
CREATE TABLE plant_diseases (
    id SERIAL PRIMARY KEY,
    disease_name VARCHAR(100) NOT NULL,
    symptoms TEXT,
    treatment TEXT,
    prevention TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🔄 Diagrama de Secuencia - Clasificación de EnfermedadessequenceDiagram
    participant U as Usuario
    participant F as Frontend
    participant A as API
    participant M as Modelo Local
    participant P as PlantVillage API
    participant C as Cache
    
    U->>F: Sube imagen de planta
    F->>A: POST /classify-disease
    A->>C: Verificar caché
    C-->>A: Resultado (si existe)
    
    alt Cache Hit
        A-->>F: Retornar resultado
    else Cache Miss
        A->>M: Procesar con modelo local
        M-->>A: Predicción local
        
        alt Confianza < 80%
            A->>P: Consultar API externa
            P-->>A: Resultado externo
            A->>C: Guardar en caché
        end
        
        A-->>F: Retornar resultado final
    end
    
    F-->>U: Mostrar diagnóstico
9. EVIDENCIAS Y ENLACES📋 Evidencias del ProyectoGA5-220501095-AA1-EV07: Mapa de NavegaciónArchivo: Mapa de Navegación HTMLDescripción: Arquitectura de interfaz móvil optimizadaComponentes: Bottom navigation, wireframes, gestos táctilesCumplimiento: HU-21, RF006GA2-220501095-AA1-EV08: Arquitectura ExpandidaArchivo: Arquitectura Expandida HTMLDescripción: Sistema distribuido multi-plataformaComponentes: Drones, sensores, IA, políticas públicasCumplimiento: RF004, RF005GA3-220501095-AA1-EV09: Diagramas de NavegaciónArchivo: Diagramas de Navegación HTMLDescripción: Especificaciones técnicas móvilesComponentes: Touch targets, accesibilidad, responsive designCumplimiento: WCAG 2.1 AA🔗 Enlaces a Recursos ExternosRepositorios del ProyectoBackend: SIGCT-BackendFrontend: SIGCT-FrontendIoT: SIGCT-IoTDocumentación: SIGCT-DocsPlantVillage DatasetRepositorio Original: PlantVillage-DatasetNuestro Fork: SIGCT-PlantVillageAPI Externa: PlantVillage API (si existe)Documentación: PlantVillage DocsRecursos de IA y MLTensorFlow: TensorFlow.orgscikit-learn: Scikit-learn.orgKaggle: Kaggle.comPapers With Code: Paperswithcode.comHardware y IoTBeagleBoard: BeagleBoard.orgArduino: Arduino.ccRaspberry Pi: Raspberrypi.orgLoRaWAN: LoRaWAN.orgDesarrollo de SoftwareGitHub: GitHub.comGitLab: GitLab.comStack Overflow: StackOverflow.comMDN Web Docs: Developer.mozilla.org📚 Recursos EducativosCursos Online GratuitosMIT OpenCourseWare: OCW.MIT.eduCoursera: Coursera.orgedX: EdX.orgKhan Academy: KhanAcademy.orgComunidades de DesarrolloReddit Programming: Reddit.com/r/programmingDev.to: Dev.toHacker News: News.ycombinator.comFreeCodeCamp: FreeCodeCamp.orgRecursos SENAPortal SENA: SENA.edu.coSENA Virtual: SENAVirtual.edu.coCentro de Logística: Centro de Logística y Promoción Ecoturística del Magdalena10. ROADMAP DE IMPLEMENTACIÓN🚀 Fase 1: Fundación (Q1 2025)✅ Backend Django funcional✅ Frontend React básico✅ Despliegue en Render✅ Health checks implementados✅ COMPLETADO: Laboratorios STEM expandidos🔬 Fase 2: Laboratorios STEM (Q2 2025)✅ COMPLETADO: Laboratorio de Robótica✅ COMPLETADO: Laboratorio de Energías Renovables✅ COMPLETADO: Laboratorio de Agricultura Inteligente✅ COMPLETADO: Laboratorio de Software y Telemática✅ COMPLETADO: Navegación móvil optimizada🔄 En progreso: Gestos táctiles implementados🤖 Fase 3: IA Avanzada (Q3 2025)🆕 Integración PlantVillage Dataset🆕 Modelos de IA distribuidos🆕 Predicciones en tiempo real🆕 Accesibilidad completa WCAG 2.1 AA🔄 Testing exhaustivo🌍 Fase 4: Escalamiento (Q4 2025)🚀 Despliegue en clúster 3 BBB🚀 Optimización de recursos🚀 Documentación final🚀 Entrega del proyecto🚀 Comercialización📊 Métricas de ÉxitoUsuarios activos: 500+ campesinosPrecisión IA: >85%Tiempo respuesta: <3 segundosDisponibilidad: >99.5%Cobertura: 10,000+ hectáreas11. NUEVO: DIAGNÓSTICO COMPLETO DEL PROYECTO📊 Estado Actual del Proyecto✅ COMPONENTES IMPLEMENTADOSBackend Django:✅ core/settings.py - Configuración completa✅ core/urls.py - Enrutamiento principal✅ core/views.py - Health check para Render✅ apps/sensores/ - API de sensores✅ apps/laboratorios/ - API de laboratorios✅ apps/cursos/ - API de cursos✅ apps/usuarios/ - API de usuarios✅ apps/alertas/ - Sistema de alertas✅ requirements.txt - Dependencias Python✅ manage.py - Gestión DjangoFrontend React:✅ App.jsx - Aplicación principal con rutas✅ App.css - Estilos globales✅ main.jsx - Punto de entrada✅ index.css - Estilos baseLaboratorios STEM:✅ LaboratorioSensores.jsx - Monitoreo IoT✅ LaboratorioCuantico.jsx - Simulaciones cuánticas✅ LaboratorioRobotica.jsx - Control de robots✅ LaboratorioEnergias.jsx - Energías renovables✅ LaboratorioAgricultura.jsx - Agricultura inteligente✅ LaboratorioSoftware.jsx - Desarrollo de softwareNavegación Móvil:✅ BottomNav.jsx - Navegación inferior✅ BottomNav.css - Estilos de navegaciónPáginas:✅ Dashboard.jsx - Panel principal✅ Login.jsx - Autenticación🔄 COMPONENTES EN DESARROLLODashboard Avanzado:🔄 Widgets interactivos🔄 Gráficos en tiempo real🔄 Alertas inteligentesIntegración IA:🔄 PlantVillage Dataset🔄 Modelos de ML distribuidos🔄 Predicciones en tiempo real❌ COMPONENTES PENDIENTESHardware:❌ Clúster 3 BBB físicos❌ Sensores DHT22❌ Actuadores IoT❌ Comunicación LoRaWANTesting:❌ Tests unitarios❌ Tests de integración❌ Tests de rendimientoDocumentación:❌ Manual de usuario❌ Guía de instalación❌ API documentation📈 MÉTRICAS DE PROGRESOComponenteEstadoProgresoPrioridadBackend Django✅ Completo100%AltaFrontend React✅ Completo100%AltaLaboratorios STEM✅ Completo100%AltaNavegación Móvil✅ Completo100%AltaDashboard🔄 En desarrollo70%MediaIntegración IA🔄 En desarrollo30%AltaHardware BBB❌ Pendiente0%AltaTesting❌ Pendiente0%MediaDocumentación❌ Pendiente20%Baja12. NUEVO: CHECKLIST DE ARTEFACTOS📋 Artefactos Implementados✅ Backend (Django)[x] core/settings.py - Configuración del proyecto[x] core/urls.py - Enrutamiento principal[x] core/views.py - Vistas principales[x] core/wsgi.py - WSGI configuration[x] apps/sensores/models.py - Modelos de sensores[x] apps/sensores/serializers.py - Serializadores[x] apps/sensores/viewsets.py - ViewSets[x] apps/sensores/urls.py - URLs de sensores[x] requirements.txt - Dependencias Python[x] manage.py - Gestión Django✅ Frontend (React)[x] App.jsx - Aplicación principal[x] App.css - Estilos globales[x] main.jsx - Punto de entrada[x] index.css - Estilos base[x] pages/Dashboard.jsx - Panel principal[x] pages/Login.jsx - Autenticación[x] pages/laboratorios/LaboratorioSensores.jsx - Laboratorio de sensores[x] pages/laboratorios/LaboratorioCuantico.jsx - Laboratorio cuántico[x] pages/laboratorios/LaboratorioRobotica.jsx - Laboratorio de robótica[x] pages/laboratorios/LaboratorioEnergias.jsx - Laboratorio de energías[x] pages/laboratorios/LaboratorioAgricultura.jsx - Laboratorio de agricultura[x] pages/laboratorios/LaboratorioSoftware.jsx - Laboratorio de software[x] components/Navigation/BottomNav.jsx - Navegación móvil[x] components/Navigation/BottomNav.css - Estilos de navegación✅ Estilos CSS[x] LaboratorioSensores.css - Estilos del laboratorio de sensores[x] LaboratorioCuantico.css - Estilos del laboratorio cuántico[x] LaboratorioRobotica.css - Estilos del laboratorio de robótica[x] LaboratorioEnergias.css - Estilos del laboratorio de energías[x] LaboratorioAgricultura.css - Estilos del laboratorio de agricultura[x] LaboratorioSoftware.css - Estilos del laboratorio de software✅ Configuración[x] render.yaml - Configuración de despliegue[x] package.json - Dependencias Node.js[x] vite.config.js - Configuración de Vite[x] MASTERDOC.md - Documentación principal❌ Artefactos Pendientes🔄 Dashboard Avanzado[ ] components/Dashboard/SensorWidget.jsx - Widget de sensores[ ] components/Dashboard/ChartWidget.jsx - Widget de gráficos[ ] components/Dashboard/AlertWidget.jsx - Widget de alertas[ ] components/Dashboard/Dashboard.css - Estilos del dashboard🔄 Integración IA[ ] models/plant_disease_model.py - Modelo de enfermedades[ ] models/weather_prediction.py - Modelo de predicción climática[ ] services/plantvillage_api.py - Integración con PlantVillage[ ] services/ai_service.py - Servicio de IA🔄 Hardware[ ] iot/sensors/dht22.py - Control de sensor DHT22[ ] iot/sensors/soil_moisture.py - Control de humedad del suelo[ ] iot/communication/mqtt.py - Comunicación MQTT[ ] iot/communication/lora.py - Comunicación LoRaWAN🔄 Testing[ ] tests/backend/test_models.py - Tests de modelos[ ] tests/backend/test_views.py - Tests de vistas[ ] tests/frontend/test_components.jsx - Tests de componentes[ ] tests/integration/test_api.js - Tests de integración🔄 Documentación[ ] docs/user_manual.md - Manual de usuario[ ] docs/guia_instalacion.md - Guía de instalación[ ] docs/api_documentation.md - Documentación de API[ ] docs/hardware_setup.md - Configuración de hardware13. NUEVO: ARQUITECTURA WEBCLOUD + IA🌐 Arquitectura WebCloud Completagraph TB
    subgraph "CLOUD LAYER"
        A[🌐 Render.com] --> B[📊 PostgreSQL]
        A --> C[🔄 Redis Cache]
        A --> D[📁 Static Files]
    end
    
    subgraph "APPLICATION LAYER"
        E[🐍 Django Backend] --> F[⚛️ React Frontend]
        E --> G[📡 API REST]
        E --> H[🔌 WebSocket]
    end
    
    subgraph "AI/ML LAYER"
        I[🤖 TensorFlow Lite] --> J[🧠 PlantVillage Models]
        I --> K[📊 ARIMA Predictions]
        I --> L[🔍 Disease Classification]
    end
    
    subgraph "EDGE LAYER - 3 BBB CLUSTER"
        M[BBB-01: Gateway] --> N[BBB-02: AI/ML]
        N --> O[BBB-03: IoT/Sensors]
        O --> M
    end
    
    subgraph "SENSOR LAYER"
        P[🌡️ DHT22] --> Q[💧 Soil Moisture]
        Q --> R[📡 LoRaWAN]
        R --> S[📶 WiFi/4G]
    end
    
    A --> E
    E --> I
    I --> M
    M --> P
⚡ Flujo de Datos WebCloud + IAsequenceDiagram
    participant S as Sensores
    participant B3 as BBB-03 (IoT)
    participant B2 as BBB-02 (AI)
    participant B1 as BBB-01 (Gateway)
    participant C as Cloud (Render)
    participant A as AI Models
    participant U as Usuario
    
    S->>B3: Datos sensores
    B3->>B2: Procesar con IA local
    B2->>A: Modelos PlantVillage
    A-->>B2: Predicciones
    B2->>B1: Resultados
    B1->>C: Sincronizar con cloud
    C->>U: Dashboard actualizado
    
    Note over B3: Almacena en InfluxDB
    Note over B2: Caché en Redis
    Note over B1: API REST
    Note over C: PostgreSQL + Redis
🔧 Configuración WebCloudRender.com (Cloud Provider)Backend: Django + GunicornFrontend: React + ViteDatabase: PostgreSQLCache: RedisCDN: Static filesSSL: HTTPS automáticoBBB Cluster (Edge Computing)BBB-01: Gateway + API + DatabaseBBB-02: AI/ML + TensorFlow LiteBBB-03: IoT + Sensors + MQTT📊 Métricas de Rendimiento WebCloudMétricaCloudEdgeObjetivoLatencia<100ms<50ms<200msThroughput1000 req/s100 req/s500 req/sDisponibilidad99.9%99.5%99.0%Storage100GB4GB50GB🎯 CONCLUSIÓN🌟 Impacto TransformadorPilarDescripción🌐 DemocratizaciónSoftware libre accesible para todos📚 EducaciónSTEM accesible y práctica en zonas rurales🤖 InnovaciónInteligencia Artificial distribuida en el edge♻️ SostenibilidadTecnología que no sobrecarga recursos limitados🚀 Visión Futura 2025-2030: Ecosistema Inteligente Agrícola🎯 Misión ExpandidaCrear un ecosistema tecnológico recursivo y adaptable que lleve la investigación científica a zonas rurales, permitiendo que campesinos, indígenas y agricultores aprendan ciencia y tecnología de manera didáctica mientras realizan trabajos agrícolas reales y productivos.🌟 Visión 2030Ser el ecosistema de referencia en América Latina para la agricultura inteligente, donde la tecnología se convierte en un juego fácil de entender y usar, escalable desde sistemas embebidos básicos hasta soluciones industriales robustas.💡 Llamada a la Acción"El mundo debe salir de la ignorancia"Este proyecto es un paso más hacia el conocimiento adquirido, apoyado en muchos hombros de gigantes, para avanzar hacia una transformación real.Llevamos el poder del software - "Si lo piensas, lo puedes hacer" - libre y accesible, llevando la educación STEM a donde más se necesita. 🚀⚡ Optimización para 3 BeagleBone Black RevCEspecificaciones HardwareComponenteEspecificaciónMemoriaMáximo 512MB por nodoCPUARM Cortex-A8 1GHzStorage4GB eMMC + microSDRed100Mbps Ethernet + WiFi🔬 LABORATORIOS STEM INTEGRADOS1️⃣ Laboratorio de Sensores IoTEstado: ✅ OperativoFuncionalidad: Monitoreo IoT en tiempo realSensores: DHT22, Humedad de suelo, Predicciones ARIMACumplimiento: HU-21, RF006Archivo: frontend/src/pages/laboratorios/LaboratorioSensores.jsx2️⃣ Laboratorio CuánticoEstado: ✅ OperativoFuncionalidad: Simulaciones cuánticas interactivasEjercicios: Ecuaciones cuánticas, física avanzadaSistema: Puntuación y niveles múltiplesCumplimiento: HU-13Archivo: frontend/src/pages/laboratorios/LaboratorioCuantico.jsx3️⃣ Laboratorio de RobóticaEstado: ✅ ImplementadoFuncionalidad: Control de robots, programación visualTecnología: Simulador de robots, control de sensoresCaracterísticas: Programación en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioRobotica.jsx4️⃣ Laboratorio de Energías RenovablesEstado: ✅ ImplementadoFuncionalidad: Monitoreo de paneles solares y turbinas eólicasTecnología: Análisis de eficiencia energéticaCaracterísticas: Optimización de energía en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioEnergias.jsx5️⃣ Laboratorio de Agricultura InteligenteEstado: ✅ ImplementadoFuncionalidad: Análisis de cultivos, predicción de cosechasTecnología: Machine Learning, sensores especializados, PlantVillageCaracterísticas:   - Recomendaciones de cultivo   - Detección de enfermedadesArchivo: frontend/src/pages/laboratorios/LaboratorioAgricultura.jsx6️⃣ Laboratorio de Software y TelemáticaEstado: ✅ ImplementadoFuncionalidad: Desarrollo de software desde ceroTecnologías: Python, JavaScript, IoT, RedesCaracterísticas:   - Editor de código integrado   - Herramientas de desarrollo   - Simulador de redes   - Control de dispositivos BBBArchivo: frontend/src/pages/laboratorios/LaboratorioSoftware.jsx🧠 SISTEMA DE IA Y MACHINE LEARNINGPipeline de IA Distribuida📊 Datos Sensores → ⚙️ Procesamiento Edge → 🤖 Modelos ML → 🔮 Predicciones → 📱 Interfaz Usuario
                                              ↑
                              🌐 PlantVillage API + 📡 Datos Externos
🔬 Modelos de IA ImplementadosModeloAplicaciónTecnologíaARIMAPredicción climática 72hTime Series AnalysisRandom ForestClasificación de cultivosEnsemble LearningLSTMPredicción de rendimientoDeep LearningCNNAnálisis de imágenes satelitalesComputer VisionPlant DiseaseDetección de enfermedadesPlantVillage Integration📊 Métricas de RendimientoMétricaValor ObjetivoPrecisión IA>85% predicciones a 7 díasTiempo de respuesta<3 segundosDisponibilidad>99.5% uptimeCobertura10,000+ hectáreas🖥️ CLÚSTER 3 BEAGLEBONE BLACK REVC🔧 Configuración del ClústerNodoFunciónIPRecursosBBB-01Gateway/API10.0.0.11Django, PostgreSQL, NginxBBB-02IA/ML Processing10.0.0.12TensorFlow Lite, scikit-learn, RedisBBB-03IoT/Sensors10.0.0.13MQTT, LoRaWAN, InfluxDB, Sensores⚡ Optimizaciones EspecíficasBBB-01: Gateway y API (Nodo Principal)Funciones:Django BackendPostgreSQL DatabaseNginx Load BalancerFrontend React (servido estático)Recursos: 512MB RAM, 4GB eMMC   Optimización: SQLite para datos locales, PostgreSQL solo para críticosBBB-02: IA y Machine LearningFunciones:TensorFlow Lite (modelos ligeros)scikit-learn (análisis)Redis (caché de predicciones)Procesamiento de imágenes PlantVillageRecursos: 512MB RAM, microSD para modelos   Optimización: Modelos pre-entrenados, inferencia en edgeBBB-03: IoT y SensoresFunciones:MQTT Broker (Mosquitto)InfluxDB (time series)LoRaWAN GatewayControl de sensores DHT22Recursos: 512MB RAM, GPIO para sensores   Optimización: Datos en tiempo real, almacenamiento local🔄 Flujo de Datos OptimizadoSensores → BBB-03 (IoT) → BBB-02 (IA) → BBB-01 (API) → Usuario
             ↓              ↓            ↓
         InfluxDB      Redis Cache   PostgreSQL
🌱 INTEGRACIÓN PLANTVILLAGE DATASETEstrategia de Integración InteligenteNO cargamos las imágenes localmente - utilizamos una estrategia híbrida optimizada.🔗 Recursos PlantVillageRecursoEnlaceRepositorio OriginalPlantVillage-DatasetNuestro ForkSIGCT-PlantVillageEstrategiaAPI externa + caché inteligente💡 Método de Integraciónclass PlantVillageIntegration:
    def __init__(self):
        self.api_url = "[https://api.plantvillage.org](https://api.plantvillage.org)"
        self.cache = Redis()
        self.local_models = "models/plant_disease/"

    def classify_disease(self, image_path):
        # 1. Verificar caché local
        if self.cache.exists(image_path):
            return self.cache.get(image_path)
        
        # 2. Procesar con modelo local (TensorFlow Lite)
        prediction = self.local_model.predict(image_path)
        
        # 3. Si confianza < 80%, consultar API externa
        if prediction.confidence < 0.8:
            result = self.external_api.classify(image_path)
            self.cache.set(image_path, result, ttl=3600)
            return result
        
        return prediction
📊 Ventajas de esta Estrategia✅ Sin sobrecarga: No almacenamos 50,000+ imágenes   ✅ Rendimiento: Modelos locales para casos comunes   ✅ Escalabilidad: API externa para casos complejos   ✅ Caché inteligente: Solo guardamos resultados útiles7. LABORATORIO DE SOFTWARE Y TELEMÁTICA💻 Curso Intensivo de Desarrollo de Software📚 Módulos del LaboratorioFundamentos de Programación    - Python desde cero    - JavaScript moderno    - Algoritmos y estructuras de datos    - Recursos: Python.org, MDN Web DocsDesarrollo Web    - HTML5, CSS3, JavaScript ES6+    - React/Vue.js para frontend    - Django/Flask para backend    - Recursos: FreeCodeCamp, W3SchoolsDesarrollo IoT    - Programación de BBB    - Sensores y actuadores    - Comunicación MQTT    - Recursos: BeagleBoard.org, Arduino.ccInteligencia Artificial    - Machine Learning básico    - TensorFlow Lite    - Computer Vision    - Recursos: TensorFlow.org, Kaggle.comRedes y Telecomunicaciones    - Protocolos de red    - LoRaWAN, WiFi, 4G/5G    - Seguridad en redes    - Recursos: Cisco Networking Academy🛠️ Herramientas de Desarrollo AccesiblesIDEs: VS Code, PyCharm Community, Arduino IDEControl de Versiones: Git, GitHubContenedores: Docker, Docker ComposeMonitoreo: Prometheus, GrafanaDocumentación: Markdown, Sphinx🌐 Enlaces a Recursos GlobalesSoftware Libre y Open Source:GitHub - Repositorios de códigoGitLab - DevOps y CI/CDSourceForge - Software libreApache Software Foundation - Proyectos ApacheEducación en Tecnología:MIT OpenCourseWare - Cursos MIT gratuitosCoursera - Cursos onlineedX - Educación onlineKhan Academy - Matemáticas y cienciasComunidades de Desarrollo:Stack Overflow - Preguntas y respuestasReddit r/programming - ComunidadDev.to - Blog de desarrolladoresHacker News - Noticias tech8. DIAGRAMAS UML Y BASES DE DATOS📊 Diagrama de Clases Principal┌─────────────────┐
│      User       │
├─────────────────┤
│ +id: int        │
│ +username: str  │
│ +email: str     │
│ +role: str      │
│ +created_at     │
├─────────────────┤
│ +login()        │
│ +logout()       │
│ +update_profile()│
└────────┬────────┘
         │ uses
         ↓
┌─────────────────┐
│   Laboratory    │
├─────────────────┤
│ +id: int        │
│ +name: str      │
│ +type: str      │
│ +status: str    │
├─────────────────┤
│ +create_session()│
│ +get_results()  │
└────────┬────────┘
         │ monitors
         ↓
┌─────────────────┐       ┌─────────────────┐
│     Sensor      │───────│  AIPrediction   │
├─────────────────┤       ├─────────────────┤
│ +id: int        │       │ +model_type     │
│ +name: str      │       │ +confidence     │
│ +type: str      │       │ +prediction     │
├─────────────────┤       ├─────────────────┤
│ +read_data()    │       │ +predict()      │
│ +send_alert()   │       │ +update_model() │
└─────────────────┘       └────────┬────────┘
                                   │ predicts
                                   ↓
                          ┌─────────────────┐
                          │  PlantDisease   │
                          ├─────────────────┤
                          │ +id: int        │
                          │ +disease_name   │
                          │ +symptoms       │
                          │ +treatment      │
                          ├─────────────────┤
                          │ +classify()     │
                          └─────────────────┘
🗄️ Esquema de Base de Datos-- Tabla de Usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Laboratorios
CREATE TABLE laboratories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Sensores
CREATE TABLE sensors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    laboratory_id INTEGER REFERENCES laboratories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Lecturas de Sensores
CREATE TABLE sensor_readings (
    id SERIAL PRIMARY KEY,
    sensor_id INTEGER REFERENCES sensors(id),
    value DECIMAL(10,2) NOT NULL,
    unit VARCHAR(20),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Predicciones IA
CREATE TABLE ai_predictions (
    id SERIAL PRIMARY KEY,
    model_type VARCHAR(50) NOT NULL,
    input_data JSONB,
    prediction JSONB,
    confidence DECIMAL(5,4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Enfermedades de Plantas
CREATE TABLE plant_diseases (
    id SERIAL PRIMARY KEY,
    disease_name VARCHAR(100) NOT NULL,
    symptoms TEXT,
    treatment TEXT,
    prevention TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🔄 Diagrama de Secuencia - Clasificación de EnfermedadessequenceDiagram
    participant U as Usuario
    participant F as Frontend
    participant A as API
    participant M as Modelo Local
    participant P as PlantVillage API
    participant C as Cache
    
    U->>F: Sube imagen de planta
    F->>A: POST /classify-disease
    A->>C: Verificar caché
    C-->>A: Resultado (si existe)
    
    alt Cache Hit
        A-->>F: Retornar resultado
    else Cache Miss
        A->>M: Procesar con modelo local
        M-->>A: Predicción local
        
        alt Confianza < 80%
            A->>P: Consultar API externa
            P-->>A: Resultado externo
            A->>C: Guardar en caché
        end
        
        A-->>F: Retornar resultado final
    end
    
    F-->>U: Mostrar diagnóstico
9. EVIDENCIAS Y ENLACES📋 Evidencias del ProyectoGA5-220501095-AA1-EV07: Mapa de NavegaciónArchivo: Mapa de Navegación HTMLDescripción: Arquitectura de interfaz móvil optimizadaComponentes: Bottom navigation, wireframes, gestos táctilesCumplimiento: HU-21, RF006GA2-220501095-AA1-EV08: Arquitectura ExpandidaArchivo: Arquitectura Expandida HTMLDescripción: Sistema distribuido multi-plataformaComponentes: Drones, sensores, IA, políticas públicasCumplimiento: RF004, RF005GA3-220501095-AA1-EV09: Diagramas de NavegaciónArchivo: Diagramas de Navegación HTMLDescripción: Especificaciones técnicas móvilesComponentes: Touch targets, accesibilidad, responsive designCumplimiento: WCAG 2.1 AA🔗 Enlaces a Recursos ExternosRepositorios del ProyectoBackend: SIGCT-BackendFrontend: SIGCT-FrontendIoT: SIGCT-IoTDocumentación: SIGCT-DocsPlantVillage DatasetRepositorio Original: PlantVillage-DatasetNuestro Fork: SIGCT-PlantVillageAPI Externa: PlantVillage API (si existe)Documentación: PlantVillage DocsRecursos de IA y MLTensorFlow: TensorFlow.orgscikit-learn: Scikit-learn.orgKaggle: Kaggle.comPapers With Code: Paperswithcode.comHardware y IoTBeagleBoard: BeagleBoard.orgArduino: Arduino.ccRaspberry Pi: Raspberrypi.orgLoRaWAN: LoRaWAN.orgDesarrollo de SoftwareGitHub: GitHub.comGitLab: GitLab.comStack Overflow: StackOverflow.comMDN Web Docs: Developer.mozilla.org📚 Recursos EducativosCursos Online GratuitosMIT OpenCourseWare: OCW.MIT.eduCoursera: Coursera.orgedX: EdX.orgKhan Academy: KhanAcademy.orgComunidades de DesarrolloReddit Programming: Reddit.com/r/programmingDev.to: Dev.toHacker News: News.ycombinator.comFreeCodeCamp: FreeCodeCamp.orgRecursos SENAPortal SENA: SENA.edu.coSENA Virtual: SENAVirtual.edu.coCentro de Logística: Centro de Logística y Promoción Ecoturística del Magdalena10. ROADMAP DE IMPLEMENTACIÓN🚀 Fase 1: Fundación (Q1 2025)✅ Backend Django funcional✅ Frontend React básico✅ Despliegue en Render✅ Health checks implementados✅ COMPLETADO: Laboratorios STEM expandidos🔬 Fase 2: Laboratorios STEM (Q2 2025)✅ COMPLETADO: Laboratorio de Robótica✅ COMPLETADO: Laboratorio de Energías Renovables✅ COMPLETADO: Laboratorio de Agricultura Inteligente✅ COMPLETADO: Laboratorio de Software y Telemática✅ COMPLETADO: Navegación móvil optimizada🔄 En progreso: Gestos táctiles implementados🤖 Fase 3: IA Avanzada (Q3 2025)🆕 Integración PlantVillage Dataset🆕 Modelos de IA distribuidos🆕 Predicciones en tiempo real🆕 Accesibilidad completa WCAG 2.1 AA🔄 Testing exhaustivo🌍 Fase 4: Escalamiento (Q4 2025)🚀 Despliegue en clúster 3 BBB🚀 Optimización de recursos🚀 Documentación final🚀 Entrega del proyecto🚀 Comercialización📊 Métricas de ÉxitoUsuarios activos: 500+ campesinosPrecisión IA: >85%Tiempo respuesta: <3 segundosDisponibilidad: >99.5%Cobertura: 10,000+ hectáreas11. NUEVO: DIAGNÓSTICO COMPLETO DEL PROYECTO📊 Estado Actual del Proyecto✅ COMPONENTES IMPLEMENTADOSBackend Django:✅ core/settings.py - Configuración completa✅ core/urls.py - Enrutamiento principal✅ core/views.py - Health check para Render✅ apps/sensores/ - API de sensores✅ apps/laboratorios/ - API de laboratorios✅ apps/cursos/ - API de cursos✅ apps/usuarios/ - API de usuarios✅ apps/alertas/ - Sistema de alertas✅ requirements.txt - Dependencias Python✅ manage.py - Gestión DjangoFrontend React:✅ App.jsx - Aplicación principal con rutas✅ App.css - Estilos globales✅ main.jsx - Punto de entrada✅ index.css - Estilos baseLaboratorios STEM:✅ LaboratorioSensores.jsx - Monitoreo IoT✅ LaboratorioCuantico.jsx - Simulaciones cuánticas✅ LaboratorioRobotica.jsx - Control de robots✅ LaboratorioEnergias.jsx - Energías renovables✅ LaboratorioAgricultura.jsx - Agricultura inteligente✅ LaboratorioSoftware.jsx - Desarrollo de softwareNavegación Móvil:✅ BottomNav.jsx - Navegación inferior✅ BottomNav.css - Estilos de navegaciónPáginas:✅ Dashboard.jsx - Panel principal✅ Login.jsx - Autenticación🔄 COMPONENTES EN DESARROLLODashboard Avanzado:🔄 Widgets interactivos🔄 Gráficos en tiempo real🔄 Alertas inteligentesIntegración IA:🔄 PlantVillage Dataset🔄 Modelos de ML distribuidos🔄 Predicciones en tiempo real❌ COMPONENTES PENDIENTESHardware:❌ Clúster 3 BBB físicos❌ Sensores DHT22❌ Actuadores IoT❌ Comunicación LoRaWANTesting:❌ Tests unitarios❌ Tests de integración❌ Tests de rendimientoDocumentación:❌ Manual de usuario❌ Guía de instalación❌ API documentation📈 MÉTRICAS DE PROGRESOComponenteEstadoProgresoPrioridadBackend Django✅ Completo100%AltaFrontend React✅ Completo100%AltaLaboratorios STEM✅ Completo100%AltaNavegación Móvil✅ Completo100%AltaDashboard🔄 En desarrollo70%MediaIntegración IA🔄 En desarrollo30%AltaHardware BBB❌ Pendiente0%AltaTesting❌ Pendiente0%MediaDocumentación❌ Pendiente20%Baja12. NUEVO: CHECKLIST DE ARTEFACTOS📋 Artefactos Implementados✅ Backend (Django)[x] core/settings.py - Configuración del proyecto[x] core/urls.py - Enrutamiento principal[x] core/views.py - Vistas principales[x] core/wsgi.py - WSGI configuration[x] apps/sensores/models.py - Modelos de sensores[x] apps/sensores/serializers.py - Serializadores[x] apps/sensores/viewsets.py - ViewSets[x] apps/sensores/urls.py - URLs de sensores[x] requirements.txt - Dependencias Python[x] manage.py - Gestión Django✅ Frontend (React)[x] App.jsx - Aplicación principal[x] App.css - Estilos globales[x] main.jsx - Punto de entrada[x] index.css - Estilos base[x] pages/Dashboard.jsx - Panel principal[x] pages/Login.jsx - Autenticación[x] pages/laboratorios/LaboratorioSensores.jsx - Laboratorio de sensores[x] pages/laboratorios/LaboratorioCuantico.jsx - Laboratorio cuántico[x] pages/laboratorios/LaboratorioRobotica.jsx - Laboratorio de robótica[x] pages/laboratorios/LaboratorioEnergias.jsx - Laboratorio de energías[x] pages/laboratorios/LaboratorioAgricultura.jsx - Laboratorio de agricultura[x] pages/laboratorios/LaboratorioSoftware.jsx - Laboratorio de software[x] components/Navigation/BottomNav.jsx - Navegación móvil[x] components/Navigation/BottomNav.css - Estilos de navegación✅ Estilos CSS[x] LaboratorioSensores.css - Estilos del laboratorio de sensores[x] LaboratorioCuantico.css - Estilos del laboratorio cuántico[x] LaboratorioRobotica.css - Estilos del laboratorio de robótica[x] LaboratorioEnergias.css - Estilos del laboratorio de energías[x] LaboratorioAgricultura.css - Estilos del laboratorio de agricultura[x] LaboratorioSoftware.css - Estilos del laboratorio de software✅ Configuración[x] render.yaml - Configuración de despliegue[x] package.json - Dependencias Node.js[x] vite.config.js - Configuración de Vite[x] MASTERDOC.md - Documentación principal❌ Artefactos Pendientes🔄 Dashboard Avanzado[ ] components/Dashboard/SensorWidget.jsx - Widget de sensores[ ] components/Dashboard/ChartWidget.jsx - Widget de gráficos[ ] components/Dashboard/AlertWidget.jsx - Widget de alertas[ ] components/Dashboard/Dashboard.css - Estilos del dashboard🔄 Integración IA[ ] models/plant_disease_model.py - Modelo de enfermedades[ ] models/weather_prediction.py - Modelo de predicción climática[ ] services/plantvillage_api.py - Integración con PlantVillage[ ] services/ai_service.py - Servicio de IA🔄 Hardware[ ] iot/sensors/dht22.py - Control de sensor DHT22[ ] iot/sensors/soil_moisture.py - Control de humedad del suelo[ ] iot/communication/mqtt.py - Comunicación MQTT[ ] iot/communication/lora.py - Comunicación LoRaWAN🔄 Testing[ ] tests/backend/test_models.py - Tests de modelos[ ] tests/backend/test_views.py - Tests de vistas[ ] tests/frontend/test_components.jsx - Tests de componentes[ ] tests/integration/test_api.js - Tests de integración🔄 Documentación[ ] docs/user_manual.md - Manual de usuario[ ] docs/guia_instalacion.md - Guía de instalación[ ] docs/api_documentation.md - Documentación de API[ ] docs/hardware_setup.md - Configuración de hardware13. NUEVO: ARQUITECTURA WEBCLOUD + IA🌐 Arquitectura WebCloud Completagraph TB
    subgraph "CLOUD LAYER"
        A[🌐 Render.com] --> B[📊 PostgreSQL]
        A --> C[🔄 Redis Cache]
        A --> D[📁 Static Files]
    end
    
    subgraph "APPLICATION LAYER"
        E[🐍 Django Backend] --> F[⚛️ React Frontend]
        E --> G[📡 API REST]
        E --> H[🔌 WebSocket]
    end
    
    subgraph "AI/ML LAYER"
        I[🤖 TensorFlow Lite] --> J[🧠 PlantVillage Models]
        I --> K[📊 ARIMA Predictions]
        I --> L[🔍 Disease Classification]
    end
    
    subgraph "EDGE LAYER - 3 BBB CLUSTER"
        M[BBB-01: Gateway] --> N[BBB-02: AI/ML]
        N --> O[BBB-03: IoT/Sensors]
        O --> M
    end
    
    subgraph "SENSOR LAYER"
        P[🌡️ DHT22] --> Q[💧 Soil Moisture]
        Q --> R[📡 LoRaWAN]
        R --> S[📶 WiFi/4G]
    end
    
    A --> E
    E --> I
    I --> M
    M --> P
⚡ Flujo de Datos WebCloud + IAsequenceDiagram
    participant S as Sensores
    participant B3 as BBB-03 (IoT)
    participant B2 as BBB-02 (AI)
    participant B1 as BBB-01 (Gateway)
    participant C as Cloud (Render)
    participant A as AI Models
    participant U as Usuario
    
    S->>B3: Datos sensores
    B3->>B2: Procesar con IA local
    B2->>A: Modelos PlantVillage
    A-->>B2: Predicciones
    B2->>B1: Resultados
    B1->>C: Sincronizar con cloud
    C->>U: Dashboard actualizado
    
    Note over B3: Almacena en InfluxDB
    Note over B2: Caché en Redis
    Note over B1: API REST
    Note over C: PostgreSQL + Redis
🔧 Configuración WebCloudRender.com (Cloud Provider)Backend: Django + GunicornFrontend: React + ViteDatabase: PostgreSQLCache: RedisCDN: Static filesSSL: HTTPS automáticoBBB Cluster (Edge Computing)BBB-01: Gateway + API + DatabaseBBB-02: AI/ML + TensorFlow LiteBBB-03: IoT + Sensors + MQTT📊 Métricas de Rendimiento WebCloudMétricaCloudEdgeObjetivoLatencia<100ms<50ms<200msThroughput1000 req/s100 req/s500 req/sDisponibilidad99.9%99.5%99.0%Storage100GB4GB50GB🎯 CONCLUSIÓN🌟 Impacto TransformadorPilarDescripción🌐 DemocratizaciónSoftware libre accesible para todos📚 EducaciónSTEM accesible y práctica en zonas rurales🤖 InnovaciónInteligencia Artificial distribuida en el edge♻️ SostenibilidadTecnología que no sobrecarga recursos limitados🚀 Visión Futura 2025-2030: Ecosistema Inteligente Agrícola🎯 Misión ExpandidaCrear un ecosistema tecnológico recursivo y adaptable que lleve la investigación científica a zonas rurales, permitiendo que campesinos, indígenas y agricultores aprendan ciencia y tecnología de manera didáctica mientras realizan trabajos agrícolas reales y productivos.🌟 Visión 2030Ser el ecosistema de referencia en América Latina para la agricultura inteligente, donde la tecnología se convierte en un juego fácil de entender y usar, escalable desde sistemas embebidos básicos hasta soluciones industriales robustas.💡 Llamada a la Acción"El mundo debe salir de la ignorancia"Este proyecto es un paso más hacia el conocimiento adquirido, apoyado en muchos hombros de gigantes, para avanzar hacia una transformación real.Llevamos el poder del software - "Si lo piensas, lo puedes hacer" - libre y accesible, llevando la educación STEM a donde más se necesita. 🚀⚡ Optimización para 3 BeagleBone Black RevCEspecificaciones HardwareComponenteEspecificaciónMemoriaMáximo 512MB por nodoCPUARM Cortex-A8 1GHzStorage4GB eMMC + microSDRed100Mbps Ethernet + WiFi🔬 LABORATORIOS STEM INTEGRADOS1️⃣ Laboratorio de Sensores IoTEstado: ✅ OperativoFuncionalidad: Monitoreo IoT en tiempo realSensores: DHT22, Humedad de suelo, Predicciones ARIMACumplimiento: HU-21, RF006Archivo: frontend/src/pages/laboratorios/LaboratorioSensores.jsx2️⃣ Laboratorio CuánticoEstado: ✅ OperativoFuncionalidad: Simulaciones cuánticas interactivasEjercicios: Ecuaciones cuánticas, física avanzadaSistema: Puntuación y niveles múltiplesCumplimiento: HU-13Archivo: frontend/src/pages/laboratorios/LaboratorioCuantico.jsx3️⃣ Laboratorio de RobóticaEstado: ✅ ImplementadoFuncionalidad: Control de robots, programación visualTecnología: Simulador de robots, control de sensoresCaracterísticas: Programación en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioRobotica.jsx4️⃣ Laboratorio de Energías RenovablesEstado: ✅ ImplementadoFuncionalidad: Monitoreo de paneles solares y turbinas eólicasTecnología: Análisis de eficiencia energéticaCaracterísticas: Optimización de energía en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioEnergias.jsx5️⃣ Laboratorio de Agricultura InteligenteEstado: ✅ ImplementadoFuncionalidad: Análisis de cultivos, predicción de cosechasTecnología: Machine Learning, sensores especializados, PlantVillageCaracterísticas:   - Recomendaciones de cultivo   - Detección de enfermedadesArchivo: frontend/src/pages/laboratorios/LaboratorioAgricultura.jsx6️⃣ Laboratorio de Software y TelemáticaEstado: ✅ ImplementadoFuncionalidad: Desarrollo de software desde ceroTecnologías: Python, JavaScript, IoT, RedesCaracterísticas:   - Editor de código integrado   - Herramientas de desarrollo   - Simulador de redes   - Control de dispositivos BBBArchivo: frontend/src/pages/laboratorios/LaboratorioSoftware.jsx🧠 SISTEMA DE IA Y MACHINE LEARNINGPipeline de IA Distribuida📊 Datos Sensores → ⚙️ Procesamiento Edge → 🤖 Modelos ML → 🔮 Predicciones → 📱 Interfaz Usuario
                                              ↑
                              🌐 PlantVillage API + 📡 Datos Externos
🔬 Modelos de IA ImplementadosModeloAplicaciónTecnologíaARIMAPredicción climática 72hTime Series AnalysisRandom ForestClasificación de cultivosEnsemble LearningLSTMPredicción de rendimientoDeep LearningCNNAnálisis de imágenes satelitalesComputer VisionPlant DiseaseDetección de enfermedadesPlantVillage Integration📊 Métricas de RendimientoMétricaValor ObjetivoPrecisión IA>85% predicciones a 7 díasTiempo de respuesta<3 segundosDisponibilidad>99.5% uptimeCobertura10,000+ hectáreas🖥️ CLÚSTER 3 BEAGLEBONE BLACK REVC🔧 Configuración del ClústerNodoFunciónIPRecursosBBB-01Gateway/API10.0.0.11Django, PostgreSQL, NginxBBB-02IA/ML Processing10.0.0.12TensorFlow Lite, scikit-learn, RedisBBB-03IoT/Sensors10.0.0.13MQTT, LoRaWAN, InfluxDB, Sensores⚡ Optimizaciones EspecíficasBBB-01: Gateway y API (Nodo Principal)Funciones:Django BackendPostgreSQL DatabaseNginx Load BalancerFrontend React (servido estático)Recursos: 512MB RAM, 4GB eMMC   Optimización: SQLite para datos locales, PostgreSQL solo para críticosBBB-02: IA y Machine LearningFunciones:TensorFlow Lite (modelos ligeros)scikit-learn (análisis)Redis (caché de predicciones)Procesamiento de imágenes PlantVillageRecursos: 512MB RAM, microSD para modelos   Optimización: Modelos pre-entrenados, inferencia en edgeBBB-03: IoT y SensoresFunciones:MQTT Broker (Mosquitto)InfluxDB (time series)LoRaWAN GatewayControl de sensores DHT22Recursos: 512MB RAM, GPIO para sensores   Optimización: Datos en tiempo real, almacenamiento local🔄 Flujo de Datos OptimizadoSensores → BBB-03 (IoT) → BBB-02 (IA) → BBB-01 (API) → Usuario
             ↓              ↓            ↓
         InfluxDB      Redis Cache   PostgreSQL
🌱 INTEGRACIÓN PLANTVILLAGE DATASETEstrategia de Integración InteligenteNO cargamos las imágenes localmente - utilizamos una estrategia híbrida optimizada.🔗 Recursos PlantVillageRecursoEnlaceRepositorio OriginalPlantVillage-DatasetNuestro ForkSIGCT-PlantVillageEstrategiaAPI externa + caché inteligente💡 Método de Integraciónclass PlantVillageIntegration:
    def __init__(self):
        self.api_url = "[https://api.plantvillage.org](https://api.plantvillage.org)"
        self.cache = Redis()
        self.local_models = "models/plant_disease/"

    def classify_disease(self, image_path):
        # 1. Verificar caché local
        if self.cache.exists(image_path):
            return self.cache.get(image_path)
        
        # 2. Procesar con modelo local (TensorFlow Lite)
        prediction = self.local_model.predict(image_path)
        
        # 3. Si confianza < 80%, consultar API externa
        if prediction.confidence < 0.8:
            result = self.external_api.classify(image_path)
            self.cache.set(image_path, result, ttl=3600)
            return result
        
        return prediction
📊 Ventajas de esta Estrategia✅ Sin sobrecarga: No almacenamos 50,000+ imágenes   ✅ Rendimiento: Modelos locales para casos comunes   ✅ Escalabilidad: API externa para casos complejos   ✅ Caché inteligente: Solo guardamos resultados útiles7. LABORATORIO DE SOFTWARE Y TELEMÁTICA💻 Curso Intensivo de Desarrollo de Software📚 Módulos del LaboratorioFundamentos de Programación    - Python desde cero    - JavaScript moderno    - Algoritmos y estructuras de datos    - Recursos: Python.org, MDN Web DocsDesarrollo Web    - HTML5, CSS3, JavaScript ES6+    - React/Vue.js para frontend    - Django/Flask para backend    - Recursos: FreeCodeCamp, W3SchoolsDesarrollo IoT    - Programación de BBB    - Sensores y actuadores    - Comunicación MQTT    - Recursos: BeagleBoard.org, Arduino.ccInteligencia Artificial    - Machine Learning básico    - TensorFlow Lite    - Computer Vision    - Recursos: TensorFlow.org, Kaggle.comRedes y Telecomunicaciones    - Protocolos de red    - LoRaWAN, WiFi, 4G/5G    - Seguridad en redes    - Recursos: Cisco Networking Academy🛠️ Herramientas de Desarrollo AccesiblesIDEs: VS Code, PyCharm Community, Arduino IDEControl de Versiones: Git, GitHubContenedores: Docker, Docker ComposeMonitoreo: Prometheus, GrafanaDocumentación: Markdown, Sphinx🌐 Enlaces a Recursos GlobalesSoftware Libre y Open Source:GitHub - Repositorios de códigoGitLab - DevOps y CI/CDSourceForge - Software libreApache Software Foundation - Proyectos ApacheEducación en Tecnología:MIT OpenCourseWare - Cursos MIT gratuitosCoursera - Cursos onlineedX - Educación onlineKhan Academy - Matemáticas y cienciasComunidades de Desarrollo:Stack Overflow - Preguntas y respuestasReddit r/programming - ComunidadDev.to - Blog de desarrolladoresHacker News - Noticias tech8. DIAGRAMAS UML Y BASES DE DATOS📊 Diagrama de Clases Principal┌─────────────────┐
│      User       │
├─────────────────┤
│ +id: int        │
│ +username: str  │
│ +email: str     │
│ +role: str      │
│ +created_at     │
├─────────────────┤
│ +login()        │
│ +logout()       │
│ +update_profile()│
└────────┬────────┘
         │ uses
         ↓
┌─────────────────┐
│   Laboratory    │
├─────────────────┤
│ +id: int        │
│ +name: str      │
│ +type: str      │
│ +status: str    │
├─────────────────┤
│ +create_session()│
│ +get_results()  │
└────────┬────────┘
         │ monitors
         ↓
┌─────────────────┐       ┌─────────────────┐
│     Sensor      │───────│  AIPrediction   │
├─────────────────┤       ├─────────────────┤
│ +id: int        │       │ +model_type     │
│ +name: str      │       │ +confidence     │
│ +type: str      │       │ +prediction     │
├─────────────────┤       ├─────────────────┤
│ +read_data()    │       │ +predict()      │
│ +send_alert()   │       │ +update_model() │
└─────────────────┘       └────────┬────────┘
                                   │ predicts
                                   ↓
                          ┌─────────────────┐
                          │  PlantDisease   │
                          ├─────────────────┤
                          │ +id: int        │
                          │ +disease_name   │
                          │ +symptoms       │
                          │ +treatment      │
                          ├─────────────────┤
                          │ +classify()     │
                          └─────────────────┘
🗄️ Esquema de Base de Datos-- Tabla de Usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Laboratorios
CREATE TABLE laboratories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Sensores
CREATE TABLE sensors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    laboratory_id INTEGER REFERENCES laboratories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Lecturas de Sensores
CREATE TABLE sensor_readings (
    id SERIAL PRIMARY KEY,
    sensor_id INTEGER REFERENCES sensors(id),
    value DECIMAL(10,2) NOT NULL,
    unit VARCHAR(20),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Predicciones IA
CREATE TABLE ai_predictions (
    id SERIAL PRIMARY KEY,
    model_type VARCHAR(50) NOT NULL,
    input_data JSONB,
    prediction JSONB,
    confidence DECIMAL(5,4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Enfermedades de Plantas
CREATE TABLE plant_diseases (
    id SERIAL PRIMARY KEY,
    disease_name VARCHAR(100) NOT NULL,
    symptoms TEXT,
    treatment TEXT,
    prevention TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🔄 Diagrama de Secuencia - Clasificación de EnfermedadessequenceDiagram
    participant U as Usuario
    participant F as Frontend
    participant A as API
    participant M as Modelo Local
    participant P as PlantVillage API
    participant C as Cache
    
    U->>F: Sube imagen de planta
    F->>A: POST /classify-disease
    A->>C: Verificar caché
    C-->>A: Resultado (si existe)
    
    alt Cache Hit
        A-->>F: Retornar resultado
    else Cache Miss
        A->>M: Procesar con modelo local
        M-->>A: Predicción local
        
        alt Confianza < 80%
            A->>P: Consultar API externa
            P-->>A: Resultado externo
            A->>C: Guardar en caché
        end
        
        A-->>F: Retornar resultado final
    end
    
    F-->>U: Mostrar diagnóstico
9. EVIDENCIAS Y ENLACES📋 Evidencias del ProyectoGA5-220501095-AA1-EV07: Mapa de NavegaciónArchivo: Mapa de Navegación HTMLDescripción: Arquitectura de interfaz móvil optimizadaComponentes: Bottom navigation, wireframes, gestos táctilesCumplimiento: HU-21, RF006GA2-220501095-AA1-EV08: Arquitectura ExpandidaArchivo: Arquitectura Expandida HTMLDescripción: Sistema distribuido multi-plataformaComponentes: Drones, sensores, IA, políticas públicasCumplimiento: RF004, RF005GA3-220501095-AA1-EV09: Diagramas de NavegaciónArchivo: Diagramas de Navegación HTMLDescripción: Especificaciones técnicas móvilesComponentes: Touch targets, accesibilidad, responsive designCumplimiento: WCAG 2.1 AA🔗 Enlaces a Recursos ExternosRepositorios del ProyectoBackend: SIGCT-BackendFrontend: SIGCT-FrontendIoT: SIGCT-IoTDocumentación: SIGCT-DocsPlantVillage DatasetRepositorio Original: PlantVillage-DatasetNuestro Fork: SIGCT-PlantVillageAPI Externa: PlantVillage API (si existe)Documentación: PlantVillage DocsRecursos de IA y MLTensorFlow: TensorFlow.orgscikit-learn: Scikit-learn.orgKaggle: Kaggle.comPapers With Code: Paperswithcode.comHardware y IoTBeagleBoard: BeagleBoard.orgArduino: Arduino.ccRaspberry Pi: Raspberrypi.orgLoRaWAN: LoRaWAN.orgDesarrollo de SoftwareGitHub: GitHub.comGitLab: GitLab.comStack Overflow: StackOverflow.comMDN Web Docs: Developer.mozilla.org📚 Recursos EducativosCursos Online GratuitosMIT OpenCourseWare: OCW.MIT.eduCoursera: Coursera.orgedX: EdX.orgKhan Academy: KhanAcademy.orgComunidades de DesarrolloReddit Programming: Reddit.com/r/programmingDev.to: Dev.toHacker News: News.ycombinator.comFreeCodeCamp: FreeCodeCamp.orgRecursos SENAPortal SENA: SENA.edu.coSENA Virtual: SENAVirtual.edu.coCentro de Logística: Centro de Logística y Promoción Ecoturística del Magdalena10. ROADMAP DE IMPLEMENTACIÓN🚀 Fase 1: Fundación (Q1 2025)✅ Backend Django funcional✅ Frontend React básico✅ Despliegue en Render✅ Health checks implementados✅ COMPLETADO: Laboratorios STEM expandidos🔬 Fase 2: Laboratorios STEM (Q2 2025)✅ COMPLETADO: Laboratorio de Robótica✅ COMPLETADO: Laboratorio de Energías Renovables✅ COMPLETADO: Laboratorio de Agricultura Inteligente✅ COMPLETADO: Laboratorio de Software y Telemática✅ COMPLETADO: Navegación móvil optimizada🔄 En progreso: Gestos táctiles implementados🤖 Fase 3: IA Avanzada (Q3 2025)🆕 Integración PlantVillage Dataset🆕 Modelos de IA distribuidos🆕 Predicciones en tiempo real🆕 Accesibilidad completa WCAG 2.1 AA🔄 Testing exhaustivo🌍 Fase 4: Escalamiento (Q4 2025)🚀 Despliegue en clúster 3 BBB🚀 Optimización de recursos🚀 Documentación final🚀 Entrega del proyecto🚀 Comercialización📊 Métricas de ÉxitoUsuarios activos: 500+ campesinosPrecisión IA: >85%Tiempo respuesta: <3 segundosDisponibilidad: >99.5%Cobertura: 10,000+ hectáreas11. NUEVO: DIAGNÓSTICO COMPLETO DEL PROYECTO📊 Estado Actual del Proyecto✅ COMPONENTES IMPLEMENTADOSBackend Django:✅ core/settings.py - Configuración completa✅ core/urls.py - Enrutamiento principal✅ core/views.py - Health check para Render✅ apps/sensores/ - API de sensores✅ apps/laboratorios/ - API de laboratorios✅ apps/cursos/ - API de cursos✅ apps/usuarios/ - API de usuarios✅ apps/alertas/ - Sistema de alertas✅ requirements.txt - Dependencias Python✅ manage.py - Gestión DjangoFrontend React:✅ App.jsx - Aplicación principal con rutas✅ App.css - Estilos globales✅ main.jsx - Punto de entrada✅ index.css - Estilos baseLaboratorios STEM:✅ LaboratorioSensores.jsx - Monitoreo IoT✅ LaboratorioCuantico.jsx - Simulaciones cuánticas✅ LaboratorioRobotica.jsx - Control de robots✅ LaboratorioEnergias.jsx - Energías renovables✅ LaboratorioAgricultura.jsx - Agricultura inteligente✅ LaboratorioSoftware.jsx - Desarrollo de softwareNavegación Móvil:✅ BottomNav.jsx - Navegación inferior✅ BottomNav.css - Estilos de navegaciónPáginas:✅ Dashboard.jsx - Panel principal✅ Login.jsx - Autenticación🔄 COMPONENTES EN DESARROLLODashboard Avanzado:🔄 Widgets interactivos🔄 Gráficos en tiempo real🔄 Alertas inteligentesIntegración IA:🔄 PlantVillage Dataset🔄 Modelos de ML distribuidos🔄 Predicciones en tiempo real❌ COMPONENTES PENDIENTESHardware:❌ Clúster 3 BBB físicos❌ Sensores DHT22❌ Actuadores IoT❌ Comunicación LoRaWANTesting:❌ Tests unitarios❌ Tests de integración❌ Tests de rendimientoDocumentación:❌ Manual de usuario❌ Guía de instalación❌ API documentation📈 MÉTRICAS DE PROGRESOComponenteEstadoProgresoPrioridadBackend Django✅ Completo100%AltaFrontend React✅ Completo100%AltaLaboratorios STEM✅ Completo100%AltaNavegación Móvil✅ Completo100%AltaDashboard🔄 En desarrollo70%MediaIntegración IA🔄 En desarrollo30%AltaHardware BBB❌ Pendiente0%AltaTesting❌ Pendiente0%MediaDocumentación❌ Pendiente20%Baja12. NUEVO: CHECKLIST DE ARTEFACTOS📋 Artefactos Implementados✅ Backend (Django)[x] core/settings.py - Configuración del proyecto[x] core/urls.py - Enrutamiento principal[x] core/views.py - Vistas principales[x] core/wsgi.py - WSGI configuration[x] apps/sensores/models.py - Modelos de sensores[x] apps/sensores/serializers.py - Serializadores[x] apps/sensores/viewsets.py - ViewSets[x] apps/sensores/urls.py - URLs de sensores[x] requirements.txt - Dependencias Python[x] manage.py - Gestión Django✅ Frontend (React)[x] App.jsx - Aplicación principal[x] App.css - Estilos globales[x] main.jsx - Punto de entrada[x] index.css - Estilos base[x] pages/Dashboard.jsx - Panel principal[x] pages/Login.jsx - Autenticación[x] pages/laboratorios/LaboratorioSensores.jsx - Laboratorio de sensores[x] pages/laboratorios/LaboratorioCuantico.jsx - Laboratorio cuántico[x] pages/laboratorios/LaboratorioRobotica.jsx - Laboratorio de robótica[x] pages/laboratorios/LaboratorioEnergias.jsx - Laboratorio de energías[x] pages/laboratorios/LaboratorioAgricultura.jsx - Laboratorio de agricultura[x] pages/laboratorios/LaboratorioSoftware.jsx - Laboratorio de software[x] components/Navigation/BottomNav.jsx - Navegación móvil[x] components/Navigation/BottomNav.css - Estilos de navegación✅ Estilos CSS[x] LaboratorioSensores.css - Estilos del laboratorio de sensores[x] LaboratorioCuantico.css - Estilos del laboratorio cuántico[x] LaboratorioRobotica.css - Estilos del laboratorio de robótica[x] LaboratorioEnergias.css - Estilos del laboratorio de energías[x] LaboratorioAgricultura.css - Estilos del laboratorio de agricultura[x] LaboratorioSoftware.css - Estilos del laboratorio de software✅ Configuración[x] render.yaml - Configuración de despliegue[x] package.json - Dependencias Node.js[x] vite.config.js - Configuración de Vite[x] MASTERDOC.md - Documentación principal❌ Artefactos Pendientes🔄 Dashboard Avanzado[ ] components/Dashboard/SensorWidget.jsx - Widget de sensores[ ] components/Dashboard/ChartWidget.jsx - Widget de gráficos[ ] components/Dashboard/AlertWidget.jsx - Widget de alertas[ ] components/Dashboard/Dashboard.css - Estilos del dashboard🔄 Integración IA[ ] models/plant_disease_model.py - Modelo de enfermedades[ ] models/weather_prediction.py - Modelo de predicción climática[ ] services/plantvillage_api.py - Integración con PlantVillage[ ] services/ai_service.py - Servicio de IA🔄 Hardware[ ] iot/sensors/dht22.py - Control de sensor DHT22[ ] iot/sensors/soil_moisture.py - Control de humedad del suelo[ ] iot/communication/mqtt.py - Comunicación MQTT[ ] iot/communication/lora.py - Comunicación LoRaWAN🔄 Testing[ ] tests/backend/test_models.py - Tests de modelos[ ] tests/backend/test_views.py - Tests de vistas[ ] tests/frontend/test_components.jsx - Tests de componentes[ ] tests/integration/test_api.js - Tests de integración🔄 Documentación[ ] docs/user_manual.md - Manual de usuario[ ] docs/guia_instalacion.md - Guía de instalación[ ] docs/api_documentation.md - Documentación de API[ ] docs/hardware_setup.md - Configuración de hardware13. NUEVO: ARQUITECTURA WEBCLOUD + IA🌐 Arquitectura WebCloud Completagraph TB
    subgraph "CLOUD LAYER"
        A[🌐 Render.com] --> B[📊 PostgreSQL]
        A --> C[🔄 Redis Cache]
        A --> D[📁 Static Files]
    end
    
    subgraph "APPLICATION LAYER"
        E[🐍 Django Backend] --> F[⚛️ React Frontend]
        E --> G[📡 API REST]
        E --> H[🔌 WebSocket]
    end
    
    subgraph "AI/ML LAYER"
        I[🤖 TensorFlow Lite] --> J[🧠 PlantVillage Models]
        I --> K[📊 ARIMA Predictions]
        I --> L[🔍 Disease Classification]
    end
    
    subgraph "EDGE LAYER - 3 BBB CLUSTER"
        M[BBB-01: Gateway] --> N[BBB-02: AI/ML]
        N --> O[BBB-03: IoT/Sensors]
        O --> M
    end
    
    subgraph "SENSOR LAYER"
        P[🌡️ DHT22] --> Q[💧 Soil Moisture]
        Q --> R[📡 LoRaWAN]
        R --> S[📶 WiFi/4G]
    end
    
    A --> E
    E --> I
    I --> M
    M --> P
⚡ Flujo de Datos WebCloud + IAsequenceDiagram
    participant S as Sensores
    participant B3 as BBB-03 (IoT)
    participant B2 as BBB-02 (AI)
    participant B1 as BBB-01 (Gateway)
    participant C as Cloud (Render)
    participant A as AI Models
    participant U as Usuario
    
    S->>B3: Datos sensores
    B3->>B2: Procesar con IA local
    B2->>A: Modelos PlantVillage
    A-->>B2: Predicciones
    B2->>B1: Resultados
    B1->>C: Sincronizar con cloud
    C->>U: Dashboard actualizado
    
    Note over B3: Almacena en InfluxDB
    Note over B2: Caché en Redis
    Note over B1: API REST
    Note over C: PostgreSQL + Redis
🔧 Configuración WebCloudRender.com (Cloud Provider)Backend: Django + GunicornFrontend: React + ViteDatabase: PostgreSQLCache: RedisCDN: Static filesSSL: HTTPS automáticoBBB Cluster (Edge Computing)BBB-01: Gateway + API + DatabaseBBB-02: AI/ML + TensorFlow LiteBBB-03: IoT + Sensors + MQTT📊 Métricas de Rendimiento WebCloudMétricaCloudEdgeObjetivoLatencia<100ms<50ms<200msThroughput1000 req/s100 req/s500 req/sDisponibilidad99.9%99.5%99.0%Storage100GB4GB50GB🎯 CONCLUSIÓN🌟 Impacto TransformadorPilarDescripción🌐 DemocratizaciónSoftware libre accesible para todos📚 EducaciónSTEM accesible y práctica en zonas rurales🤖 InnovaciónInteligencia Artificial distribuida en el edge♻️ SostenibilidadTecnología que no sobrecarga recursos limitados🚀 Visión Futura 2025-2030: Ecosistema Inteligente Agrícola🎯 Misión ExpandidaCrear un ecosistema tecnológico recursivo y adaptable que lleve la investigación científica a zonas rurales, permitiendo que campesinos, indígenas y agricultores aprendan ciencia y tecnología de manera didáctica mientras realizan trabajos agrícolas reales y productivos.🌟 Visión 2030Ser el ecosistema de referencia en América Latina para la agricultura inteligente, donde la tecnología se convierte en un juego fácil de entender y usar, escalable desde sistemas embebidos básicos hasta soluciones industriales robustas.💡 Llamada a la Acción"El mundo debe salir de la ignorancia"Este proyecto es un paso más hacia el conocimiento adquirido, apoyado en muchos hombros de gigantes, para avanzar hacia una transformación real.Llevamos el poder del software - "Si lo piensas, lo puedes hacer" - libre y accesible, llevando la educación STEM a donde más se necesita. 🚀⚡ Optimización para 3 BeagleBone Black RevCEspecificaciones HardwareComponenteEspecificaciónMemoriaMáximo 512MB por nodoCPUARM Cortex-A8 1GHzStorage4GB eMMC + microSDRed100Mbps Ethernet + WiFi🔬 LABORATORIOS STEM INTEGRADOS1️⃣ Laboratorio de Sensores IoTEstado: ✅ OperativoFuncionalidad: Monitoreo IoT en tiempo realSensores: DHT22, Humedad de suelo, Predicciones ARIMACumplimiento: HU-21, RF006Archivo: frontend/src/pages/laboratorios/LaboratorioSensores.jsx2️⃣ Laboratorio CuánticoEstado: ✅ OperativoFuncionalidad: Simulaciones cuánticas interactivasEjercicios: Ecuaciones cuánticas, física avanzadaSistema: Puntuación y niveles múltiplesCumplimiento: HU-13Archivo: frontend/src/pages/laboratorios/LaboratorioCuantico.jsx3️⃣ Laboratorio de RobóticaEstado: ✅ ImplementadoFuncionalidad: Control de robots, programación visualTecnología: Simulador de robots, control de sensoresCaracterísticas: Programación en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioRobotica.jsx4️⃣ Laboratorio de Energías RenovablesEstado: ✅ ImplementadoFuncionalidad: Monitoreo de paneles solares y turbinas eólicasTecnología: Análisis de eficiencia energéticaCaracterísticas: Optimización de energía en tiempo realArchivo: frontend/src/pages/laboratorios/LaboratorioEnergias.jsx5️⃣ Laboratorio de Agricultura InteligenteEstado: ✅ ImplementadoFuncionalidad: Análisis de cultivos, predicción de cosechasTecnología: Machine Learning, sensores especializados, PlantVillageCaracterísticas:   - Recomendaciones de cultivo   - Detección de enfermedadesArchivo: frontend/src/pages/laboratorios/LaboratorioAgricultura.jsx6️⃣ Laboratorio de Software y TelemáticaEstado: ✅ ImplementadoFuncionalidad: Desarrollo de software desde ceroTecnologías: Python, JavaScript, IoT, RedesCaracterísticas:   - Editor de código integrado   - Herramientas de desarrollo   - Simulador de redes   - Control de dispositivos BBBArchivo: frontend/src/pages/laboratorios/LaboratorioSoftware.jsx🧠 SISTEMA DE IA Y MACHINE LEARNINGPipeline de IA Distribuida📊 Datos Sensores → ⚙️ Procesamiento Edge → 🤖 Modelos ML → 🔮 Predicciones → 📱 Interfaz Usuario
                                              ↑
                              🌐 PlantVillage API + 📡 Datos Externos
🔬 Modelos de IA ImplementadosModeloAplicaciónTecnologíaARIMAPredicción climática 72hTime Series AnalysisRandom ForestClasificación de cultivosEnsemble LearningLSTMPredicción de rendimientoDeep LearningCNNAnálisis de imágenes satelitalesComputer VisionPlant DiseaseDetección de enfermedadesPlantVillage Integration📊 Métricas de RendimientoMétricaValor ObjetivoPrecisión IA>85% predicciones a 7 díasTiempo de respuesta<3 segundosDisponibilidad>99.5% uptimeCobertura10,000+ hectáreas🖥️ CLÚSTER 3 BEAGLEBONE BLACK REVC🔧 Configuración del ClústerNodoFunciónIPRecursosBBB-01Gateway/API10.0.0.11Django, PostgreSQL, NginxBBB-02IA/ML Processing10.0.0.12TensorFlow Lite, scikit-learn, RedisBBB-03IoT/Sensors10.0.0.13MQTT, LoRaWAN, InfluxDB, Sensores⚡ Optimizaciones EspecíficasBBB-01: Gateway y API (Nodo Principal)Funciones:Django BackendPostgreSQL DatabaseNginx Load BalancerFrontend React (servido estático)Recursos: 512MB RAM, 4GB eMMC   Optimización: SQLite para datos locales, PostgreSQL solo para críticosBBB-02: IA y Machine LearningFunciones:TensorFlow Lite (modelos ligeros)scikit-learn (análisis)Redis (caché de predicciones)Procesamiento de imágenes PlantVillageRecursos: 512MB RAM, microSD para modelos   Optimización: Modelos pre-entrenados, inferencia en edgeBBB-03: IoT y SensoresFunciones:MQTT Broker (Mosquitto)InfluxDB (time series)LoRaWAN GatewayControl de sensores DHT22Recursos: 512MB RAM, GPIO para sensores   Optimización: Datos en tiempo real, almacenamiento local🔄 Flujo de Datos OptimizadoSensores → BBB-03 (IoT) → BBB-02 (IA) → BBB-01 (API) → Usuario
             ↓              ↓            ↓
         InfluxDB      Redis Cache   PostgreSQL
🌱 INTEGRACIÓN PLANTVILLAGE DATASETEstrategia de Integración InteligenteNO cargamos las imágenes localmente - utilizamos una estrategia híbrida optimizada.🔗 Recursos PlantVillageRecursoEnlaceRepositorio OriginalPlantVillage-DatasetNuestro ForkSIGCT-PlantVillageEstrategiaAPI externa + caché inteligente💡 Método de Integraciónclass PlantVillageIntegration:
    def __init__(self):
        self.api_url = "[https://api.plantvillage.org](https://api.plantvillage.org)"
        self.cache = Redis()
        self.local_models = "models/plant_disease/"

    def classify_disease(self, image_path):
        # 1. Verificar caché local
        if self.cache.exists(image_path):
            return self.cache.get(image_path)
        
        # 2. Procesar con modelo local (TensorFlow Lite)
        prediction = self.local_model.predict(image_path)
        
        # 3. Si confianza < 80%, consultar API externa
        if prediction.confidence < 0.8:
            result = self.external_api.classify(image_path)
            self.cache.set(image_path, result, ttl=3600)
            return result
        
        return prediction
