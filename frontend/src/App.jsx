import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// ============================================
// IMPORTACIONES DE COMPONENTES FUTURISTAS
// ============================================
import FuturisticBackground from './components/Background/FuturisticBackground.jsx';
import TopNav from './components/Navigation/TopNav.jsx';
import BottomNavigation from './components/Navigation/BottomNavigation.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// ============================================
// IMPORTACIONES DE PÁGINAS
// ============================================
import Analytics from './pages/Analytics.jsx';
import LabsIndexPage from './pages/laboratorios/LabsIndexPage.jsx'; 
import LaboratorioSensores from './pages/laboratorios/LaboratorioSensores.jsx'; 
import LaboratorioCuantico from './pages/laboratorios/LaboratorioCuantico.jsx';
import LaboratorioSoftware from './pages/laboratorios/LaboratorioSoftware.jsx';
import LaboratorioRobotica from './pages/laboratorios/LaboratorioRobotica.jsx'; 
import LaboratorioAgricultura from './pages/laboratorios/LaboratorioAgricultura.jsx';
import LaboratorioEnergias from './pages/laboratorios/LaboratorioEnergias.jsx';
import LaboratorioOpenSource from './pages/laboratorios/LaboratorioOpenSource.jsx';
import SenaEvidenciasPage from './pages/SenaEvidenciasPage.jsx'; 

// ============================================
// COMPONENTE SCROLL TO TOP
// ============================================
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ============================================
// COMPONENTE PRINCIPAL DE CONTENIDO
// ============================================
const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  
  // Rutas donde se muestra la navegación inferior
  const showBottomNav = [
    '/', 
    '/laboratorios', 
    '/analytics', 
    '/cursos', 
    '/docs/evidencias',
    '/laboratorios/sensores',
    '/laboratorios/software'
  ].includes(location.pathname); 

  // Laboratorios de inmersión total (sin header/footer)
  const isImmersiveLab = [
    '/laboratorios/cuantico',
    '/docs/evidencias'
  ].includes(location.pathname);

  return (
    <div className="App flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <ScrollToTop />
      
      {/* Header condicional */}
      {!isImmersiveLab && <Header />}
      
      {/* Contenido principal con padding adaptativo */}
      <main className={`flex-grow ${!isImmersiveLab ? 'pt-[72px] pb-16' : 'p-0'}`}>
        {loading && (
          <div className="loading-overlay flex items-center justify-center">
            <div className="text-cyan-400 text-2xl font-bold animate-pulse">
              ⚡ Cargando...
            </div>
          </div>
        )}
        
        <ErrorBoundary>
          <Routes>
            {/* Rutas principales */}
            <Route path="/" element={<Analytics />} /> 
            <Route path="/analytics" element={<Analytics />} />

            {/* Rutas de Laboratorios */}
            <Route path="/laboratorios" element={<LabsIndexPage />} />
            <Route path="/laboratorios/sensores" element={<LaboratorioSensores />} />
            <Route path="/laboratorios/cuantico" element={<LaboratorioCuantico />} />
            <Route path="/laboratorios/software" element={<LaboratorioSoftware />} />
            <Route path="/laboratorios/robotica" element={<LaboratorioRobotica />} />
            <Route path="/laboratorios/agricultura" element={<LaboratorioAgricultura />} />
            <Route path="/laboratorios/energias" element={<LaboratorioEnergias />} />
            <Route path="/laboratorios/opensource" element={<LaboratorioOpenSource />} />
            
            {/* Documentación SENA */}
            <Route path="/docs/evidencias" element={<SenaEvidenciasPage />} />
            <Route path="/evidencias" element={<SenaEvidenciasPage />} />
            <Route path="/documentacion" element={
              <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-4">📚 Documentación del Proyecto</h1>
                <p className="text-gray-300">Sistema de documentación técnica en desarrollo.</p>
              </div>
            } />

            {/* Cursos (placeholder) */}
            <Route path="/cursos" element={
              <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-green-400 mb-4">📚 Módulo de Cursos</h1>
                <p className="text-gray-300">Sistema de gestión de cursos en desarrollo.</p>
              </div>
            } />
            
            {/* 404 Not Found */}
            <Route path="*" element={
              <div className="container mx-auto p-8 text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-2xl text-gray-300">Página No Encontrada</p>
              </div>
            } />
          </Routes>
        </ErrorBoundary>
      </main>
      
      {/* Footer condicional */}
      {!isImmersiveLab && <Footer />}
      
      {/* Navegación inferior condicional */}
      {showBottomNav && !isImmersiveLab && <BottomNavigation />}
    </div>
  );
};

// ============================================
// COMPONENTE APP PRINCIPAL CON ROUTER
// ============================================
const App = () => (
  <ErrorBoundary>
    <Router>
      {/* Fondo futurista global */}
      <FuturisticBackground />
      
      {/* Navegación superior global */}
      <TopNav />
      
      {/* Contenido de la aplicación */}
      <AppContent />
    </Router>
  </ErrorBoundary>
);

export default App;