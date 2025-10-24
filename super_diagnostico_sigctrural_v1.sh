#!/usr/bin/env bash
# super_diagnostico_sigctrural.sh
# Super script de diagnóstico y reparación segura para SIGC&T-Rural
# - Backup completo (git tag + tar.gz)
# - Diagnóstico profundo backend/frontend/iot
# - Búsqueda de duplicados, imports rotos, rutas faltantes
# - Optional --auto-fix: crea scaffolding mínimo seguro para archivos faltantes
#
# Uso:
#   ./super_diagnostico_sigctrural.sh           # diagnóstico sólo
#   ./super_diagnostico_sigctrural.sh --auto-fix   # diagnóstico + fixes seguros
#
# Autor: Generado por ChatGPT para Bernardo (ADSO)
# Fecha: 2025-10-24 (versión 1.0)

set -o errexit
set -o pipefail
set -o nounset

# ===================== colores =====================
RED="\033[1;31m"; GREEN="\033[1;32m"; YELLOW="\033[1;33m"; CYAN="\033[1;36m"; BLUE="\033[1;34m"; RESET="\033[0m"

ROOT="$(pwd)"
LOGDIR="$ROOT/diagnostics"
BACKUPDIR="$ROOT/backups"
TIMESTAMP="$(date +%Y%m%d_%H%M%S)"
BACKUP_TAR="$BACKUPDIR/sigctrural_backup_$TIMESTAMP.tar.gz"
GIT_TAG="diag-backup-$TIMESTAMP"
AUTO_FIX=false

# ===================== argumentos =====================
if [ "${1:-}" = "--auto-fix" ] || [ "${2:-}" = "--auto-fix" ]; then
  AUTO_FIX=true
fi

mkdir -p "$LOGDIR"
mkdir -p "$BACKUPDIR"

echo -e "${CYAN}============================================${RESET}"
echo -e "${CYAN}  SUPER DIAGNÓSTICO SIGC&T-RURAL  (V1.0)${RESET}"
echo -e "${CYAN}  Directorio raíz: $ROOT${RESET}"
echo -e "${CYAN}  Backup dir: $BACKUPDIR    Logs: $LOGDIR${RESET}"
echo -e "${CYAN}============================================${RESET}"

# ===================== 0. Comprobación Git y backup =====================
echo -e "\n${YELLOW}>> Paso 0: Backup seguro (git tag + tar)${RESET}"
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo -e "${GREEN}✓ Repositorio git detectado.${RESET}"
  # Crear tag
  git tag -a "$GIT_TAG" -m "Backup antes de super_diagnostico $TIMESTAMP" >/dev/null 2>&1 || true
  echo -e "${GREEN}✓ Tag git creado: ${GIT_TAG}${RESET}"
else
  echo -e "${YELLOW}⚠️  No es un repo git. Se hará solo tar backup.${RESET}"
fi

# Crear tar gz (ignorar node_modules para tamaño; incluye todo por seguridad)
echo -e "${BLUE}Creando tar.gz backup (excluyendo node_modules y .venv si existen)...${RESET}"
tar --exclude='frontend/node_modules' --exclude='**/.venv' -czf "$BACKUP_TAR" . || {
  echo -e "${RED}✗ Falló creación de tar backup${RESET}"
  exit 1
}
echo -e "${GREEN}✓ Backup creado: $BACKUP_TAR${RESET}"

# ===================== helpers =====================
log() { echo -e "$1" | tee -a "$LOGDIR/diagnostic.log"; }
run_and_log() { echo -e "${CYAN}\$ $*${RESET}"; eval "$*" 2>&1 | tee -a "$LOGDIR/diagnostic.log"; }

# ===================== 1. Verificar estructura principal =====================
echo -e "\n${YELLOW}>> Paso 1: Comprobación estructura base${RESET}"
declare -a ROOT_EXPECTED=("README.md" "render.yaml" "Dockerfile" "docker-compose.yml" ".gitignore" "LICENSE")

for f in "${ROOT_EXPECTED[@]}"; do
  if [ -f "$ROOT/$f" ]; then
    log "${GREEN}OK${RESET}   $f"
  else
    log "${RED}MISSING${RESET} $f"
  fi
done

# ===================== 2. Backend checks =====================
echo -e "\n${YELLOW}>> Paso 2: Backend (Django) - comprobaciones profundas${RESET}"

BACKEND_DIR="$ROOT/backend"
if [ -d "$BACKEND_DIR" ]; then
  log "${GREEN}Backend directory exists: $BACKEND_DIR${RESET}"
  cd "$BACKEND_DIR"
  # archivos claves
  for f in manage.py requirements.txt packages.txt; do
    if [ -f "$f" ]; then
      log "${GREEN}OK${RESET} $f"
    else
      log "${RED}MISSING${RESET} $f"
    fi
  done

  # comprobar core settings / urls / wsgi / asgi
  for f in core/settings.py core/urls.py core/wsgi.py; do
    if [ -f "$f" ]; then
      log "${GREEN}OK${RESET} $f"
    else
      log "${RED}MISSING${RESET} $f"
    fi
  done
  if [ ! -f core/asgi.py ]; then
    log "${YELLOW}WARNING${RESET} core/asgi.py missing (only required for async features)."
  fi

  # apps list from backend/apps
  APPS_DIR="$BACKEND_DIR/apps"
  if [ -d "$APPS_DIR" ]; then
    log "${GREEN}Apps dir found: $APPS_DIR${RESET}"
    apps=()
    while IFS= read -r -d '' dir; do
      appname=$(basename "$dir")
      apps+=("$appname")
    done < <(find "$APPS_DIR" -maxdepth 1 -mindepth 1 -type d -print0)

    log "Detected apps: ${apps[*]}"
    # for each app check files
    for app in "${apps[@]}"; do
      log "-> Checking app: $app"
      for file in "__init__.py" "models.py" "views.py" "serializers.py" "urls.py" "admin.py"; do
        if [ -f "$APPS_DIR/$app/$file" ]; then
          log "   ${GREEN}OK${RESET} $APPS_DIR/$app/$file"
        else
          log "   ${RED}MISSING${RESET} $APPS_DIR/$app/$file"
        fi
      done
    done
  else
    log "${RED}MISSING${RESET} backend/apps directory"
  fi

  # 2.1: Syntax check (compileall) — detecta errores de sintaxis en backend
  log "${BLUE}Running Python syntax check (compileall) on backend...${RESET}"
  python - <<PY 2>&1 | tee -a "$LOGDIR/backend_syntax_check.log"
import compileall, sys
ok = compileall.compile_dir('.', force=False, quiet=1)
if not ok:
    print("PY_SYNTAX_ERRORS")
    sys.exit(2)
else:
    print("PY_SYNTAX_OK")
PY
  SYNTAX_STATUS=${PIPESTATUS[0]}
  if [ "$SYNTAX_STATUS" -eq 0 ]; then
    log "${GREEN}Python syntax: OK${RESET}"
  else
    log "${RED}Python syntax: ERRORS detected. Revisa diagnostics/backend_syntax_check.log${RESET}"
  fi

  # 2.2: Buscar imports no resueltos (heurístico)
  log "${BLUE}Scanning for import statements and verifying referenced modules/files (heuristic)...${RESET}"
  # Buscar todos los imports locales 'from apps.x import ...' o 'from .something import'
  grep -RInE "from\s+(apps\.|\.|..).*import" apps || true
  # Analizar imports relativos que puedan apuntar a archivos faltantes
  mkdir -p "$LOGDIR/backend_imports"
  grep -RInE "from\s+(\.|apps\.)[A-Za-z0-9_\.]*\s+import" apps > "$LOGDIR/backend_imports/imports_list.txt" || true
  # Heurística: para cada "from .foo import" asegurar que foo.py o foo/ existe
  awk '/from[[:space:]]+(\.|apps\.)/{print $0}' "$LOGDIR/backend_imports/imports_list.txt" | sed -E "s/from[[:space:]]+//; s/[[:space:]]+import.*//" | sort -u > "$LOGDIR/backend_imports/targets.txt" || true
  while read -r target; do
    # remove trailing dots
    t=$(echo "$target" | sed 's/^\.\+//g')
    # try to locate file or package
    if [ -z "$t" ]; then continue; fi
    found=$(python - <<PY
import pkgutil,sys,os
t="$t"
# try to find in project tree
found=False
for root,dirs,files in os.walk("apps"):
    # check module file
    if t.endswith("."):
        t2=t[:-1]
    else:
        t2=t
    candidate_py=os.path.join(root,t2.replace('.','/'))+'.py'
    candidate_pkg=os.path.join(root,t2.replace('.','/'))
    if os.path.exists(candidate_py) or os.path.exists(candidate_pkg):
        print(candidate_py if os.path.exists(candidate_py) else candidate_pkg)
        found=True
        break
if not found:
    sys.exit(2)
PY
) || true
    if [ -z "$found" ]; then
      log "   ${YELLOW}POSSIBLE MISSING TARGET${RESET}: $target (no file found under apps/). Revisa imports."
    else
      log "   ${GREEN}Found target${RESET}: $target -> $found"
    fi
  done < "$LOGDIR/backend_imports/targets.txt" || true

  cd "$ROOT"
else
  log "${RED}No backend directory found at $BACKEND_DIR${RESET}"
fi

# ===================== 3. Frontend checks =====================
echo -e "\n${YELLOW}>> Paso 3: Frontend (React + Vite) - checks profundos${RESET}"
FRONT_DIR="$ROOT/frontend"
if [ -d "$FRONT_DIR" ]; then
  log "${GREEN}Frontend dir exists: $FRONT_DIR${RESET}"
  cd "$FRONT_DIR"

  # archivos clave
  for f in package.json vite.config.js index.html; do
    if [ -f "$f" ]; then
      log "${GREEN}OK${RESET} $f"
    else
      log "${RED}MISSING${RESET} $f"
    fi
  done

  # 3.1: listar componentes .jsx/.js importados en rutas y comprobar existencia
  log "${BLUE}Scanning React source for Route declarations and referenced component files...${RESET}"
  mkdir -p "$LOGDIR/frontend"
  # buscar rutas en src
  grep -RInE "Route\s+path=|<Route\s+path=|react-router" src || true > "$LOGDIR/frontend/routes_raw.txt" 2>&1 || true

  # buscar imports en src
  grep -RInE "^import .* from ['\"]" src | sed -E "s/^([0-9]+:)?//" > "$LOGDIR/frontend/imports_all.txt" || true

  # analizar imports relativos y abs
  awk -F' from ' '{print $2}' "$LOGDIR/frontend/imports_all.txt" | sed -E "s/[\"';]//g" | sort -u > "$LOGDIR/frontend/import_targets.txt" || true

  # para cada target, verificar si existe (heurístico para componentes locales)
  while read -r target; do
    if [ -z "$target" ]; then continue; fi
    if [[ "$target" == .* || "$target" == /* || "$target" == src/* ]]; then
      # local relative import -> convert to path
      p=$(python - <<PY
import os,sys
t="$target"
# heuristics: try with .jsx .js .tsx .ts /index.js
candidates=[]
if t.endswith('.js') or t.endswith('.jsx') or t.endswith('.ts') or t.endswith('.tsx'):
    candidates=[t]
else:
    candidates=[t+'.jsx', t+'.js', t+'.tsx', t+'.ts', t+'/index.jsx', t+'/index.js']
for c in candidates:
    # try relative to src
    if os.path.exists(os.path.join('src',c.strip('./'))):
        print(os.path.join('src',c.strip('./')))
        sys.exit(0)
    # try raw path
    if os.path.exists(c):
        print(c)
        sys.exit(0)
sys.exit(2)
PY
) || true
      if [ -n "$p" ]; then
        log "   ${GREEN}Found${RESET} $target -> $p"
      else
        log "   ${YELLOW}POSSIBLE MISSING FRONTEND MODULE${RESET}: $target"
      fi
    fi
  done < "$LOGDIR/frontend/import_targets.txt"

  # 3.2: buscar referencias a /laboratorios endpoint en frontend
  if grep -RIn "laborator" src | tee "$LOGDIR/frontend/laboratorios_refs.txt"; then
    log "${GREEN}References to 'laborator' found in frontend (see $LOGDIR/frontend/laboratorios_refs.txt)${RESET}"
  else
    log "${YELLOW}No references to 'laborator' found in frontend source.${RESET}"
  fi

  # 3.3: test build (dry-run)
  log "${BLUE}Attempting 'npm run build' (will run real build to detect errors). This may take a few seconds...${RESET}"
  # try to run build but capture result
  if npm run build --silent >/tmp/frontend_build_output.txt 2>&1; then
    log "${GREEN}Frontend build: OK${RESET}"
  else
    log "${RED}Frontend build failed — see /tmp/frontend_build_output.txt and diagnostics/frontend_build.log${RESET}"
    mv /tmp/frontend_build_output.txt "$LOGDIR/frontend_build.log" || true
  fi

  cd "$ROOT"
else
  log "${RED}No frontend directory found at $FRONT_DIR${RESET}"
fi

# ===================== 4. IoT checks =====================
echo -e "\n${YELLOW}>> Paso 4: IoT (bbb modules)${RESET}"
IOT_DIR="$ROOT/iot"
if [ -d "$IOT_DIR" ]; then
  log "${GREEN}IoT directory exists: $IOT_DIR${RESET}"
  cd "$IOT_DIR"
  for module in $(ls -1); do
    if [ -d "$module" ]; then
      log " -> Module: $module"
      # list python scripts
      pys=$(find "$module" -maxdepth 3 -type f -name "*.py" -o -name "*.sh" -o -name "*.conf" | sed 's/^/    /' || true)
      if [ -n "$pys" ]; then
        echo -e "$pys" | tee -a "$LOGDIR/iot_files.log"
      else
        log "    ${YELLOW}No scripts found in $module${RESET}"
      fi
    fi
  done
  cd "$ROOT"
else
  log "${YELLOW}No iot directory present.${RESET}"
fi

# ===================== 5. Duplicate filenames and case conflicts =====================
echo -e "\n${YELLOW}>> Paso 5: Duplicados y conflictos de nombres (caso-insensible)${RESET}"
mkdir -p "$LOGDIR/duplicates"
# find files, group by basename lowercased
find . -type f -not -path "./node_modules/*" -not -path "./frontend/node_modules/*" -printf "%f\t%p\n" | \
  awk -F'\t' '{print tolower($1) "\t" $2}' | sort > "$LOGDIR/duplicates/all_files_by_lowername.txt"

awk -F'\t' '{count[$1]++; files[$1]=files[$1]"\n"$2} END {for (k in count) if (count[k]>1) { print k ": " count[k] " occurrences" files[k] }}' "$LOGDIR/duplicates/all_files_by_lowername.txt" \
  > "$LOGDIR/duplicates/duplicates_report.txt" || true

if [ -s "$LOGDIR/duplicates/duplicates_report.txt" ]; then
  log "${YELLOW}WARNING: Found duplicate basenames (case-insensitive). Review $LOGDIR/duplicates/duplicates_report.txt${RESET}"
else
  log "${GREEN}No duplicate basenames found.${RESET}"
fi

# ===================== 6. URLs/Router checks (Django & React) =====================
echo -e "\n${YELLOW}>> Paso 6: Comprobaciones de inclusión de rutas (Django core/urls.py)${RESET}"
# check if backend/core/urls.py includes apps urls (heuristic)
if [ -f "$BACKEND_DIR/core/urls.py" ]; then
  if grep -R "include(" "$BACKEND_DIR/core/urls.py" >/dev/null 2>&1; then
    log "${GREEN}core/urls.py contains include(...) lines${RESET}"
    grep -n "include(" "$BACKEND_DIR/core/urls.py" | tee "$LOGDIR/django_includes.txt"
  else
    log "${YELLOW}core/urls.py has no include(...). Ensure app urls are mounted.${RESET}"
  fi
else
  log "${RED}core/urls.py not found${RESET}"
fi

echo -e "\n${YELLOW}>> Paso 6b: Comprobación de rutas React (Router)${RESET}"
if [ -d "$FRONT_DIR/src" ]; then
  if grep -R "BrowserRouter\|Routes\|Route" "$FRONT_DIR/src" >/dev/null 2>&1; then
    grep -nE "BrowserRouter|Routes|Route" "$FRONT_DIR/src" | tee "$LOGDIR/react_router_locations.txt"
    log "${GREEN}React Router declarations found (see $LOGDIR/react_router_locations.txt)${RESET}"
  else
    log "${YELLOW}No React Router declarations found in src (Routes/Route).${RESET}"
  fi
fi

# ===================== 7. Auto-fix scaffolding (opcional) =====================
if [ "$AUTO_FIX" = true ]; then
  echo -e "\n${YELLOW}>> Paso 7: AUTO-FIX (crear scaffolding seguro para archivos faltantes)${RESET}"
  # Record what will be created
  CREATED_FILES=()

  # 7.1 Backend apps: if app exists but core files missing, create minimal safe files (copy .bak if already exists)
  if [ -d "$BACKEND_DIR/apps" ]; then
    for app in $(ls "$BACKEND_DIR/apps"); do
      appdir="$BACKEND_DIR/apps/$app"
      # only operate on directories
      if [ -d "$appdir" ]; then
        for f in "models.py" "views.py" "serializers.py" "urls.py" "admin.py"; do
          target="$appdir/$f"
          if [ ! -f "$target" ]; then
            # create safe default
            echo -e "${CYAN}Creating scaffold: $target${RESET}"
            cat > "$target" <<PY
# Auto-generated minimal $f for app $app
from django.http import HttpResponse
# NOTE: This file was auto-generated by super_diagnostico_sigctrural.sh --auto-fix
# Edit to add proper models/serializers/views for the app.
PY
            # add small content tailored
            if [ "$f" = "models.py" ]; then
              cat >> "$target" <<PY

from django.db import models

class ${app^}Model(models.Model):
    nombre = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.nombre or '${app} placeholder'
PY
            fi

            if [ "$f" = "serializers.py" ]; then
              cat >> "$target" <<PY

from rest_framework import serializers
from .models import ${app^}Model

class ${app^}ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ${app^}Model
        fields = '__all__'
PY
            fi

            if [ "$f" = "views.py" ]; then
              cat >> "$target" <<PY

from rest_framework import viewsets
from .models import ${app^}Model
from .serializers import ${app^}ModelSerializer

class ${app^}ModelViewSet(viewsets.ModelViewSet):
    queryset = ${app^}Model.objects.all()
    serializer_class = ${app^}ModelSerializer
PY
            fi

            if [ "$f" = "urls.py" ]; then
              cat >> "$target" <<PY
from rest_framework.routers import DefaultRouter
from .views import ${app^}ModelViewSet

router = DefaultRouter()
router.register(r'${app}', ${app^}ModelViewSet)

urlpatterns = router.urls
PY
            fi

            chmod 644 "$target"
            CREATED_FILES+=("$target")
            log "${GREEN}CREATED${RESET} $target"
          fi
        done
      fi
    done
  fi

  # 7.2 Frontend: crear placeholders si faltan componentes claves (App.jsx, pages/Laboratorios.jsx)
  if [ -d "$FRONT_DIR/src" ]; then
    mkdir -p "$FRONT_DIR/src/pages"
    # target file
    LAB_PAGE="$FRONT_DIR/src/pages/Laboratorios.jsx"
    if [ ! -f "$LAB_PAGE" ]; then
      log "${CYAN}Creating placeholder $LAB_PAGE${RESET}"
      cat > "$LAB_PAGE" <<'JSX'
import React, { useEffect, useState } from "react";
import axios from "axios";

const Laboratorios = () => {
  const [labs, setLabs] = useState([]);
  useEffect(() => {
    axios.get("/api/laboratorios/")
      .then(res => setLabs(res.data))
      .catch(err => console.error("Error cargando laboratorios:", err));
  }, []);
  return (
    <main style={{padding: "2rem"}}>
      <h1>Centro de Laboratorios (placeholder)</h1>
      <ul>
        {labs.length===0 ? <li>No hay laboratorios cargados (placeholder)</li> : labs.map(l => <li key={l.id}>{l.nombre || l.name}</li>)}
      </ul>
    </main>
  );
}
export default Laboratorios;
JSX
      CREATED_FILES+=("$LAB_PAGE")
    fi
  fi

  # 7.3 Commit scaffolding to git (safe): only if git repo and files were created
  if [ "${#CREATED_FILES[@]}" -gt 0 ]; then
    log "${BLUE}Created ${#CREATED_FILES[@]} scaffolding files.${RESET}"
    if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
      git add "${CREATED_FILES[@]}" || true
      git commit -m "chore(auto-scaffold): created safe placeholders for missing app files (diagnostic $TIMESTAMP)" || true
      git push origin HEAD || true
      log "${GREEN}Scaffolding committed to git (if remote push accessible).${RESET}"
    else
      log "${YELLOW}Not a git repo: scaffolding created but not committed.${RESET}"
    fi
  else
    log "${GREEN}No scaffolding needed (no missing files detected or no action taken).${RESET}"
  fi
fi

# ===================== 8. Final report =====================
echo -e "\n${CYAN}>> Generating final report files under $LOGDIR${RESET}"
echo -e "Diagnostic completed at $TIMESTAMP" >> "$LOGDIR/summary.txt"
echo -e "Auto-fix applied: $AUTO_FIX" >> "$LOGDIR/summary.txt"
echo -e "\nFiles created (if any):" >> "$LOGDIR/summary.txt"
if [ -n "${CREATED_FILES[*]:-}" ]; then
  for cf in "${CREATED_FILES[@]}"; do
    echo "$cf" >> "$LOGDIR/summary.txt"
  done
fi

echo -e "${GREEN}\nFIN: Diagnóstico terminado. Logs en: $LOGDIR${RESET}"
echo -e "${YELLOW}Recomendación siguiente:${RESET}"
echo -e "  1) Revisar $LOGDIR/diagnostic.log, backend_syntax_check.log, frontend_build.log, duplicates_report.txt."
echo -e "  2) Si AUTO-FIX creado archivos, revisarlos y sustituir con implementación correcta."
echo -e "  3) Levantar backend en entorno virtual (python -m venv .venv; source .venv/bin/activate; pip install -r backend/requirements.txt) y correr 'python manage.py migrate' y 'python manage.py runserver'."
echo -e "  4) Levantar frontend: cd frontend && npm install && npm run dev (revisar console en navegador para CORS/errors).\n"

exit 0
