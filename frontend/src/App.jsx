import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importaciones de Layout y Componentes Comunes
import Footer from './components/Footer.jsx';
import TopNav from './components/Navigation/TopNav.jsx'; // Nuevo TopNav corregido
import BottomNavigation from './components/Navigation/BottomNavigation.jsx'; 
import ErrorBoundary from './components/ErrorBoundary.jsx'; 
import FuturisticBackground from './components/Background/FuturisticBackground.jsx'; // Fondo de estrellas

// Importaciones de Páginas (Asegúrate de que estas rutas sean correctas)
import Dashboard from './pages/Dashboard.jsx'; 
import Analytics from './pages/Analytics.jsx';
import Login from './pages/Login.jsx'; 
import SenaEvidenciasPage from './pages/SenaEvidenciasPage.jsx'; 

// Páginas de Laboratorio (Asegúrate de que estas importaciones existen)
import LabsIndexPage from './pages/laboratorios/LabsIndexPage.jsx';
import LaboratorioSensores from './pages/laboratorios/LaboratorioSensores.jsx';
import LaboratorioCuantico from './pages/laboratorios/LaboratorioCuantico.jsx';
import LaboratorioSoftware from './pages/laboratorios/LaboratorioSoftware.jsx';
import LaboratorioRobotica from './pages/laboratorios/LaboratorioRobotica.jsx';
import LaboratorioAgricultura from './pages/laboratorios/LaboratorioAgricultura.jsx';
import LaboratorioEnergias from './pages/laboratorios/LaboratorioEnergias.jsx';
import LaboratorioOpenSource from './pages/laboratorios/LaboratorioOpenSource.jsx';

// Componente Wrapper para manejar el scroll al cambiar de página
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Componente principal de la aplicación
const AppContent = () => {
  const location = useLocation();

  // Función para determinar si estamos en un laboratorio de inmersión total (oculta TopNav/Footer/BottomNav)
  const isImmersiveLab = [
    '/laboratorios/cuantico',
    '/laboratorios/software', // El lab de software a veces es inmersivo
  ].includes(location.pathname);

  // Determinar si mostrar el TopNav estándar (No se muestra en Login ni en Immersivos)
  const showTopNav = !isImmersiveLab && location.pathname !== '/login'; 
  
  // Condición para mostrar la navegación inferior
  const showBottomNav = showTopNav; // Si muestra TopNav, muestra BottomNav (regla simple)

  return (
    <>
      <ScrollToTop />
      <FuturisticBackground /> {/* <--- EL FONDO DE ESTRELLAS VA DETRÁS DE TODO */}

      {showTopNav && <TopNav />} {/* <--- SOLO USAMOS EL TOPNAV CORREGIDO */}

      {/* Contenedor principal: le damos margen para el TopNav fijo (ver App.css) */}
      <div className="main-content">
        <ErrorBoundary>
          <Routes>
            {/* RUTAS DE ACCESO PÚBLICO */}
            <Route path="/login" element={<Login />} />
            
            {/* RUTAS PRINCIPALES (PROTEGIDAS) */}
            {/* RUTA DE DASHBOARD/INICIO: Soporta tanto '/' como '/dashboard' para la navegación. */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} /> 

            <Route path="/analytics" element={<Analytics />} />
            
            {/* RUTA DE EVIDENCIAS: Soporta tanto '/evidencias' como '/docs/evidencias' para la navegación. */}
            <Route path="/evidencias" element={<SenaEvidenciasPage />} /> 
            <Route path="/docs/evidencias" element={<SenaEvidenciasPage />} /> 

            {/* RUTAS DE LABORATORIOS */}
            <Route path="/laboratorios" element={<LabsIndexPage />} />
            <Route path="/laboratorios/sensores" element={<LaboratorioSensores />} />
            <Route path="/laboratorios/software" element={<LaboratorioSoftware />} />
            <Route path="/laboratorios/cuantico" element={<LaboratorioCuantico />} />
            <Route path="/laboratorios/robotica" element={<LaboratorioRobotica />} />
            <Route path="/laboratorios/agricultura" element={<LaboratorioAgricultura />} />
            <Route path="/laboratorios/energias" element={<LaboratorioEnergias />} />
            <Route path="/laboratorios/opensource" element={<LaboratorioOpenSource />} />
            
            {/* RUTA CATCH-ALL/404 */}
            <Route path="*" element={<div>404 Not Found</div>} /> 
          </Routes>
        </ErrorBoundary>
      </div> {/* <--- CIERRE DEL div.main-content: ESTA ERA LA ETIQUETA FALTANTE */}

      {!isImmersiveLab && <Footer />}
      {showBottomNav && <BottomNavigation />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
