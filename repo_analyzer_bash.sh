#!/bin/bash

# Script de Análisis de Repositorio - Versión Bash
# Autor: Asistente Claude
# Uso: ./analyze_repo.sh

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Archivos de salida
OUTPUT_FILE="repository_analysis.txt"
JSON_FILE="repository_analysis.json"

echo -e "${CYAN}"
cat << "EOF"
╔══════════════════════════════════════════════════════════════╗
║        ANALIZADOR DE REPOSITORIO - SigctRuralSena           ║
║                    Análisis Completo                         ║
╚══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

# Iniciar el archivo de reporte
cat > "$OUTPUT_FILE" << EOF
================================================================================
REPORTE DE ANÁLISIS DEL REPOSITORIO
================================================================================
Fecha: $(date '+%Y-%m-%d %H:%M:%S')
Directorio: $(pwd)

EOF

echo -e "${BLUE}🔍 Iniciando análisis del repositorio...${NC}\n"

# ============================================================================
# ANÁLISIS DE ESTRUCTURA
# ============================================================================
echo -e "${PURPLE}📊 Analizando estructura de directorios...${NC}"

cat >> "$OUTPUT_FILE" << EOF
================================================================================
ESTRUCTURA DEL REPOSITORIO
================================================================================

EOF

# Mostrar árbol de directorios (excluyendo node_modules, .git, etc.)
if command -v tree &> /dev/null; then
    tree -I 'node_modules|.git|__pycache__|venv|dist|build' -L 3 >> "$OUTPUT_FILE"
    tree -I 'node_modules|.git|__pycache__|venv|dist|build' -L 2
else
    echo "⚠️  'tree' no está instalado. Usando 'find' alternativo..."
    find . -type d -not -path "*/node_modules/*" -not -path "*/.git/*" \
           -not -path "*/dist/*" -not -path "*/build/*" \
           -maxdepth 3 | sort >> "$OUTPUT_FILE"
fi

# ============================================================================
# ESTADÍSTICAS GENERALES
# ============================================================================
echo -e "\n${PURPLE}📈 Calculando estadísticas...${NC}"

TOTAL_FILES=$(find . -type f -not -path "*/node_modules/*" -not -path "*/.git/*" | wc -l)
TOTAL_DIRS=$(find . -type d -not -path "*/node_modules/*" -not -path "*/.git/*" | wc -l)
CSS_FILES=$(find . -type f \( -name "*.css" -o -name "*.scss" -o -name "*.sass" \) -not -path "*/node_modules/*" | wc -l)
JS_FILES=$(find . -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -not -path "*/node_modules/*" -not -path "*/dist/*" | wc -l)
PY_FILES=$(find . -type f -name "*.py" -not -path "*/__pycache__/*" -not -path "*/venv/*" | wc -l)

cat >> "$OUTPUT_FILE" << EOF

================================================================================
RESUMEN ESTADÍSTICO
================================================================================
Total de archivos: $TOTAL_FILES
Total de directorios: $TOTAL_DIRS
Archivos CSS/SCSS: $CSS_FILES
Archivos JS/JSX/TS/TSX: $JS_FILES
Archivos Python: $PY_FILES

EOF

echo -e "${GREEN}📊 Estadísticas Generales:${NC}"
echo -e "   Total de archivos: ${CYAN}$TOTAL_FILES${NC}"
echo -e "   Total de directorios: ${CYAN}$TOTAL_DIRS${NC}"
echo -e "   Archivos CSS/SCSS: ${CYAN}$CSS_FILES${NC}"
echo -e "   Archivos JS/JSX/TS/TSX: ${CYAN}$JS_FILES${NC}"
echo -e "   Archivos Python: ${CYAN}$PY_FILES${NC}"

# ============================================================================
# ARCHIVOS CSS - DETALLADO
# ============================================================================
echo -e "\n${PURPLE}🎨 Analizando archivos CSS...${NC}"

cat >> "$OUTPUT_FILE" << EOF

================================================================================
ARCHIVOS CSS/SCSS ENCONTRADOS
================================================================================
EOF

find . -type f \( -name "*.css" -o -name "*.scss" -o -name "*.sass" \) \
     -not -path "*/node_modules/*" -not -path "*/dist/*" | while read -r file; do
    
    lines=$(wc -l < "$file" 2>/dev/null || echo "0")
    size=$(du -h "$file" 2>/dev/null | cut -f1)
    
    echo -e "\n📄 $file" >> "$OUTPUT_FILE"
    echo "   Líneas: $lines" >> "$OUTPUT_FILE"
    echo "   Tamaño: $size" >> "$OUTPUT_FILE"
    
    # Verificar si contiene estilos relevantes
    if grep -qi "footer" "$file" 2>/dev/null; then
        echo "   ✓ Contiene estilos de footer" >> "$OUTPUT_FILE"
    fi
    if grep -qi "nav" "$file" 2>/dev/null; then
        echo "   ✓ Contiene estilos de navegación" >> "$OUTPUT_FILE"
    fi
    if grep -qi "button\|btn" "$file" 2>/dev/null; then
        echo "   ✓ Contiene estilos de botones" >> "$OUTPUT_FILE"
    fi
    if grep -qi "flex\|grid" "$file" 2>/dev/null; then
        echo "   ✓ Usa Flexbox o Grid" >> "$OUTPUT_FILE"
    fi
    
    echo -e "   ${GREEN}✓${NC} $file (${lines} líneas)"
done

# ============================================================================
# COMPONENTES REACT/JSX
# ============================================================================
echo -e "\n${PURPLE}⚛️  Analizando componentes React...${NC}"

cat >> "$OUTPUT_FILE" << EOF

================================================================================
COMPONENTES REACT/JSX/TSX
================================================================================
EOF

find . -type f \( -name "*.jsx" -o -name "*.tsx" \) \
     -not -path "*/node_modules/*" -not -path "*/dist/*" | while read -r file; do
    
    lines=$(wc -l < "$file" 2>/dev/null || echo "0")
    
    echo -e "\n📄 $file" >> "$OUTPUT_FILE"
    echo "   Líneas: $lines" >> "$OUTPUT_FILE"
    
    # Verificar características del componente
    if grep -q "export default" "$file" 2>/dev/null; then
        echo "   ✓ Tiene export default" >> "$OUTPUT_FILE"
    fi
    if grep -qi "<footer" "$file" 2>/dev/null; then
        echo "   ⚠️  CONTIENE <footer> - REVISAR" >> "$OUTPUT_FILE"
        echo -e "   ${YELLOW}⚠️  CONTIENE <footer>${NC}"
    fi
    if grep -qi "<nav" "$file" 2>/dev/null; then
        echo "   ⚠️  CONTIENE <nav> - REVISAR" >> "$OUTPUT_FILE"
        echo -e "   ${YELLOW}⚠️  CONTIENE <nav>${NC}"
    fi
    
    echo -e "   ${GREEN}✓${NC} $file"
done

# ============================================================================
# ARCHIVOS DE CONFIGURACIÓN
# ============================================================================
echo -e "\n${PURPLE}⚙️  Buscando archivos de configuración...${NC}"

cat >> "$OUTPUT_FILE" << EOF

================================================================================
ARCHIVOS DE CONFIGURACIÓN
================================================================================
EOF

CONFIG_FILES=("package.json" "tsconfig.json" "vite.config.js" "vite.config.ts" 
              ".env.example" ".env" "docker-compose.yml" "Dockerfile" 
              ".gitignore" "README.md")

for config in "${CONFIG_FILES[@]}"; do
    files=$(find . -name "$config" -not -path "*/node_modules/*" 2>/dev/null)
    if [ -n "$files" ]; then
        echo -e "\n✓ $config:" >> "$OUTPUT_FILE"
        echo "$files" >> "$OUTPUT_FILE"
        echo -e "   ${GREEN}✓${NC} $config encontrado"
    else
        echo -e "\n✗ $config: NO ENCONTRADO" >> "$OUTPUT_FILE"
        echo -e "   ${RED}✗${NC} $config NO encontrado"
    fi
done

# ============================================================================
# ARCHIVOS VACÍOS
# ============================================================================
echo -e "\n${PURPLE}🔍 Buscando archivos vacíos...${NC}"

cat >> "$OUTPUT_FILE" << EOF

================================================================================
ARCHIVOS VACÍOS (pueden causar problemas)
================================================================================
EOF

EMPTY_COUNT=0
find . -type f -empty -not -path "*/node_modules/*" -not -path "*/.git/*" | while read -r file; do
    echo "⚠️  $file" >> "$OUTPUT_FILE"
    echo -e "   ${YELLOW}⚠️${NC}  $file"
    ((EMPTY_COUNT++))
done

if [ $EMPTY_COUNT -eq 0 ]; then
    echo "✓ No se encontraron archivos vacíos" >> "$OUTPUT_FILE"
    echo -e "   ${GREEN}✓${NC} No se encontraron archivos vacíos"
fi

# ============================================================================
# ANÁLISIS DE PACKAGE.JSON (si existe)
# ============================================================================
if [ -f "package.json" ]; then
    echo -e "\n${PURPLE}📦 Analizando package.json...${NC}"
    
    cat >> "$OUTPUT_FILE" << EOF

================================================================================
ANÁLISIS DE PACKAGE.JSON
================================================================================
EOF
    
    if command -v jq &> /dev/null; then
        echo "Nombre: $(jq -r '.name // "N/A"' package.json)" >> "$OUTPUT_FILE"
        echo "Versión: $(jq -r '.version // "N/A"' package.json)" >> "$OUTPUT_FILE"
        echo -e "\nDependencias principales:" >> "$OUTPUT_FILE"
        jq -r '.dependencies | keys[]' package.json 2>/dev/null | head -10 >> "$OUTPUT_FILE"
        
        echo -e "   ${GREEN}✓${NC} package.json analizado"
    else
        echo "⚠️  'jq' no está instalado. Mostrando contenido raw..." >> "$OUTPUT_FILE"
        cat package.json >> "$OUTPUT_FILE"
    fi
fi

# ============================================================================
# ANÁLISIS DE IMPORTS Y EXPORTS EN COMPONENTES
# ============================================================================
echo -e "\n${PURPLE}🔗 Analizando imports/exports...${NC}"

cat >> "$OUTPUT_FILE" << EOF

================================================================================
ANÁLISIS DE IMPORTS/EXPORTS
================================================================================
EOF

echo "Componentes que importan estilos:" >> "$OUTPUT_FILE"
grep -r "import.*\.css\|import.*\.scss" --include="*.jsx" --include="*.tsx" \
     --exclude-dir=node_modules --exclude-dir=dist . 2>/dev/null | \
     head -20 >> "$OUTPUT_FILE"

# ============================================================================
# BUSCAR POTENCIALES PROBLEMAS DE DISEÑO
# ============================================================================
echo -e "\n${PURPLE}🐛 Buscando potenciales problemas...${NC}"

cat >> "$OUTPUT_FILE" << EOF

================================================================================
POTENCIALES PROBLEMAS DETECTADOS
================================================================================
EOF

# Buscar estilos inline que puedan causar problemas
echo -e "\nEstilos inline encontrados:" >> "$OUTPUT_FILE"
grep -r "style=" --include="*.jsx" --include="*.tsx" \
     --exclude-dir=node_modules . 2>/dev/null | wc -l >> "$OUTPUT_FILE"

# Buscar footer sin clases o estilos
echo -e "\nFooters encontrados:" >> "$OUTPUT_FILE"
grep -r "<footer" --include="*.jsx" --include="*.tsx" \
     --exclude-dir=node_modules . 2>/dev/null >> "$OUTPUT_FILE"

# ============================================================================
# FINALIZAR REPORTE
# ============================================================================
cat >> "$OUTPUT_FILE" << EOF

================================================================================
FIN DEL REPORTE
================================================================================
Reporte generado: $(date '+%Y-%m-%d %H:%M:%S')
EOF

echo -e "\n${GREEN}✅ Análisis completado exitosamente!${NC}"
echo -e "\n${CYAN}📝 Reportes generados:${NC}"
echo -e "   • ${YELLOW}$OUTPUT_FILE${NC}"
echo -e "\n${CYAN}💡 Próximos pasos:${NC}"
echo -e "   1. Abre el archivo ${YELLOW}$OUTPUT_FILE${NC}"
echo -e "   2. Comparte su contenido con Claude"
echo -e "   3. Identifica los archivos CSS y componentes problemáticos"
echo ""
echo -e "${GREEN}╔═══════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  Para ver el reporte, ejecuta:           ║${NC}"
echo -e "${GREEN}║  ${YELLOW}cat $OUTPUT_FILE${GREEN}                    ║${NC}"
echo -e "${GREEN}╚═══════════════════════════════════════════╝${NC}"
echo ""