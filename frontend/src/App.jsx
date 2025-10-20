// frontend/src/App.jsx
import React from 'react';
// 🛑 CRÍTICO: Importar Link para la navegación interna
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Importamos los componentes
import LaboratorioCuantico from './pages/LaboratorioCuantico'; 
import LaboratorioSensores from './pages/LaboratorioSensores'; // OK: Nuevo Laboratorio
import Dashboard from './pages/Dashboard'; 
import Login from './pages/Login';
import './App.css'; 

// Componente Básico de Layout/Menú
const Layout = ({ children }) => (
    <div className="App-Layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header className="App-header" style={{ background: '#222', color: 'white', padding: '15px 30px', boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
            <nav className="App-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#4CAF50' }}>🌱 SIGC&T-Rural v2.0</span>
                <div>
                    {/* ✅ CORRECCIÓN FINAL: USAR <Link to="..."> */}
                    <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Dashboard (IoT)</Link>
                    <Link to="/laboratorios" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Laboratorios STEM</Link>
                    <Link to="/cursos" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Cursos</Link>
                    <Link to="/login" style={{ margin: '0 15px', color: '#ffc107', textDecoration: 'none', border: '1px solid #ffc107', padding: '5px 10px', borderRadius: '5px' }}>Acceso</Link>
                </div>
            </nav>
        </header>
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#f8f9fa' }}>{children}</main>
        <footer style={{ padding: '10px', background: '#333', color: 'white', textAlign: 'center', fontSize: '12px' }}>
            Autor: Bernardo Adolfo Gómez Montoya | SENA - Ficha 3070388 | Proyecto Productivo Integrado
        </footer>
    </div>
);


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        
        {/* RUTA PRINCIPAL DE LABORATORIOS (Muestra LaboratorioSensores por defecto, cumpliendo HU-21) */}
        <Route path="/laboratorios" element={<Layout><LaboratorioSensores /></Layout>} /> 
        
        {/* RUTA ESPECÍFICA DE LABORATIORIO CUÁNTICO */}
        <Route path="/laboratorios/cuantico" element={<Layout><LaboratorioCuantico /></Layout>} />
        
        {/* RUTA DE AUTENTICACIÓN (Próximo foco: GA6-AA4) */}
        <Route path="/login" element={<Layout><Login /></Layout>} />
        
        {/* RUTA DE PLACEHOLDER para 'Cursos' */}
        <Route path="/cursos" element={<Layout><div style={{padding: '20px', textAlign: 'center'}}><h2>Módulo de Cursos 📚</h2><p>Contenido Educativo LMS.</p></div></Layout>} />
    </Routes>
</Router>
  );
}

export default App;