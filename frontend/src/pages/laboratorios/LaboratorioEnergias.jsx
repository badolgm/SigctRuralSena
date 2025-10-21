// frontend/src/pages/laboratorios/LaboratorioEnergias.jsx
import React, { useState, useEffect } from 'react';
import './LaboratorioEnergias.css';

const LaboratorioEnergias = () => {
  const [solarPanels, setSolarPanels] = useState([
    {
      id: 1,
      name: 'Panel Solar 1',
      efficiency: 85,
      power: 250,
      status: 'active',
      temperature: 45,
      voltage: 24.5
    },
    {
      id: 2,
      name: 'Panel Solar 2',
      efficiency: 92,
      power: 300,
      status: 'active',
      temperature: 42,
      voltage: 25.1
    }
  ]);

  const [windTurbines, setWindTurbines] = useState([
    {
      id: 1,
      name: 'Turbina Eólica 1',
      power: 1500,
      windSpeed: 12,
      status: 'active',
      rpm: 1200
    }
  ]);

  const [batteryStorage, setBatteryStorage] = useState({
    capacity: 5000,
    currentCharge: 3200,
    status: 'charging',
    efficiency: 95
  });

  const [totalGeneration, setTotalGeneration] = useState(0);
  const [totalConsumption, setTotalConsumption] = useState(0);

  useEffect(() => {
    // Simular datos en tiempo real
    const interval = setInterval(() => {
      setSolarPanels(prev => prev.map(panel => ({
        ...panel,
        efficiency: Math.max(80, Math.min(95, panel.efficiency + (Math.random() - 0.5) * 2)),
        power: Math.max(200, Math.min(350, panel.power + (Math.random() - 0.5) * 20)),
        temperature: Math.max(35, Math.min(55, panel.temperature + (Math.random() - 0.5) * 3))
      })));

      setWindTurbines(prev => prev.map(turbine => ({
        ...turbine,
        windSpeed: Math.max(5, Math.min(20, turbine.windSpeed + (Math.random() - 0.5) * 2)),
        power: Math.max(800, Math.min(2000, turbine.power + (Math.random() - 0.5) * 100))
      })));

      // Calcular generación total
      const solarPower = solarPanels.reduce((sum, panel) => sum + panel.power, 0);
      const windPower = windTurbines.reduce((sum, turbine) => sum + turbine.power, 0);
      setTotalGeneration(solarPower + windPower);
      
      // Simular consumo
      setTotalConsumption(Math.max(1000, Math.min(3000, totalConsumption + (Math.random() - 0.5) * 200)));
    }, 3000);

    return () => clearInterval(interval);
  }, [solarPanels, windTurbines, totalConsumption]);

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 90) return '#4CAF50';
    if (efficiency >= 80) return '#FF9800';
    return '#f44336';
  };

  const getStatusIcon = (status) => {
    return status === 'active' ? '🟢' : '🔴';
  };

  return (
    <div className="laboratorio-energias">
      <header className="lab-header">
        <h1>⚡ Laboratorio de Energías Renovables</h1>
        <p>Monitorea y optimiza sistemas de energía limpia</p>
        <div className="lab-stats">
          <div className="stat">
            <span className="stat-label">Generación Total:</span>
            <span className="stat-value">{totalGeneration.toFixed(0)}W</span>
          </div>
          <div className="stat">
            <span className="stat-label">Consumo:</span>
            <span className="stat-value">{totalConsumption.toFixed(0)}W</span>
          </div>
          <div className="stat">
            <span className="stat-label">Balance:</span>
            <span className="stat-value" style={{color: totalGeneration > totalConsumption ? '#4CAF50' : '#f44336'}}>
              {totalGeneration > totalConsumption ? '+' : ''}{(totalGeneration - totalConsumption).toFixed(0)}W
            </span>
          </div>
        </div>
      </header>

      <div className="lab-content">
        {/* Paneles Solares */}
        <div className="energy-section">
          <h3>🌞 Paneles Solares</h3>
          <div className="solar-grid">
            {solarPanels.map(panel => (
              <div key={panel.id} className="panel-card">
                <div className="panel-header">
                  <h4>{panel.name}</h4>
                  <div className={`status-indicator ${panel.status}`}>
                    {getStatusIcon(panel.status)} {panel.status === 'active' ? 'Activo' : 'Inactivo'}
                  </div>
                </div>
                <div className="panel-metrics">
                  <div className="metric">
                    <span className="metric-label">Eficiencia:</span>
                    <span 
                      className="metric-value" 
                      style={{ color: getEfficiencyColor(panel.efficiency) }}
                    >
                      {panel.efficiency.toFixed(1)}%
                    </span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Potencia:</span>
                    <span className="metric-value">{panel.power.toFixed(0)}W</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Temperatura:</span>
                    <span className="metric-value">{panel.temperature.toFixed(1)}°C</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Voltaje:</span>
                    <span className="metric-value">{panel.voltage}V</span>
                  </div>
                </div>
                <div className="panel-chart">
                  <div className="efficiency-bar">
                    <div 
                      className="efficiency-fill" 
                      style={{ 
                        width: `${panel.efficiency}%`,
                        backgroundColor: getEfficiencyColor(panel.efficiency)
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Turbinas Eólicas */}
        <div className="energy-section">
          <h3>💨 Turbinas Eólicas</h3>
          <div className="wind-grid">
            {windTurbines.map(turbine => (
              <div key={turbine.id} className="turbine-card">
                <div className="turbine-header">
                  <h4>{turbine.name}</h4>
                  <div className={`status-indicator ${turbine.status}`}>
                    {getStatusIcon(turbine.status)} {turbine.status === 'active' ? 'Activo' : 'Inactivo'}
                  </div>
                </div>
                <div className="turbine-metrics">
                  <div className="metric">
                    <span className="metric-label">Potencia:</span>
                    <span className="metric-value">{turbine.power.toFixed(0)}W</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Velocidad del Viento:</span>
                    <span className="metric-value">{turbine.windSpeed.toFixed(1)} m/s</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">RPM:</span>
                    <span className="metric-value">{turbine.rpm}</span>
                  </div>
                </div>
                <div className="turbine-animation">
                  <div 
                    className="wind-blade" 
                    style={{ 
                      animationDuration: `${Math.max(1, 20 - turbine.windSpeed)}s`,
                      animationPlayState: turbine.status === 'active' ? 'running' : 'paused'
                    }}
                  >
                    💨
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Almacenamiento de Baterías */}
        <div className="energy-section">
          <h3>🔋 Almacenamiento de Energía</h3>
          <div className="battery-card">
            <div className="battery-header">
              <h4>Sistema de Baterías</h4>
              <div className={`status-indicator ${batteryStorage.status}`}>
                {batteryStorage.status === 'charging' ? '🔌 Cargando' : '🔋 Descargando'}
              </div>
            </div>
            <div className="battery-metrics">
              <div className="metric">
                <span className="metric-label">Capacidad Total:</span>
                <span className="metric-value">{batteryStorage.capacity}Wh</span>
              </div>
              <div className="metric">
                <span className="metric-label">Carga Actual:</span>
                <span className="metric-value">{batteryStorage.currentCharge}Wh</span>
              </div>
              <div className="metric">
                <span className="metric-label">Eficiencia:</span>
                <span className="metric-value">{batteryStorage.efficiency}%</span>
              </div>
            </div>
            <div className="battery-chart">
              <div className="battery-level">
                <div 
                  className="battery-fill" 
                  style={{ 
                    width: `${(batteryStorage.currentCharge / batteryStorage.capacity) * 100}%`,
                    backgroundColor: batteryStorage.status === 'charging' ? '#4CAF50' : '#FF9800'
                  }}
                ></div>
              </div>
              <div className="battery-percentage">
                {((batteryStorage.currentCharge / batteryStorage.capacity) * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        {/* Analytics */}
        <div className="energy-section">
          <h3>📊 Análisis de Energía</h3>
          <div className="analytics-grid">
            <div className="analytics-card">
              <h4>Generación Solar</h4>
              <div className="analytics-value">
                {solarPanels.reduce((sum, panel) => sum + panel.power, 0).toFixed(0)}W
              </div>
              <div className="analytics-trend">📈 +5.2%</div>
            </div>
            <div className="analytics-card">
              <h4>Generación Eólica</h4>
              <div className="analytics-value">
                {windTurbines.reduce((sum, turbine) => sum + turbine.power, 0).toFixed(0)}W
              </div>
              <div className="analytics-trend">📈 +2.8%</div>
            </div>
            <div className="analytics-card">
              <h4>Eficiencia Promedio</h4>
              <div className="analytics-value">
                {((solarPanels.reduce((sum, panel) => sum + panel.efficiency, 0) / solarPanels.length)).toFixed(1)}%
              </div>
              <div className="analytics-trend">📈 +1.5%</div>
            </div>
            <div className="analytics-card">
              <h4>Energía Ahorrada</h4>
              <div className="analytics-value">
                {((totalGeneration - totalConsumption) * 24).toFixed(0)}Wh/día
              </div>
              <div className="analytics-trend">💰 Ahorro</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboratorioEnergias;