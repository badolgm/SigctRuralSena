#!/bin/bash
#==============================================================================
# SCRIPT DE DIAGNÓSTICO COMPLETO - SIGCT-RURAL
# Autor: Asistente IA
# Fecha: 2025-01-20
# Propósito: Analizar estructura, dependencias, configuraciones y problemas
#==============================================================================

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color
BOLD='\033[1m'

# Función para imprimir encabezados
print_header() {
    echo -e "\n${CYAN}${BOLD}========================================${NC}"
    echo -e "${CYAN}${BOLD} $1${NC}"
    echo -e "${CYAN}${BOLD}========================================${NC}\n"
}

# Función para imprimir secciones
print_section() {
    echo -e "\n${MAGENTA}${BOLD}>>> $1${NC}"
    echo -e "${MAGENTA}────────────────────────────────────────${NC}"
}

# Función para verificar existencia
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} Encontrado: ${BOLD}$1${NC}"
        return 0
    else
        echo -e "${RED}✗${NC} No encontrado: ${BOLD}$1${NC}"
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} Directorio: ${BOLD}$1${NC}"
        return 0
    else
        echo -e "${RED}✗${NC} No existe: ${BOLD}$1${NC}"
        return 1
    fi
}

# Función para contar archivos
count_files() {
    local count=$(find "$1" -type f -name "$2" 2>/dev/null | wc -l)
    echo -e "   ${CYAN}→${NC} Archivos $2: ${BOLD}$count${NC}"
}

# Inicio del diagnóstico
clear
echo -e "${BOLD}${BLUE}"
cat << "EOF"
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   ██████╗ ██╗ █████╗  ██████╗ ███╗   ██╗ ██████╗ ███████╗   ║
║   ██╔══██╗██║██╔══██╗██╔════╝ ████╗  ██║██╔═══██╗██╔════╝   ║
║   ██║  ██║██║███████║██║  ███╗██╔██╗ ██║██║   ██║███████╗   ║
║   ██║  ██║██║██╔══██║██║   ██║██║╚██╗██║██║   ██║╚════██║   ║
║   ██████╔╝██║██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝███████║   ║
║   ╚═════╝ ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝   ║
║                                                               ║
║              SIGCT-RURAL - Diagnóstico Completo              ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

# Información del sistema
print_header "📊 INFORMACIÓN DEL SISTEMA"
echo -e "${BOLD}Sistema Operativo:${NC} $(uname -s)"
echo -e "${BOLD}Arquitectura:${NC} $(uname -m)"
echo -e "${BOLD}Usuario:${NC} $(whoami)"
echo -e "${BOLD}Fecha:${NC} $(date '+%Y-%m-%d %H:%M:%S')"
echo -e "${BOLD}Directorio actual:${NC} $(pwd)"

# Git info
print_section "🔀 GIT REPOSITORY"
if [ -d ".git" ]; then
    echo -e "${GREEN}✓${NC} Repositorio Git inicializado"
    echo -e "${BOLD}Branch actual:${NC} $(git branch --show-current 2>/dev/null)"
    echo -e "${BOLD}Remote origin:${NC}"
    git remote -v 2>/dev/null | grep fetch || echo "  No configurado"
    echo -e "\n${BOLD}Últimos 5 commits:${NC}"
    git log --oneline -5 --decorate --graph 2>/dev/null || echo "  Sin commits"
    echo -e "\n${BOLD}Estado del repositorio:${NC}"
    git status --short 2>/dev/null || echo "  Error obteniendo estado"
else
    echo -e "${RED}✗${NC} No es un repositorio Git"
fi

# Estructura del proyecto
print_header "📁 ESTRUCTURA DEL PROYECTO"

print_section "Archivos de configuración raíz"
check_file "README.md"
check_file "render.yaml"
check_file ".gitignore"
check_file "docker-compose.yml"
check_file "Dockerfile"
check_file "LICENSE"
check_file ".env"
check_file ".env.example"

print_section "Backend Django"
check_dir "backend"
check_file "backend/manage.py"
check_file "backend/requirements.txt"
check_file "backend/packages.txt"
check_file "backend/.env"
check_file "backend/Dockerfile"

if [ -d "backend" ]; then
    echo -e "\n${BOLD}Estructura de backend/:${NC}"
    tree -L 2 -d backend 2>/dev/null || find backend -maxdepth 2 -type d
    
    print_section "Apps Django"
    if [ -d "backend/apps" ]; then
        echo -e "${GREEN}✓${NC} Directorio apps/ encontrado"
        for app in backend/apps/*/; do
            if [ -d "$app" ]; then
                app_name=$(basename "$app")
                echo -e "\n${BOLD}App: ${CYAN}$app_name${NC}"
                check_file "$app/__init__.py"
                check_file "$app/models.py"
                check_file "$app/views.py"
                check_file "$app/serializers.py"
                check_file "$app/urls.py"
                check_file "$app/admin.py"
            fi
        done
    elif [ -d "backend/backend/apps" ]; then
        echo -e "${YELLOW}⚠${NC}  Apps en backend/backend/apps/"
        for app in backend/backend/apps/*/; do
            if [ -d "$app" ]; then
                app_name=$(basename "$app")
                echo -e "\n${BOLD}App: ${CYAN}$app_name${NC}"
                check_file "$app/__init__.py"
            fi
        done
    else
        echo -e "${RED}✗${NC} No se encontró directorio de apps"
    fi
    
    print_section "Configuración Django"
    if [ -f "backend/core/settings.py" ]; then
        check_file "backend/core/settings.py"
        check_file "backend/core/urls.py"
        check_file "backend/core/wsgi.py"
        check_file "backend/core/asgi.py"
    elif [ -f "backend/backend/settings.py" ]; then
        check_file "backend/backend/settings.py"
        check_file "backend/backend/urls.py"
    else
        echo -e "${RED}✗${NC} No se encontró settings.py"
    fi
fi

print_section "Frontend"
check_dir "frontend"
check_file "frontend/package.json"
check_file "frontend/vite.config.js"
check_file "frontend/index.html"
check_file "frontend/.env"
check_file "frontend/.env.production"

if [ -d "frontend" ]; then
    echo -e "\n${BOLD}Estructura de frontend/:${NC}"
    tree -L 2 -d frontend 2>/dev/null || find frontend -maxdepth 2 -type d
    
    count_files "frontend/src" "*.jsx"
    count_files "frontend/src" "*.css"
    count_files "frontend/src/pages" "*"
    count_files "frontend/src/components" "*"
fi

print_section "IoT y Hardware"
check_dir "iot"
if [ -d "iot" ]; then
    echo -e "\n${BOLD}Estructura de iot/:${NC}"
    tree -L 2 iot 2>/dev/null || find iot -maxdepth 2 -type d
fi

print_section "Documentación"
check_dir "docs"
if [ -d "docs" ]; then
    count_files "docs" "*.md"
    count_files "docs" "*.sql"
fi

# Análisis de dependencias
print_header "📦 DEPENDENCIAS"

print_section "Backend Python"
if [ -f "backend/requirements.txt" ]; then
    echo -e "${GREEN}✓${NC} requirements.txt encontrado"
    echo -e "\n${BOLD}Dependencias críticas:${NC}"
    
    # Verificar dependencias una por una
    deps=("Django" "djangorestframework" "gunicorn" "psycopg2-binary" "whitenoise" "django-cors-headers")
    for dep in "${deps[@]}"; do
        if grep -qi "^$dep" backend/requirements.txt; then
            version=$(grep -i "^$dep" backend/requirements.txt | cut -d'=' -f2-)
            echo -e "   ${GREEN}✓${NC} $dep${version:+ = $version}"
        else
            echo -e "   ${RED}✗${NC} $dep ${YELLOW}(FALTA)${NC}"
        fi
    done
    
    echo -e "\n${BOLD}Total de dependencias:${NC} $(grep -v '^#' backend/requirements.txt | grep -v '^$' | wc -l)"
    
    # Verificar dependencias problemáticas
    echo -e "\n${BOLD}Verificación de problemas conocidos:${NC}"
    if grep -q "tensorflow-lite" backend/requirements.txt; then
        echo -e "   ${RED}✗${NC} tensorflow-lite detectado ${YELLOW}(NO EXISTE en PyPI)${NC}"
    fi
    if grep -q "opencv-python==" backend/requirements.txt; then
        echo -e "   ${YELLOW}⚠${NC}  opencv-python (recomendado: opencv-python-headless)"
    fi
    if grep -q "opencv-python-headless" backend/requirements.txt; then
        echo -e "   ${GREEN}✓${NC} opencv-python-headless (correcto para servidores)"
    fi
    
    # Buscar duplicados
    echo -e "\n${BOLD}Verificando duplicados:${NC}"
    duplicates=$(sort backend/requirements.txt | uniq -d | grep -v '^#' | grep -v '^$')
    if [ -z "$duplicates" ]; then
        echo -e "   ${GREEN}✓${NC} Sin duplicados"
    else
        echo -e "   ${RED}✗${NC} Duplicados encontrados:"
        echo "$duplicates" | sed 's/^/      /'
    fi
fi

if [ -f "backend/packages.txt" ]; then
    echo -e "\n${GREEN}✓${NC} packages.txt encontrado (${BOLD}$(wc -l < backend/packages.txt)${NC} paquetes)"
else
    echo -e "\n${RED}✗${NC} packages.txt no encontrado ${YELLOW}(necesario para OpenCV/IA)${NC}"
fi

print_section "Frontend Node.js"
if [ -f "frontend/package.json" ]; then
    echo -e "${GREEN}✓${NC} package.json encontrado"
    
    # Verificar dependencias críticas
    echo -e "\n${BOLD}Dependencias críticas:${NC}"
    node_deps=("react" "react-dom" "react-router-dom" "axios" "vite")
    for dep in "${node_deps[@]}"; do
        if grep -q "\"$dep\"" frontend/package.json; then
            version=$(grep "\"$dep\"" frontend/package.json | sed 's/.*: "\(.*\)".*/\1/' | tr -d ',')
            echo -e "   ${GREEN}✓${NC} $dep = $version"
        else
            echo -e "   ${RED}✗${NC} $dep ${YELLOW}(FALTA)${NC}"
        fi
    done
    
    # Verificar scripts
    echo -e "\n${BOLD}Scripts disponibles:${NC}"
    if grep -q "\"build\":" frontend/package.json; then
        echo -e "   ${GREEN}✓${NC} npm run build"
    else
        echo -e "   ${RED}✗${NC} npm run build ${YELLOW}(FALTA)${NC}"
    fi
    if grep -q "\"dev\":" frontend/package.json; then
        echo -e "   ${GREEN}✓${NC} npm run dev"
    fi
    if grep -q "\"preview\":" frontend/package.json; then
        echo -e "   ${GREEN}✓${NC} npm run preview"
    fi
    
    # Verificar node_modules
    if [ -d "frontend/node_modules" ]; then
        echo -e "\n${GREEN}✓${NC} node_modules existe ($(du -sh frontend/node_modules 2>/dev/null | cut -f1))"
    else
        echo -e "\n${YELLOW}⚠${NC}  node_modules no existe (ejecutar npm install)"
    fi
fi

# Análisis de configuración
print_header "⚙️ CONFIGURACIÓN"

print_section "render.yaml"
if [ -f "render.yaml" ]; then
    echo -e "${GREEN}✓${NC} render.yaml encontrado"
    
    echo -e "\n${BOLD}Servicios definidos:${NC}"
    services=$(grep "name:" render.yaml | sed 's/.*name: //' | sed 's/^ *//')
    echo "$services" | while read -r service; do
        echo -e "   ${CYAN}→${NC} $service"
    done
    
    echo -e "\n${BOLD}Verificando configuración:${NC}"
    if grep -q "sudo" render.yaml; then
        echo -e "   ${RED}✗${NC} Contiene 'sudo' ${YELLOW}(NO permitido en Render)${NC}"
    else
        echo -e "   ${GREEN}✓${NC} Sin comandos 'sudo'"
    fi
    
    if grep -q "env: python" render.yaml; then
        echo -e "   ${GREEN}✓${NC} Backend usa 'env: python'"
    elif grep -q "runtime: python" render.yaml; then
        echo -e "   ${YELLOW}⚠${NC}  Usa 'runtime:' (debe ser 'env:' en Render)"
    fi
    
    if grep -q "buildCommand:" render.yaml; then
        echo -e "   ${GREEN}✓${NC} buildCommand definido"
    else
        echo -e "   ${RED}✗${NC} buildCommand falta"
    fi
    
    if grep -q "startCommand:" render.yaml; then
        echo -e "   ${GREEN}✓${NC} startCommand definido"
    else
        echo -e "   ${RED}✗${NC} startCommand falta"
    fi
    
    if grep -q "gunicorn" render.yaml; then
        echo -e "   ${GREEN}✓${NC} Usa gunicorn"
    else
        echo -e "   ${YELLOW}⚠${NC}  No se detectó gunicorn"
    fi
else
    echo -e "${RED}✗${NC} render.yaml no encontrado ${YELLOW}(requerido para Render)${NC}"
fi

print_section "Django settings.py"
settings_file=""
if [ -f "backend/core/settings.py" ]; then
    settings_file="backend/core/settings.py"
elif [ -f "backend/backend/settings.py" ]; then
    settings_file="backend/backend/settings.py"
elif [ -f "backend/settings.py" ]; then
    settings_file="backend/settings.py"
fi

if [ -n "$settings_file" ]; then
    echo -e "${GREEN}✓${NC} settings.py: $settings_file"
    
    echo -e "\n${BOLD}Configuraciones críticas:${NC}"
    
    if grep -q "ALLOWED_HOSTS.*=.*\[" "$settings_file"; then
        echo -e "   ${GREEN}✓${NC} ALLOWED_HOSTS definido"
        if grep -q "\.onrender\.com" "$settings_file"; then
            echo -e "      ${GREEN}✓${NC} Incluye .onrender.com"
        else
            echo -e "      ${YELLOW}⚠${NC}  No incluye .onrender.com"
        fi
    else
        echo -e "   ${YELLOW}⚠${NC}  ALLOWED_HOSTS no encontrado"
    fi
    
    if grep -q "DATABASES.*=.*{" "$settings_file"; then
        echo -e "   ${GREEN}✓${NC} DATABASES configurado"
        if grep -q "dj_database_url" "$settings_file"; then
            echo -e "      ${GREEN}✓${NC} Usa dj_database_url"
        fi
    fi
    
    if grep -q "STATIC_ROOT" "$settings_file"; then
        echo -e "   ${GREEN}✓${NC} STATIC_ROOT definido"
    else
        echo -e "   ${YELLOW}⚠${NC}  STATIC_ROOT no definido"
    fi
    
    if grep -q "whitenoise" "$settings_file"; then
        echo -e "   ${GREEN}✓${NC} WhiteNoise configurado"
    else
        echo -e "   ${YELLOW}⚠${NC}  WhiteNoise no detectado"
    fi
    
    if grep -q "corsheaders" "$settings_file"; then
        echo -e "   ${GREEN}✓${NC} CORS configurado"
    else
        echo -e "   ${YELLOW}⚠${NC}  CORS no configurado"
    fi
    
    if grep -q "REST_FRAMEWORK" "$settings_file"; then
        echo -e "   ${GREEN}✓${NC} REST_FRAMEWORK configurado"
    fi
    
    echo -e "\n${BOLD}INSTALLED_APPS:${NC}"
    apps_count=$(grep -A 20 "INSTALLED_APPS" "$settings_file" | grep -c "'" || echo "0")
    echo -e "   ${CYAN}→${NC} Total de apps: $apps_count"
    
    echo -e "\n${BOLD}Detección de entorno:${NC}"
    if grep -q "os.getenv.*RENDER" "$settings_file"; then
        echo -e "   ${GREEN}✓${NC} Detecta entorno Render"
    elif grep -q "os.getenv.*DATABASE_URL" "$settings_file"; then
        echo -e "   ${YELLOW}⚠${NC}  Usa DATABASE_URL para detectar producción"
    else
        echo -e "   ${RED}✗${NC} No detecta producción/desarrollo"
    fi
fi

print_section "Frontend .env"
if [ -f "frontend/.env" ]; then
    echo -e "${GREEN}✓${NC} .env encontrado"
    if grep -q "VITE_API_URL" frontend/.env; then
        api_url=$(grep "VITE_API_URL" frontend/.env | cut -d'=' -f2-)
        echo -e "   ${CYAN}→${NC} VITE_API_URL: $api_url"
    fi
else
    echo -e "${YELLOW}⚠${NC}  .env no encontrado"
fi

# Análisis de seguridad
print_header "🔒 SEGURIDAD"

print_section "Archivos sensibles"
echo -e "${BOLD}Verificando .gitignore:${NC}"
if [ -f ".gitignore" ]; then
    echo -e "${GREEN}✓${NC} .gitignore existe"
    
    sensitive_patterns=(".env" "*.sqlite3" "db.sqlite3" "__pycache__" "node_modules" "*.pyc" "staticfiles")
    for pattern in "${sensitive_patterns[@]}"; do
        if grep -q "$pattern" .gitignore; then
            echo -e "   ${GREEN}✓${NC} Ignora: $pattern"
        else
            echo -e "   ${YELLOW}⚠${NC}  No ignora: $pattern"
        fi
    done
else
    echo -e "${RED}✗${NC} .gitignore no existe"
fi

echo -e "\n${BOLD}Archivos sensibles en el repositorio:${NC}"
sensitive_files=(".env" "db.sqlite3" "*.key" "*.pem")
found_sensitive=false
for pattern in "${sensitive_files[@]}"; do
    files=$(find . -name "$pattern" -not -path "./node_modules/*" -not -path "./.git/*" 2>/dev/null)
    if [ -n "$files" ]; then
        echo -e "   ${RED}✗${NC} Encontrado: $pattern"
        found_sensitive=true
    fi
done
if [ "$found_sensitive" = false ]; then
    echo -e "   ${GREEN}✓${NC} Sin archivos sensibles expuestos"
fi

# Análisis de tamaño
print_header "💾 TAMAÑO DEL PROYECTO"

echo -e "${BOLD}Tamaño por directorio:${NC}"
if command -v du &> /dev/null; then
    du -sh backend frontend docs iot 2>/dev/null | while read size dir; do
        echo -e "   ${CYAN}$dir${NC}: ${BOLD}$size${NC}"
    done
    
    if [ -d "frontend/node_modules" ]; then
        echo -e "   ${YELLOW}node_modules${NC}: ${BOLD}$(du -sh frontend/node_modules 2>/dev/null | cut -f1)${NC}"
    fi
    
    echo -e "\n${BOLD}Tamaño total del proyecto:${NC} $(du -sh . 2>/dev/null | cut -f1)"
fi

# Recomendaciones
print_header "💡 RECOMENDACIONES"

recommendations=()

# Verificar problemas críticos
if [ ! -f "render.yaml" ]; then
    recommendations+=("${RED}CRÍTICO${NC}: Crear render.yaml para deployment")
fi

if [ -f "render.yaml" ] && grep -q "sudo" render.yaml; then
    recommendations+=("${RED}CRÍTICO${NC}: Eliminar comandos 'sudo' de render.yaml")
fi

if [ ! -f "backend/packages.txt" ]; then
    recommendations+=("${YELLOW}IMPORTANTE${NC}: Crear backend/packages.txt para dependencias del sistema")
fi

if [ -f "backend/requirements.txt" ] && grep -q "tensorflow-lite" backend/requirements.txt; then
    recommendations+=("${RED}ERROR${NC}: Reemplazar tensorflow-lite por tflite-runtime o tensorflow")
fi

if [ -f "backend/requirements.txt" ] && ! grep -q "gunicorn" backend/requirements.txt; then
    recommendations+=("${RED}CRÍTICO${NC}: Agregar gunicorn a requirements.txt")
fi

if [ -f "$settings_file" ] && ! grep -q "whitenoise" "$settings_file"; then
    recommendations+=("${YELLOW}IMPORTANTE${NC}: Configurar WhiteNoise en settings.py")
fi

if [ ! -f "frontend/.env" ] && [ ! -f "frontend/.env.production" ]; then
    recommendations+=("${YELLOW}AVISO${NC}: Crear frontend/.env con VITE_API_URL")
fi

if [ -f ".env" ] && ! grep -q ".env" .gitignore; then
    recommendations+=("${RED}SEGURIDAD${NC}: Agregar .env a .gitignore")
fi

# Mostrar recomendaciones
if [ ${#recommendations[@]} -gt 0 ]; then
    echo -e "${BOLD}Se encontraron ${#recommendations[@]} recomendaciones:${NC}\n"
    for i in "${!recommendations[@]}"; do
        echo -e "$((i+1)). ${recommendations[$i]}"
    done
else
    echo -e "${GREEN}${BOLD}✓ ¡Todo se ve bien! El proyecto está bien configurado.${NC}"
fi

# Resumen final
print_header "📝 RESUMEN"

echo -e "${BOLD}Archivos clave encontrados:${NC}"
total_checks=0
passed_checks=0

key_files=(
    "render.yaml:Configuración de Render"
    "backend/requirements.txt:Dependencias Python"
    "backend/manage.py:Django manage.py"
    "backend/core/settings.py:Configuración Django"
    "frontend/package.json:Dependencias Node"
    "frontend/vite.config.js:Configuración Vite"
    ".gitignore:Git ignore"
)

for item in "${key_files[@]}"; do
    file="${item%%:*}"
    desc="${item##*:}"
    total_checks=$((total_checks + 1))
    
    if [ -f "$file" ]; then
        echo -e "   ${GREEN}✓${NC} $desc"
        passed_checks=$((passed_checks + 1))
    else
        echo -e "   ${RED}✗${NC} $desc"
    fi
done

echo -e "\n${BOLD}Puntuación: ${passed_checks}/${total_checks}${NC}"

if [ $passed_checks -eq $total_checks ]; then
    echo -e "${GREEN}${BOLD}¡Excelente! Todos los archivos clave están presentes.${NC}"
elif [ $passed_checks -ge $((total_checks * 7 / 10)) ]; then
    echo -e "${YELLOW}${BOLD}Bien, pero se pueden hacer mejoras.${NC}"
else
    echo -e "${RED}${BOLD}Se requieren correcciones importantes.${NC}"
fi

# Footer
echo -e "\n${CYAN}${BOLD}════════════════════════════════════════════════════════════════${NC}"
echo -e "${CYAN}${BOLD}  Diagnóstico completado - $(date '+%H:%M:%S')${NC}"
echo -e "${CYAN}${BOLD}════════════════════════════════════════════════════════════════${NC}\n"

# Guardar output
OUTPUT_FILE="diagnostico_$(date '+%Y%m%d_%H%M%S').txt"
echo -e "${BOLD}💾 Guardar este diagnóstico?${NC} [s/N]: \c"
read -r save_output
if [[ $save_output =~ ^[Ss]$ ]]; then
    $0 > "$OUTPUT_FILE" 2>&1
    echo -e "${GREEN}✓${NC} Diagnóstico guardado en: ${BOLD}$OUTPUT_FILE${NC}"
fi