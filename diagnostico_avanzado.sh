#!/bin/bash
#==============================================================================
# SCRIPT DE DIAGNÓSTICO AVANZADO v2.0 - SIGCT-RURAL
# Autor: Asistente IA (Basado en el script de BAGM)
# Propósito: Evaluar entorno, estructura, configuraciones, y detectar problemas
#            comunes de rutas (Vite/React) y procesos.
#==============================================================================

# Colores y estilos
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'
BOLD='\033[1m'
ERROR="${RED}${BOLD}ERROR:${NC}"
WARN="${YELLOW}${BOLD}AVISO:${NC}"
SUCCESS="${GREEN}${BOLD}ÉXITO:${NC}"

# -------------------------------------------------------------------
# Funciones de Utilidad
# -------------------------------------------------------------------

print_header() {
    echo -e "\n${CYAN}${BOLD}====================================================${NC}"
    echo -e "${CYAN}${BOLD} $1${NC}"
    echo -e "${CYAN}${BOLD}====================================================${NC}\n"
}

check_file() {
    if [ -f "$1" ]; then
        echo -e "${SUCCESS}✓${NC} $1"
        return 0
    else
        echo -e "${ERROR}✗${NC} $1"
        return 1
    fi
}

# -------------------------------------------------------------------
# Secciones Nuevas y Mejoradas
# -------------------------------------------------------------------

# 1. Análisis de Entorno y Rutas
check_environment() {
    print_header "🌐 ENTORNO Y EJECUTABLES"

    echo -e "${BOLD}1. Directorio Raíz del Proyecto:${NC} $(pwd)"
    echo -e "${BOLD}2. Sistema Operativo:${NC} $(uname -s)"

    # Verificación de ejecutables clave
    print_section "Verificación de herramientas"
    tools=("node" "npm" "python3" "pip3" "git" "docker")
    for tool in "${tools[@]}"; do
        if command -v "$tool" &> /dev/null; then
            version=$("$tool" --version 2>/dev/null | head -n 1)
            echo -e "${SUCCESS}✓${NC} $tool: ${BOLD}$version${NC}"
        else
            echo -e "${ERROR}✗${NC} $tool ${RED}(No encontrado en PATH)${NC}"
        fi
    done
}

# 2. Detección de Procesos y Puertos (Crítico para errores de 'Address in use')
check_ports() {
    print_header "📡 DETECCIÓN DE PROCESOS/PUERTOS (3000, 8000)"

    local ports=("3000" "8000")
    local found_process=false

    for port in "${ports[@]}"; do
        echo -e "${BOLD}Buscando procesos en el puerto $port...${NC}"

        # Usar lsof para sistemas Unix/Linux/macOS (y en MINGW/Git Bash a menudo funciona)
        if command -v lsof &> /dev/null; then
            process=$(lsof -i :$port 2>/dev/null | grep LISTEN)
        # Usar netstat para sistemas Windows
        elif command -v netstat &> /dev/null; then
            process=$(netstat -ano | findstr :$port | findstr LISTENING)
        else
            echo -e "  ${WARN}No se encontró 'lsof' ni 'netstat'. No se puede verificar.${NC}"
            return
        fi

        if [ -n "$process" ]; then
            echo -e "  ${ERROR}Puerto $port en uso.${NC}"
            echo "$process" | while IFS= read -r line; do
                if [[ "$line" == *'PID'* ]]; then continue; fi # Saltar encabezados
                if [[ "$line" == *'COMMAND'* ]]; then continue; fi # Saltar encabezados
                
                # Intentar extraer PID y nombre
                if command -v lsof &> /dev/null; then
                    # Formato lsof: COMMAND PID USER...
                    command_name=$(echo "$line" | awk '{print $1}')
                    pid=$(echo "$line" | awk '{print $2}')
                else
                    # Formato netstat/Windows
                    pid=$(echo "$line" | awk '{print $5}')
                    command_name="N/A (Windows PID $pid)"
                fi
                
                echo -e "  ${RED}→${NC} Proceso: ${BOLD}$command_name${NC}, PID: ${BOLD}$pid${NC}"
            done
            found_process=true
        else
            echo -e "  ${SUCCESS}Puerto $port libre.${NC}"
        fi
    done
    
    if [ "$found_process" = true ]; then
        echo -e "\n${WARN}Si el puerto $3000 o $8000 está ocupado, debe matar el proceso (kill -9 PID) antes de iniciar Vite/Django.${NC}"
    fi
}


# 3. Análisis de Rutas de Importación de Frontend (Detectar errores como el actual)
check_frontend_paths() {
    print_header "⚛️ ANÁLISIS DE IMPORTACIONES FRONTEND (VITE/REACT)"
    
    # 3.1 Revisar el archivo clave App.jsx
    if [ -f "frontend/src/App.jsx" ]; then
        echo -e "${SUCCESS}✓${NC} frontend/src/App.jsx encontrado."

        print_section "Revisión de importaciones clave en App.jsx"
        
        # Buscar las importaciones de componentes de layout que causan problemas
        local components_to_check=("Header" "Footer" "BottomNavigation")
        local error_found=false

        for comp in "${components_to_check[@]}"; do
            # 1. Intenta encontrar la importación sin extensión
            if grep "import $comp from './components/$comp'" frontend/src/App.jsx; then
                echo -e "   ${WARN}Línea: import $comp from './components/$comp' ${YELLOW}(¡Sin extensión!) ${NC}"
                error_found=true
            # 2. Intenta encontrar la importación con la extensión
            elif grep "import $comp from './components/$comp.jsx'" frontend/src/App.jsx; then
                echo -e "   ${SUCCESS}Línea: import $comp from './components/$comp.jsx' ${GREEN}(Con extensión)${NC}"
            else
                echo -e "   ${WARN}Importación de ${comp}: ${YELLOW}No se pudo verificar la sintaxis o ruta. Revise manualmente.${NC}"
            fi
            
            # 3. Si se encontró el componente, verifica su existencia en la ruta esperada
            if [ -f "frontend/src/components/$comp.jsx" ]; then
                echo -e "   ${SUCCESS}→ Archivo encontrado: frontend/src/components/$comp.jsx${NC}"
            else
                echo -e "   ${ERROR}→ Archivo NO encontrado: frontend/src/components/$comp.jsx${NC}"
            fi

        done

        if [ "$error_found" = true ]; then
            echo -e "\n${ERROR}PROBLEMA POTENCIAL: Use la extensión .jsx en todas las importaciones o configure Vite para resolverlas.${NC}"
        fi

    else
        echo -e "${ERROR}✗${NC} Archivo App.jsx no encontrado. La estructura no es estándar."
    fi
    
    # 3.2 Buscar archivos que falten o que tengan nombres incorrectos
    print_section "Verificación de Archivos de Laboratorio"
    lab_files=("LabsIndexPage.jsx" "LaboratorioSensores.jsx" "LaboratorioCuantico.jsx" "SenaEvidenciasPage.jsx")
    
    for lab in "${lab_files[@]}"; do
        if [ ! -f "frontend/src/pages/$lab" ] && [ ! -f "frontend/src/pages/laboratorios/$lab" ]; then
            echo -e "${ERROR}✗${NC} Archivo de laboratorio crítico faltante: ${lab}"
        else
            echo -e "${SUCCESS}✓${NC} Archivo de laboratorio: ${lab}"
        fi
    done
}


# 4. Análisis de Contenido del .gitignore
check_gitignore_content() {
    print_header "🔒 ANÁLISIS DE SEGURIDAD (.gitignore)"
    
    check_file ".gitignore"
    if [ $? -eq 0 ]; then
        local security_patterns=(".env" "db.sqlite3" "node_modules" "dist" "*.log" "__pycache__" "staticfiles" ".DS_Store" "npm-debug.log")
        local all_ignored=true

        echo -e "\n${BOLD}Patrones críticos:${NC}"
        for pattern in "${security_patterns[@]}"; do
            if grep -qE "^[[:space:]]*$pattern" .gitignore; then
                echo -e "   ${SUCCESS}✓${NC} Ignora: $pattern"
            else
                echo -e "   ${ERROR}✗${NC} NO ignora: $pattern"
                all_ignored=false
            fi
        done
        
        if [ "$all_ignored" = true ]; then
            echo -e "\n${GREEN}El archivo .gitignore se ve bien.${NC}"
        fi
    fi
}

# -------------------------------------------------------------------
# Ejecución Principal
# -------------------------------------------------------------------

clear
echo -e "${BOLD}${BLUE}"
cat << "EOF"
╔═══════════════════════════════════════════════════════════════╗
║           SIGCT-RURAL - DIAGNÓSTICO AVANZADO v2.0             ║
╚═══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

check_environment
check_ports # NUEVA SECCIÓN
check_frontend_paths # NUEVA SECCIÓN
check_gitignore_content # MEJORADA

# Secciones heredadas de la v1.0 (ajustadas para la claridad de la v2.0)

print_header "📁 ESTRUCTURA Y CONFIGURACIÓN GENERAL"

print_section "Archivos de configuración raíz"
check_file "README.md"
check_file "render.yaml"
check_file "docker-compose.yml"

print_section "Backend (Django)"
check_file "backend/requirements.txt"
check_file "backend/manage.py"
check_file "backend/packages.txt" # Para dependencias de sistema (ej: OpenCV)

print_section "Frontend (Vite/React)"
check_file "frontend/package.json"
check_file "frontend/vite.config.js"
check_file "frontend/index.html"
check_file "frontend/.env"

# Finalización
print_header "✅ DIAGNÓSTICO COMPLETO"
echo -e "${GREEN}${BOLD}¡Diagnóstico Finalizado! Revise los errores (rojo) y avisos (amarillo) arriba.${NC}"

# Footer
echo -e "\n${CYAN}${BOLD}════════════════════════════════════════════════════════════════${NC}"
echo -e "${CYAN}${BOLD}  Hora: $(date '+%H:%M:%S')${NC}"
echo -e "${CYAN}${BOLD}════════════════════════════════════════════════════════════════${NC}\n"
