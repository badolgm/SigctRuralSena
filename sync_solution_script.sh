#!/bin/bash

# Script de Solución Completa - SigctRuralSena
# Problema: Cambios locales no reflejados en GitHub/Render
# Fecha: 2025-10-25

echo "╔════════════════════════════════════════════════════════╗"
echo "║   🔧 SOLUCIÓN COMPLETA - SIGCT RURAL SENA             ║"
echo "║   Sincronización Local → GitHub → Render              ║"
echo "╔════════════════════════════════════════════════════════╝"
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

# Variables
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="../backups_sigctrural"
BRANCH="main"

# Crear directorio de backups
mkdir -p "$BACKUP_DIR"

echo -e "${CYAN}════════════════════════════════════════════════════════${NC}"
echo -e "${CYAN}FASE 1: DIAGNÓSTICO DETALLADO${NC}"
echo -e "${CYAN}════════════════════════════════════════════════════════${NC}"
echo ""

# 1. Estado actual
echo -e "${BLUE}📊 Estado Actual del Repositorio:${NC}"
echo "───────────────────────────────────────────────────────"
git status
echo ""

# 2. Últimos commits
echo -e "${BLUE}📜 Últimos 5 Commits Locales:${NC}"
echo "───────────────────────────────────────────────────────"
git log --oneline -5 --decorate
echo ""

# 3. Comparar con remoto
echo -e "${BLUE}🌐 Comparación con GitHub (origin/main):${NC}"
echo "───────────────────────────────────────────────────────"
AHEAD=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "0")
BEHIND=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo "0")

if [ "$AHEAD" -gt 0 ]; then
    echo -e "${YELLOW}⬆️  Tienes $AHEAD commit(s) adelante de origin/main${NC}"
    git log origin/main..HEAD --oneline
elif [ "$BEHIND" -gt 0 ]; then
    echo -e "${RED}⬇️  Estás $BEHIND commit(s) atrás de origin/main${NC}"
    git log HEAD..origin/main --oneline
else
    echo -e "${GREEN}✅ Estás sincronizado con origin/main${NC}"
fi
echo ""

# 4. Archivos modificados
echo -e "${BLUE}📝 Archivos Modificados (No Commiteados):${NC}"
echo "───────────────────────────────────────────────────────"
MODIFIED_FILES=$(git status --porcelain)
if [ -z "$MODIFIED_FILES" ]; then
    echo -e "${GREEN}✅ No hay cambios sin commitear${NC}"
else
    echo -e "${YELLOW}⚠️  Archivos modificados:${NC}"
    git status -s
    echo ""
    echo -e "${YELLOW}Estos cambios NO están en GitHub ni en Render${NC}"
fi
echo ""

# 5. Verificar archivos importantes del frontend
echo -e "${BLUE}🔍 Verificando Cambios en Frontend:${NC}"
echo "───────────────────────────────────────────────────────"
FRONTEND_CHANGES=$(git diff --name-only | grep -E '^frontend/' | wc -l)
if [ "$FRONTEND_CHANGES" -gt 0 ]; then
    echo -e "${YELLOW}⚠️  Hay $FRONTEND_CHANGES archivo(s) modificado(s) en frontend:${NC}"
    git diff --name-only | grep -E '^frontend/'
else
    echo -e "${GREEN}✅ No hay cambios pendientes en frontend${NC}"
fi
echo ""

echo ""
echo -e "${CYAN}════════════════════════════════════════════════════════${NC}"
echo -e "${CYAN}FASE 2: CREAR BACKUP DE SEGURIDAD${NC}"
echo -e "${CYAN}════════════════════════════════════════════════════════${NC}"
echo ""

# Crear backup
BACKUP_FILE="$BACKUP_DIR/backup_complete_${TIMESTAMP}.bundle"
echo -e "${BLUE}💾 Creando backup completo...${NC}"
git bundle create "$BACKUP_FILE" --all

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Backup creado: $BACKUP_FILE${NC}"
    ls -lh "$BACKUP_FILE"
else
    echo -e "${RED}❌ Error al crear backup${NC}"
    exit 1
fi
echo ""

# Backup del working directory (archivos modificados)
if [ -n "$MODIFIED_FILES" ]; then
    STASH_NAME="backup_changes_${TIMESTAMP}"
    echo -e "${BLUE}💾 Guardando cambios no commiteados en stash...${NC}"
    git stash push -m "$STASH_NAME"
    echo -e "${GREEN}✅ Cambios guardados en stash: $STASH_NAME${NC}"
    echo "   Para recuperarlos: git stash apply"
fi
echo ""

echo ""
echo -e "${CYAN}════════════════════════════════════════════════════════${NC}"
echo -e "${CYAN}FASE 3: OPCIONES DE SINCRONIZACIÓN${NC}"
echo -e "${CYAN}════════════════════════════════════════════════════════${NC}"
echo ""

echo -e "${YELLOW}¿Qué deseas hacer?${NC}"
echo ""
echo "1) ${GREEN}COMMITEAR Y PUSHEAR${NC} cambios locales → GitHub → Render"
echo "   (Recomendado si tienes cambios importantes sin commitear)"
echo ""
echo "2) ${BLUE}VERIFICAR RENDER${NC} - Ver configuración y forzar redeploy"
echo "   (Si tus commits ya están en GitHub pero Render no actualiza)"
echo ""
echo "3) ${YELLOW}VER DIFERENCIAS${NC} detalladas entre local y GitHub"
echo ""
echo "4) ${RED}FORCE PUSH${NC} - Sobrescribir GitHub completamente"
echo "   (Solo si estás 100% seguro)"
echo ""
echo "5) ${MAGENTA}RESTAURAR CAMBIOS${NC} del stash y salir"
echo ""
echo "6) Salir sin hacer nada"
echo ""

read -p "Selecciona una opción (1-6): " OPTION
echo ""

case $OPTION in
    1)
        echo -e "${GREEN}════════════════════════════════════════════════════${NC}"
        echo -e "${GREEN}OPCIÓN 1: COMMITEAR Y PUSHEAR CAMBIOS${NC}"
        echo -e "${GREEN}════════════════════════════════════════════════════${NC}"
        echo ""
        
        # Restaurar cambios del stash si existen
        if git stash list | grep -q "$STASH_NAME"; then
            echo -e "${BLUE}📥 Restaurando cambios del stash...${NC}"
            git stash pop
        fi
        
        echo -e "${BLUE}📝 Archivos que se van a commitear:${NC}"
        git status -s
        echo ""
        
        read -p "Mensaje del commit: " COMMIT_MSG
        if [ -z "$COMMIT_MSG" ]; then
            COMMIT_MSG="Update: Sincronización local → GitHub → Render - $TIMESTAMP"
        fi
        
        echo ""
        echo -e "${BLUE}Agregando todos los cambios...${NC}"
        git add -A
        
        echo -e "${BLUE}Creando commit...${NC}"
        git commit -m "$COMMIT_MSG"
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Commit creado exitosamente${NC}"
            echo ""
            echo -e "${BLUE}Pusheando a GitHub...${NC}"
            git push origin main
            
            if [ $? -eq 0 ]; then
                echo ""
                echo -e "${GREEN}╔════════════════════════════════════════════════════╗${NC}"
                echo -e "${GREEN}║  ✅ ÉXITO: Cambios pusheados a GitHub            ║${NC}"
                echo -e "${GREEN}╚════════════════════════════════════════════════════╝${NC}"
                echo ""
                echo -e "${YELLOW}🚀 Ahora ve a Render y verifica:${NC}"
                echo ""
                echo "   1. Ve a: https://dashboard.render.com"
                echo "   2. Selecciona tu servicio 'SigctRuralSena'"
                echo "   3. Verifica que el deploy se inicie automáticamente"
                echo "   4. Si NO se inicia:"
                echo "      • Click en 'Manual Deploy'"
                echo "      • Selecciona 'Clear build cache & deploy'"
                echo ""
            else
                echo -e "${RED}❌ Error al pushear. Intenta con force-with-lease:${NC}"
                echo "   git push origin main --force-with-lease"
            fi
        else
            echo -e "${YELLOW}⚠️  No había cambios para commitear${NC}"
        fi
        ;;
        
    2)
        echo -e "${BLUE}════════════════════════════════════════════════════${NC}"
        echo -e "${BLUE}OPCIÓN 2: VERIFICACIÓN DE RENDER${NC}"
        echo -e "${BLUE}════════════════════════════════════════════════════${NC}"
        echo ""
        
        echo -e "${YELLOW}📋 CHECKLIST DE VERIFICACIÓN RENDER:${NC}"
        echo ""
        echo "1️⃣  ${CYAN}Verificar rama de deploy:${NC}"
        echo "   • Ve a Render Dashboard → Tu servicio → Settings"
        echo "   • Busca 'Branch' - debe ser: ${GREEN}main${NC}"
        echo ""
        
        echo "2️⃣  ${CYAN}Verificar último commit en GitHub:${NC}"
        LAST_COMMIT=$(git log -1 --oneline)
        echo "   • Último commit local: ${GREEN}$LAST_COMMIT${NC}"
        echo "   • Ve a: https://github.com/badolgm/SigctRuralSena"
        echo "   • Verifica que este commit esté ahí"
        echo ""
        
        echo "3️⃣  ${CYAN}Verificar Auto-Deploy:${NC}"
        echo "   • Settings → Build & Deploy"
        echo "   • 'Auto-Deploy' debe estar: ${GREEN}Yes${NC}"
        echo ""
        
        echo "4️⃣  ${CYAN}Ver logs del último deploy:${NC}"
        echo "   • Click en el último deploy"
        echo "   • Revisa si hay errores en los logs"
        echo ""
        
        echo "5️⃣  ${CYAN}Forzar nuevo deploy:${NC}"
        echo "   • Manual Deploy → Clear build cache & deploy"
        echo "   • Esto puede tomar 5-10 minutos"
        echo ""
        
        echo -e "${YELLOW}💡 Comandos útiles para verificar:${NC}"
        echo ""
        echo "Ver archivos de configuración de Render:"
        if [ -f "render.yaml" ]; then
            echo -e "${GREEN}✅ render.yaml encontrado${NC}"
            cat render.yaml
        else
            echo -e "${RED}❌ render.yaml NO encontrado${NC}"
        fi
        echo ""
        ;;
        
    3)
        echo -e "${YELLOW}════════════════════════════════════════════════════${NC}"
        echo -e "${YELLOW}OPCIÓN 3: VER DIFERENCIAS DETALLADAS${NC}"
        echo -e "${YELLOW}════════════════════════════════════════════════════${NC}"
        echo ""
        
        echo -e "${BLUE}📊 Diferencias entre working directory y último commit:${NC}"
        git diff --stat
        echo ""
        
        echo -e "${BLUE}📊 Diferencias con origin/main:${NC}"
        git diff origin/main --stat
        echo ""
        
        read -p "¿Ver diferencias completas? (y/n): " VIEW_FULL
        if [ "$VIEW_FULL" = "y" ]; then
            git diff
        fi
        ;;
        
    4)
        echo -e "${RED}════════════════════════════════════════════════════${NC}"
        echo -e "${RED}⚠️  ADVERTENCIA: FORCE PUSH${NC}"
        echo -e "${RED}════════════════════════════════════════════════════${NC}"
        echo ""
        echo -e "${RED}ESTO SOBRESCRIBIRÁ COMPLETAMENTE GITHUB${NC}"
        echo ""
        read -p "¿Estás ABSOLUTAMENTE seguro? Escribe 'SI FORZAR': " CONFIRM
        
        if [ "$CONFIRM" = "SI FORZAR" ]; then
            # Restaurar cambios si hay
            if git stash list | grep -q "$STASH_NAME"; then
                git stash pop
            fi
            
            # Commitear todo
            git add -A
            git commit -m "Force sync: Local → GitHub - $TIMESTAMP" || true
            
            echo ""
            echo -e "${RED}Ejecutando force push...${NC}"
            git push origin main --force
            
            if [ $? -eq 0 ]; then
                echo ""
                echo -e "${GREEN}✅ Force push completado${NC}"
                echo -e "${YELLOW}Ahora ve a Render y fuerza un redeploy${NC}"
            else
                echo -e "${RED}❌ Error en el force push${NC}"
            fi
        else
            echo "Operación cancelada por seguridad."
        fi
        ;;
        
    5)
        echo -e "${MAGENTA}════════════════════════════════════════════════════${NC}"
        echo -e "${MAGENTA}RESTAURANDO CAMBIOS DEL STASH${NC}"
        echo -e "${MAGENTA}════════════════════════════════════════════════════${NC}"
        echo ""
        
        if git stash list | grep -q "$STASH_NAME"; then
            git stash pop
            echo -e "${GREEN}✅ Cambios restaurados${NC}"
        else
            echo -e "${YELLOW}No hay cambios en el stash para restaurar${NC}"
        fi
        ;;
        
    6)
        echo "Operación cancelada."
        echo ""
        if git stash list | grep -q "$STASH_NAME"; then
            echo -e "${YELLOW}⚠️  Tienes cambios guardados en stash${NC}"
            echo "   Para restaurarlos: git stash pop"
        fi
        exit 0
        ;;
        
    *)
        echo -e "${RED}Opción inválida${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}PROCESO COMPLETADO${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════${NC}"
echo ""
echo "📝 Resumen:"
echo "   • Backup guardado en: $BACKUP_FILE"
echo "   • Último commit: $(git log -1 --oneline)"
echo ""
echo "🔗 Links útiles:"
echo "   • GitHub: https://github.com/badolgm/SigctRuralSena"
echo "   • Render: https://dashboard.render.com"
echo ""
