// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Componentes de páginas
import Dashboard from './pages/Dashboard'; // Esta es AHORA la versión futurista (renombrada)
import Login from './pages/Login';

// Laboratorios
import LaboratorioOpenSource from './pages/laboratorios/LaboratorioOpenSource';
import LaboratorioCuantico from './pages/laboratorios/LaboratorioCuantico'; 
import LaboratorioSensores from './pages/laboratorios/LaboratorioSensores'; 
import LaboratorioRobotica from './pages/laboratorios/LaboratorioRobotica';
import LaboratorioEnergias from './pages/laboratorios/LaboratorioEnergias';
import LaboratorioAgricultura from './pages/laboratorios/LaboratorioAgricultura';
import LaboratorioSoftware from './pages/laboratorios/LaboratorioSoftware';

// Componentes de navegación
import BottomNav from './components/Navigation/BottomNav';

import './App.css'; 

// --- LAYOUT CORREGIDO ---
// Este Layout se usa para TODAS las páginas EXCEPTO el Dashboard principal
const Layout = ({ children }) => (
    <div className="App-Layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Encabezado para páginas secundarias */}
        <header className="App-header" style={{ background: '#222', color: 'white', padding: '15px 30px', boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
            <nav className="App-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                
                {/* 1. TÍTULO DUPLICADO ELIMINADO (Petición A) */}
                {/* Ya no hay un logo/título estático aquí */}
                
                {/* 2. ENLACES CORREGIDOS (Petición B) */}
                {/* El enlace principal ahora es el título que querías */}
                <div>
                    <Link to="/" style={{ margin: '0 15px', color: '#00ff88', textDecoration: 'none', fontWeight: 'bold' }}>🌱 SIGC&T-Rural v2.0</Link>
                    <Link to="/laboratorios" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Laboratorios STEM</Link>
                    <Link to="/cursos" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Cursos</Link>
                    <Link to="/login" style={{ margin: '0 15px', color: '#ffc107', textDecoration: 'none', border: '1px solid #ffc107', padding: '5px 10px', borderRadius: '5px' }}>Acceso</Link>
                </div>
            </nav>
        </header>
        
        {/* 3. FONDO BLANCO CORREGIDO (Problema 1) */}
        {/* Se cambió 'backgroundColor' a un color oscuro '#151932' */ }
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#151932', paddingBottom: '80px' }}>
            {children}
        </main>
        
        <footer style={{ padding: '10px', background: '#333', color: 'white', textAlign: 'center', fontSize: '12px' }}>
            Autor: Bernardo Adolfo Gómez Montoya | SENA - Ficha 3070388 | Proyecto Productivo Integrado
        </footer>
        
        <BottomNav />
    </div>
);

function App() {
  return (
    <Router>
        <Routes>
            {/* 🏠 DASHBOARD PRINCIPAL (SIN Layout - tiene su propio diseño) */}
            <Route path="/" element={<Dashboard />} />
            
            {/* 🧪 LABORATORIOS STEM (con Layout corregido) */}
            <Route path="/laboratorios" element={<Layout><LaboratorioSensores /></Layout>} /> 
            <Route path="/laboratorios/sensores" element={<Layout><LaboratorioSensores /></Layout>} />
            <Route path="/laboratorios/cuantico" element={<Layout><LaboratorioCuantico /></Layout>} />
            <Route path="/laboratorios/open-source" element={<Layout><LaboratorioOpenSource /></Layout>} />
            <Route path="/laboratorios/robotica" element={<Layout><LaboratorioRobotica /></Layout>} />
            <Route path="/laboratorios/energias" element={<Layout><LaboratorioEnergias /></Layout>} />
            <Route path="/laboratorios/agricultura" element={<Layout><LaboratorioAgricultura /></Layout>} />
            <Route path="/laboratorios/software" element={<Layout><LaboratorioSoftware /></Layout>} />
            
            {/* --- CONTENIDO CON TEXTO CORREGIDO (Problema 1) --- */}
            
            {/* 📡 SENSORES (con Layout y texto blanco) */}
            <Route path="/sensores" element={
                <Layout>
                    {/* Se añadió color: '#ffffff' para arreglar texto invisible */}
                    <div style={{padding: '20px', textAlign: 'center', color: '#ffffff'}}>
                        <h2>📡 Sensores IoT</h2>
                        <p>Monitoreo en tiempo real de variables ambientales.</p>
                    </div>
                </Layout>
            } />
            
            {/* 📊 ANALYTICS (con Layout y texto blanco) */}
            <Route path="/analytics" element={
                <Layout>
                    {/* Se añadió color: '#ffffff' para arreglar texto invisible */}
                    <div style={{padding: '20px', textAlign: 'center', color: '#ffffff'}}>
                        <h2>📊 Analytics</h2>
                        <p>Análisis de datos y métricas del sistema.</p>
                    </div>
                </Layout>
            } />
            
            {/* 🔐 AUTENTICACIÓN (con Layout) */}
            <Route path="/login" element={<Layout><Login /></Layout>} />
            
            {/* 📚 CURSOS (con Layout y texto blanco) */}
            <Route path="/cursos" element={
                <Layout>
                    {/* Se añadió color: '#ffffff' para arreglar texto invisible */}
                    <div style={{padding: '20px', textAlign: 'center', color: '#ffffff'}}>
                        <h2>Módulo de Cursos 📚</h2>
                        <p>Contenido Educativo LMS.</p>
                    </div>
                </Layout>
            } />
        </Routes>
    </Router>
  );
}

export default App;

