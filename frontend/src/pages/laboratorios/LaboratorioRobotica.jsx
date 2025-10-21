// frontend/src/pages/laboratorios/LaboratorioRobotica.jsx
import React, { useState, useEffect } from 'react';
import './LaboratorioRobotica.css';

const LaboratorioRobotica = () => {
  const [robots, setRobots] = useState([
    {
      id: 1,
      name: 'Robot Educativo',
      icon: '🤖',
      description: 'Robot básico para aprendizaje',
      code: '',
      status: 'disconnected',
      battery: 0,
      position: { x: 50, y: 50 }
    },
    {
      id: 2,
      name: 'Robot Industrial',
      icon: '🏭',
      description: 'Robot para tareas industriales',
      code: '',
      status: 'disconnected',
      battery: 0,
      position: { x: 50, y: 50 }
    },
    {
      id: 3,
      name: 'Robot Agrícola',
      icon: '🚜',
      description: 'Robot para tareas agrícolas',
      code: '',
      status: 'disconnected',
      battery: 0,
      position: { x: 50, y: 50 }
    }
  ]);

  const [selectedRobot, setSelectedRobot] = useState(null);
  const [programmingMode, setProgrammingMode] = useState(false);
  const [simulationRunning, setSimulationRunning] = useState(false);

  const connectRobot = (robotId) => {
    setRobots(prev => prev.map(robot => 
      robot.id === robotId 
        ? { ...robot, status: 'connected', battery: 100 }
        : robot
    ));
  };

  const disconnectRobot = (robotId) => {
    setRobots(prev => prev.map(robot => 
      robot.id === robotId 
        ? { ...robot, status: 'disconnected', battery: 0 }
        : robot
    ));
  };

  const executeCode = () => {
    if (selectedRobot && selectedRobot.code) {
      setSimulationRunning(true);
      // Simular ejecución de código
      setTimeout(() => {
        setSimulationRunning(false);
        alert('Código ejecutado exitosamente!');
      }, 2000);
    }
  };

  return (
    <div className="laboratorio-robotica">
      <header className="lab-header">
        <h1>🤖 Laboratorio de Robótica</h1>
        <p>Programa, controla y simula robots inteligentes</p>
        <div className="lab-stats">
          <div className="stat">
            <span className="stat-label">Robots Conectados:</span>
            <span className="stat-value">{robots.filter(r => r.status === 'connected').length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Simulaciones:</span>
            <span className="stat-value">{simulationRunning ? '1' : '0'}</span>
          </div>
        </div>
      </header>

      <div className="lab-content">
        <div className="robot-selection">
          <h3>Selecciona un Robot</h3>
          <div className="robot-grid">
            {robots.map(robot => (
              <div
                key={robot.id}
                className={`robot-card ${selectedRobot?.id === robot.id ? 'selected' : ''} ${robot.status}`}
                onClick={() => setSelectedRobot(robot)}
              >
                <div className="robot-image">{robot.icon}</div>
                <h4>{robot.name}</h4>
                <p>{robot.description}</p>
                <div className="robot-status">
                  <div className={`status-indicator ${robot.status}`}>
                    {robot.status === 'connected' ? '🟢 Conectado' : '🔴 Desconectado'}
                  </div>
                  {robot.status === 'connected' && (
                    <div className="battery-indicator">
                      🔋 {robot.battery}%
                    </div>
                  )}
                </div>
                <div className="robot-actions">
                  {robot.status === 'connected' ? (
                    <button 
                      className="btn-disconnect"
                      onClick={(e) => {
                        e.stopPropagation();
                        disconnectRobot(robot.id);
                      }}
                    >
                      🔌 Desconectar
                    </button>
                  ) : (
                    <button 
                      className="btn-connect"
                      onClick={(e) => {
                        e.stopPropagation();
                        connectRobot(robot.id);
                      }}
                    >
                      🔌 Conectar
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedRobot && (
          <div className="programming-area">
            <h3>Área de Programación - {selectedRobot.name}</h3>
            <div className="programming-tabs">
              <button 
                className={`tab ${!programmingMode ? 'active' : ''}`}
                onClick={() => setProgrammingMode(false)}
              >
                📝 Código
              </button>
              <button 
                className={`tab ${programmingMode ? 'active' : ''}`}
                onClick={() => setProgrammingMode(true)}
              >
                🎮 Simulación
              </button>
            </div>

            {!programmingMode ? (
              <div className="code-editor">
                <div className="editor-header">
                  <span>Python</span>
                  <div className="editor-actions">
                    <button className="btn-small">💾 Guardar</button>
                    <button className="btn-small">📁 Abrir</button>
                  </div>
                </div>
                <textarea
                  placeholder="# Escribe tu código aquí...
# Ejemplo:
# robot.move_forward(100)
# robot.turn_left(90)
# robot.sense_obstacle()"
                  value={selectedRobot.code}
                  onChange={(e) => {
                    const updatedRobots = robots.map(r => 
                      r.id === selectedRobot.id 
                        ? { ...r, code: e.target.value }
                        : r
                    );
                    setRobots(updatedRobots);
                    setSelectedRobot({...selectedRobot, code: e.target.value});
                  }}
                />
                <div className="programming-controls">
                  <button 
                    className="btn-primary"
                    onClick={executeCode}
                    disabled={!selectedRobot.code || simulationRunning}
                  >
                    {simulationRunning ? '⏳ Ejecutando...' : '▶️ Ejecutar'}
                  </button>
                  <button className="btn-secondary">⏸️ Pausar</button>
                  <button className="btn-danger">⏹️ Detener</button>
                  <button className="btn-info">💾 Guardar</button>
                </div>
              </div>
            ) : (
              <div className="simulation-area">
                <div className="simulation-canvas">
                  <div className="robot-simulator">
                    <div 
                      className="robot-sprite"
                      style={{
                        left: `${selectedRobot.position.x}%`,
                        top: `${selectedRobot.position.y}%`,
                        transform: 'rotate(0deg)'
                      }}
                    >
                      {selectedRobot.icon}
                    </div>
                    <div className="obstacles">
                      <div className="obstacle" style={{left: '20%', top: '30%'}}>🚧</div>
                      <div className="obstacle" style={{left: '70%', top: '60%'}}>🚧</div>
                    </div>
                  </div>
                </div>
                <div className="simulation-controls">
                  <button className="btn-primary">🎮 Iniciar Simulación</button>
                  <button className="btn-secondary">⏸️ Pausar</button>
                  <button className="btn-danger">⏹️ Detener</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LaboratorioRobotica;