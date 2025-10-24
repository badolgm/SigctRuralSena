import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importaciones de Layout y Componentes Comunes (FIX: Se añade la extensión .jsx)
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BottomNavigation from './components/BottomNavigation.jsx'; // <--- FIX CRÍTICO AQUÍ
import ErrorBoundary from './components/ErrorBoundary.jsx'; // Asumiendo que ErrorBoundary también está allí
import Analytics from './pages/Analytics.jsx'; // Asumimos que Analytics es .jsx

// Importaciones de Páginas de Laboratorio (asumiendo que todas están en la carpeta /laboratorios)
import LabsIndexPage from './pages/laboratorios/LabsIndexPage.jsx'; 
import LaboratorioSensores from './pages/laboratorios/LaboratorioSensores.jsx'; 
import LaboratorioCuantico from './pages/laboratorios/LaboratorioCuantico.jsx';
import LaboratorioSoftware from './pages/laboratorios/LaboratorioSoftware.jsx';
import LaboratorioRobotica from './pages/laboratorios/LaboratorioRobotica.jsx'; 
import LaboratorioAgricultura from './pages/laboratorios/LaboratorioAgricultura.jsx';
import LaboratorioEnergias from './pages/laboratorios/LaboratorioEnergias.jsx';
import LaboratorioOpenSource from './pages/laboratorios/LaboratorioOpenSource.jsx';

// Importación de la NUEVA PÁGINA DE EVIDENCIAS SENA
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
  const showBottomNav = [
    '/', 
    '/laboratorios', 
    '/analytics', 
    '/cursos', 
    '/docs/evidencias',
    '/laboratorios/sensores',
    '/laboratorios/software'
  ].includes(location.pathname); 

  // Función para determinar si estamos en un laboratorio de inmersión total (oculta Header/Footer/BottomNav)
  const isImmersiveLab = [
    '/laboratorios/cuantico', // CRÍTICO: Este laboratorio es un iframe de altura completa
    '/docs/evidencias' // CRÍTICO: La página de evidencias es un iframe de altura completa
  ].includes(location.pathname);


  return (
    // FIX CRÍTICO: Aplicamos el fondo oscuro general del tema futurista (bg-gray-950) a toda la app
    <div className="App flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <ScrollToTop />
      
      {/* Ocultamos el Header/Footer en laboratorios de inmersión total */}
      {!isImmersiveLab && <Header />}
      
      {/* FIX CRÍTICO: Ajustamos el padding superior (pt-[72px] es más seguro con el Header rediseñado) 
          Si es inmersivo, no hay padding (p-0) */}
      <main className={`flex-grow ${!isImmersiveLab ? 'pt-[72px] pb-16' : 'p-0'}`}>
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
            {/* Si el laboratorio es de inmersión total, lo centramos en la pantalla */}
            <Route path="/laboratorios/cuantico" element={<LaboratorioCuantico />} />
            <Route path="/laboratorios/software" element={<LaboratorioSoftware />} />
            <Route path="/laboratorios/robotica" element={<LaboratorioRobotica />} />
            <Route path="/laboratorios/agricultura" element={<LaboratorioAgricultura />} />
            <Route path="/laboratorios/energias" element={<LaboratorioEnergias />} />
            <Route path="/laboratorios/opensource" element={<LaboratorioOpenSource />} />
            
            {/* RUTA CRÍTICA DE DOCUMENTACIÓN SENA (inmersiva) */}
            <Route path="/docs/evidencias" element={<SenaEvidenciasPage />} />

            {/* Ruta de cursos (placeholder) */}
            <Route path="/cursos" element={<h1 className="text-center p-8 text-2xl font-bold text-green-400">📚 Módulo de Cursos (En Desarrollo)</h1>} />
            
            {/* Ruta 404/Not Found (opcional) */}
            <Route path="*" element={<h1 className="text-center p-8 text-2xl font-bold text-red-500">404 - Página No Encontrada</h1>} />
          </Routes>
        </ErrorBoundary>
      </main>
      
      {/* Ocultamos el Footer en laboratorios de inmersión total */}
      {!isImmersiveLab && <Footer />}
      
      {/* Condicional para la navegación inferior */}
      {showBottomNav && !isImmersiveLab && <BottomNavigation />}
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
