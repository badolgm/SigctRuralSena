// frontend/src/pages/LaboratorioSensores.jsx
import React, { useState, useEffect } from 'react';
import './LaboratorioSensores.css';
// Asumimos que tienes una librería como Recharts para gráficas

const LaboratorioSensores = () => {
    // Estado para simular datos en vivo (hasta integrar la API)
    const [lecturas, setLecturas] = useState([
        { id: 1, sensor: 'DHT22 Temp', valor: 25.5, nodo: 'BBB3', unidad: '°C' },
        { id: 2, sensor: 'Humedad Suelo', valor: 58.2, nodo: 'BBB3', unidad: '%' },
        { id: 3, sensor: 'Predicción ARIMA', valor: 26.1, nodo: 'BBB2', unidad: '°C (Futuro)' },
    ]);

    // Función para simular el fetch de datos vivos de la API (RF006)
    useEffect(() => {
        // fetch('/api/sensores/lecturas/ultimas/') 
        // Lógica de consulta al Backend desplegado en Render
        const interval = setInterval(() => {
            setLecturas(prev => prev.map(l => ({
                ...l,
                valor: (l.valor + (Math.random() * 0.5 - 0.25)).toFixed(1) // Simulación de variación
            })));
        }, 5000); // Actualización cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="lab-sensores-body">
            <h1 className="sensor-title">🌐 Laboratorio Físico de Sensores (3 BBB)</h1>
            <p className="sensor-subtitle">Datos Vivos | Cumplimiento HU-21, RF006</p>
            
            <section className="data-grid">
                {lecturas.map((data) => (
                    <div key={data.id} className="data-card">
                        <div className="sensor-name">{data.sensor} ({data.nodo})</div>
                        <div className="sensor-value">
                            {data.valor} 
                            <span className="sensor-unit">{data.unidad}</span>
                        </div>
                        <div className="sensor-status">Estado: Activo <span className="dot"></span></div>
                    </div>
                ))}
            </section>
            
            <section className="map-view">
                <h2>Localización del Nodos IoT</h2>
                {/* Aquí se integraría la vista de mapa (mapbox/leaflet) sugerida en los diagramas antiguos */}
                <div className="map-placeholder">
                    
                    <p>Integración de Mapas de Navegación del proyecto antiguo (AA1-EV07) para georreferenciación.</p>
                </div>
            </section>
        </div>
    );
};

export default LaboratorioSensores;