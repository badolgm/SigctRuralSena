// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Importamos los componentes existentes (ruta actualizada)
import LaboratorioCuantico from './pages/laboratorios/LaboratorioCuantico'; 
import LaboratorioSensores from './pages/laboratorios/LaboratorioSensores'; 
import Dashboard from './pages/Dashboard'; 
import Login from './pages/Login';
import DashboardFuturista from './pages/DashboardFuturista';
// Importamos los nuevos componentes
import BottomNav from './components/Navigation/BottomNav';
import LaboratorioRobotica from './pages/laboratorios/LaboratorioRobotica';
import LaboratorioEnergias from './pages/laboratorios/LaboratorioEnergias';
import LaboratorioAgricultura from './pages/laboratorios/LaboratorioAgricultura';
import LaboratorioSoftware from './pages/laboratorios/LaboratorioSoftware';
import './App.css'; 

// Componente Básico de Layout/Menú
const Layout = ({ children }) => (
    <div className="App-Layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header className="App-header" style={{ background: '#222', color: 'white', padding: '15px 30px', boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
            <nav className="App-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#4CAF50' }}>🌱 SIGC&T-Rural v2.0</span>
                <div>
                    <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Dashboard (IoT)</Link>
                    <Link to="/laboratorios" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Laboratorios STEM</Link>
                    <Link to="/cursos" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Cursos</Link>
                    <Link to="/login" style={{ margin: '0 15px', color: '#ffc107', textDecoration: 'none', border: '1px solid #ffc107', padding: '5px 10px', borderRadius: '5px' }}>Acceso</Link>
                </div>
            </nav>
        </header>
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#f8f9fa', paddingBottom: '80px' }}>{children}</main>
        <footer style={{ padding: '10px', background: '#333', color: 'white', textAlign: 'center', fontSize: '12px' }}>
            Autor: Bernardo Adolfo Gómez Montoya | SENA - Ficha 3070388 | Proyecto Productivo Integrado
        </footer>
        {/* 🆕 NAVEGACIÓN MÓVIL INFERIOR */}
        <BottomNav />
    </div>
);

function App() {
  return (
    <Router>
        <Routes>
            {/* 🏠 DASHBOARD PRINCIPAL */}
            <Route path="/" element={<Layout><Dashboard /></Layout>} />
            
            {/* 🧪 LABORATORIOS STEM */}
            <Route path="/laboratorios" element={<Layout><LaboratorioSensores /></Layout>} /> 
            <Route path="/laboratorios/cuantico" element={<Layout><LaboratorioCuantico /></Layout>} />
            
            {/* 🆕 NUEVOS LABORATORIOS STEM */}
            <Route path="/laboratorios/robotica" element={<Layout><LaboratorioRobotica /></Layout>} />
            <Route path="/laboratorios/energias" element={<Layout><LaboratorioEnergias /></Layout>} />
            <Route path="/laboratorios/agricultura" element={<Layout><LaboratorioAgricultura /></Layout>} />
            <Route path="/laboratorios/software" element={<Layout><LaboratorioSoftware /></Layout>} />
            
            {/* 📡 SENSORES */}
            <Route path="/sensores" element={<Layout><div style={{padding: '20px', textAlign: 'center'}}><h2>📡 Sensores IoT</h2><p>Monitoreo en tiempo real de variables ambientales.</p></div></Layout>} />
            
            {/* 📊 ANALYTICS */}
            <Route path="/analytics" element={<Layout><div style={{padding: '20px', textAlign: 'center'}}><h2>📊 Analytics</h2><p>Análisis de datos y métricas del sistema.</p></div></Layout>} />
            
            {/* 🔐 AUTENTICACIÓN */}
            <Route path="/login" element={<Layout><Login /></Layout>} />
            
            {/* 📚 CURSOS */}
            <Route path="/cursos" element={<Layout><div style={{padding: '20px', textAlign: 'center'}}><h2>Módulo de Cursos 📚</h2><p>Contenido Educativo LMS.</p></div></Layout>} />
            <Route path="/dashboard-new" element={<DashboardFuturista />} />
        </Routes>
    </Router>
  );
}

export default App;