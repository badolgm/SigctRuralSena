// frontend/src/pages/laboratorios/LaboratorioAgricultura.jsx
import React, { useState, useEffect } from 'react';
import PlantDiseaseClassifier from '../../components/IA/PlantDiseaseClassifier';
import './LaboratorioAgricultura.css';

const LaboratorioAgricultura = () => {
  const [crops, setCrops] = useState([
    {
      id: 1,
      name: 'Café',
      type: 'Coffea arabica',
      health: 85,
      growth: 65,
      diseases: [],
      lastInspection: '2024-10-21'
    },
    {
      id: 2,
      name: 'Plátano',
      type: 'Musa acuminata',
      health: 92,
      growth: 80,
      diseases: [],
      lastInspection: '2024-10-21'
    }
  ]);

  const [sensors, setSensors] = useState([
    {
      id: 1,
      name: 'Sensor de Humedad del Suelo',
      value: 65,
      unit: '%',
      status: 'active',
      location: 'Zona A'
    },
    {
      id: 2,
      name: 'Sensor de pH',
      value: 6.8,
      unit: 'pH',
      status: 'active',
      location: 'Zona A'
    },
    {
      id: 3,
      name: 'Sensor de Temperatura',
      value: 24.5,
      unit: '°C',
      status: 'active',
      location: 'Zona A'
    }
  ]);

  const [predictions, setPredictions] = useState({
    harvestDate: '2024-12-15',
    yield: 85,
    risk: 'Bajo',
    recommendations: [
      'Aumentar riego en 15%',
      'Aplicar fertilizante NPK',
      'Monitorear plagas'
    ]
  });

  return (
    <div className="laboratorio-agricultura">
      <header className="lab-header">
        <h1>🌱 Laboratorio de Agricultura Inteligente</h1>
        <p>Monitorea cultivos, predice cosechas y optimiza la producción agrícola</p>
        <div className="lab-stats">
          <div className="stat">
            <span className="stat-label">Cultivos Monitoreados:</span>
            <span className="stat-value">{crops.length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Sensores Activos:</span>
            <span className="stat-value">{sensors.filter(s => s.status === 'active').length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Salud Promedio:</span>
            <span className="stat-value">{Math.round(crops.reduce((sum, crop) => sum + crop.health, 0) / crops.length)}%</span>
          </div>
        </div>
      </header>

      <div className="lab-content">
        {/* Monitoreo de Cultivos */}
        <div className="agriculture-section">
          <h3>🌾 Monitoreo de Cultivos</h3>
          <div className="crops-grid">
            {crops.map(crop => (
              <div key={crop.id} className="crop-card">
                <div className="crop-header">
                  <h4>{crop.name}</h4>
                  <div className={`health-indicator ${crop.health >= 80 ? 'healthy' : crop.health >= 60 ? 'warning' : 'critical'}`}>
                    {crop.health >= 80 ? '🟢' : crop.health >= 60 ? '🟡' : '🔴'} {crop.health}%
                  </div>
                </div>
                <div className="crop-info">
                  <p><strong>Tipo:</strong> {crop.type}</p>
                  <p><strong>Crecimiento:</strong> {crop.growth}%</p>
                  <p><strong>Última Inspección:</strong> {crop.lastInspection}</p>
                </div>
                <div className="crop-chart">
                  <div className="growth-bar">
                    <div 
                      className="growth-fill" 
                      style={{ width: `${crop.growth}%` }}
                    ></div>
                  </div>
                </div>
                <div className="crop-actions">
                  <button className="btn-primary">🔍 Inspeccionar</button>
                  <button className="btn-secondary">📊 Análisis</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sensores IoT */}
        <div className="agriculture-section">
          <h3>📡 Sensores IoT</h3>
          <div className="sensors-grid">
            {sensors.map(sensor => (
              <div key={sensor.id} className="sensor-card">
                <div className="sensor-header">
                  <h4>{sensor.name}</h4>
                  <div className={`status-indicator ${sensor.status}`}>
                    {sensor.status === 'active' ? '🟢 Activo' : '🔴 Inactivo'}
                  </div>
                </div>
                <div className="sensor-value">
                  <span className="value">{sensor.value}</span>
                  <span className="unit">{sensor.unit}</span>
                </div>
                <div className="sensor-location">
                  📍 {sensor.location}
                </div>
                <div className="sensor-chart">
                  <div className="mini-chart">
                    <div className="chart-bar" style={{ height: `${sensor.value}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Predicciones y Recomendaciones */}
        <div className="agriculture-section">
          <h3>🔮 Predicciones y Recomendaciones</h3>
          <div className="predictions-grid">
            <div className="prediction-card">
              <h4>📅 Fecha de Cosecha</h4>
              <div className="prediction-value">{predictions.harvestDate}</div>
              <div className="prediction-days">En 55 días</div>
            </div>
            <div className="prediction-card">
              <h4>📊 Rendimiento Esperado</h4>
              <div className="prediction-value">{predictions.yield}%</div>
              <div className="prediction-trend">📈 +5% vs año pasado</div>
            </div>
            <div className="prediction-card">
              <h4>⚠️ Riesgo de Enfermedades</h4>
              <div className="prediction-value">{predictions.risk}</div>
              <div className="prediction-trend">🟢 Bajo riesgo</div>
            </div>
          </div>
          
          <div className="recommendations-card">
            <h4>💡 Recomendaciones Inteligentes</h4>
            <ul className="recommendations-list">
              {predictions.recommendations.map((rec, index) => (
                <li key={index} className="recommendation-item">
                  <span className="recommendation-icon">💡</span>
                  <span className="recommendation-text">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🤖 COMPONENTE DE IA INTEGRADO - NUEVA SECCIÓN */}
        <div className="agriculture-section">
          <h3>🤖 Clasificador de Enfermedades con IA</h3>
          <p className="section-description">
            Sube una imagen de una hoja o planta para detectar enfermedades automáticamente 
            usando tecnología de Machine Learning y el dataset PlantVillage
          </p>
          
          {/* Aquí va el componente de IA */}
          <PlantDiseaseClassifier />
        </div>
      </div>
    </div>
  );
};

export default LaboratorioAgricultura;