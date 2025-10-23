
import React from 'react';
import '../Dashboard.css';

const LaboratorioOpenSource = () => {
  return (
    <div className="dashboard-futurista">
      <div className="animated-bg">
        <div className="neural-grid"></div>
        <div className="glow-orb primary"></div>
        <div className="glow-orb success"></div>
        <div className="glow-orb cyber"></div>
      </div>

      <section className="hero-section">
        <div className="hero-badge">🌱 SIGCT-Rural v2.0</div>
        <h1 className="hero-title gradient-text">Laboratorios Educativos Open Source</h1>
        <p className="hero-description">
          Explora recursos gratuitos en matemáticas, física, programación y más. Organizados por niveles de dificultad.
        </p>
      </section>

      <div className="features-grid">
        <a className="feature-card" href="https://www.geogebra.org/math" target="_blank" rel="noopener noreferrer">
          <div className="feature-icon">📐</div>
          <h3 className="feature-title">GeoGebra</h3>
          <p className="feature-description">Laboratorios interactivos de matemáticas, geometría, álgebra y cálculo.</p>
          <div className="feature-tags">
            <span className="tag">Matemáticas</span>
            <span className="tag">Nivel Básico</span>
          </div>
        </a>

        <a className="feature-card" href="https://phet.colorado.edu/es/" target="_blank" rel="noopener noreferrer">
          <div className="feature-icon">⚛️</div>
          <h3 className="feature-title">PhET</h3>
          <p className="feature-description">Simulaciones de física, química y biología con enfoque educativo.</p>
          <div className="feature-tags">
            <span className="tag">Física</span>
            <span className="tag">Nivel Intermedio</span>
          </div>
        </a>

        <a className="feature-card" href="https://es.khanacademy.org/" target="_blank" rel="noopener noreferrer">
          <div className="feature-icon">🎓</div>
          <h3 className="feature-title">Khan Academy</h3>
          <p className="feature-description">Cursos gratuitos en matemáticas, programación, física y más.</p>
          <div className="feature-tags">
            <span className="tag">Multidisciplinar</span>
            <span className="tag">Nivel Avanzado</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LaboratorioOpenSource;
