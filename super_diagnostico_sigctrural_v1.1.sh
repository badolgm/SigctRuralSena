#!/bin/bash
# ╔═══════════════════════════════════════════════════════════════╗
# ║       🔍 SUPER DIAGNÓSTICO SIGC&T-RURAL v1.1 (ADSO)          ║
# ║      Autor: Bernardo A. Gómez Montoya (SENA - ADSO)          ║
# ╚═══════════════════════════════════════════════════════════════╝

# ===============================
# CONFIGURACIÓN INICIAL
# ===============================
PROJECT="SIGCT-Rural"
ROOT=$(pwd)
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="$ROOT/backups"
BACKUP_TAR="$BACKUP_DIR/sigctrural_backup_${DATE}.tar.gz"
LOG_DIR="$ROOT/diagnostics"
LOG_FILE="$LOG_DIR/diagnostic_${DATE}.log"

mkdir -p "$BACKUP_DIR" "$LOG_DIR"

# ===============================
# COLORES PARA SALIDA
# ===============================
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
CYAN="\033[1;36m"
RESET="\033[0m"

# Encabezado
echo -e "${CYAN}"
echo "============================================"
echo "  SUPER DIAGNÓSTICO $PROJECT  (v1.1)"
echo "  Directorio raíz: $ROOT"
echo "  Backup dir: $BACKUP_DIR"
echo "  Logs: $LOG_DIR"
echo "============================================"
echo -e "${RESET}"

# ===============================
# 0️⃣ BACKUP AUTOMÁTICO SEGURO
# ===============================
echo -e "\n${YELLOW}>> Paso 0: Backup seguro (git tag + tar)${RESET}"
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo -e "${GREEN}✓ Repositorio git detectado.${RESET}"
    git tag "diag-backup-${DATE}" >/dev/null 2>&1 && echo -e "${GREEN}✓ Tag git creado: diag-backup-${DATE}${RESET}"
else
    echo -e "${RED}✗ No se detectó repositorio Git.${RESET}"
fi

echo "Creando tar.gz backup (sin node_modules, .venv ni backups previos)..."
tar --exclude='./frontend/node_modules' \
    --exclude='./**/.venv' \
    --exclude='./backups/*.tar.gz' \
    -czf "$BACKUP_TAR" . >/dev/null 2>&1

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Backup creado correctamente: $BACKUP_TAR${RESET}"
else
    echo -e "${RED}✗ Falló creación del backup.${RESET}"
fi

# ===============================
# 1️⃣ VALIDACIÓN DE ESTRUCTURA BASE
# ===============================
echo -e "\n${YELLOW}>> Paso 1: Estructura base del proyecto${RESET}"
BASE_FILES=("README.md" "render.yaml" "docker-compose.yml" "Dockerfile" ".gitignore" "LICENSE")
for file in "${BASE_FILES[@]}"; do
  [ -f "$file" ] && echo -e "   ${GREEN}✓${RESET} $file" || echo -e "   ${RED}✗ Falta${RESET}: $file"
done

# ===============================
# 2️⃣ BACKEND DJANGO
# ===============================
echo -e "\n${YELLOW}>> Paso 2: Backend Django${RESET}"

if [ -d "backend" ]; then
  cd backend || exit

  echo -e "${CYAN}📂 Directorio backend detectado${RESET}"
  MAIN_FILES=("manage.py" "requirements.txt" "packages.txt")
  for f in "${MAIN_FILES[@]}"; do
    [ -f "$f" ] && echo -e "   ${GREEN}✓${RESET} $f" || echo -e "   ${RED}✗ Falta${RESET}: $f"
  done

  echo -e "\n${CYAN}🧩 Verificando aplicaciones Django${RESET}"
  APPS=("alertas" "cursos" "ia_plantvillage" "laboratorios" "sensores" "usuarios")
  for app in "${APPS[@]}"; do
    echo -e "\n🧠 App: ${CYAN}$app${RESET}"
    for f in "__init__.py" "models.py" "views.py" "serializers.py" "urls.py" "admin.py"; do
      [ -f "apps/$app/$f" ] && echo -e "   ${GREEN}✓${RESET} $f" || echo -e "   ${RED}✗ Falta${RESET}: apps/$app/$f"
    done
  done

  echo -e "\n${CYAN}⚙️ Verificando settings y rutas...${RESET}"
  for f in "core/settings.py" "core/urls.py" "core/wsgi.py" "core/asgi.py"; do
    [ -f "$f" ] && echo -e "   ${GREEN}✓${RESET} $f" || echo -e "   ${RED}✗ Falta${RESET}: $f"
  done

  echo -e "\n${CYAN}🔍 Revisando imports Django${RESET}"
  grep -r "from backend.apps" core/ apps/ > "$LOG_DIR/imports_backend_${DATE}.log"
  echo "   ↳ Imports guardados en $LOG_DIR/imports_backend_${DATE}.log"

  echo -e "\n${CYAN}📦 Dependencias Python${RESET}"
  if pip install -r requirements.txt --dry-run >/dev/null 2>&1; then
      echo -e "${GREEN}✓ Dependencias válidas${RESET}"
  else
      echo -e "${RED}✗ Problemas en requirements.txt${RESET}"
  fi

  echo -e "\n${CYAN}🧪 Testeando migraciones...${RESET}"
  python manage.py showmigrations > "$LOG_DIR/migrations_${DATE}.log" 2>/dev/null
  MIG_COUNT=$(cat "$LOG_DIR/migrations_${DATE}.log" | wc -l)
  echo "   Migraciones detectadas: $MIG_COUNT"

  cd "$ROOT" || exit
else
  echo -e "${RED}✗ Directorio backend no encontrado${RESET}"
fi

# ===============================
# 3️⃣ FRONTEND REACT / VITE
# ===============================
echo -e "\n${YELLOW}>> Paso 3: Frontend React + Vite${RESET}"
if [ -d "frontend" ]; then
  cd frontend || exit
  echo -e "${CYAN}📂 Directorio frontend detectado${RESET}"

  MAIN_FILES=("package.json" "vite.config.js" "index.html")
  for f in "${MAIN_FILES[@]}"; do
    [ -f "$f" ] && echo -e "   ${GREEN}✓${RESET} $f" || echo -e "   ${RED}✗ Falta${RESET}: $f"
  done

  echo -e "\n${CYAN}📦 Dependencias npm${RESET}"
  npm list --depth=0 >/tmp/npm_list.txt 2>/dev/null
  grep -E "react|vite|axios" /tmp/npm_list.txt && echo -e "${GREEN}✓ Dependencias críticas detectadas${RESET}" || echo -e "${RED}✗ React/Vite/Axios faltantes${RESET}"

  echo -e "\n${CYAN}📁 Buscando rutas React Router${RESET}"
  grep -r "Route" src/ > "$LOG_DIR/routes_frontend_${DATE}.log"
  R_COUNT=$(wc -l < "$LOG_DIR/routes_frontend_${DATE}.log")
  echo "   Rutas detectadas: $R_COUNT"

  echo -e "\n${CYAN}🧭 Verificando imports inconsistentes${RESET}"
  find src -type f -name "*.jsx" -o -name "*.js" | while read -r f; do
    grep -E "from ['\"]\.\./" "$f" | while read -r line; do
      IMP=$(echo "$line" | sed -E "s/.*from ['\"](.*)['\"].*/\1/")
      TARGET=$(dirname "$f")/$IMP
      if [ ! -e "$TARGET.js" ] && [ ! -e "$TARGET.jsx" ] && [ ! -d "$TARGET" ]; then
        echo -e "${RED}✗ Import inválido en $f: $IMP${RESET}" | tee -a "$LOG_FILE"
      fi
    done
  done

  echo -e "\n${CYAN}🏗️ Simulando compilación${RESET}"
  npm run build --dry-run >/dev/null 2>&1 && echo -e "${GREEN}✓ Build válido${RESET}" || echo -e "${RED}✗ Error en build${RESET}"

  cd "$ROOT" || exit
else
  echo -e "${RED}✗ Directorio frontend no encontrado${RESET}"
fi

# ===============================
# 4️⃣ IOT Y BEAGLEBONE
# ===============================
echo -e "\n${YELLOW}>> Paso 4: IoT y Módulos BeagleBone${RESET}"
if [ -d "iot" ]; then
  cd iot || exit
  MODULES=("bbb1-gateway" "bbb2-ia" "bbb3-sensores")
  for mod in "${MODULES[@]}"; do
    echo -e "\n🔧 Módulo: ${CYAN}$mod${RESET}"
    if [ -d "$mod" ]; then
      find "$mod" -type f | grep -E "\.py|\.sh|\.conf" || echo -e "${YELLOW}⚠️  Sin scripts detectados${RESET}"
    else
      echo -e "${RED}✗ No existe el módulo $mod${RESET}"
    fi
  done
  cd "$ROOT" || exit
else
  echo -e "${RED}✗ Directorio IoT no encontrado${RESET}"
fi

# ===============================
# 5️⃣ RESULTADOS Y LOG FINAL
# ===============================
echo -e "\n${CYAN}────────────────────────────"
echo "📋 RESUMEN FINAL DEL DIAGNÓSTICO"
echo "────────────────────────────${RESET}"
echo -e "🗂️  Logs guardados en: $LOG_DIR"
echo -e "📦 Backup: $BACKUP_TAR"
echo -e "⏰ Fecha: $(date +"%Y-%m-%d %H:%M:%S")"
echo -e "${GREEN}✅ Diagnóstico completado correctamente.${RESET}"
exit 0
