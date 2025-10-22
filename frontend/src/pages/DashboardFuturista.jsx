// frontend/src/pages/DashboardFuturista.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DashboardFuturista.css';

const DashboardFuturista = () => {
  const [stats, setStats] = useState({
    bbbNodes: 3,
    laboratories: 6,
    temperature: 28,
    sensorsActive: 100
  });

  const [activeNav, setActiveNav] = useState('dashboard');

  useEffect(() => {
    // Animación de números al cargar
    const animateNumbers = () => {
      // Aquí puedes agregar lógica para animar los números
    };
    animateNumbers();
  }, []);

  const laboratories = [
    {
      icon: 'fa-chart-line',
      title: 'Dashboard IoT en Tiempo Real',
      description: 'Monitoreo inteligente de sensores DHT22, humedad del suelo y predicciones climáticas con ARIMA 72h.',
      tags: ['IoT', 'Tiempo Real', 'ARIMA'],
      link: '/laboratorios/sensores'
    },
    {
      icon: 'fa-atom',
      title: 'Laboratorio Cuántico',
      description: 'Simulaciones cuánticas interactivas, ejercicios de física avanzada con sistema de puntuación.',
      tags: ['Cuántica', 'Física', 'Interactivo'],
      link: '/laboratorios/cuantico'
    },
    {
      icon: 'fa-robot',
      title: 'Laboratorio de Robótica',
      description: 'Control de robots en tiempo real, programación visual y simulador de sensores.',
      tags: ['Robótica', 'Programación', 'Simulación'],
      link: '/laboratorios/robotica'
    },
    {
      icon: 'fa-solar-panel',
      title: 'Energías Renovables',
      description: 'Monitoreo de paneles solares y turbinas eólicas con análisis de eficiencia energética.',
      tags: ['Solar', 'Eólica', 'Optimización'],
      link: '/laboratorios/energias'
    },
    {
      icon: 'fa-leaf',
      title: 'Agricultura Inteligente',
      description: 'Análisis de cultivos, predicción de cosechas y detección de enfermedades con PlantVillage.',
      tags: ['ML', 'PlantVillage', 'Cultivos'],
      link: '/laboratorios/agricultura'
    },
    {
      icon: 'fa-code',
      title: 'Software & Telemática',
      description: 'Desarrollo de software desde cero con Python, JavaScript, IoT y control de dispositivos BBB.',
      tags: ['Python', 'JavaScript', 'IoT'],
      link: '/laboratorios/software'
    }
  ];

  const bbbNodes = [
    {
      id: 'BBB-01',
      name: 'Gateway/API',
      ip: '10.0.0.11',
      gradient: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
      icon: 'fa-server',
      services: ['Django', 'PostgreSQL', 'Nginx', 'React'],
      resources: [
        { icon: 'fa-memory', text: '512MB RAM' },
        { icon: 'fa-hdd', text: '4GB eMMC' }
      ]
    },
    {
      id: 'BBB-02',
      name: 'IA/ML Processing',
      ip: '10.0.0.12',
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
      icon: 'fa-brain',
      services: ['TensorFlow Lite', 'scikit-learn', 'Redis', 'PlantVillage'],
      resources: [
        { icon: 'fa-memory', text: '512MB RAM' },
        { icon: 'fa-sd-card', text: 'microSD ML' }
      ]
    },
    {
      id: 'BBB-03',
      name: 'IoT/Sensors',
      ip: '10.0.0.13',
      gradient: 'linear-gradient(135deg, #ff006e 0%, #ff4d94 100%)',
      icon: 'fa-broadcast-tower',
      services: ['MQTT', 'InfluxDB', 'LoRaWAN', 'DHT22'],
      resources: [
        { icon: 'fa-memory', text: '512MB RAM' },
        { icon: 'fa-plug', text: 'GPIO Sensors' }
      ]
    }
  ];

  const quickAccessCards = [
    { icon: 'fa-thermometer-half', title: 'Sensores', subtitle: 'Monitoreo en tiempo real', link: '#sensors' },
    { icon: 'fa-cloud-sun', title: 'Clima', subtitle: 'Pronóstico ARIMA 72h', link: '#weather' },
    { icon: 'fa-chart-bar', title: 'Analytics', subtitle: 'Análisis de datos IA', link: '#analytics' },
    { icon: 'fa-graduation-cap', title: 'Educación', subtitle: 'Laboratorios STEM', link: '#education' }
  ];

  return (
    <div className="dashboard-futurista">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="neural-grid"></div>
        <div className="glow-orb primary"></div>
        <div className="glow-orb success"></div>
        <div className="glow-orb cyber"></div>
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="logo-container">
          <i className="fas fa-seedling logo-icon"></i>
          <div className="logo-text">
            <span className="logo-main">SIGC&T-Rural v2.0</span>
            <span className="logo-sub">Sistema Inteligente de Gestión Agrícola</span>
          </div>
        </div>
        <ul className="nav-menu">
          <li><Link to="/dashboard" className="nav-link">Dashboard (IoT)</Link></li>
          <li><Link to="/laboratorios" className="nav-link">Laboratorios STEM</Link></li>
          <li><Link to="/cursos" className="nav-link">Cursos</Link></li>
        </ul>
        <div className="nav-actions">
          <Link to="/login" className="btn-access">
            <i className="fas fa-sign-in-alt"></i>
            Acceso
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero-section animate-in">
          <div className="hero-badge">
            <i className="fas fa-rocket"></i>
            <span>Tecnología Distribuida + IA Avanzada</span>
          </div>
          <h1 className="hero-title">
            Transformando la Agricultura <br />
            <span className="gradient-text">con Inteligencia Artificial</span>
          </h1>
          <p className="hero-description">
            Democratizando el acceso al conocimiento STEM en comunidades rurales colombianas mediante tecnología de vanguardia y educación práctica.
          </p>
        </section>

        {/* Stats Grid */}
        <div className="stats-grid animate-in">
          <div className="stat-card">
            <i className="fas fa-microchip stat-icon"></i>
            <span className="stat-number">{stats.bbbNodes}</span>
            <span className="stat-label">BBB Cluster Optimizado</span>
          </div>
          <div className="stat-card">
            <i className="fas fa-brain stat-icon"></i>
            <span className="stat-number">{stats.laboratories}</span>
            <span className="stat-label">Laboratorios STEM</span>
          </div>
          <div className="stat-card">
            <i className="fas fa-temperature-high stat-icon"></i>
            <span className="stat-number">{stats.temperature}°C</span>
            <span className="stat-label">Clima Actual</span>
          </div>
          <div className="stat-card">
            <i className="fas fa-check-circle stat-icon"></i>
            <span className="stat-number">{stats.sensorsActive}%</span>
            <span className="stat-label">Sensores Operativos</span>
          </div>
        </div>

        {/* BBB Cluster Architecture */}
        <div className="bbb-cluster-section animate-in">
          <h2 className="section-title">
            <span className="gradient-text">Arquitectura del Clúster 3 BBB</span>
          </h2>
          <div className="bbb-cluster-grid">
            {bbbNodes.map((node, index) => (
              <div key={index} className="bbb-node-card">
                <div className="bbb-node-header" style={{ background: node.gradient }}>
                  <i className={`fas ${node.icon}`}></i>
                  <span>{node.id}</span>
                </div>
                <div className="bbb-node-body">
                  <h4>{node.name}</h4>
                  <p className="node-ip">IP: {node.ip}</p>
                  <div className="bbb-services">
                    {node.services.map((service, idx) => (
                      <span key={idx} className="service-tag">{service}</span>
                    ))}
                  </div>
                  <div className="bbb-resources">
                    {node.resources.map((resource, idx) => (
                      <div key={idx} className="resource-item">
                        <i className={`fas ${resource.icon}`}></i>
                        <span>{resource.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid - Laboratories */}
        <div className="features-grid animate-in">
          {laboratories.map((lab, index) => (
            <Link key={index} to={lab.link} className="feature-card">
              <div className="feature-icon">
                <i className={`fas ${lab.icon}`}></i>
              </div>
              <h3 className="feature-title">{lab.title}</h3>
              <p className="feature-description">{lab.description}</p>
              <div className="feature-tags">
                {lab.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Access */}
        <div className="quick-access animate-in">
          {quickAccessCards.map((card, index) => (
            <a key={index} href={card.link} className="access-card">
              <div className="access-icon">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <div className="access-info">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link 
          to="/dashboard" 
          className={`nav-item ${activeNav === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveNav('dashboard')}
        >
          <i className="fas fa-home nav-item-icon"></i>
          <span className="nav-item-label">Inicio</span>
        </Link>
        <Link 
          to="/sensores" 
          className={`nav-item ${activeNav === 'sensors' ? 'active' : ''}`}
          onClick={() => setActiveNav('sensors')}
        >
          <i className="fas fa-thermometer-half nav-item-icon"></i>
          <span className="nav-item-label">Sensores</span>
        </Link>
        <Link 
          to="/laboratorios" 
          className={`nav-item ${activeNav === 'labs' ? 'active' : ''}`}
          onClick={() => setActiveNav('labs')}
        >
          <i className="fas fa-flask nav-item-icon"></i>
          <span className="nav-item-label">Laboratorios</span>
        </Link>
        <Link 
          to="/analytics" 
          className={`nav-item ${activeNav === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveNav('analytics')}
        >
          <i className="fas fa-chart-bar nav-item-icon"></i>
          <span className="nav-item-label">Analytics</span>
        </Link>
      </nav>
    </div>
  );
};

export default DashboardFuturista;