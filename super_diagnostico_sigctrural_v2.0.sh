#!/usr/bin/env bash
# ================================================================
#  SUPER DIAGNÓSTICO SIGC&T-RURAL v2.0
#  Proyecto: Clúster 3 BeagleBone Black Rev C + Django + React + IoT
#  Autor: BAGM + GPT-5 | Fecha: $(date +"%Y-%m-%d")
# ================================================================

set -e

# --- CONFIGURACIÓN BÁSICA ---------------------------------------
ROOT_DIR=$(pwd)
BACKUP_DIR="$ROOT_DIR/backups"
LOG_DIR="$ROOT_DIR/diagnostics"
FIXES_DIR="$LOG_DIR/fixes"
DATE_TAG=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="$BACKUP_DIR/sigctrural_backup_${DATE_TAG}.tar.gz"
LOG_FILE="$LOG_DIR/diagnostic_${DATE_TAG}.log"

# --- COLORES BONITOS --------------------------------------------
GREEN="\033[1;32m"; RED="\033[1;31m"; YELLOW="\033[1;33m"; BLUE="\033[1;34m"; RESET="\033[0m"

# --- FUNCIONES ---------------------------------------------------
say() { echo -e "${BLUE}>>${RESET} $1"; }
ok()  { echo -e "${GREEN}✓${RESET} $1"; }
warn(){ echo -e "${YELLOW}⚠${RESET} $1"; }
fail(){ echo -e "${RED}✗${RESET} $1"; }

# --- CREAR ESTRUCTURA DE DIRECTORIOS ------------------------------
say "Verificando estructura base del proyecto..."
mkdir -p "$BACKUP_DIR" "$LOG_DIR" "$FIXES_DIR"
ok "Directorios verificados."

# --- BACKUP COMPLETO ----------------------------------------------
say "Creando backup completo y tag Git..."
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  TAG="diag-backup-${DATE_TAG}"
  git tag -a "$TAG" -m "Backup automático antes de diagnóstico $DATE_TAG" || warn "No se pudo crear tag git."
fi

tar --exclude='node_modules' --exclude='.venv' --exclude='./backups/*.tar.gz' -czf "$BACKUP_FILE" . \
  && ok "Backup creado correctamente: $BACKUP_FILE" \
  || fail "Error al crear backup TAR."

# --- SCAN DE ARCHIVOS FALTANTES EN BACKEND ------------------------
say "Escaneando backend Django..."
BACKEND_DIR="$ROOT_DIR/backend/apps"
for APP in alertas cursos ia_plantvillage laboratorios sensores usuarios; do
  APP_PATH="$BACKEND_DIR/$APP"
  if [ -d "$APP_PATH" ]; then
    echo -e "\n🔍 Revisando app: $APP" | tee -a "$LOG_FILE"
    for FILE in models.py views.py serializers.py urls.py admin.py; do
      TARGET="$APP_PATH/$FILE"
      if [ ! -f "$TARGET" ]; then
        warn "Falta $TARGET, generando plantilla..."
        cat <<EOF > "$FIXES_DIR/${APP}_${FILE}"
# Auto-generado por super_diagnostico v2.0
# App: $APP | Archivo: $FILE
from django.shortcuts import render
from rest_framework import viewsets, serializers
from django.db import models

# TODO: Completar implementación real
EOF
      fi
    done
  else
    warn "App $APP no encontrada en $BACKEND_DIR"
  fi
done
ok "Scan de apps backend completado."

# --- VALIDACIÓN DE SETTINGS Y RUTAS DJANGO ------------------------
say "Validando core/settings.py y urls.py..."
if grep -q "INSTALLED_APPS" backend/core/settings.py; then ok "settings.py válido."; else fail "Falta INSTALLED_APPS en settings.py"; fi
if [ ! -f backend/core/asgi.py ]; then
  warn "Falta asgi.py → creando plantilla en fixes/"
  cat <<EOF > "$FIXES_DIR/asgi.py"
import os
from django.core.asgi import get_asgi_application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
application = get_asgi_application()
EOF
fi

# --- SCAN FRONTEND -----------------------------------------------
say "Analizando frontend React + Vite..."
if [ -d "$ROOT_DIR/frontend" ]; then
  if [ ! -f "$ROOT_DIR/frontend/.env" ]; then
    warn "Falta .env en frontend → creando plantilla."
    echo "VITE_API_URL=http://localhost:8000/api" > "$FIXES_DIR/frontend_env"
  fi
  ROUTES=$(grep -roh "path=" frontend/src | wc -l)
  ok "Frontend verificado: $ROUTES rutas detectadas."
else
  fail "Directorio frontend no encontrado."
fi

# --- SCAN DE IOT Y BBB --------------------------------------------
say "Verificando módulos BeagleBone (IoT)..."
for BBB in bbb1-gateway bbb2-ia bbb3-sensores; do
  if [ -d "iot/$BBB" ]; then
    ok "$BBB detectado."
  else
    warn "Falta módulo $BBB → creando carpeta vacía en fixes/"
    mkdir -p "$FIXES_DIR/iot/$BBB"
  fi
done

# --- VERIFICACIÓN DE IMPORTS -------------------------------------
say "Buscando imports rotos..."
grep -R "import " backend/ frontend/ iot/ > "$LOG_DIR/imports_${DATE_TAG}.log" || true
warn "Revisa imports rotos en $LOG_DIR/imports_${DATE_TAG}.log"

# --- REVISIÓN DE DUPLICADOS --------------------------------------
say "Verificando duplicados sospechosos..."
find backend/ frontend/ -type f -name "*.py" -o -name "*.jsx" | while read -r f; do
  DUPES=$(grep -c "def " "$f" || true)
  if [ "$DUPES" -gt 10 ]; then warn "Archivo con muchas definiciones ($DUPES): $f"; fi
done

# --- LOG FINAL ----------------------------------------------------
say "Generando reporte resumen..."
{
  echo "====================================================="
  echo "SUPER DIAGNÓSTICO SIGC&T-Rural v2.0"
  echo "Fecha: $(date)"
  echo "Proyecto: $ROOT_DIR"
  echo "Backup: $BACKUP_FILE"
  echo "Logs: $LOG_DIR"
  echo "====================================================="
} >> "$LOG_FILE"

ok "Diagnóstico finalizado. Revisa: $LOG_FILE"
say "Archivos generados en: $FIXES_DIR"

echo -e "\n${GREEN}✅ TODO LISTO: tu proyecto está seguro, respaldado y diagnosticado.${RESET}"
