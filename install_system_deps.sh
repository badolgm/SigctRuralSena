#!/usr/bin/env bash
# Script para instalar dependencias de sistema necesarias para librerías de IA/IoT
# Esto resuelve errores de compilación para Pillow, OpenCV, y otras en el entorno de Render

echo "Instalando dependencias críticas del sistema..."

# Actualizar la lista de paquetes e instalar librerías necesarias para Python (OpenCV y Pillow)
sudo apt-get update -y
sudo apt-get install -y \
    build-essential \
    libpq-dev \
    libjpeg-dev \
    zlib1g-dev \
    libfreetype6-dev \
    liblcms2-dev \
    libtiff-dev \
    libwebp-dev \
    python3-dev \
    python3-venv

echo "Dependencias del sistema instaladas correctamente."