# 🚀 PLAN MAESTRO V3.0 - SIGC&T-Rural ADSO
## Sistema Integrado de Gestión de Cursos y Tecnología Rural
### Análisis y Desarrollo de Software (ADSO) - SENA Ficha 3070388

---

## 📋 DOCUMENTO DE SEGUIMIENTO
**Fecha:** Octubre 24, 2025  
**Autor:** Bernardo Adolfo Gómez Montoya  
**Rama actual:** `develop`  
**Estado:** 🔴 CRÍTICO - Correcciones Urgentes Requeridas

---

## 🔍 ANÁLISIS DE PROBLEMAS CRÍTICOS IDENTIFICADOS

### 🔴 PROBLEMA 1: Navegación y Títulos Mal Distribuidos

#### Evidencia Visual
- **Imagen 1 (Dashboard):** Títulos pequeños en franja oscura superior
- **Imagen 2 (Centro Laboratorios):** Títulos de laboratorios también pequeños
- **Problema:** Los textos no se distribuyen correctamente a lo largo de la franja oscura
- **Responsividad:** No adapta bien en diferentes resoluciones

#### Ubicación del Problema
```
frontend/src/components/Navigation/
├── BottomNav.jsx ❌ (navegación inferior, pero falta superior)
└── BottomNav.css ❌

FALTA CREAR:
├── TopNav.jsx 📋 (navegación superior)
└── TopNav.css 📋
```

#### Causa Raíz
- No existe componente de navegación superior dedicado
- Los títulos están definidos en línea sin estilos responsive
- Falta sistema de layout con header fijo

---

### 🔴 PROBLEMA 2: Fondo Blanco en Centro de Laboratorios

#### Evidencia Visual
- El fondo es blanco plano, no futurista
- No coincide con el diseño del HTML de portafolio enviado
- Falta:
  - Partículas animadas
  - Gradientes neón
  - Efectos glassmorphism
  - Estrellas flotantes

#### Ubicación del Problema
```
frontend/src/pages/laboratorios/
└── CentroLaboratorios.jsx (o similar) ❌

REQUIERE:
- Fondo con radial-gradient
- Componente de partículas animadas
- Efectos de estrellas
```

---

### 🔴 PROBLEMA 3: Autenticación No Funciona

#### Problemas Identificados
1. **No hay registro de usuarios** - Solo existe página de login
2. **Autenticación 2FA no implementada** - Diseñada pero no funciona
3. **No hay protección de rutas** - Cualquiera puede acceder sin login
4. **Sesiones no persisten** - No hay manejo de tokens

#### Ubicación del Problema
```
backend/apps/usuarios/ ✅ (existe el app)
├── models.py ✅
├── views.py ❌ (falta lógica 2FA)
├── serializers.py ❌ (incompleto)
└── urls.py ❌ (endpoints incompletos)

frontend/src/pages/
├── Login.jsx ✅ (existe pero no funciona)
├── Register.jsx 📋 (NO EXISTE)
└── auth/ 📋 (falta carpeta completa)
```

---

### 🔴 PROBLEMA 4: HTML de Portafolio Sin Integrar

#### Estado Actual
- HTML existe como archivo independiente (`futuristic_portfolioV5.html`)
- Subido a GitHub pero no integrado en React
- Título incorrecto: "SENA.ADS" debería ser "ADSO - Análisis y Desarrollo de Software"

#### Integración Requerida
1. Convertir HTML a componente React
2. Crear rutas para:
   - `/evidencias` → Evidencias SENA ADSO
   - `/documentacion` → Documentación del proyecto
3. Conectar con base de datos (GUÍA 6)
4. Corregir título del portafolio

---

### 🔴 PROBLEMA 5: Base de Datos para Evidencias (GUÍA 6)

#### Estado Actual
- No existe modelo de datos para evidencias
- No hay CRUD para gestionar documentos
- La documentación solo está en archivos `.md`

#### Requerido
```python
# backend/apps/evidencias/models.py
class Evidencia(models.Model):
    titulo = models.CharField(max_length=200)
    tipo = models.CharField(choices=TIPOS_EVIDENCIA)
    competencia = models.ForeignKey(Competencia)
    archivo = models.FileField(upload_to='evidencias/')
    descripcion = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    aprobada = models.BooleanField(default=False)
```

---

## 🎯 PLAN DE ACCIÓN ESTRUCTURADO

### FASE 0: Preparación y Backup 🛡️

#### PASO 0.1: Verificar Estado Actual
```bash
# Desde: ~/Workspace/projectsbadolgm/SigctRuralSena (develop)

# 1. Verificar rama
git branch
# Output esperado: * develop

# 2. Crear tag de backup
git tag -a v2.1-backup -m "Backup antes de correcciones críticas V3.0"
git push origin v2.1-backup

# 3. Verificar archivos actuales
ls -la

# 4. Revisar último commit
git log --oneline -5
```

#### PASO 0.2: Crear Documento de Plan
```bash
# Guardar este plan en el repositorio
touch "🚀 PLAN_MAESTRO_V3.0_ADSO.md"

# Añadir al repositorio
git add "🚀 PLAN_MAESTRO_V3.0_ADSO.md"
git commit -m "docs: Añadir Plan Maestro V3.0 con correcciones críticas"
git push origin develop
```

---

### FASE 1: Corrección de Navegación y Títulos 🎨

#### PASO 1.1: Crear Branch de Feature
```bash
# Desde: develop
git checkout -b feature/navegacion-responsive

# Verificar
git branch
# Output: * feature/navegacion-responsive
```

#### PASO 1.2: Crear Componente TopNav

**Archivo a crear:** `frontend/src/components/Navigation/TopNav.jsx`

```jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠 Dashboard', icon: '🏠' },
    { path: '/laboratorios', label: '🧪 Laboratorios STEM', icon: '🧪' },
    { path: '/evidencias', label: '📁 Evidencias ADSO', icon: '📁' },
    { path: '/documentacion', label: '📚 Documentación', icon: '📚' },
    { path: '/analytics', label: '📊 Analytics IA', icon: '📊' }
  ];

  return (
    <nav className="top-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-icon">🌱</span>
          <h1 className="brand-title">SIGC&T-Rural v2.0</h1>
          <span className="brand-subtitle">ADSO | SENA 3070388</span>
        </div>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-user">
          <span className="user-icon">👤</span>
          <span className="user-name">Bernardo Gómez</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
```

#### PASO 1.3: Crear Estilos TopNav

**Archivo a crear:** `frontend/src/components/Navigation/TopNav.css`

```css
/* Variables CSS futuristas */
:root {
  --neon-blue: #00f5ff;
  --neon-purple: #8a2be2;
  --neon-pink: #ff1493;
  --neon-green: #39ff14;
  --dark-bg: #0a0a0a;
  --card-bg: rgba(15, 15, 35, 0.9);
  --text-light: #e0e0e0;
}

/* Navegación superior fija */
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--card-bg);
  backdrop-filter: blur(15px);
  border-bottom: 2px solid var(--neon-blue);
  box-shadow: 0 4px 20px rgba(0, 245, 255, 0.3);
}

.nav-container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: grid;
  grid-template-columns: 300px 1fr auto;
  align-items: center;
  gap: 2rem;
}

/* Brand section */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-icon {
  font-size: 2rem;
  animation: pulse 2s infinite;
}

.brand-title {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--neon-blue);
  text-shadow: 0 0 20px var(--neon-blue);
  margin: 0;
  white-space: nowrap;
}

.brand-subtitle {
  font-size: 0.85rem;
  color: var(--neon-green);
  font-weight: 600;
  white-space: nowrap;
}

/* Menu principal */
.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-item {
  flex-shrink: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  background: rgba(0, 245, 255, 0.05);
  border: 1px solid transparent;
  color: var(--text-light);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background: rgba(0, 245, 255, 0.15);
  border-color: var(--neon-blue);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.4);
  transform: translateY(-2px);
}

.nav-link.active {
  background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
  border-color: var(--neon-blue);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.6);
}

.nav-icon {
  font-size: 1.25rem;
}

.nav-label {
  font-size: 0.95rem;
}

/* Usuario */
.nav-user {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(138, 43, 226, 0.2);
  border-radius: 20px;
  border: 1px solid var(--neon-purple);
}

.user-icon {
  font-size: 1.5rem;
}

.user-name {
  color: var(--text-light);
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 1200px) {
  .nav-container {
    grid-template-columns: 250px 1fr auto;
    gap: 1rem;
  }

  .brand-title {
    font-size: 1.25rem;
  }

  .nav-link {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .nav-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }

  .nav-brand {
    justify-content: center;
  }

  .nav-menu {
    gap: 0.5rem;
    justify-content: center;
  }

  .nav-label {
    display: none;
  }

  .nav-link {
    padding: 0.6rem;
  }

  .nav-user {
    justify-content: center;
  }

  .user-name {
    display: none;
  }
}

/* Animación */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
```

#### PASO 1.4: Integrar en App.jsx

**Modificar:** `frontend/src/App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/Navigation/TopNav';
import BottomNav from './components/Navigation/BottomNav';
import Dashboard from './pages/Dashboard';
import CentroLaboratorios from './pages/CentroLaboratorios';
import EvidenciasADSO from './pages/EvidenciasADSO';
import Documentacion from './pages/Documentacion';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <TopNav />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/laboratorios" element={<CentroLaboratorios />} />
            <Route path="/evidencias" element={<EvidenciasADSO />} />
            <Route path="/documentacion" element={<Documentacion />} />
            {/* Rutas de laboratorios específicos */}
          </Routes>
        </main>

        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
```

#### PASO 1.5: Actualizar Estilos Globales

**Modificar:** `frontend/src/App.css`

```css
/* Layout principal */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: 
    radial-gradient(circle at 25% 25%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(0, 245, 255, 0.3) 0%, transparent 50%),
    #0a0a0a;
  color: #e0e0e0;
}

.main-content {
  flex: 1;
  margin-top: 80px; /* Altura del TopNav */
  margin-bottom: 70px; /* Altura del BottomNav */
  padding: 2rem;
}

@media (max-width: 768px) {
  .main-content {
    margin-top: 140px; /* TopNav más alto en mobile */
    padding: 1rem;
  }
}
```

#### ✅ PASO 1.6: Validar Navegación

**Checklist:**
- [ ] TopNav se ve correctamente en desktop (1920px)
- [ ] Títulos distribuidos uniformemente
- [ ] Responsive en tablet (768px)
- [ ] Responsive en mobile (375px)
- [ ] Navegación funciona (cambio de rutas)
- [ ] Active state se muestra correctamente

**Comandos de validación:**
```bash
# Compilar y verificar
cd frontend
npm run dev

# Abrir en navegador
# http://localhost:5173

# Probar diferentes resoluciones con DevTools
```

#### PASO 1.7: Commit y Push

```bash
# Solo si todos los checks pasan
git add .
git commit -m "feat(nav): Añadir navegación superior responsive con diseño futurista

- Crear componente TopNav con distribución correcta
- Implementar estilos responsive (mobile, tablet, desktop)
- Integrar en App.jsx con rutas
- Añadir animaciones y efectos neón
- Corregir problema de títulos pequeños

Evidencia: GUÍA 6 - Corrección navegación"

git push origin feature/navegacion-responsive
```

---

### FASE 2: Fondo Futurista Centro de Laboratorios 🌌

#### PASO 2.1: Crear Branch de Feature
```bash
# Desde: develop
git checkout develop
git checkout -b feature/fondo-futurista
```

#### PASO 2.2: Crear Componente de Partículas

**Archivo a crear:** `frontend/src/components/Background/FuturisticBackground.jsx`

```jsx
import React, { useEffect, useRef } from 'react';
import './FuturisticBackground.css';

const FuturisticBackground = () => {
  const starsRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Generar estrellas
    if (starsRef.current) {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = Math.random() * 3 + 1 + 's';
        starsRef.current.appendChild(star);
      }
    }

    // Generar partículas flotantes
    if (particlesRef.current) {
      const colors = ['#00f5ff', '#8a2be2', '#ff1493', '#39ff14'];
      for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = Math.random() * 8 + 4 + 's';
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <div className="futuristic-background">
      <div className="stars-container" ref={starsRef}></div>
      <div className="particles-container" ref={particlesRef}></div>
    </div>
  );
};

export default FuturisticBackground;
```

**Archivo a crear:** `frontend/src/components/Background/FuturisticBackground.css`

```css
.futuristic-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: 
    radial-gradient(circle at 25% 25%, rgba(138, 43, 226, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(0, 245, 255, 0.4) 0%, transparent 50%),
    #0a0a0a;
  overflow: hidden;
}

.stars-container,
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 2s infinite ease-in-out alternate;
}

@keyframes twinkle {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px);
    opacity: 1;
  }
}
```

#### PASO 2.3: Actualizar Centro de Laboratorios

**Modificar:** `frontend/src/pages/CentroLaboratorios.jsx`

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FuturisticBackground from '../components/Background/FuturisticBackground';
import './CentroLaboratorios.css';

const CentroLaboratorios = () => {
  const laboratorios = [
    {
      id: 'sensores',
      titulo: 'Laboratorio de Sensores IoT',
      icon: '🌡️',
      descripcion: 'Monitoreo en tiempo real de temperatura, humedad y humedad del suelo',
      color: '--neon-blue'
    },
    {
      id: 'cuantico',
      titulo: 'Laboratorio Cuántico',
      icon: '⚛️',
      descripcion: 'Simulaciones cuánticas y algoritmos avanzados',
      color: '--neon-purple'
    },
    {
      id: 'robotica',
      titulo: 'Laboratorio de Robótica',
      icon: '🤖',
      descripcion: 'Programación y control de sistemas robóticos',
      color: '--neon-pink'
    },
    {
      id: 'energias',
      titulo: 'Laboratorio de Energías',
      icon: '⚡',
      descripcion: 'Energías renovables y sistemas sostenibles',
      color: '--neon-green'
    },
    {
      id: 'agricultura',
      titulo: 'Laboratorio de Agricultura IA',
      icon: '🌱',
      descripcion: 'IA para clasificación de enfermedades de plantas',
      color: '--neon-blue'
    },
    {
      id: 'software',
      titulo: 'Laboratorio de Software',
      icon: '💻',
      descripcion: 'Desarrollo de aplicaciones y sistemas',
      color: '--neon-purple'
    }
  ];

  return (
    <div className="centro-laboratorios">
      <FuturisticBackground />
      
      <div className="labs-container">
        <header className="labs-header">
          <h1 className="labs-title">🧪 Centro de Laboratorios STEM</h1>
          <p className="labs-subtitle">
            Sistema Integrado de Gestión Científica y Tecnológica Rural
          </p>
        </header>

        <div className="labs-grid">
          {laboratorios.map((lab) => (
            <Link 
              key={lab.id}
              to={`/laboratorio/${lab.id}`}
              className="lab-card"
              style={{ '--card-color': `var(${lab.color})` }}
            >
              <div className="lab-icon">{lab.icon}</div>
              <h3 className="lab-title">{lab.titulo}</h3>
              <p className="lab-description">{lab.descripcion}</p>
              <div className="lab-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CentroLaboratorios;
```

**Archivo de estilos:** `frontend/src/pages/CentroLaboratorios.css`

```css
.centro-laboratorios {
  min-height: calc(100vh - 150px);
  padding: 2rem;
  position: relative;
}

.labs-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.labs-header {
  text-align: center;
  margin-bottom: 3rem;
}

.labs-title {
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.5);
}

.labs-subtitle {
  font-size: 1.2rem;
  color: var(--neon-green);
  font-weight: 600;
}

/* Grid de laboratorios */
.labs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.lab-card {
  background: rgba(15, 15, 35, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid transparent;
  text-decoration: none;
  color: var(--text-light);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.lab-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, var(--card-color), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.lab-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--card-color);
  box-shadow: 0 20px 40px rgba(0, 245, 255, 0.3);
}

.lab-card:hover::before {
  opacity: 0.1;
}

.lab-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-align: center;
}

.lab-title {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  color: var(--card-color);
  text-align: center;
  margin-bottom: 1rem;
}

.lab-description {
  text-align: center;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.lab-arrow {
  text-align: right;
  font-size: 2rem;
  color: var(--card-color);
  opacity: 0;
  transition: all 0.3s ease;
}

.lab-card:hover .lab-arrow {
  opacity: 1;
  transform: translateX(10px);
}

/* Responsive */
@media (max-width: 1200px) {
  .labs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .labs-title {
    font-size: 2rem;
  }

  .labs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .lab-card {
    padding: 1.5rem;
  }
}
```

#### ✅ PASO 2.4: Validar Diseño Futurista

**Checklist:**
- [ ] Fondo con gradientes neón visible
- [ ] Estrellas animadas funcionando
- [ ] Partículas flotantes visibles
- [ ] Cards con efecto glassmorphism
- [ ] Hover effects funcionan
- [ ] Responsive en todas las resoluciones

**Comandos:**
```bash
npm run dev
# Verificar en http://localhost:5173/laboratorios
```

#### PASO 2.5: Commit y Push

```bash
git add .
git commit -m "feat(design): Implementar fondo futurista en Centro de Laboratorios

- Crear componente FuturisticBackground con estrellas y partículas
- Rediseñar Centro de Laboratorios con efectos neón
- Implementar grid responsive 3-2-1 columnas
- Añadir efectos glassmorphism en cards
- Corregir fondo blanco por diseño futurista

Evidencia: GUÍA 6 - Diseño futurista implementado"

git push origin feature/fondo-futurista
```

---

### FASE 3: Sistema de Autenticación Completo 🔐

#### PASO 3.1: Crear Branch de Feature
```bash
# Desde: develop
git checkout develop
git checkout -b feature/autenticacion-2fa
```

#### PASO 3.2: Actualizar Backend - Modelos

**Modificar:** `backend/apps/usuarios/models.py`

```python
from django.contrib.auth.models import AbstractUser
from django.db import models
import pyotp
import qrcode
from io import BytesIO
import base64

class Usuario(AbstractUser):
    """Modelo extendido de usuario con 2FA"""
    
    # Campos adicionales
    telefono = models.CharField(max_length=15, blank=True, null=True)
    institucion = models.CharField(max_length=200, default='SENA Regional Magdalena')
    ficha = models.CharField(max_length=20, default='3070388')
    rol = models.CharField(
        max_length=20,
        choices=[
            ('estudiante', 'Estudiante'),
            ('instructor', 'Instructor'),
            ('admin', 'Administrador'),
        ],
        default='estudiante'
    )
    
    # Autenticación 2FA
    otp_secret = models.CharField(max_length=32, blank=True, null=True)
    two_factor_enabled = models.BooleanField(default=False)
    
    # Metadatos
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    ultima_conexion = models.DateTimeField(auto_now=True)
    activo = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        ordering = ['-fecha_registro']
    
    def __str__(self):
        return f"{self.get_full_name()} ({self.username})"
    
    def generate_otp_secret(self):
        """Genera secreto para 2FA"""
        if not self.otp_secret:
            self.otp_secret = pyotp.random_base32()
            self.save()
        return self.otp_secret
    
    def get_otp_uri(self):
        """Genera URI para QR code"""
        secret = self.generate_otp_secret()
        totp = pyotp.TOTP(secret)
        return totp.provisioning_uri(
            name=self.email,
            issuer_name='SIGCT-Rural ADSO'
        )
    
    def get_qr_code(self):
        """Genera QR code en base64"""
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        qr.add_data(self.get_otp_uri())
        qr.make(fit=True)
        
        img = qr.make_image(fill_color="black", back_color="white")
        buffer = BytesIO()
        img.save(buffer, format='PNG')
        buffer.seek(0)
        
        return base64.b64encode(buffer.getvalue()).decode()
    
    def verify_otp(self, otp_code):
        """Verifica código OTP"""
        if not self.otp_secret:
            return False
        
        totp = pyotp.TOTP(self.otp_secret)
        return totp.verify(otp_code, valid_window=1)
```

#### PASO 3.3: Crear Serializers

**Modificar:** `backend/apps/usuarios/serializers.py`

```python
from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    """Serializer para información del usuario"""
    
    class Meta:
        model = Usuario
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name',
            'telefono', 'institucion', 'ficha', 'rol', 'avatar',
            'two_factor_enabled', 'fecha_registro', 'ultima_conexion'
        ]
        read_only_fields = ['id', 'fecha_registro', 'ultima_conexion']

class RegisterSerializer(serializers.ModelSerializer):
    """Serializer para registro de usuario"""
    password = serializers.CharField(write_only=True, min_length=8)
    password_confirm = serializers.CharField(write_only=True, min_length=8)
    
    class Meta:
        model = Usuario
        fields = [
            'username', 'email', 'password', 'password_confirm',
            'first_name', 'last_name', 'telefono', 'ficha', 'rol'
        ]
    
    def validate(self, data):
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError({
                'password': 'Las contraseñas no coinciden'
            })
        return data
    
    def create(self, validated_data):
        validated_data.pop('password_confirm')
        password = validated_data.pop('password')
        
        user = Usuario.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        
        return user

class LoginSerializer(serializers.Serializer):
    """Serializer para login"""
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    otp_code = serializers.CharField(required=False, allow_blank=True)
    
    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        otp_code = data.get('otp_code')
        
        if username and password:
            user = authenticate(username=username, password=password)
            
            if not user:
                raise serializers.ValidationError('Credenciales inválidas')
            
            if not user.is_active:
                raise serializers.ValidationError('Usuario inactivo')
            
            # Verificar 2FA si está habilitado
            if user.two_factor_enabled:
                if not otp_code:
                    raise serializers.ValidationError({
                        'otp_required': True,
                        'message': 'Se requiere código 2FA'
                    })
                
                if not user.verify_otp(otp_code):
                    raise serializers.ValidationError('Código 2FA inválido')
            
            data['user'] = user
            return data
        else:
            raise serializers.ValidationError('Debe proporcionar username y password')

class Enable2FASerializer(serializers.Serializer):
    """Serializer para habilitar 2FA"""
    otp_code = serializers.CharField(min_length=6, max_length=6)
    
    def validate_otp_code(self, value):
        user = self.context['request'].user
        if not user.verify_otp(value):
            raise serializers.ValidationError('Código OTP inválido')
        return value
```

#### PASO 3.4: Crear Views de Autenticación

**Modificar:** `backend/apps/usuarios/views.py`

```python
from rest_framework import status, generics, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import login, logout
from .models import Usuario
from .serializers import (
    UsuarioSerializer, 
    RegisterSerializer, 
    LoginSerializer,
    Enable2FASerializer
)

@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    """Registro de nuevo usuario"""
    serializer = RegisterSerializer(data=request.data)
    
    if serializer.is_valid():
        user = serializer.save()
        
        # Generar tokens JWT
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'message': 'Usuario registrado exitosamente',
            'user': UsuarioSerializer(user).data,
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """Login de usuario con soporte 2FA"""
    serializer = LoginSerializer(data=request.data)
    
    if serializer.is_valid():
        user = serializer.validated_data['user']
        
        # Actualizar última conexión
        user.ultima_conexion = timezone.now()
        user.save()
        
        # Generar tokens JWT
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'message': 'Login exitoso',
            'user': UsuarioSerializer(user).data,
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        }, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    """Logout de usuario"""
    try:
        refresh_token = request.data.get('refresh_token')
        token = RefreshToken(refresh_token)
        token.blacklist()
        
        return Response({
            'message': 'Logout exitoso'
        }, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({
            'error': 'Token inválido'
        }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    """Obtener perfil del usuario"""
    serializer = UsuarioSerializer(request.user)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def generate_2fa_qr(request):
    """Generar QR code para 2FA"""
    user = request.user
    
    if user.two_factor_enabled:
        return Response({
            'error': '2FA ya está habilitado'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    qr_code = user.get_qr_code()
    
    return Response({
        'qr_code': qr_code,
        'secret': user.otp_secret,
        'message': 'Escanea el código QR con Google Authenticator'
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def enable_2fa(request):
    """Habilitar 2FA verificando código"""
    serializer = Enable2FASerializer(
        data=request.data,
        context={'request': request}
    )
    
    if serializer.is_valid():
        user = request.user
        user.two_factor_enabled = True
        user.save()
        
        return Response({
            'message': '2FA habilitado exitosamente'
        })
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def disable_2fa(request):
    """Deshabilitar 2FA"""
    user = request.user
    user.two_factor_enabled = False
    user.otp_secret = None
    user.save()
    
    return Response({
        'message': '2FA deshabilitado'
    })
```

#### PASO 3.5: Configurar URLs

**Modificar:** `backend/apps/usuarios/urls.py`

```python
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

app_name = 'usuarios'

urlpatterns = [
    # Autenticación
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Perfil
    path('profile/', views.profile_view, name='profile'),
    
    # 2FA
    path('2fa/generate-qr/', views.generate_2fa_qr, name='generate_2fa_qr'),
    path('2fa/enable/', views.enable_2fa, name='enable_2fa'),
    path('2fa/disable/', views.disable_2fa, name='disable_2fa'),
]
```

#### PASO 3.6: Crear Frontend - Página de Registro

**Archivo a crear:** `frontend/src/pages/auth/Register.jsx`

```jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirm: '',
    telefono: '',
    ficha: '3070388',
    rol: 'estudiante'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://sigct-backend.onrender.com/api/usuarios/register/',
        formData
      );

      // Guardar tokens
      localStorage.setItem('access_token', response.data.tokens.access);
      localStorage.setItem('refresh_token', response.data.tokens.refresh);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirigir al dashboard
      navigate('/');
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Error al registrar usuario. Verifica los datos.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🌱 Registro SIGC&T-Rural</h1>
          <p>Crea tu cuenta ADSO - SENA Ficha 3070388</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label>👤 Nombre de Usuario *</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="usuario123"
              />
            </div>

            <div className="form-group">
              <label>📧 Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="correo@soy.sena.edu.co"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>📝 Nombre *</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label>📝 Apellido *</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                placeholder="Tu apellido"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>📱 Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="3001234567"
              />
            </div>

            <div className="form-group">
              <label>🎓 Ficha SENA *</label>
              <input
                type="text"
                name="ficha"
                value={formData.ficha}
                onChange={handleChange}
                required
                placeholder="3070388"
              />
            </div>
          </div>

          <div className="form-group">
            <label>👥 Rol *</label>
            <select
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              required
            >
              <option value="estudiante">Estudiante</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>🔒 Contraseña *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={8}
                placeholder="Mínimo 8 caracteres"
              />
            </div>

            <div className="form-group">
              <label>🔒 Confirmar Contraseña *</label>
              <input
                type="password"
                name="password_confirm"
                value={formData.password_confirm}
                onChange={handleChange}
                required
                minLength={8}
                placeholder="Repite la contraseña"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary"
            disabled={loading}
          >
            {loading ? '⏳ Registrando...' : '🚀 Crear Cuenta'}
          </button>

          <div className="auth-footer">
            <p>¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
```

#### PASO 3.7: Actualizar Página de Login

**Modificar:** `frontend/src/pages/auth/Login.jsx`

```jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    otp_code: ''
  });
  const [otpRequired, setOtpRequired] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://sigct-backend.onrender.com/api/usuarios/login/',
        formData
      );

      // Guardar tokens y usuario
      localStorage.setItem('access_token', response.data.tokens.access);
      localStorage.setItem('refresh_token', response.data.tokens.refresh);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirigir al dashboard
      navigate('/');
    } catch (err) {
      if (err.response?.data?.otp_required) {
        setOtpRequired(true);
        setError('Se requiere código 2FA');
      } else {
        setError(
          err.response?.data?.message || 
          'Error al iniciar sesión. Verifica tus credenciales.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🔐 Iniciar Sesión</h1>
          <p>SIGC&T-Rural - ADSO SENA 3070388</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          <div className="form-group">
            <label>👤 Usuario</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Tu nombre de usuario"
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label>🔒 Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Tu contraseña"
              autoComplete="current-password"
            />
          </div>

          {otpRequired && (
            <div className="form-group">
              <label>🔢 Código 2FA</label>
              <input
                type="text"
                name="otp_code"
                value={formData.otp_code}
                onChange={handleChange}
                required
                placeholder="123456"
                maxLength={6}
                pattern="[0-9]{6}"
              />
              <small>Ingresa el código de Google Authenticator</small>
            </div>
          )}

          <button 
            type="submit" 
            className="btn-primary"
            disabled={loading}
          >
            {loading ? '⏳ Ingresando...' : '🚀 Ingresar'}
          </button>

          <div className="auth-footer">
            <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
            <p><Link to="/recuperar-password">¿Olvidaste tu contraseña?</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
```

#### PASO 3.8: Crear Estilos de Autenticación

**Archivo a crear:** `frontend/src/pages/auth/Auth.css`

```css
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: 
    radial-gradient(circle at 25% 25%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(0, 245, 255, 0.3) 0%, transparent 50%),
    #0a0a0a;
}

.auth-card {
  background: rgba(15, 15, 35, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  border: 2px solid var(--neon-blue);
  box-shadow: 0 10px 40px rgba(0, 245, 255, 0.3);
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-header h1 {
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  color: var(--neon-blue);
  text-shadow: 0 0 20px var(--neon-blue);
  margin-bottom: 0.5rem;
}

.auth-header p {
  color: var(--neon-green);
  font-size: 1rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: var(--neon-blue);
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group select {
  padding: 0.75rem;
  border-radius: 10px;
  border: 2px solid rgba(0, 245, 255, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: var(--text-light);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--neon-blue);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.4);
}

.form-group small {
  color: var(--neon-green);
  font-size: 0.85rem;
}

.error-message {
  background: rgba(255, 20, 147, 0.2);
  border: 2px solid var(--neon-pink);
  border-radius: 10px;
  padding: 1rem;
  color: var(--neon-pink);
  text-align: center;
}

.btn-primary {
  background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 245, 255, 0.5);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.auth-footer {
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 245, 255, 0.2);
}

.auth-footer p {
  color: var(--text-light);
  margin: 0.5rem 0;
}

.auth-footer a {
  color: var(--neon-blue);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.auth-footer a:hover {
  color: var(--neon-purple);
  text-shadow: 0 0 10px var(--neon-purple);
}

@media (max-width: 768px) {
  .auth-card {
    padding: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .auth-header h1 {
    font-size: 1.5rem;
  }
}
```

#### PASO 3.9: Crear Componente de Rutas Protegidas

**Archivo a crear:** `frontend/src/components/ProtectedRoute.jsx`

```jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
```

#### PASO 3.10: Actualizar App.jsx con Rutas

**Modificar:** `frontend/src/App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopNav from './components/Navigation/TopNav';
import BottomNav from './components/Navigation/BottomNav';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import CentroLaboratorios from './pages/CentroLaboratorios';
import './App.css';

function App() {
  const isAuthenticated = localStorage.getItem('access_token');

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && <TopNav />}
        
        <main className="main-content">
          <Routes>
            {/* Rutas públicas */}
            <Route 
              path="/login" 
              element={isAuthenticated ? <Navigate to="/" /> : <Login />} 
            />
            <Route 
              path="/register" 
              element={isAuthenticated ? <Navigate to="/" /> : <Register />} 
            />

            {/* Rutas protegidas */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/laboratorios" 
              element={
                <ProtectedRoute>
                  <CentroLaboratorios />
                </ProtectedRoute>
              } 
            />
            
            {/* Ruta por defecto */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        {isAuthenticated && <BottomNav />}
      </div>
    </Router>
  );
}

export default App;
```

#### PASO 3.11: Instalar Dependencias Backend

**Comandos:**
```bash
cd backend

# Instalar dependencias para 2FA
pip install pyotp qrcode pillow djangorestframework-simplejwt

# Actualizar requirements.txt
pip freeze > requirements.txt

# Crear migración
python manage.py makemigrations usuarios

# Aplicar migración
python manage.py migrate
```

#### PASO 3.12: Configurar JWT en settings.py

**Modificar:** `backend/core/settings.py`

```python
# Añadir al final del archivo

from datetime import timedelta

# JWT Settings
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
}

# CORS Settings (actualizar)
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://sigct-frontend.onrender.com',
]

CORS_ALLOW_CREDENTIALS = True

# Custom User Model
AUTH_USER_MODEL = 'usuarios.Usuario'

# Añadir a INSTALLED_APPS
INSTALLED_APPS = [
    # ... apps existentes
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',
]

# Actualizar REST_FRAMEWORK
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ),
}
```

#### ✅ PASO 3.13: Validar Sistema de Autenticación

**Checklist Backend:**
- [ ] Migraciones aplicadas sin errores
- [ ] Endpoint de registro funciona (`POST /api/usuarios/register/`)
- [ ] Endpoint de login funciona (`POST /api/usuarios/login/`)
- [ ] Generación de QR 2FA funciona (`POST /api/usuarios/2fa/generate-qr/`)
- [ ] Verificación 2FA funciona
- [ ] Tokens JWT se generan correctamente

**Comandos de prueba:**
```bash
# Probar registro
curl -X POST http://localhost:8000/api/usuarios/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "test_user",
    "email": "test@sena.edu.co",
    "password": "Test1234!",
    "password_confirm": "Test1234!",
    "first_name": "Test",
    "last_name": "User",
    "ficha": "3070388",
    "rol": "estudiante"
  }'

# Probar login
curl -X POST http://localhost:8000/api/usuarios/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "test_user",
    "password": "Test1234!"
  }'
```

**Checklist Frontend:**
- [ ] Página de registro se muestra correctamente
- [ ] Formulario de registro valida campos
- [ ] Registro exitoso redirige al dashboard
- [ ] Página de login se muestra correctamente
- [ ] Login exitoso guarda tokens y redirige
- [ ] Login con 2FA solicita código OTP
- [ ] Rutas protegidas requieren autenticación
- [ ] Logout limpia tokens y redirige a login

#### PASO 3.14: Commit y Push

```bash
git add .
git commit -m "feat(auth): Implementar sistema completo de autenticación con 2FA

Backend:
- Extender modelo Usuario con campos personalizados
- Implementar generación y verificación de OTP
- Crear endpoints de registro, login, logout
- Configurar JWT con refresh tokens
- Añadir endpoints para habilitar/deshabilitar 2FA
- Generar QR codes para Google Authenticator

Frontend:
- Crear página de registro con validación
- Mejorar página de login con soporte 2FA
- Implementar ProtectedRoute component
- Actualizar rutas con autenticación
- Diseño futurista para auth pages
- Manejo de tokens en localStorage

Evidencia: GUÍA 6 - Sistema de autenticación 2FA completo"

git push origin feature/autenticacion-2fa
```

---

### FASE 4: Integración de Portafolio HTML en React 📁

#### PASO 4.1: Crear Branch de Feature
```bash
# Desde: develop
git checkout develop
git checkout -b feature/portafolio-evidencias
```

#### PASO 4.2: Corregir HTML del Portafolio

**Modificar:** `futuristic_portfolioV5.html`

**Cambios a realizar:**
1. Cambiar título: "SENA.ADS" → "ADSO - Análisis y Desarrollo de Software"
2. Actualizar subtítulos con información correcta
3. Ajustar metadatos

```html
<!-- Buscar y reemplazar -->
<!-- ANTES: -->
<div class="logo">🚀 SENA.ADS</div>
<h1>PORTAFOLIO FUTURISTA</h1>
<p>Análisis y Desarrollo de Software - SENA Ficha 3070388</p>

<!-- DESPUÉS: -->
<div class="logo">🚀 ADSO SENA</div>
<h1>PORTAFOLIO ADSO</h1>
<p>Análisis y Desarrollo de Software | SENA Ficha 3070388</p>
<p>Bernardo Adolfo Gómez Montoya - Regional Magdalena</p>
```

#### PASO 4.3: Convertir HTML a Componente React

**Archivo a crear:** `frontend/src/pages/evidencias/EvidenciasADSO.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EvidenciasADSO.css';

const EvidenciasADSO = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [starsGenerated, setStarsGenerated] = useState(false);

  useEffect(() => {
    if (!starsGenerated) {
      createStars();
      createParticles();
      setStarsGenerated(true);
    }
  }, [starsGenerated]);

  const createStars = () => {
    const starsContainer = document.querySelector('.stars-evidencias');
    if (!starsContainer) return;

    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 2 + 's';
      star.style.animationDuration = Math.random() * 3 + 1 + 's';
      starsContainer.appendChild(star);
    }
  };

  const createParticles = () => {
    const particlesContainer = document.querySelector('.particles-evidencias');
    if (!particlesContainer) return;

    const colors = ['#00f5ff', '#8a2be2', '#ff1493', '#39ff14'];
    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 6 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = Math.random() * 8 + 4 + 's';
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;
      particle.style.boxShadow = `0 0 10px ${color}`;
      particlesContainer.appendChild(particle);
    }
  };

  const competencias = [
    {
      id: '220501094',
      titulo: '220501094 - Estructurar Propuesta Técnica',
      descripcion: 'Desarrollo de habilidades para analizar requisitos de software, estructurar soluciones técnicas efectivas y documentar propuestas profesionales.',
      icon: '📋',
      color: 'blue'
    },
    {
      id: '220501096',
      titulo: '220501096 - Desarrollar Solución Software',
      descripcion: 'Competencia integral en desarrollo de aplicaciones completas, aplicando metodologías ágiles y tecnologías de vanguardia.',
      icon: '💻',
      color: 'purple'
    },
    {
      id: 'analisis',
      titulo: 'Análisis de Requisitos',
      descripcion: 'Recolección sistemática, validación rigurosa y documentación técnica detallada de requisitos de software.',
      icon: '🔍',
      color: 'pink'
    },
    {
      id: 'modelado',
      titulo: 'Modelado de Funciones',
      descripcion: 'Diseño y modelado de arquitecturas de software utilizando UML, diagramas de casos de uso y herramientas CASE.',
      icon: '🎨',
      color: 'green'
    }
  ];

  const proyectos = [
    {
      id: 'sigct',
      titulo: 'SIGC&T-Rural',
      descripcion: 'Sistema Integrado de Gestión Científica y Tecnológica para Zonas Rurales con IoT',
      icon: '🌱',
      tecnologias: ['Django', 'React', 'PostgreSQL', 'BeagleBone']
    },
    {
      id: 'iot',
      titulo: 'Sistema IoT Agrícola',
      descripcion: 'Monitoreo inteligente con sensores DHT22 y predicción con modelos ARIMA',
      icon: '📡',
      tecnologias: ['Python', 'InfluxDB', 'MQTT', 'TensorFlow']
    },
    {
      id: 'web',
      titulo: 'Plataforma Web STEM',
      descripcion: 'LMS educativo con laboratorios virtuales y contenidos interactivos',
      icon: '🌐',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'WebSocket']
    }
  ];

  return (
    <div className="evidencias-adso-container">
      <div className="stars-evidencias"></div>
      <div className="particles-evidencias"></div>

      {/* Hero Section */}
      <section className="hero-evidencias">
        <div className="hero-content-evidencias">
          <h1 className="hero-title-evidencias">
            🚀 PORTAFOLIO ADSO
          </h1>
          <p className="hero-subtitle">
            Análisis y Desarrollo de Software | SENA Ficha 3070388
          </p>
          <p className="hero-info">
            Bernardo Adolfo Gómez Montoya - Regional Magdalena
          </p>
          <div className="hero-badges">
            <span className="badge">🛡️ Tecnología Avanzada</span>
            <span className="badge">🚀 Innovación Continua</span>
            <span className="badge">💎 Excelencia Académica</span>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="stats-section">
        <div className="stats-grid-evidencias">
          <div className="stat-card-evidencias">
            <div className="stat-number">4</div>
            <p>Competencias Principales</p>
          </div>
          <div className="stat-card-evidencias">
            <div className="stat-number">12</div>
            <p>Proyectos Activos</p>
          </div>
          <div className="stat-card-evidencias">
            <div className="stat-number">50+</div>
            <p>Evidencias Organizadas</p>
          </div>
          <div className="stat-card-evidencias">
            <div className="stat-number">100%</div>
            <p>Automatización</p>
          </div>
        </div>
      </section>

      {/* Competencias SENA */}
      <section className="competencias-section">
        <h2 className="section-title-evidencias">🎯 COMPETENCIAS SENA</h2>
        <div className="competencias-grid">
          {competencias.map((comp) => (
            <div key={comp.id} className={`competencia-card color-${comp.color}`}>
              <div className="competencia-icon">{comp.icon}</div>
              <h3>{comp.titulo}</h3>
              <p>{comp.descripcion}</p>
              <div className="evidencias-tipos">
                <span className="tipo-badge">📄 Conocimiento</span>
                <span className="tipo-badge">🛠️ Desempeño</span>
                <span className="tipo-badge">📦 Producto</span>
              </div>
              <button 
                className="btn-ver-evidencias"
                onClick={() => setActiveModal(comp.id)}
              >
                Ver Evidencias →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Proyectos Formativos */}
      <section className="proyectos-section">
        <h2 className="section-title-evidencias">🚀 PROYECTOS FORMATIVOS</h2>
        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-card">
              <div className="proyecto-icon">{proyecto.icon}</div>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="tecnologias-tags">
                {proyecto.tecnologias.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <Link to={`/proyecto/${proyecto.id}`} className="btn-ver-proyecto">
                Ver Proyecto →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Gestor de Archivos */}
      <section className="gestor-section">
        <h2 className="section-title-evidencias">🗂️ GESTOR DE EVIDENCIAS</h2>
        <div className="gestor-grid">
          <div className="gestor-card">
            <span className="gestor-icon">📚</span>
            <h3>Recursos de Estudio</h3>
            <p>Biblioteca digital organizada</p>
          </div>
          <div className="gestor-card">
            <span className="gestor-icon">📁</span>
            <h3>Evidencias por Competencia</h3>
            <p>Clasificación automática</p>
          </div>
          <div className="gestor-card">
            <span className="gestor-icon">📊</span>
            <h3>Reportes de Progreso</h3>
            <p>Métricas y estadísticas</p>
          </div>
          <div className="gestor-card">
            <span className="gestor-icon">☁️</span>
            <h3>Backup en la Nube</h3>
            <p>Sincronización automática</p>
          </div>
        </div>
      </section>

      {/* Modal de Evidencias */}
      {activeModal && (
        <div className="modal-evidencias" onClick={() => setActiveModal(null)}>
          <div className="modal-content-evidencias" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}>
              ×
            </button>
            <h2>Evidencias de Competencia</h2>
            <p>Aquí se mostrarán las evidencias desde la base de datos (GUÍA 6)</p>
            <div className="evidencias-list">
              <p className="coming-soon">🔄 Conectando con base de datos...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvidenciasADSO;
```

#### PASO 4.4: Crear Estilos del Portafolio

**Archivo a crear:** `frontend/src/pages/evidencias/EvidenciasADSO.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&display=swap');

.evidencias-adso-container {
  min-height: 100vh;
  font-family: 'Exo 2', sans-serif;
  position: relative;
  overflow-x: hidden;
}

.stars-evidencias,
.particles-evidencias {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 2s infinite ease-in-out alternate;
}

@keyframes twinkle {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px);
    opacity: 1;
  }
}

/* Hero Section */
.hero-evidencias {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
}

.hero-title-evidencias {
  font-family: 'Orbitron', monospace;
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { filter: drop-shadow(0 0 20px var(--neon-blue)); }
  to { filter: drop-shadow(0 0 30px var(--neon-purple)); }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--neon-green);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.hero-info {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.hero-badges {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.badge {
  background: rgba(0, 245, 255, 0.2);
  border: 2px solid var(--neon-blue);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Estadísticas */
.stats-section {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.stats-grid-evidencias {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-card-evidencias {
  background: rgba(15, 15, 35, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 2px solid var(--neon-blue);
  transition: all 0.3s ease;
}

.stat-card-evidencias:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 245, 255, 0.4);
}

.stat-number {
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  color: var(--neon-green);
  font-weight: 900;
  margin-bottom: 0.5rem;
}

/* Competencias */
.competencias-section,
.proyectos-section,
.gestor-section {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section-title-evidencias {
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  text-align: center;
  color: var(--neon-blue);
  text-shadow: 0 0 20px var(--neon-blue);
  margin-bottom: 3rem;
}

.competencias-grid,
.proyectos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.competencia-card,
.proyecto-card {
  background: rgba(15, 15, 35, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid transparent;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.competencia-card.color-blue { border-color: var(--neon-blue); }
.competencia-card.color-purple { border-color: var(--neon-purple); }
.competencia-card.color-pink { border-color: var(--neon-pink); }
.competencia-card.color-green { border-color: var(--neon-green); }

.competencia-card:hover,
.proyecto-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 245, 255, 0.3);
}

.competencia-icon,
.proyecto-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.competencia-card h3,
.proyecto-card h3 {
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  color: var(--neon-blue);
  margin-bottom: 1rem;
}

.competencia-card p,
.proyecto-card p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.evidencias-tipos,
.tecnologias-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tipo-badge,
.tech-tag {
  background: rgba(138, 43, 226, 0.3);
  border: 1px solid var(--neon-purple);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
}

.btn-ver-evidencias,
.btn-ver-proyecto {
  background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: block;
}

.btn-ver-evidencias:hover,
.btn-ver-proyecto:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 245, 255, 0.5);
}

/* Gestor */
.gestor-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.gestor-card {
  background: rgba(15, 15, 35, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 2px solid var(--neon-green);
  transition: all 0.3s ease;
}

.gestor-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(57, 255, 20, 0.4);
}

.gestor-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

/* Modal */
.modal-evidencias {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-content-evidencias {
  background: rgba(15, 15, 35, 0.95);
  border: 2px solid var(--neon-blue);
  border-radius: 20px;
  padding: 3rem;
  max-width: 800px;
  width: 100%;
  position: relative;
  animation: modalSlideIn 0.4s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--neon-pink);
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close:hover {
  color: white;
  text-shadow: 0 0 10px var(--neon-pink);
}

.coming-soon {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--neon-green);
}

/* Responsive */
@media (max-width: 1200px) {
  .stats-grid-evidencias,
  .gestor-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title-evidencias {
    font-size: 2.5rem;
  }

  .stats-grid-evidencias,
  .competencias-grid,
  .proyectos-grid,
  .gestor-grid {
    grid-template-columns: 1fr;
  }

  .hero-badges {
    flex-direction: column;
  }
}
```

#### PASO 4.5: Crear App de Evidencias (Backend)

**Crear app:**
```bash
cd backend
python manage.py startapp evidencias
```

**Archivo a crear:** `backend/apps/evidencias/models.py`

```python
from django.db import models
from django.contrib.auth import get_user_model