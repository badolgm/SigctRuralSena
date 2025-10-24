import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importaciones de Layout y Componentes Comunes
// --- CORRECCIÓN FINAL BASADA EN LA ESTRUCTURA DEL 'ls' ---
// Header y Footer están directamente en ./components/
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// BottomNavigation está en ./components/Navigation/
import BottomNavigation from './components/Navigation/BottomNavigation.jsx';

// ERROR CORREGIDO: Añadida la extensión '.jsx' al ErrorBoundary
import ErrorBoundary from './components/ErrorBoundary.jsx'; 
import Analytics from './pages/Analytics'; // Añadida extensión por buena práctica

// Importaciones de Páginas de Laboratorio (asumiendo que todas están en la carpeta /laboratorios)
import LabsIndexPage from './pages/laboratorios/LabsIndexPage.jsx'; 
import LaboratorioSensores from './pages/laboratorios/LaboratorioSensores.jsx'; 
import LaboratorioCuantico from './pages/laboratorios/LaboratorioCuantico.jsx';
import LaboratorioSoftware from './pages/laboratorios/LaboratorioSoftware.jsx';
import LaboratorioRobotica from './pages/laboratorios/LaboratorioRobotica.jsx'; 
import LaboratorioAgricultura from './pages/laboratorios/LaboratorioAgricultura.jsx';
import LaboratorioEnergias from './pages/laboratorios/LaboratorioEnergias.jsx';
import LaboratorioOpenSource from './pages/laboratorios/LaboratorioOpenSource.jsx';

// Importación de la NUEVA PÁGINA DE EVIDENCIAS SENA (ubicación corregida: /pages/)
import SenaEvidenciasPage from './pages/SenaEvidenciasPage.jsx'; 

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
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  
  // Condición para mostrar la navegación inferior (BottomNavigation)
  // Se oculta en los laboratorios de inmersión total (Cuantico, etc.)
  const showBottomNav = [
    '/', 
    '/laboratorios', 
    '/analytics', 
    '/cursos', 
    '/docs/evidencias' // Incluimos la ruta de Evidencias
  ].includes(location.pathname); 

  return (
    <div className="App flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow pt-[60px] pb-16">
        {loading && (
          <div className="loading-overlay">Cargando...</div>
        )}
        
        <ErrorBoundary>
          <Routes>
            {/* Rutas principales del Dashboard y Analytics */}
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
            
            {/* RUTA DE DOCUMENTACIÓN SENA (CORREGIDA: USA SenaEvidenciasPage) */}
            <Route path="/docs/evidencias" element={<SenaEvidenciasPage />} />

            {/* Ruta de cursos (placeholder) */}
            <Route path="/cursos" element={<h1 className="text-center p-8 text-2xl font-bold">📚 Módulo de Cursos (En Desarrollo)</h1>} />
            
            {/* Ruta 404/Not Found (opcional) */}
            <Route path="*" element={<h1 className="text-center p-8 text-2xl font-bold">404 - Página No Encontrada</h1>} />
          </Routes>
        </ErrorBoundary>
      </main>
      
      <Footer />
      
      {/* Condicional para la navegación inferior */}
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};

// El Router envuelve la aplicación
const App = () => (
    <Router>
      <AppContent />
    </Router>
);

export default App;
