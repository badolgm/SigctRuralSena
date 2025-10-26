# 🧭 Guía completa: Git, ejecución local y diagnóstico de proyectos

## 📌 1. Error: “fatal: detected dubious ownership in repository”

### 🧩 Causa
Git detecta que el repositorio está en un sistema o unidad donde no puede verificar quién es el propietario de los archivos (por ejemplo, en `D:/` o unidades externas en Windows).

Esto ocurre por motivos de **seguridad**: Git evita ejecutar comandos en carpetas cuyo propietario no puede confirmar.

---

## ⚙️ 2. Solución: marcar el directorio como “seguro”

### ✅ Paso a paso

1. Abre tu terminal **Git Bash** o **PowerShell**.
2. Ejecuta el siguiente comando (ajusta la ruta según tu proyecto):
   ```bash
   git config --global --add safe.directory D:/SigctRuralSena


Verifica que se agregó correctamente:

git config --global --get-all safe.directory


Salida esperada:

D:/SigctRuralSena


Ahora puedes usar Git con normalidad:

git status
git branch
git pull
git push

🔒 3. Quitar la marca de seguridad (revertir el cambio)

Si deseas eliminar la carpeta de la lista de directorios seguros:

git config --global --unset safe.directory D:/SigctRuralSena


O eliminar todas las rutas seguras configuradas:

git config --global --unset-all safe.directory


💡 Útil si mueves repositorios entre máquinas o compartes el equipo con otros usuarios.

🧰 4. Correr el proyecto localmente
🔹 Paso 1: Clonar o abrir el repositorio
git clone https://github.com/usuario/SigctRuralSena.git
cd SigctRuralSena

🔹 Paso 2: Instalar dependencias
🚀 Frontend (React, Angular, Vue, etc.)
npm install
# o
yarn install

⚙️ Backend (Node.js, Express, Python, etc.)
npm install
# o si usas Python:
pip install -r requirements.txt

🔹 Paso 3: Configurar variables de entorno

Crea un archivo .env con tus configuraciones:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=1234

🔹 Paso 4: Iniciar el servidor

Frontend:

npm start


Backend:

npm run dev
# o
python app.py

🧪 5. Diagnóstico de problemas
⚡ Frontend
Problema	Causa posible	Solución
La app no carga	Faltan dependencias	Ejecuta npm install
Error “CORS policy”	El backend no permite solicitudes externas	Habilita CORS en el backend
Pantalla en blanco	Error de rutas o build	Abre la consola del navegador (F12 → Console)
Errores de build	Versiones incompatibles	Borra node_modules y reinstala (rm -rf node_modules && npm install)
🧩 Backend
Problema	Causa	Solución
Error al conectar BD	Credenciales o variables mal configuradas	Revisa .env y logs
Puerto ocupado	Otro servicio usa el mismo puerto	Cambia el valor de PORT
CORS bloqueado	Falta middleware CORS	Agrega cors() en Express o configuración similar
Error 500	Fallo en el código o rutas	Revisa logs de consola o del servidor
☁️ 6. Diagnóstico en despliegues
🚀 En Render

Verifica los logs del servicio (pestaña Logs).

Asegúrate de tener las variables de entorno configuradas.

Comprueba los comandos:

Build Command: npm run build

Start Command: npm start

Asegúrate de escuchar el puerto correcto:

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0');

☁️ En AWS (EC2, Elastic Beanstalk o S3)

Verifica que el Security Group tenga abierto el puerto 80 o 443.

Revisa los logs del sistema (/var/log/messages, pm2 logs, etc.).

Comprueba permisos de archivos y variables de entorno (.env).

Si usas S3 + CloudFront, limpia la caché después de subir una nueva versión.

🧾 7. Ejemplo completo de flujo
# 1️⃣ Corregir problema de propiedad
git config --global --add safe.directory D:/SigctRuralSena

# 2️⃣ Verificar el estado del repositorio
git status

# 3️⃣ Instalar dependencias y configurar entorno
npm install
cp .env.example .env

# 4️⃣ Ejecutar el proyecto localmente
npm start

# 5️⃣ Revisar errores y logs
# - Frontend: consola del navegador (F12)
# - Backend: consola o logs del servidor

💡 Recomendación final

Mantén un archivo README.md actualizado con:

Instrucciones de instalación

Variables de entorno necesarias

Comandos de ejecución y despliegue

Esto facilitará que cualquier colaborador (o tú en el futuro) pueda levantar y diagnosticar el proyecto fácilmente.

Autor: Guía generada con ayuda de ChatGPT (GPT-5)
Proyecto: SigctRuralSena
Última actualización: Octubre 2025


---

¿Quieres que te agregue al final del archivo una pequeña sección con comandos de diagnós