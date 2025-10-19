// frontend/src/pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center', background: 'white', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <h2>📊 Dashboard IoT y Monitoreo en Tiempo Real</h2>
            <p style={{ color: '#555', marginTop: '10px' }}>Visualización de datos críticos de los Nodos IoT (BBB1, BBB2, BBB3) y predicciones de IA. (RF006)</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '30px 0' }}>
                <div style={{ padding: '20px', border: '1px solid #4CAF50', borderRadius: '8px', width: '250px' }}>
                    <h3 style={{color: '#4CAF50'}}>Temperatura</h3>
                    <p style={{fontSize: '2rem', fontWeight: 'bold'}}>24.5 °C</p>
                    <p style={{fontSize: '0.8rem', color: '#777'}}>Última lectura: 10/16/2025</p>
                </div>
                <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '8px', width: '250px' }}>
                    <h3 style={{color: '#007bff'}}>Humedad Suelo</h3>
                    <p style={{fontSize: '2rem', fontWeight: 'bold'}}>65 %</p>
                    <p style={{fontSize: '0.8rem', color: '#777'}}>Lecturas en InfluxDB (RNF-04)</p>
                </div>
                <div style={{ padding: '20px', border: '1px solid #ffc107', borderRadius: '8px', width: '250px' }}>
                    <h3 style={{color: '#ffc107'}}>Próxima Alerta</h3>
                    <p style={{fontSize: '1.8rem', fontWeight: 'bold'}}>Riesgo Crítico PH</p>
                    <p style={{fontSize: '0.8rem', color: '#777'}}>Generada por IA (RF005)</p>
                </div>
            </div>
            
            <button style={{ padding: '10px 20px', fontSize: '1rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Ver Gráficos Históricos (Recharts)
            </button>
        </div>
    );
};

export default Dashboard;