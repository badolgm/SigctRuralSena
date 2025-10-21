// frontend/src/pages/LaboratorioCuantico.jsx
import React, { useState } from 'react';
import './LaboratorioCuantico.css'; 

const LaboratorioCuantico = () => {
    const [score, setScore] = useState(0);

    return (
        <div className="quantum-body" style={{ background: '#1a1a3a', color: 'white', padding: '20px', borderRadius: '10px' }}>
            <header style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ color: '#00ffff', fontSize: '2rem' }}>🔬 Laboratorio Cuántico del Dr. Binary</h1>
                <p style={{ color: '#ccc' }}>Módulo Interactivo STEM (HU-13)</p>
            </header>
            
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '30px', borderRadius: '15px' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>¡Bienvenido! Resuelve la siguiente ecuación cuántica para ganar puntos.</p>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff00ff', textAlign: 'center' }}>
                    2x + 10 = 20
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                    <button onClick={() => setScore(score + 10)} style={buttonStyleLab}>Respuesta: x=5</button>
                    <button style={buttonStyleLab}>Respuesta: x=10</button>
                </div>
                
                <h3 style={{ marginTop: '30px', textAlign: 'center', color: '#00ffff' }}>Puntuación Cuántica: {score}</h3>
            </div>
            <p style={{ marginTop: '20px', color: '#777', textAlign: 'center' }}>El progreso será registrado en la API (RF004).</p>
        </div>
    );
};

const buttonStyleLab = {
    padding: '15px 30px',
    fontSize: '1.1rem',
    background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'transform 0.2s'
};

export default LaboratorioCuantico;