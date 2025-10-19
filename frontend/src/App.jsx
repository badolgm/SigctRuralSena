// frontend/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importamos los nuevos componentes
import LaboratorioCuantico from './pages/LaboratorioCuantico'; 
import Dashboard from './pages/Dashboard'; 
import Login from './pages/Login';
import './App.css'; 

// Componente Básico de Layout/Menú (Estructura de la Interfaz)
const Layout = ({ children }) => (
    <div className="App-Layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header className="App-header" style={{ background: '#222', color: 'white', padding: '15px 30px', boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
            <nav className="App-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#4CAF50' }}>🌱 SIGC&T-Rural v2.0</span>
                <div>
                    <a href="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Dashboard (IoT)</a>
                    <a href="/laboratorios/cuantico" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Laboratorios STEM</a>
                    <a href="/cursos" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Cursos</a>
                    <a href="/login" style={{ margin: '0 15px', color: '#ffc107', textDecoration: 'none', border: '1px solid #ffc107', padding: '5px 10px', borderRadius: '5px' }}>Acceso</a>
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
        {/* RUTA PRINCIPAL - Dashboard de datos IoT */}
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        
        {/* NUEVA RUTA - Laboratorio Interactivo (GA6-AA3/AA4) */}
        <Route path="/laboratorios/cuantico" element={<Layout><LaboratorioCuantico /></Layout>} />
        
        {/* RUTA DE AUTENTICACIÓN */}
        <Route path="/login" element={<Layout><Login /></Layout>} />
        
        {/* RUTA DE PLACEHOLDER para 'Cursos' */}
        <Route path="/cursos" element={<Layout><div style={{padding: '20px', textAlign: 'center'}}><h2>Módulo de Cursos 📚</h2><p>Contenido Educativo LMS (Pendiente de desarrollo).</p></div></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;