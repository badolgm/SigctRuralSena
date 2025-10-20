-- docs/bases-datos/ESQUEMAS_DB.sql
-- Esquema de Base de Datos para SIGC&T-Rural (PostgreSQL/SQLite)

-- 1. Tabla de Usuarios y Roles (Permite la Matriz de Acceso del Mapa de Navegación)
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    username VARCHAR(150) UNIQUE NOT NULL,
    email VARCHAR(254) UNIQUE NOT NULL,
    password_hash VARCHAR(128) NOT NULL,
    rol VARCHAR(20) NOT NULL CHECK (rol IN ('campesino', 'tecnico', 'administrador')),
    fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ubicacion GEOMETRY(Point, 4326) -- Ubicación geográfica del usuario/finca
);

-- 2. Tabla de Nodos (Dispositivos BeagleBone)
CREATE TABLE Nodos_IoT (
    node_id VARCHAR(50) PRIMARY KEY,
    usuario_id INTEGER REFERENCES Usuarios(id),
    nombre_finca VARCHAR(100) NOT NULL,
    tipo_cultivo VARCHAR(50),
    ultima_conexion TIMESTAMP WITH TIME ZONE,
    estado VARCHAR(10) CHECK (estado IN ('online', 'offline', 'error'))
);

-- 3. Tabla de Datos de Sensores (Millones de datos brutos)
CREATE TABLE Datos_Sensores (
    id BIGSERIAL PRIMARY KEY,
    node_id VARCHAR(50) REFERENCES Nodos_IoT(node_id),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    temperatura_celsius REAL,
    humedad_relativa REAL,
    ph_suelo REAL,
    luz_lux INTEGER,
    bateria_mv INTEGER
);

-- 4. Tabla de Resultados de Predicción (Generados por los modelos IA/ML)
CREATE TABLE Predicciones_ML (
    id SERIAL PRIMARY KEY,
    node_id VARCHAR(50) REFERENCES Nodos_IoT(node_id),
    timestamp_prediccion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    tipo_modelo VARCHAR(50) NOT NULL CHECK (tipo_modelo IN ('ARIMA', 'CNN', 'LSTM')),
    resultado_json JSONB, -- Ejemplo: {"fecha_cosecha": "2025-05-01", "confianza": 0.92}
    alerta_critica BOOLEAN DEFAULT FALSE,
    probabilidad_enfermedad REAL
);

-- 5. Tabla de Contenidos Educativos (Plataforma STEM)
CREATE TABLE Contenidos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    area VARCHAR(50) NOT NULL, -- Matematicas, Electronica, Sistemas
    nivel_dificultad INTEGER,
    contenido_markdown TEXT,
    url_video VARCHAR(255)
);