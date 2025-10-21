// frontend/src/pages/laboratorios/LaboratorioSoftware.jsx
import React, { useState, useEffect } from 'react';
import './LaboratorioSoftware.css';

const LaboratorioSoftware = () => {
  const [codeEditor, setCodeEditor] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const [networkDevices, setNetworkDevices] = useState([
    {
      id: 1,
      name: 'BBB-01 Gateway',
      ip: '192.168.1.100',
      status: 'online',
      type: 'BeagleBone Black'
    },
    {
      id: 2,
      name: 'BBB-02 IA/ML',
      ip: '192.168.1.101',
      status: 'online',
      type: 'BeagleBone Black'
    },
    {
      id: 3,
      name: 'BBB-03 IoT/Sensors',
      ip: '192.168.1.102',
      status: 'online',
      type: 'BeagleBone Black'
    }
  ]);

  const [protocols, setProtocols] = useState([
    {
      name: 'MQTT',
      port: 1883,
      status: 'active',
      messages: 1250
    },
    {
      name: 'HTTP',
      port: 80,
      status: 'active',
      messages: 890
    },
    {
      name: 'WebSocket',
      port: 8080,
      status: 'active',
      messages: 450
    }
  ]);

  const runCode = () => {
    setIsRunning(true);
    setOutput('Ejecutando código...\n');
    
    // Simular ejecución
    setTimeout(() => {
      setOutput(prev => prev + 'Código ejecutado exitosamente!\nResultado: Hello World!\n');
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="laboratorio-software">
      <header className="lab-header">
        <h1>💻 Laboratorio de Software y Telemática</h1>
        <p>Desarrolla, prueba y despliega software para sistemas embebidos</p>
        <div className="lab-stats">
          <div className="stat">
            <span className="stat-label">Dispositivos Conectados:</span>
            <span className="stat-value">{networkDevices.filter(d => d.status === 'online').length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Protocolos Activos:</span>
            <span className="stat-value">{protocols.filter(p => p.status === 'active').length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Mensajes/Min:</span>
            <span className="stat-value">{protocols.reduce((sum, p) => sum + p.messages, 0)}</span>
          </div>
        </div>
      </header>

      <div className="lab-content">
        {/* Editor de Código */}
        <div className="software-section">
          <h3>📝 Editor de Código</h3>
          <div className="code-editor-container">
            <div className="editor-header">
              <select 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="language-selector"
              >
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="cpp">C++</option>
                <option value="bash">Bash</option>
              </select>
              <div className="editor-actions">
                <button className="btn-save">💾 Guardar</button>
                <button className="btn-load">📁 Abrir</button>
              </div>
            </div>
            <textarea
              className="code-editor"
              placeholder={`# Escribe tu código ${selectedLanguage} aquí...
# Ejemplo:
print("Hello World!")
for i in range(10):
    print(f"Contador: {i}")`}
              value={codeEditor}
              onChange={(e) => setCodeEditor(e.target.value)}
            />
            <div className="editor-controls">
              <button 
                className="btn-run" 
                onClick={runCode}
                disabled={isRunning || !codeEditor}
              >
                {isRunning ? '⏳ Ejecutando...' : '▶️ Ejecutar'}
              </button>
              <button className="btn-stop">⏹️ Detener</button>
              <button className="btn-clear">🗑️ Limpiar</button>
            </div>
          </div>
          
          <div className="output-container">
            <h4>📤 Salida</h4>
            <pre className="code-output">{output}</pre>
          </div>
        </div>

        {/* Red y Dispositivos */}
        <div className="software-section">
          <h3>🌐 Red y Dispositivos</h3>
          <div className="network-grid">
            {networkDevices.map(device => (
              <div key={device.id} className="device-card">
                <div className="device-header">
                  <h4>{device.name}</h4>
                  <div className={`status-indicator ${device.status}`}>
                    {device.status === 'online' ? '🟢 Online' : '🔴 Offline'}
                  </div>
                </div>
                <div className="device-info">
                  <p><strong>IP:</strong> {device.ip}</p>
                  <p><strong>Tipo:</strong> {device.type}</p>
                </div>
                <div className="device-actions">
                  <button className="btn-connect">🔌 Conectar</button>
                  <button className="btn-ping">📡 Ping</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protocolos de Comunicación */}
        <div className="software-section">
          <h3>📡 Protocolos de Comunicación</h3>
          <div className="protocols-grid">
            {protocols.map(protocol => (
              <div key={protocol.name} className="protocol-card">
                <div className="protocol-header">
                  <h4>{protocol.name}</h4>
                  <div className={`status-indicator ${protocol.status}`}>
                    {protocol.status === 'active' ? '🟢 Activo' : '🔴 Inactivo'}
                  </div>
                </div>
                <div className="protocol-info">
                  <p><strong>Puerto:</strong> {protocol.port}</p>
                  <p><strong>Mensajes:</strong> {protocol.messages}</p>
                </div>
                <div className="protocol-chart">
                  <div className="message-bar">
                    <div 
                      className="message-fill" 
                      style={{ width: `${Math.min(100, (protocol.messages / 1000) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Herramientas de Desarrollo */}
        <div className="software-section">
          <h3>🛠️ Herramientas de Desarrollo</h3>
          <div className="tools-grid">
            <div className="tool-card">
              <h4>🐳 Docker</h4>
              <p>Containerización de aplicaciones</p>
              <button className="btn-tool">🚀 Ejecutar</button>
            </div>
            <div className="tool-card">
              <h4>📊 Git</h4>
              <p>Control de versiones</p>
              <button className="btn-tool">📝 Commit</button>
            </div>
            <div className="tool-card">
              <h4>🔧 API Testing</h4>
              <p>Pruebas de endpoints</p>
              <button className="btn-tool">🧪 Probar</button>
            </div>
            <div className="tool-card">
              <h4>📈 Monitoring</h4>
              <p>Monitoreo de sistema</p>
              <button className="btn-tool">📊 Ver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboratorioSoftware;