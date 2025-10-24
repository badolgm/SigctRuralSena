# 🚀 PLAN MAESTRO V3.0 - SIGC&T-Rural ADSO
## Sistema Integrado de Gestión de Cursos y Tecnología Rural
### Análisis y Desarrollo de Software (ADSO) - SENA Ficha 3070388

---

## 📋 DOCUMENTO DE EVIDENCIA - GUÍA 6
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