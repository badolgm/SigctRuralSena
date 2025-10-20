# DESPLIEGUE V1: Arquitectura Híbrida Cloud/Edge

Este documento detalla el procedimiento para replicar la arquitectura SIGC&T-Rural v2, que opera con un backend en la nube (Render) y nodos de sensórica en el Edge (BeagleBone Black Rev C).

## 1. Despliegue del Backend (API REST y Base de Datos)

El backend utiliza Python (Django/DRF) y se aloja en Render.

### 1.1. Prerrequisitos

*   Cuenta en Render.com (o plataforma similar como Railway/Fly.io).
*   Base de datos PostgreSQL (Render provee bases de datos gratuitas).

### 1.2. Configuración del Repositorio en Render

1.  Crear un nuevo servicio web en Render.
2.  Conectar al repositorio GitHub: `https://github.com/badolgm/SigctRuralSena.git`.
3.  **Root Directory:** `backend/`
4.  **Runtime:** Python 3
5.  **Build Command:**
    ```bash
    pip install -r requirements.txt
    python manage.py collectstatic --noinput
    python manage.py makemigrations
    python manage.py migrate
    ```
6.  **Start Command:**
    ```bash
    gunicorn core.wsgi:application --bind 0.0.0.0:$PORT
    ```

### 1.3. Variables de Entorno Críticas

Asegúrese de definir las siguientes variables de entorno en Render:

| Variable | Descripción | Valor de Ejemplo |
| :--- | :--- | :--- |
| `SECRET_KEY` | Clave secreta de Django. | Generar una nueva y segura. |
| `DEBUG` | Establecer en `False` en producción. | `False` |
| `ALLOWED_HOSTS` | Dominios permitidos. | `sigct-backend.onrender.com` |
| `DATABASE_URL` | URL de conexión a la base de datos PostgreSQL. | `postgres://user:pass@host/db` |
| `MQTT_BROKER_HOST` | Host del broker MQTT. | `broker.hivemq.com` (o su broker) |
| `FRONTEND_URL` | URL del servicio React para CORS. | `https://sigct-frontend.onrender.com` |

## 2. Despliegue del Frontend (SPA React)

El frontend es una aplicación de página única (SPA) que consume la API del backend.

### 2.1. Configuración en Render (Servicio Web)

1.  Crear un segundo servicio web en Render (el que falló en su intento).
2.  Conectar al repositorio.
3.  **Root Directory:** `frontend/`
4.  **Runtime:** Node
5.  **Build Command (Vite/React):**
    ```bash
    npm install
    npm run build
    ```
6.  **Start Command (servir estáticos):**
    ```bash
    # Usar un servidor estático para servir los archivos de la carpeta 'dist'
    npm install -g serve
    serve -s dist -l $PORT
    ```

### 2.2. Configuración Crítica del Frontend

Para que la aplicación React se conecte al backend desplegado:

| Variable | Descripción | Dónde se usa |
| :--- | :--- | :--- |
| `VITE_API_URL` | URL de la API del backend. | React `fetch`/`axios` |

**Nota Importante:** Esta variable (`VITE_API_URL`) DEBE ser la URL pública del servicio Backend: `https://sigct-backend.onrender.com`.

## 3. Configuración del Nodo Edge (BeagleBone Black)

El nodo BBB actúa como gateway y punto de ejecución de scripts.

### 3.1. Preparación del Sistema Operativo

1.  Flashear la imagen Debian/Ubuntu compatible con BeagleBone.
2.  Instalar dependencias Python: `sudo apt-get install python3-pip`.

### 3.2. Instalación de Scripts IoT

1.  Clonar el repositorio localmente en el BBB.
2.  Instalar dependencias específicas de IoT:
    ```bash
    cd iot
    # Asumiendo que existe un requirements-bbb.txt
    pip install -r requirements-bbb.txt
    ```

### 3.3. Configuración del Servicio de Monitoreo

Los scripts de recolección de datos (`read_dht22.py`) y predicción (`predictor.py`) deben ejecutarse como servicios en segundo plano (`systemd`).

1.  **Script de Recolección (`bbb3-sensores/dht22/read_dht22.py`):** Modificar para publicar datos en el tópico MQTT adecuado (ej: `sigct/data/bbb3`).

2.  **Configuración del Servicio `systemd` (Ejemplo para DHT22):**
    *Crear /etc/systemd/system/sigct-sensor.service:*
    ```ini
    [Unit]
    Description=SIGCT Sensor DTH22 Service
    After=network.target

    [Service]
    ExecStart=/usr/bin/python3 /path/to/your/repo/iot/bbb3-sensores/dht22/read_dht22.py
    WorkingDirectory=/path/to/your/repo/
    StandardOutput=inherit
    StandardError=inherit
    Restart=always
    User=debian

    [Install]
    WantedBy=multi-user.target
    ```

    *Habilitar y ejecutar:*
    ```bash
    sudo systemctl enable sigct-sensor.service
    sudo systemctl start sigct-sensor.service
    ```

## 4. Conexión MQTT (Intermediario de Datos)

El broker MQTT debe ser accesible desde el BeagleBone y desde el Backend (si el backend suscribe a tópicos de control).

*   **Uso:** Broker externo (ej: HiveMQ) o interno (Ej: Mosquitto instalado en el BBB o en el servidor principal).
*   **Recomendación:** Usar un broker externo (como HiveMQ) para simplificar la configuración de red entre el BBB y Render.

**Flujo de datos:**
`BBB sensor` ➡️ `MQTT Broker` ➡️ `Backend API (suscrito)` ➡️ `PostgreSQL` ➡️ `Frontend (Gráficas)`